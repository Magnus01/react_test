import ReactDOM from 'react-dom';
// import './index.css';
// import 'bootstrap/dist/css/bootstrap.css';
import { makeMainRoutes } from './routes';

const routes = makeMainRoutes();

// import './components/sectioncreator/SectionCreator.css'



ReactDOM.render(

        routes,


  document.getElementById('root')
);




