import { Routes, Route } from "react-router-dom";

export default function Root() {
    return (
     <Routes>
        <Route path="/" element={<h1>Holaa</h1>}/>
        <Route path="/p" element={<h1>Holaa ppppp</h1>}/>
     </Routes>
    
    );
  }