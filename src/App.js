import Mysignin from "./component/signin";
import SignUp from "./component/signup";
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
    <Route path='/' element={<Mysignin key="login"/>} />
    <Route path='/signup' element={<SignUp key="login"/>} />
    </Routes>
  </Router>
    </div>
  );
}

export default App;
