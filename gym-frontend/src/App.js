import {Route,Routes,BrowserRouter} from "react-router-dom";
import CoverPg from "./Components/CoverPg/cover";
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<CoverPg/>}></Route>
    </Routes>
    </BrowserRouter>
    // <div>
    //   <h1>Gym Portal</h1>
    //   </div>

  );
}

export default App;
