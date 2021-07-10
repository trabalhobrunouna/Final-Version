import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

const Login = () => {

    const baseURL = "https://bancocadastro.herokuapp.com/authentication/login";
    const [usuario, setLogin] = useState({ email: '', senha: '' })

    const handleInputChange = (event) => {
        const { name, value } = event.target
        setLogin({ ...usuario, [name]: value })
    }

    
    
    function MostrarSenha() {
        var Senha = document.getElementById("senha");
        if (Senha.type === "password") {
            Senha.type = "text";
        } else {
            Senha.type = "password";
        }
    }

    return (
        <form
            onSubmit={(event) => {
                event.preventDefault()
                logar(usuario)
            }}
        >
            <p className="logoASOlogin">ASO.com</p>
            <h1 className="tituloLogin">Login</h1>

            <div className="areaLogin">
                <p className="msgLogin">Já possui registro?</p>

                <p className="emailLogin">Email</p>
                <div className="campoEmailLogin">
                    <input
                        type="text"
                        placeholder="exemplo@email.com"
                        name="email"
                        value={usuario.email}
                        onChange={handleInputChange} />
                </div>

                <p className="senhaLogin">Senha</p>
                <div className="campoSenhaLogin">
                    <input
                        type="password"
                        id="senha"
                        placeholder="insira sua senha"
                        name="senha"
                        value={usuario.senha}
                        onChange={handleInputChange} />
                </div>

                <div className="SenhadoLogin">
                    <input className="checkboxLogin" type="checkbox" onClick={() => MostrarSenha()} />
                    <label className="MostrarSl" for="MostrarSenha">Mostrar <br />Senha</label>
                </div>

                <div>
                    <div className="centralizarLogin">
                            <button type="submit" className="entrarLogin">Entrar</button>
                        <p className="registLogin">Ainda não possui uma conta ASO? Registre-se agora:</p>


                        <NavLink to="cadastro" style={{ textDecoration: 'none' }}>
                            <div>
                                <button type="button" className="registrarLogin">Criar Conta</button>
                            </div>
                        </NavLink>
                    </div>
                </div>
            </div>
        </form>
    )

    async function logar(usuario) {
        const response = await fetch(baseURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(usuario)
        });
        if (response.ok) {
            const data = await response.json();
            sessionStorage.setItem("access-token", data.token);
            window.alert("Login realizado com sucesso");
            window.location.href = '/home';
        } else if (response.status === 401) {
            window.alert("Login não realizado");
        } else {
            const data = await response.json();
            window.alert("Ops, deu algum problema!");
        }
    }
}

export default Login