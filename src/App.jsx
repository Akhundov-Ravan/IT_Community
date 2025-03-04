// import React from 'react';
// import { BrowserRouter, Routes, Route} from 'react-router-dom';
// import Home from "./components/Home/Home";
// import Nav from "./components/Nav/Nav";
// import Search from './components/Search/Search';
// import Add from "./components/Add/Add";
// import Specialist from "./components/Specialist/Specialist";
// import Footer from "./components/Footer/Footer";
// import Blog from './components/Blog/Blog';



//   return (

    
// <BrowserRouter>
     
     
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/search" element={<Search/>} />
//         <Route path="/add" element={<Add/>} />
//         <Route path="/specialist" element={<Specialist />} />
//         <Route path="/blog" element={<Blog />} />
//         <Route path="/footer" element={<Footer />} />
//       </Routes>
//       <Nav />
//       {/* <Home /> */}
//       <Footer />
//     </BrowserRouter>
      

//  )
// }
// export default App;






import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./components/Home/Home";
import Nav from "./components/Nav/Nav";
import Search from './components/Search/Search';
import Add from "./components/Add/Add";
import Specialist from "./components/Specialist/Specialist";
import Footer from "./components/Footer/Footer";
import Blog from './components/Blog/Blog';

function App() {
  const [profiles, setProfiles] = useState([]);

  const handleAddProfile = (newProfile) => {
    setProfiles((prevProfiles) => [newProfile, ...prevProfiles]);
  };

  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search profiles={profiles} />} />
        <Route path="/add" element={<Add onAddProfile={handleAddProfile} />} />
        <Route path="/specialist" element={<Specialist />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
export default App;







