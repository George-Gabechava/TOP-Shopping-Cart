import NavBar from "./NavBar";
import Footer from "./Footer";

const Shop = () => {
  return (
    <div className="content">
      <NavBar></NavBar>
      <div id="shopGrid">
        <div id="leftShop">
          <h1>Hello from Shop page!</h1>
          <p>So, how are you?</p>
        </div>
        <div id="rightShop">
          
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Shop;
