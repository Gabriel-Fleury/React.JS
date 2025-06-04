// Importa o hook useState do React para gerenciamento de estado
import { useState } from "react";

function Form() {
    // Função que executa quando o formulário é submetido
    function cadastrarUsuario(e) {
        e.preventDefault(); // Previne o comportamento padrão de recarregar a página
        console.log(`Usuário ${name} foi cadastrado com a senha: ${password}`);
    }

    // Estado para armazenar o nome do usuário (inicializado como string vazia)
    const [name, setName] = useState("");
    
    // Estado para armazenar a senha do usuário (inicializado como string vazia)
    const [password, setPassword] = useState("");

    return (
        <div>
            {/* Título do formulário */}
            <h1>Meu cadastro</h1>
            
            {/* Formulário com evento onSubmit que chama cadastrarUsuario */}
            <form onSubmit={cadastrarUsuario}>
                {/* Campo para o nome */}
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Digite seu nome"
                        // Atualiza o estado 'name' quando o valor do input muda
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                
                {/* Campo para a senha */}
                <div>
                    <label htmlFor="password">Senha:</label>
                    <input
                        type="password" // Esconde os caracteres digitados
                        id="password"
                        name="password"
                        placeholder="Digite sua senha"
                        // Atualiza o estado 'password' quando o valor do input muda
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                
                {/* Botão de submissão do formulário */}
                <div>
                    <input type="submit" value="Cadastrar" />
                </div>
            </form>
        </div>
    );
}

export default Form;