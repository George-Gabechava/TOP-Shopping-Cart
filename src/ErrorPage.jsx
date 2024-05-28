import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";

const ErrorPage = () => {
  return (
    <div>
      <NavBar></NavBar>
      <h1>Oh no, this page hasn&#39;t been created!</h1>
      <Link to="/">
        <h2>You can go back to the home page by clicking here, though!</h2>
      </Link>
      
        <h3>Or you can <Link to="https://www.linkedin.com/in/george-gabechava-92905b85">ping me on linkedIn </Link> to finish it</h3>
    <Footer></Footer>
    </div>
  );
};

export default ErrorPage;
