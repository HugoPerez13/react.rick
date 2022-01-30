import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css';
import { Home } from "./Home/Home.jsx";
import { Characters } from "./Characters/Characters.jsx";
import { Header } from "./Header/Header";
import { Location } from "./location/Location.jsx"
function App() {
  return (

    <BrowserRouter>

      <Header />

    <Routes>

      <Route path="/">

        <Route index element={<Home/>}/>
        <Route path="characters" element={<Characters/>}/>
        <Route path="*" element={<Home/>}/>
        <Route path="location" element={<Location/>}/>
      </Route>
      <Route path="/characters" component={Characters}/>
      <Route path="/location"   component={Location}/>

    </Routes>

    </BrowserRouter>

  );
}

export default App;
