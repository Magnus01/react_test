import React from 'react';
import PropTypes from 'prop-types';
import { TransitionGroup } from 'react-transition-group';
import { layout, select, behavior, event } from 'd3';
import clone from 'clone';
import deepEqual from 'deep-equal';
import uuid from 'uuid';
import CircularProgressbar from './../Node/CircleProgress';
import Node from '../Node';
import Link from '../Link';
import './style.css';
import {connect} from 'react-redux';

import { refreshfetch,Activate} from '../actions/T_User';

const percentage = [{percentage: 100, id: 1, locked: false },{percentage: 100,
    id: 2, locked: false },{percentage: 45, id: 3, locked: false },{percentage: 55, id: 4 , locked: false}
    ,{percentage: 65, id: 5, locked: false},{percentage: 75, id: 6 , locked: false},{percentage: 75, id: 7 , locked: false}];

// const percentage = JSON.parse(this.props.user.user.User.records[0][2]);
class Tree extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            initialRender: true,
            data: this.assignInternalProperties(clone(props.data)),
        };
        this.findNodesById = this.findNodesById.bind(this);
        this.collapseNode = this.collapseNode.bind(this);
        this.handleNodeToggle = this.handleNodeToggle.bind(this);
        this.handleOnClickCb = this.handleOnClickCb.bind(this);
    }


    componentDidMount() {
        console.log(this.props.user, "THISPROPSUSER");
        // console.log(JSON.parse(this.props.user.user.User.records[0][2]), "THISPROPSUSER");
        setInterval(this.props.refreshfetch, 20000);
        // let user_V = JSON.parse(this.props.user.user.User.records[0][2]);



        this.bindZoomListener(this.props);
        // TODO find better way of setting initialDepth, re-render here is suboptimal
        this.setState({ initialRender: false }); // eslint-disable-line
    }


    componentWillReceiveProps(nextProps) {
        // Clone new data & assign internal properties

        // alert('hello');
        // this.props.Activate();
        // this.props.Activate;
        if (!deepEqual(this.props.data, nextProps.data)) {
            this.setState({
                data: this.assignInternalProperties(clone(nextProps.data)),
            });
        }

        // If zoom-specific props change -> rebind listener with new values
        if (!deepEqual(this.props.translate, nextProps.translate)
            || !deepEqual(this.props.scaleExtent, nextProps.scaleExtent)) {
            this.bindZoomListener(nextProps);
        }
    }


    /**
     * setInitialTreeDepth - Description
     *
     * @param {array} nodeSet Array of nodes generated by `generateTree`
     * @param {number} initialDepth Maximum initial depth the tree should render
     *
     * @return {void}
     */
    setInitialTreeDepth(nodeSet, initialDepth) {
        nodeSet.forEach((n) => {
            n._collapsed = n.depth >= initialDepth;
        });
    }


    /**
     * bindZoomListener - If `props.zoomable`, binds a listener for
     * "zoom" events to the SVG and sets scaleExtent to min/max
     * specified in `props.scaleExtent`.
     *
     * @return {void}
     */
    bindZoomListener(props) {
        const { zoomable, scaleExtent, translate } = props;
        const svg = select('.rd3t-svg');
        const g = select('.rd3t-g');

        if (zoomable) {
            svg.call(behavior.zoom()
                .scaleExtent([scaleExtent.min, scaleExtent.max])
                .on('zoom', () => {
                    g.attr('transform',
                        `translate(${event.translate}) scale(${event.scale})`
                    );
                })
                // Offset so that first pan and zoom does not jump back to [0,0] coords
                .translate([translate.x, translate.y])
            );
        }
    }


    /**
     * assignInternalProperties - Assigns internal properties to each node in the
     * `data` set that are required for tree manipulation and returns
     * a new `data` array.
     *
     * @param {array} data Hierarchical tree data
     *
     * @return {array} `data` array with internal properties added
     */

    assignInternalProperties(data) {
        return data.map((node) => {


            let user_V_Array = [];
            let userid= this.props.user.userid.sub;
            let course = [];
            console.log(this.props);
            console.log(this.props.user);
            console.log(this.props.user.user);
            // console.log(this.props.user.user);

            let us = this.props;
            let us1 = this.props.user;
            let us2 = this.props.user.user;
            let us3 = this.props.user.user.User;
            let user_V = this.props.user.user.User.records;
            console.log(this.props.user.user, 'this.props.user.user');

            for (let i = 0; i < user_V.length; i++) {
                // console.log(JSON.parse(user_V[i][1]), "user_V[i]");
                console.log(user_V[i][1], 'user_V[i][1]');
                console.log(userid, 'userid');
                if (user_V[i][1] ? user_V[i][1] : user_V[i].id_Auth=== userid) {
                    console.log(user_V[i][2], 'user_V[i][2]');
                    course.push((user_V[i][2] ? user_V[i][2] : user_V[i]["section-list"]));

                }

            }
            console.log(courses, 'courses');
            let courses = JSON.parse(course);
            console.log(courses, 'courses');
            console.log(courses["section-list"], 'courses.section-list');
            // let UserArray = [];
            // for (let i = 0; i < user_V.length; i++) {
            //   if (userid === user_V[i]) {
            //       UserArray.push(user_V[i])
            //   }
            // }
            // console.log(UserArray, "USERARRAY");
            // {links.map((linkData) =>

            for (let i = 0; i < courses["section-list"].length; i++) {
                // console.log(courses["section-list"][i].title, 'courses["section-list"][i].title');
                // console.log(node.name, 'node.name');
                // console.log(courses["section-list"][i].chapter_completion, 'node.percentage = courses["section-list"][i].chapter_completion');


                if (courses["section-list"][i].id === node.id && courses["section-list"][i].id_book === this.props.book_id) {
                    node.percentage = courses["section-list"][i].chapter_completion;
                    if (node.percentage === 100 || courses["section-list"][i].id === 4 || courses["section-list"][i].id === 7) {
                        node.unlock = true}
                    else {
                        node.unlock = false;
                    }
                }
            }



            node._collapsed = false;
            // if there are children, recursively assign properties to them too
            if (node.children && node.children.length > 0) {
                node.children = this.assignInternalProperties(node.children);
                node._children = node.children;
                if (node.percentage ===100 ) {
                    console.log(node._children, "node._children");
                    if (typeof node._children !== "undefined") {

                        for (let i = 0; i < node._children.length; i++) {
                            node._children[i].unlock = true;
                        }
                    }
                    else {}
                }
            }
            return node;
        });
    }


    /**
     * findNodesById - Description
     *
     * @param {string} nodeId The `node.id` being searched for
     * @param {array} nodeSet Array of `node` objects
     * @param {array} hits Accumulator for matches, passed between recursive calls
     *
     * @return {array} Set of nodes matching `nodeId`
     */
    // TODO Refactor this into a more readable/reasonable recursive depth-first walk.
    findNodesById(nodeId, nodeSet, hits) {
        if (hits.length > 0) {
            return hits;
        }

        hits = hits.concat(nodeSet.filter((node) => node.id === nodeId));

        nodeSet.forEach((node) => {
            if (node._children && node._children.length > 0) {
                hits = this.findNodesById(nodeId, node._children, hits);

                return hits;
            }
            return hits;
        });

        return hits;
    }


    /**
     * collapseNode - Recursively sets the `_collapsed` property of
     * the passed `node` object and its children to `true`.
     *
     * @param {object} node Node object with custom properties
     *
     * @return {void}
     */
    collapseNode(node) {
        node._collapsed = true;
        if (node._children && node._children.length > 0) {
            node._children.forEach((child) => {
                this.collapseNode(child);
            });
        }
    }


    /**
     * expandNode - Sets the `_collapsed` property of
     * the passed `node` object to `false`.
     *
     * @param {type} node Node object with custom properties
     *
     * @return {void}
     */
    expandNode(node) {

        node._collapsed = false;

    }


    /**
     * handleNodeToggle - Finds the node matching `nodeId` and
     * expands/collapses it, depending on the current state of
     * its `_collapsed` property.
     * `setState` callback receives targetNode and handles
     * `props.onClick` if defined.
     *
     * @param {string} nodeId A node object's `id` field.
     *
     * @return {void}
     */
    handleNodeToggle(nodeId) {
        const data = clone(this.state.data);
        const matches = this.findNodesById(nodeId, data, []);
        const targetNode = matches[0];

        if (this.props.collapsible) {
            targetNode._collapsed
                ? this.expandNode(targetNode)
                : this.collapseNode(targetNode);
            this.setState({ data }, () => this.handleOnClickCb(targetNode));
        } else {
            this.handleOnClickCb(targetNode);
        }
    }


    /**
     * handleOnClickCb - Handles the user-defined `onClick` function
     *
     * @param {object} targetNode Description
     *
     * @return {void}
     */
    handleOnClickCb(targetNode) {
        const { onClick } = this.props;
        if (onClick && typeof onClick === 'function') {
            onClick(clone(targetNode));
        }
    }


    /**
     * generateTree - Generates tree elements (`nodes` and `links`) by
     * grabbing the rootNode from `this.state.data[0]`.
     * Restricts tree depth to `props.initialDepth` if defined and if this is
     * the initial render of the tree.
     *
     * @return {object} Object containing `nodes` and `links`.
     */
    generateTree() {
        const {
            initialDepth,
            depthFactor,
            separation,
            nodeSize,
            orientation,
        } = this.props;

        const tree = layout.tree()
            .nodeSize(orientation === 'horizontal' ?
                [nodeSize.y, nodeSize.x] :
                [nodeSize.x, nodeSize.y]
            )
            .separation((a, b) => deepEqual(a.parent, b.parent) ?
                separation.siblings :
                separation.nonSiblings
            )
            .children((d) => d._collapsed ? null : d._children);

        const rootNode = this.state.data[0];
        const nodes = tree.nodes(rootNode);
        const links = tree.links(nodes);

        // set `initialDepth` on first render if specified
        if (initialDepth !== undefined && this.state.initialRender) {
            this.setInitialTreeDepth(nodes, initialDepth);
        }

        if (depthFactor) {
            nodes.forEach((node) => { node.y = node.depth * depthFactor; });
        }

        return { nodes, links };
    }

    render() {
        const { nodes, links } = this.generateTree();
        const {
            book_id,
            percentage,
            orientation,
            translate,
            pathFunc,
            transitionDuration,
            zoomable,
            circleRadius,
            styles,
        } = this.props;

        return (
            <div className={`rd3t-tree-container ${zoomable ? 'rd3t-grabbable' : undefined}`}>
              <svg className="rd3t-svg" width="100%" height="100%" margin-top="-100px">

                <TransitionGroup
                    component="g"
                    className="rd3t-g"
                    transform={`translate(${translate.x},${translate.y})`}
                >
                    {links.map((linkData) =>
                        <Link
                            key={uuid.v4()}
                            orientation={orientation}
                            pathFunc={pathFunc}
                            linkData={linkData}
                            transitionDuration={transitionDuration}
                            styles={styles.links}
                        />
                    )}

                    {nodes.map((nodeData) =>


                        <Node
                            key={nodeData.id}
                            orientation={orientation}
                            transitionDuration={transitionDuration}
                            textAnchor="start"
                            nodeData={nodeData}
                            name={nodeData.name}
                            attributes={nodeData.attributes}
                            onClick={this.handleNodeToggle}
                            circleRadius={circleRadius}
                            styles={styles.nodes}
                            percentage = {nodeData.percentage}
                            unlock = {nodeData.unlock}
                            depth = {nodeData.depth}
                        />

                    )
                    }



                </TransitionGroup>
              </svg>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        user: state.user,
        content: state.user.content
    }
}




