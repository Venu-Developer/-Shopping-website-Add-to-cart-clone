import React, { useState } from 'react'
import Setofimages from './Setofimages'
import Items from './Items'
import {Link,NavLink,Outlet, Route} from 'react-router-dom'

function App() {

  return (
    <>
      <div>
        <div className='menu'>
            <div className='myntra'>
                <img src='myntra.webp'/>
            </div>
            <div className='Link1'>
                 <NavLink className='Link' to='MEN'>MEN</NavLink>
                 <NavLink className='Link' to='WOMEN'>WOMEN</NavLink>
                 <NavLink className='Link' to='KIDS'>KIDS</NavLink>
                 <NavLink className='Link' to='HOME'>HOME & lIVING</NavLink>
                 <NavLink className='Link' to='BEAUTY'>BEAUTY</NavLink>
            </div>
        </div>
      </div>
      <main>
        <Outlet/>
      </main>

    </>
  )
}

export default App

// import React from "react";
// import Context from "./Context";
// import RouterLayout from "./RouterLayout";

// const App = () => {
//   return (
//     <>
//       <Context>
//         <RouterLayout />
//       </Context>
//     </>
//   );
// };

// export default App;
