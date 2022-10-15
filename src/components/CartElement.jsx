import React, {useContext, useState} from "react";
import {Context} from "../Context";
import PropTypes from "prop-types";





export default function CartElement({item}){

  const {removeCartItem} = useContext(Context)
 
const[hovered , setHovered] = useState(false);
const className = hovered ? "ri-delete-bin-fill":"ri-delete-bin-line"


   return(
           <div className="cart-item" >
              <i className={className} 
              onClick={() => removeCartItem(item.id)}
              onMouseEnter={()=>{setHovered(true)}}
              onMouseLeave={() =>{setHovered(false)}}
              >

              </i>
             <img src={item.url} width="130px" />
            <p>$5.99</p>
           </div>
    )
}

CartElement.propTypes = {
  item: PropTypes.shape({
      url: PropTypes.string.isRequired
  })
}