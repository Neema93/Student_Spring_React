import { Link } from "react-router-dom";

const Heading = () => {
 return (
    <>
    <h1> Student </h1>
    <Link to="/">Home</Link>
    <Link to="/StudentForm">StudentForm</Link>
    </>
 )
}
export default Heading;