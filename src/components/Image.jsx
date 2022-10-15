import React, {useContext} from "react";
import {Context} from "../Context";
import PropTypes from "prop-types"




export default function Image({className, img}){

    const [hovered, setHovered] = React.useState(false);
    const {toggleFavorite, addCartItem, cartItems, removeCartItem} = useContext(Context);
   
    function heartIcon(){
        if(img.isFavorite){
            return <i onClick={()=>{toggleFavorite(img.id)}}className="ri-heart-fill favorite"></i> 
        }
        else if(hovered){
            return <><i onClick={()=>{toggleFavorite(img.id)}} className="ri-heart-line favorite"></i></>
        }
    }


    function cartIcon(){
      const alreadyInCart = cartItems.some( item => item.id === img.id);
      if(alreadyInCart){
        return <i className="ri-shopping-cart-fill cart" onClick={() => {removeCartItem(img.id)}} ></i> 
      }else if(hovered){
        return <i onClick={() => {addCartItem(img)}} className="ri-add-circle-line cart"></i>
      }
    }

return(


    <div className={`${className} image-container` }
     onMouseEnter={() => {setHovered(true)}} 
     onMouseLeave={() => {setHovered(false)}}>
       {heartIcon()}
       {cartIcon()}
        
        <img src={img.url} className="image-grid"/>
    </div>

)

}

Image.propTypes = {
    className: PropTypes.string,
    img: PropTypes.shape({
        id: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        isFavorite: PropTypes.bool
    })
}

