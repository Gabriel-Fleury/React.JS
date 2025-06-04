// Importa o CSS Module para estilização local do componente
// O objeto 'styles' conterá as classes como propriedades
import styles from './Frase.module.css'

// Define o componente Frase
function Frase() {
    return (
        /* 
          Div container com classe CSS Module
          styles.fraseContainer será transformado em um nome de classe único
        */
        <div className={styles.fraseContainer}>
            {/*
              Parágrafo com classe CSS Module
              styles.fraseContent garante que o estilo não vaze para outros componentes
            */}
            <p className={styles.fraseContent}>Este é um componente com uma frase</p>
        </div>
    )
}

// Exporta o componente como padrão
export default Frase