import Mysignin from "./component/signin";
import SignUp from "./component/signup";
import "./App.css"
import Dashboard from "./component/dashboard"
import {
  HashRouter as Router,
  Route,
  Routes,
} from "react-router-dom";



function App() {


  return (
    <div className="App">
    <Router>
    <Routes>
    <Route path='/' element={<Mysignin key="login"/>} />/
    <Route path='/signup' element={<SignUp key="login"/>} />
    <Route path='/dash' element={<Dashboard key="dashboar/d"/>} />
   
    </Routes>
    </Router>
    </div>
  );
}

export default App;
