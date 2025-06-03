import './App.css';
import Frase from './components/Frase';
import SayMainName from './components/SayMainName';
import Pessoa from './components/Pessoa';
import List from './components/List'


function App() {
  
  const nome = 'Maria'

  return (
    <div className='logo'>
      <Frase/>
      <SayMainName nome="Gabriel"/>
      <SayMainName nome="Joao"/>
      <SayMainName nome={nome}/>
      <Pessoa nome="Rodrigo" idade="28" profissao="Programdor" foto="https://via.placeholder"/>
      <List/>
    </div>
  );
}

export default App; // Apenas o App é exportado aqui
