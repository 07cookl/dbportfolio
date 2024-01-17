import './App.css';
import { useState } from 'react';
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
import ALLpaQ from './components/Projects/ALLpaQ/ALLpaQ';
import TsoHost from './components/Projects/tsoHost/TsoHost';
import CMA from './components/Projects/CMA/CMA';
import Fundomundo from './components/Projects/Fundomundo/Fundomundo';
import TheWomensExchange from './components/Projects/The Women\'s Exchange/TWE';
import APE from './components/Projects/APE/APE';

export default function App() {
  const [mode, setMode] = useState('');

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout mode={mode} setMode={setMode}/>}>
          <Route path="/" element={<Home mode={mode} setMode={setMode}/>}/>
          <Route path="about" element={<About mode={mode} setMode={setMode}/>}/>
          <Route path="work" element={<Work mode={mode} setMode={setMode}/>}/>
          <Route path="work/ALLpaQ" element={<ALLpaQ mode={mode} setMode={setMode}/>}/>
          <Route path="work/tsoHost" element={<TsoHost mode={mode} setMode={setMode}/>}/>
          <Route path="work/CMA" element={<CMA mode={mode} setMode={setMode}/>}/>
          <Route path="work/fundomundo" element={<Fundomundo mode={mode} setMode={setMode}/>}/>
          <Route path="work/TheWomensExchange" element={<TheWomensExchange mode={mode} setMode={setMode}/>}/>
          <Route path="work/APE" element={<APE mode={mode} setMode={setMode}/>}/>
          <Route path="contact" element={<Contact mode={mode} setMode={setMode}/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
