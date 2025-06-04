// Importa o componente Button de um caminho específico
import Button from "./evento/Button"

// Define o componente Evento
function Evento(){

    // Define a função que será executada como primeiro evento
    function meuEvento(){
        console.log(`Ativando primeiro evento`) // Log no console quando o evento for acionado
    }

    // Define a função que será executada como segundo evento
    function segundoEvento(){
        console.log('Ativando segundo evento') // Log no console quando o evento for acionado
    }

    // Retorna o JSX que será renderizado
    return (
        <div>
            {/* Texto instrucional */}
            <p>Clique para disparar um evento:</p>
            
            {/* Componente Button que recebe as props:
                - event: função a ser executada no clique
                - text: texto exibido no botão */}
            <Button event={meuEvento} text="Primeiro Evento"/>
            
            {/* Segundo componente Button com diferentes props */}
            <Button event={segundoEvento} text="segundo Evento"/>
        </div>
    )
}

// Exporta o componente como padrão
export default Evento