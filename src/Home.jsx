import React from 'react'
import "./Home.css";
import Product from "./Product";
function Home(){
  let newCost = 0;
    return <div className='home'>
    <img className="home-image" src="/images/home-bg.jpg" alt="" />
    {/**product components with props image,cost, ratng, info */}
    <div className="product-section">
    <Product id={1}
    imglink={"https://m.media-amazon.com/images/I/71tpxtLD0aL._AC_UY327_QL65_.jpg"}
    title={'New Apple iPhone 11 (128GB) - Purple'}
    detail = {" 6.1-inch 15.5 cm diagonal Liquid Retina HD LCD display Water and dust resistant 2 meters for up to 30 minutes, IP68 "}
    rating={5}
    cost={55000}
    newCost={newCost}/>
    
    <Product id={2}
    imglink={'https://images-eu.ssl-images-amazon.com/images/I/713AhSUtbHL._AC_UL116_SR116,116_.jpg'}
    title={'Samsung Galaxy M51'}
    detail = {" Samsung Galaxy M51 (Celestial Black, 6GB RAM, 128GB Storage) 6 Months Free Screen Replacement for Prime "}
    rating={4}
    cost={19000}
    newCost={newCost}
    />

    <Product id={3}
    imglink={'https://m.media-amazon.com/images/I/81i057rz8gS._AC_UL480_QL65_.jpg'}
    title={'D Shoes'}
    detail = {"Sports Running Shoes for Men's, trecking, soft sole light weight"}
    rating={4}
    cost={700}
    newCost={newCost}
    />
    
    </div>
    <div className="product-section">
    <Product id={4}
    imglink={'https://m.media-amazon.com/images/I/61IuIj5gCSL._AC_UL480_QL65_.jpg'}
    title={'MSI Optix G242 23.8 inch'}
    detail = {" MSI Optix G242 23.8 inch IPS Gaming Monitor – Full HD - 144Hz Refresh Rate - 1ms Response time – Adaptive Sync for Esports"}
    rating={5}
    cost={10000}
    newCost={newCost}
    />

    <Product id={5}
    imglink={'https://images-eu.ssl-images-amazon.com/images/I/61clL5nW-sS._AC_UL116_SR116,116_.jpg'}
    title={'Hisense 108 cm (43 inches) TV'}
    detail = {" Hisense 108 cm (43 inches) 4K Ultra HD Smart Certified Android LED TV 43A71F (Black) (2020 Model) | With Dolby Vision and ATMOS "}
    rating={5}
    cost={30000}
    newCost={newCost}
    />

    
    </div>
    <div className="product-section">
      <img src="/images/Screenshot (2).png" alt="" className="demo-img" />
    </div>

    <div className="product-section">
      <img src="/images/Screenshot (3).png" alt="" className="demo-imgs" />
      <img src="/images/Screenshot (4).png" alt="" className="demo-imgs" />
      <img src="/images/Screenshot (5).png" alt="" className="demo-imgs" />
      <img src="/images/Screenshot (6).png" alt="" className="demo-imgs" />
    </div>
    
    </div>
}

export default Home;