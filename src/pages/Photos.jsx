import React, {useContext} from "react"
import {Context} from "../Context";
import Image from "../components/Image"
import {getClass} from "../utils/utils"




function Photos() {
   
    const {photosArray} = useContext(Context);

  

    const photos = photosArray.map((item, index) => (
        <Image key={item.id} img={item} className={getClass(index)}/>
    ))

    

    return (

        <main className="photos">
                 {photos}

            
             </main>
   
    )
}

export default Photos




        // <Consumer>
        //     {value => {

        //         console.log(value)
        //         value.photosArray.map((item,index)=>{
        //             return (
        //                 <main className="photos">
        //                   <Image key={item.id} img={item} className={getClass(index)}/>
        //                 </main>
                        
        //             )
        //         })


        //     }}
        // </Consumer>

// 