export default connect(mapStateToProps, {Activate,refreshfetch})(Tree);

Tree.defaultProps = {
    onClick: undefined,
    orientation: 'horizontal',
    translate: { x: 0, y: 0 },
    pathFunc: 'diagonal',
    transitionDuration: 500,
    depthFactor: undefined,
    collapsible: false,
    initialDepth: undefined,
    zoomable: true,
    percentage: 25,
    scaleExtent: { min: 0.1, max: 1 },
    nodeSize: { x: 140, y: 140 },
    separation: { siblings: 1, nonSiblings: 2 },
    circleRadius: 10,
    styles: {},
};

Tree.propTypes = {
    data: PropTypes.array.isRequired,
    onClick: PropTypes.func,
    orientation: PropTypes.oneOf([
        'horizontal',
        'vertical',
    ]),
    translate: PropTypes.shape({
        x: PropTypes.number,
        y: PropTypes.number,
    }),
    pathFunc: PropTypes.oneOf([
        'diagonal',
        'elbow',
        'straight',
    ]),
    transitionDuration: PropTypes.number,
    depthFactor: PropTypes.number,
    collapsible: PropTypes.bool,
    initialDepth: PropTypes.number,
    zoomable: PropTypes.bool,
    scaleExtent: PropTypes.shape({
        min: PropTypes.number,
        max: PropTypes.number,
    }),
    nodeSize: PropTypes.shape({
        x: PropTypes.number,
        y: PropTypes.number,
    }),
    separation: PropTypes.shape({
        siblings: PropTypes.number,
        nonSiblings: PropTypes.number,
    }),
    circleRadius: PropTypes.number,
    styles: PropTypes.shape({
        nodes: PropTypes.object,
        links: PropTypes.object,
    }),
};
