import React,{useState} from 'react';
import hammer from './shop.jpeg';
import Screwdriverpic from './screwdriver.jpeg';
import pillarpic from './pillar.jpeg';
import { Link } from 'react-router-dom';



const products = [
  {
    id: 1,
    name: "Hammer",
    description: "Used to beat someone.",
    price: "$10.99",
    image: hammer 
  },
  {
    id: 2,
    name: "Screwdriver",
    description: "Used to tighten or loosen screws.",
    price: "$8.99",
    image: Screwdriverpic 
  },
  {
    id: 3,
    name: "Pliers",
    description: "Used for gripping and bending objects.",
    price: "$12.99",
    image: pillarpic 
  },
  {
    id: 4,
    name: "Hammer",
    description: "Used to beat someone.",
    price: "$10.99",
    image: hammer
  },
  {
    id: 5,
    name: "Screwdriver",
    description: "Used to tighten or loosen screws.",
    price: "$8.99",
    image: Screwdriverpic 
  },
  {
    id: 6,
    name: "Pliers",
    description: "Used for gripping and bending objects.",
    price: "$12.99",
    image: pillarpic 
  },
  {
    id: 7,
    name: "Hammer",
    description: "Used to beat someone.",
    price: "$10.99",
    image: hammer 
  },
  {
    id: 8,
    name: "Screwdriver",
    description: "Used to tighten or loosen screws.",
    price: "$8.99",
    image: Screwdriverpic 
  },
  {
    id: 9,
    name: "Pliers",
    description: "Used for gripping and bending objects.",
    price: "$12.99",
    image: pillarpic 
  },
  {
    id: 10,
    name: "Hammer",
    description: "Used to beat someone.",
    price: "$10.99",
    image: hammer 
  },
  {
    id: 11,
    name: "Screwdriver",
    description: "Used to tighten or loosen screws.",
    price: "$8.99",
    image: Screwdriverpic 
  },
  {
    id: 12,
    name: "Pliers",
    description: "Used for gripping and bending objects.",
    price: "$12.99",
    image: pillarpic 
  }
];


const Shop = () => {
  const [search, setSearch] = useState("");


  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );


  if (search !== "" && filteredProducts.length === 1) {
    const product = filteredProducts[0];
    return (
      <div>
        
        <div key={product.id} style={{ textAlign: "center" }}>
          <img src={product.image} alt={product.name} style={{ width: "100%", height: "200px", objectFit: "cover" }} />
          <p><b>{product.name}</b></p>
          <p>Description: {product.description}</p>
          <p>Price: {product.price}</p>
          <input type="number" placeholder='Quantity' /><br />
          <Link to='/Cart'><button style={{ backgroundColor: "#f7b50f", color: "white", border: "none", borderRadius: "10px" }}>Add to cart</button></Link>
        </div>
      </div>
    );
  }

  // Render the search input and filtered products
  return (
    <div>
      <div style={{ backgroundColor: "#02f54f", height: "40vh", display: "flex", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
        <h3><b>Welcome to BHAVANI HARWARE!</b> We're thrilled to have you here. Feel free to explore our wide range of high-quality tools and equipment. If you have any questions or need assistance, our friendly staff are always ready to help. Happy shopping!</h3>
      </div>
      <div>
        <center>
        <input
          type="text"
          value={search}
          placeholder="search"
          onChange={(e) => setSearch(e.target.value)}
        /><br />
        </center>
      </div>
      
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px", padding: "20px" }}>
        {filteredProducts.map((product) => (
          <div key={product.id} style={{ textAlign: "center", boxShadow: "4px 4px 2px #8e9491", border: "1px solid #aeb5b2", borderRadius: "10px", backgroundColor: "#dfe8e4", padding: "20px" }}>
            <img src={product.image} alt={product.name} style={{ width: "100%", height: "200px", objectFit: "cover" }} />
            <p><b>{product.name}</b></p>
            <p>Description: {product.description}</p>
            <p>Price: {product.price}</p>
            <input type="number" placeholder='Quantity' /><br />
            <Link to='/Cart'><button style={{ backgroundColor: "#f7b50f", color: "white", border: "none", borderRadius: "10px" }}>Add to cart</button></Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
