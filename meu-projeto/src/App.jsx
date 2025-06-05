import './App.css';
/* import Condicional from './components/Condicional';
import Frase from './components/Frase';
import SayMainName from './components/SayMainName';
import Pessoa from './components/Pessoa';
import List from './components/List' 
import Evento from './components/Evento';
import Form from './components/Form';
import OutraLista from './components/OutraLista';*/

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Empresa from './pages/Empresa';
import Contato from './pages/Contato';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

function App() {
  const meusItens = ['React', 'Vue', 'Angular'];

  return (
    <Router>
      <Navbar/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/empresa" element={<Empresa />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
      <Footer/>
    </Router>
  );
      
      


    {/* <OutraLista itens={''}/> */}
    {/* <Condicional/> */}
    {/* <Evento numero="1"/>
    <Form/> */}
    {/* <Evento/>
    <Frase/>
     <SayMainName nome="Gabriel"/>
    <SayMainName nome="Joao"/>
    <SayMainName nome={nome}/>
    <Pessoa nome="Rodrigo" idade="28" profissao="Programdor" foto="https:/via.placeholder"/>
      List/>  */}
    
  
}

export default App; // Apenas o App é exportado aqui
