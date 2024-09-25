
// import './App.css';
import Labs from './labs/labs'
import {HashRouter, Route, Routes, Navigate} from "react-router-dom"
import Kanbas from './Kanbas';


function App() {
  return (
   <HashRouter>
    <div style={{paddingLeft: 10}}>
        <h1>
        Welcome to Web Dev!!   
        </h1>
        <Routes>
        <Route path="/" element={<Navigate to="Labs" />} />
          <Route path="/Labs/*" element={<Labs />} />
          <Route path="/Kanbas/*" element={<Kanbas />} />
        </Routes>

        </div>
        </HashRouter>
  );
}

export default App;
