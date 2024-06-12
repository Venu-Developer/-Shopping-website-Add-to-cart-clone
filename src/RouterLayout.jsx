import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import App from "./App";
import Men from "./Men";
import Women from "./Menubar/Women";
import Kids from "./Menubar/Kids";
import Home from "./Menubar/Home";
import Beauty from "./Menubar/Beauty";
import Items from "./Items";
import Showingorderitems from "./Showingorderitems";
import Setofimages from "./Setofimages";
import App1 from "./App1";
import Size from "./Size.jsx";
import App2 from "./App2.jsx";
import Navbar from "./Navbar.jsx";
function RouterLayout() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="goback" element={<App />} />
            <Route path="/" element={<App />}>
            <Route index element={<Setofimages />} />
            <Route path="Men" element={<Men />} />
            <Route path="Women" element={<Women />} />
            <Route path="Kids" element={<Kids />} />
            <Route path="Home" element={<Home />} />
            <Route path="Beauty" element={<Beauty />} />
          </Route>

          <Route path="/" element={<App1 />}>
            <Route path="buy/:id" element={<Items />} />
            <Route path="Men" element={<Men />} />
            <Route path="Women" element={<Women />} />
            <Route path="Kids" element={<Kids />} />
            <Route path="Home" element={<Home />} />
            <Route path="Beauty" element={<Beauty />} />
          </Route>
          <Route path="/" element={<App2 />}>
            <Route path="show" element={<Showingorderitems />} />
            <Route path="size" element={<Size />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default RouterLayout;

// /////////////
// import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
// import App from "./App";
// import Men from "./Men";
// import Women from "./Menubar/Women";
// import Kids from "./Menubar/Kids";
// import Home from "./Menubar/Home";
// import Beauty from "./Menubar/Beauty";
// import Items from "./Items";
// import Showingorderitems from "./Showingorderitems";
// import Setofimages from "./Setofimages";
// import App1 from "./App1";
// import Size from "./Size.jsx";
// import App2 from "./App2.jsx";
// import Navbar from "./Navbar.jsx";
// function RouterLayout({childern}) {
//   return (
//     <div>
//       <BrowserRouter>
//         <Navbar />
//         <Routes>
//           <Route path="goback" element={<App />} />
//           <Route path="/" element={<App />}>
//             <Route index element={<Setofimages />} />
//             <Route path="Men" element={<Men />} />
//             <Route path="Women" element={<Women />} />
//             <Route path="Kids" element={<Kids />} />
//             <Route path="Home" element={<Home />} />
//             <Route path="Beauty" element={<Beauty />} />
//           </Route>

//           <Route path="/" element={<App1 />}>
//             <Route path="buy/:id" element={<Items />} />
//             <Route path="Men" element={<Men />} />
//             <Route path="Women" element={<Women />} />
//             <Route path="Kids" element={<Kids />} />
//             <Route path="Home" element={<Home />} />
//             <Route path="Beauty" element={<Beauty />} />
//           </Route>
//           <Route path="/" element={<App2 />}>
//             <Route path="show" element={<Showingorderitems />} />
//             <Route path="size" element={<Size />} />
//             <Route path='shirtcount' element={<ShirtCount/>}/>
//           </Route>
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default RouterLayout;

// import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
// import App from "./App";
// import Men from "./Men";
// import Women from "./Menubar/Women";
// import Kids from "./Menubar/Kids";
// import Home from "./Menubar/Home";
// import Beauty from "./Menubar/Beauty";
// import Items from "./Items";
// import Showingorderitems from "./Showingorderitems";
// import Setofimages from "./Setofimages";
// import App1 from "./App1";
// import Size from "./Size.jsx";
// import App2 from "./App2.jsx";
// import Navbar from "./Navbar.jsx";
// function RouterLayout({childern}) {
  //   return (
    //     <div>
    //       <BrowserRouter>
//         <Navbar />
//         <Routes>
//           <Route path="goback" element={<App />} />
//           <Route path="/" element={<App />}>
//             <Route index element={<Setofimages />} />
//             <Route path="Men" element={<Men />} />
//             <Route path="Women" element={<Women />} />
//             <Route path="Kids" element={<Kids />} />
//             <Route path="Home" element={<Home />} />
//             <Route path="Beauty" element={<Beauty />} />
//           </Route>

//           <Route path="/" element={<App1 />}>
//             <Route path="buy/:id" element={<Items />} />
//             <Route path="Men" element={<Men />} />
//             <Route path="Women" element={<Women />} />
//             <Route path="Kids" element={<Kids />} />
//             <Route path="Home" element={<Home />} />
//             <Route path="Beauty" element={<Beauty />} />
//           </Route>
//           <Route path="/" element={<App2 />}>
//             <Route path="show" element={<Showingorderitems />} />
//             <Route path="size" element={<Size />} />
//             {/* <Route path='shirtcount' element={<ShirtCount/>}/> */}
//           </Route>
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default RouterLayout;
/////////////
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Setofimages from "./Setofimages";
// import Navbar from "./Navbar.jsx";
// function RouterLayout() {
//   return (
//     <div>
//       <BrowserRouter>
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<Setofimages/>} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default RouterLayout;
