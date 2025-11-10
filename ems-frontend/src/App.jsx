import "./App.css";
import EmployeeComponent from "./Components/EmployeeComponent";
import FooterComponent from "./Components/FooterComponent";
import HeaderComponent from "./Components/HeaderComponent";
import ListEmployeeComponents from "./Components/ListEmployeeComponents";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderComponent />

        <Routes>
          <Route path="/" element={<ListEmployeeComponents />}></Route>

          <Route path="/employees" element={<ListEmployeeComponents />}></Route>

          <Route path="/add-employee" element={<EmployeeComponent />}></Route>

          <Route path="/update-employee/:id" element={<EmployeeComponent />}></Route>
        </Routes>

        <FooterComponent />
      </BrowserRouter>
    </>
  );
}

export default App;
