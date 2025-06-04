import PropTypes from 'prop-types'

function Item({marca, ano_lancamento}){
    return (
        <>
        <li>{marca} - {ano_lancamento}</li>
        </>
    )
}
Item.propTypes = {
    marca: PropTypes.string.isRequired,
    ano_lacamento: PropTypes.number,
}

Item.defaultProps = {
    marca: 'Faltou a marca',
    ano_lancamento: 0,
}// Importa PropTypes para validação de tipos das props
import PropTypes from 'prop-types'

// Componente Item que recebe duas props: marca e ano_lancamento
function Item({ marca, ano_lancamento }) {
    return (
        /* Fragmento para agrupar elementos sem adicionar nós extras ao DOM */
        <>
            {/* Exibe a marca e ano de lançamento em uma lista */}
            <li>{marca} - {ano_lancamento}</li>
        </>
    )
}

// Define as validações de tipo para as props
Item.propTypes = {
    marca: PropTypes.string.isRequired,  // marca deve ser string e obrigatória
    ano_lancamento: PropTypes.number,    // ano_lancamento deve ser número (opcional)
    // Observação: Há um erro de digitação aqui (ano_lacamento vs ano_lancamento)
}

// Define valores padrão para as props
Item.defaultProps = {
    marca: 'Faltou a marca',  // Valor padrão se marca não for fornecida
    ano_lancamento: 0,        // Valor padrão se ano_lancamento não for fornecido
}

export default Item

export default Item