import {Route,Routes,BrowserRouter} from "react-router-dom";
import CoverPg from "./Components/CoverPg/cover";
import RegisterPg from "./Components/SignUp/registerPg";
import UserBoard from "./Components/dassBoard/body";
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<CoverPg/>}></Route>
      <Route path="/register" element={<RegisterPg/>}></Route>
      <Route path="/dashboard" element={<UserBoard/>}></Route>
    </Routes>
    </BrowserRouter>
    // <div>
    //   <h1>Gym Portal</h1>
    //   </div>

  );
}

export default App;
