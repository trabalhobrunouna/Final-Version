import React from 'react'

function ServicoTable(props) {
    return (
        <table>
            
            <tbody>
                {props.servico.lenght !== 0 ? (
                    props.servico.map(servico => (
                        <tr key={servico.id}>
                            <tr>
                            <th>Nome Serviço</th>
                            <td>{servico.nomeServico}</td>
                            </tr>
                            <tr>
                            <th>Insumos</th>
                            <td>{servico.insumos}</td>
                            </tr>
                            <tr>
                            <th>Horários</th>
                            <td>{servico.horarios}</td>
                            </tr>
                            <tr>
                            <th>Detalhes Serviço</th>
                            <td>{servico.detalhesServico}</td>
                            </tr>
                            <tr>
                            <th>Portfólio</th>
                            <td>{servico.portfolio}</td>
                            </tr>
                            <td>
                                <button className="button muted-button"
                                onClick ={() => {props.editRow(servico)}}>
                                    Edit</button>
                                <button 
                                    className="button muted-button"
                                    onClick={() => props.deleteServico(servico.id)}>
                                    Delete</button>
                            </td>
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

export default ServicoTable