// Importa o hook useState do React para gerenciar estados no componente
import { useState } from "react";

function Condicional() {
    // Estado para armazenar o e-mail digitado no input (inicializado como string vazia)
    const [email, setEmail] = useState(""); 
    
    // Estado para armazenar o e-mail do usuário após o envio (inicialmente undefined)
    const [userEmail, setUserEmail] = useState();

    // Função para enviar o e-mail (é executada quando o botão é clicado)
    function enviarEmail(e) {
        e.preventDefault(); // Previne o comportamento padrão do formulário (recarregar a página)
        setUserEmail(email); // Atualiza o estado userEmail com o valor do estado email
    }

    // Função para limpar o e-mail cadastrado
    function limparEmail(e) {
        setUserEmail(''); // Reseta o estado userEmail para uma string vazia
    }

    return (
        <div>
            <h2>Cadastre o seu e-mail</h2>
            <form>
                {/* Input para digitar o e-mail */}
                <input
                    type="email"
                    placeholder="Digite aqui o seu e-mail"
                    // Atualiza o estado email sempre que o valor do input muda
                    onChange={(e) => setEmail(e.target.value)}
                />
                
                {/* Botão para enviar o e-mail (dispara a função enviarEmail) */}
                <button type="submit" onClick={enviarEmail}>
                    Enviar e-mail
                </button>

                {/* Renderização condicional: só mostra se userEmail existir */}
                {userEmail && (
                    <div>
                        {/* Exibe o e-mail cadastrado */}
                        <p>O e-mail do usuário é: {userEmail}</p>
                        
                        {/* Botão para limpar o e-mail (dispara a função limparEmail) */}
                        <button onClick={limparEmail}>Limpar E-mail</button>
                    </div>
                )} 
            </form>
        </div>
    );
}

export default Condicional;