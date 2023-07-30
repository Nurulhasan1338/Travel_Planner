import Mysignin from "./component/signin";
import SignUp from "./component/signup";
import "./App.css"
import Dashboard from "./component/dashboard"
import { CssVarsProvider } from '@mui/joy/styles';
import {
  HashRouter as Router,
  Route,
  Routes,
} from "react-router-dom";



function App() {


  return (
    <CssVarsProvider defaultMode="system"> 
  
    <div className="App">
    <Router>
    <Routes>
    <Route path='/' element={<Mysignin key="login"/>} />
    <Route path='/signup' element={<SignUp key="login"/>} />
    <Route path='/dashboard' element={<Dashboard key="dashboard"/>} />
    </Routes>
  </Router>
    </div>
  
    </CssVarsProvider>
  );
}

export default App;
