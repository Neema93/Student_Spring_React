import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StudentForm from "./StudentForm";
import StudentDetails from "./StudentDetails";
import Heading from "./Heading";
import Home from "./Home";
const AppRouter = () => {
  return (
    <Router>
      <Heading />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Heading" element={<Heading />} />
        <Route path="/StudentForm" element={<StudentForm />} />
        <Route path="/StudentDetails" element={<StudentDetails />} />
      </Routes>
    </Router>
  );
};
export default AppRouter;
