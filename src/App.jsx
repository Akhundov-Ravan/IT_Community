
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

  const [options, setOptions] = useState(['Cybersecurity', 'Devops', 'Front-End', 'Back-End']);

  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search profiles={profiles} options={options} setOptions={setOptions}/>} />
        <Route path="/add" element={<Add onAddProfile={handleAddProfile} options={options} setOptions={setOptions} />} />
        <Route path="/specialist" element={<Specialist />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
export default App;