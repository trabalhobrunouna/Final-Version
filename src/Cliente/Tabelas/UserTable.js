import React from 'react'

function Usertable(props) {
    return (
        <table>
            
            <tbody>
                {props.users.lenght !== 0 ? (
                    props.users.map(user => (
                        <tr key={user.id}>
                            <tr>
                            <td>Usuário</td>
                            <td>{user.usuario}</td>
                            </tr>
                            <tr>
                            <td>Email</td>
                            <td>{user.email}</td>
                            </tr>
                            <tr>
                            <td>Senha</td>
                            <td>{user.senha}</td>
                            </tr>
                            <tr>
                            <td>Confirmar Senha</td>
                            <td>{user.confirmarSenha}</td>
                            </tr>
                            <tr>
                            <td>Nome</td>
                            <td>{user.nome}</td>
                            </tr>
                            <tr>
                            <td>Sobrenome</td>
                            <td>{user.sobrenome}</td>
                            </tr>
                            <tr>
                            <td>Cidade</td>
                            <td>{user.cidade}</td>
                            </tr>
                            <tr>
                            <td>Estado</td>
                            <td>{user.estado}</td>
                            </tr>
                            <tr>
                            <td>Gênero</td>
                            <td>{user.genero}</td>
                            </tr>
                            <tr>
                                <button className="EditRegC"
                                onClick ={() => {props.editRow(user)}}>
                                    Editar Registro</button>
                                
                            </tr>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan={3}>No users</td>
                    </tr>
                )
                }
            </tbody>
        </table>
    )
}

export default Usertable