import {Route,Routes,BrowserRouter} from "react-router-dom";
import CoverPg from "./Components/CoverPg/cover";
import RegisterPg from "./Components/SignUp/registerPg";
import UserBoard from "./Components/dassBoard/body";
import Confirm from "./Components/PopUp/confirm";
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<CoverPg/>}></Route>
      <Route path="/register" element={<RegisterPg/>}></Route>
      <Route path="/dashboard" element={<UserBoard/>}></Route>
      <Route path ="/confirm" element={<Confirm/>}/>
    </Routes>
    </BrowserRouter>


  );
}

export default App;
