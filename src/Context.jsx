import React, { useEffect, useState } from "react";
import { createContext,useContext } from "react";
export let userContext=createContext()
//  let useUserContext=()=>useContext(userContext)
function UserContextProvider(props){
    let [cartDetails,setCartDetails]=useState([])
    const [shirteSize, setShirtSize] = useState(38);

    const[handler,setHandler]=useState({cardIndex:0})
  
    return (
            <userContext.Provider value={[cartDetails,setCartDetails,shirteSize,setShirtSize,handler,setHandler]}>
               {props.children}
            </userContext.Provider>

    )
}
export default UserContextProvider


/////
// import React, { createContext,useState } from "react";

// export let UserContext = createContext();

// const Context = ({children}) => {
//   let [productDetails, setProductDetails] = useState([
//     {
//       id: 1,
//       Brand: "Mast & HarBour",
//       Shirt: "Striped Casual Shirt",
//       Money: 750,
//       originalMoney: 2000,
//       Discount: 1250,
//       Rating: 4.3,
//       image: "../dress1.webp",
//       selectItems: 1,
//       size: 38,
//     },
//     {
//       id: 2,
//       Brand: "Mast & HarBour",
//       Shirt: "Striped Casual Shirt",
//       Money: 500,
//       originalMoney: 1500,
//       Discount: 1000,
//       Rating: 4.3,
//       image: "../dress4.webp",
//       selectItems: 1,
//       size: 38,
//     },
//     {
//       id: 3,
//       Brand: "Mast & HarBour",
//       Shirt: "Striped Casual Shirt",
//       Money: 650,
//       originalMoney: 2000,
//       Discount: 1350,
//       Rating: 4.3,
//       image: "../dress5.webp",
//       selectItems: 1,
//       size: 38,
//     },
//     {
//       id: 4,
//       Brand: "Mast & HarBour",
//       Shirt: "Striped Casual Shirt",
//       Money: 700,
//       originalMoney: 1000,
//       Discount: 300,
//       Rating: 4.3,
//       image: "../dress6.webp",
//       selectItems: 1,
//       size: 38,
//     },
//     {
//       id: 5,
//       Brand: "Mast & HarBour",
//       Shirt: "Striped Casual Shirt",
//       Money: 659,
//       originalMoney: 2009,
//       Discount: 1350,
//       Rating: 4.3,
//       image: "../dress7.webp",
//       selectItems: 1,
//       size: 38,
//     },
//     {
//       id: 6,
//       Brand: "Mast & HarBour",
//       Shirt: "Striped Casual Shirt",
//       Money: 500,
//       originalMoney: 2000,
//       Discount: 1500,
//       Rating: 4.3,
//       image: "../dress8.webp",
//       selectItems: 1,
//       size: 38,
//     },
//   ]);

//   return (
//     <>
//       <UserContext.Provider value={[productDetails, setProductDetails]}>
//         {children}
//       </UserContext.Provider>
      
//     </>
//   );
// };

// export default Context;
