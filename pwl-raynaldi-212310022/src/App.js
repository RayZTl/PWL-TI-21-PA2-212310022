import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LayoutInit from './Components/LayoutInit';
import { BrowserRouter } from 'react-router-dom';
import BaseRoute from './Components/BaseRoute';

function App(basename) {
  return (
    <BrowserRouter>
    <LayoutInit>
      <BaseRoute>
      </BaseRoute>
    </LayoutInit>
    </BrowserRouter>

  //   <div>
  //   {/* <h1>Hello World</h1> */}
  //  {/* <HelloWorld/>
  //  <Expression/>
  //  <Attributes/> */}
  //  {/* <MyProfile/> */}
  //  <Profile/>
  //   </div>
  );
}

export default App;
