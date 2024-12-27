import { HashRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Desc from "./pages/Desc";
import Options from "./pages/Options";
import Success from "./pages/Success";
import Failure from "./pages/Failure";
import Alert from "./pages/Alert";

const Router = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/desc" element={<Desc />}></Route>
        <Route path="/options" element={<Options />}></Route>
        <Route path="/success" element={<Success />}></Route>
        <Route path="/failure" element={<Failure />}></Route>
        <Route path="/alert" element={<Alert />}></Route>
      </Routes>
    </HashRouter>
  );
};

export default Router;
