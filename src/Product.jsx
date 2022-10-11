import React from 'react';
import './Product.css';
import {useStateValue} from './StateProvider';

function Product(props){
 const [{}, dispatch] = useStateValue();
 let quantity= 1;
 let newCost = 0;
const addToBasket = ()=>{
    dispatch({
        type: 'Add_to_basket',
        item: {
            id: props.id,
            title:props.title,
            detail: props.detail,
            imglink: props.imglink,
            cost: props.cost,
            quantity,
            newCost
            
        }
    })
}

    return  (<div className="product">
    <div className="wrapper">
     <img className="product-image" src={props.imglink} alt="" />
     <div className="product-info">
     <span className='product-title'>{props.title}</span>
     <p className='product-detail'>{props.detail}</p>
     <div className="product-cost">
     <small>₹</small>
     <strong>{props.cost}</strong>
     </div>
     <span className="product-rating">{Array(props.rating).fill().map((_)=>(<p>⭐</p>))}</span>
     <button onClick={addToBasket} className="add-to-cart">
     Add to cart 
     </button>
     </div>
     </div>
    </div>)

}
export default Product;