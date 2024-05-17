//shopAPI.js
const getShop = async() => {

  const response = await fetch("https://fakestoreapi.com/products");

  if (!response.ok) {
    throw new Error(`HTTP error: Status ${response.status}`);
  }
  
  return response.json();
};

export default getShop; 