import {Link} from 'react-router-dom';
import StudentDetails from './StudentDetails';
const Home = () => {
  return (
    <>
      <h1>Student Details</h1>
      <Link to="/StudentDetails">StudentDetails</Link>
    </>
  );
};
export default Home;
