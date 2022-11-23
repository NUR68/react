 import React from 'react';
 import "./App.css";
 import TopBar from "./components/TopBar/TopBar";
 import Sidebar from "./components/Sidebar/Sidebar"
 import "bootstrap/dist/css/bootstrap.min.css";
 import Header from './components/header/Header';
 import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
 import Contract from './components/Contract/Contract';
 import Reports from './components/reports/Reports';
 import News from './components/News/News';
 import Gallery from './components/gallery/Gallery';
 function App() {
   return (
     <Router className="app">
       <TopBar />

       <div className='row'>
         <div className='col-2'>
           <Sidebar />
         </div>
         <div className='col-10 mt-2'>
           <Routes>
             <Route path="/" element={<Header />} />
             <Route path="/raporlar" element={<Reports />} />
             <Route path="/haberler" element={<News />} />
             <Route path="/iletisim" element={<Contract />} />
             <Route path="/galeri" element={<Gallery />} />
           </Routes>
         </div>
       </div>

     </Router>
   )
 }

 export default App;
