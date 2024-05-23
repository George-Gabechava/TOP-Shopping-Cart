//Packages
import { useOutletContext } from 'react-router-dom';

//Components
import Footer from './Footer';

function Home() {
  const context = useOutletContext();
  const data = context.data;

  // display some shop items on the home page
  const specificItems = data ? [data[1], data[4], data[11], data[15]] : [];

  return (
    <div className='content'>
      <h1>The Random Stuff Store</h1>
      <p>{"Do you need more random stuff in your life? Well you've come to the right place!"}</p> 

      {/* // display some shop items on the home page */}
      <ul id='homeList' className="noBullets">
        {specificItems.map((item) => (
          item && (
            <li key={item.id}>
              <img className='homeImage' src={item.image}></img>
              <p>{item.title}</p>
            </li>
          )
        ))}
      </ul>
      {/* Load Footer */}
      <Footer></Footer>
    </div>
  );
};

export default Home;
