import './App.css';
import Condicional from './components/Condicional';
/* import Frase from './components/Frase';
import SayMainName from './components/SayMainName';
import Pessoa from './components/Pessoa';
import List from './components/List' */
import Evento from './components/Evento';
import Form from './components/Form';
import OutraLista from './components/OutraLista';


function App() {
  

  const meusItens = ['React', 'Vue', 'Angular']
  /* const nome = 'Maria' */

  return (
    <div className='logo'>
      
      <h1>Renderizaçao de Listas</h1>
      <OutraLista itens={''}/>







      {/* <Condicional/> */}
      {/* <Evento numero="1"/>
      
      <Form/> */}
      {/* <Evento/>
      <Frase/>
      <SayMainName nome="Gabriel"/>
      <SayMainName nome="Joao"/>
      <SayMainName nome={nome}/>
      <Pessoa nome="Rodrigo" idade="28" profissao="Programdor" foto="https://via.placeholder"/>
      <List/>  */}
      
    </div>
  );
}

export default App; // Apenas o App é exportado aqui
