import './App.css';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import AppLayout from "./app/AppLayout";
import About from "./components/About/About";
import Work from "./components/Work/Work";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/work" element={<Work/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
