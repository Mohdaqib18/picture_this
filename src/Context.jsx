import React from "react";

const Context = React.createContext();


export default function ContextProvider({children}){
    const [photosArray, setPhotosArray] = React.useState([])
    const [cartItems, setCartItems] = React.useState([])

    function addCartItem(item){
        setCartItems(prevState => {
            return [...prevState, item]
        })
    }

    function removeCartItem(id){

        setCartItems(prevState => prevState.filter(item => item.id !== id));
        
    }

   
   
   function toggleFavorite(id){

   const newArray = photosArray.map( item => {

        if(item.id === id){
           return {
            ...item,
            isFavorite : !item.isFavorite}
        }
        else{
            return item
        }
    })

    setPhotosArray(newArray)
    
   }


   function emptyCart(){
    setCartItems([]);
   }


    React.useEffect(() =>{
      fetch("https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json")
     .then(res => res.json())
     .then(data => setPhotosArray(data))
      },[])
    




    return (
        <Context.Provider value={{photosArray, toggleFavorite, addCartItem, cartItems,removeCartItem,emptyCart}} >
           {children}
        </Context.Provider>

    )
}


export {Context, ContextProvider};