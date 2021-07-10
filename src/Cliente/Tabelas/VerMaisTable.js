import React from 'react'

function VerMaisTable(props) {
    return (
        <table>            
            <tbody>
                {props.servico.lenght !== 0 ? (
                    props.servico.map(servico => (
                        <tr key={servico.id}>
                            <tr>
                            <td>Nome do Serviço: </td>
                            <td>{servico.nomeServico}</td>
                            </tr>
                            <tr>
                            <td>Insumos: </td>
                            <td>{servico.insumos}</td>
                            </tr>
                            <tr>
                            <td>Horários: </td>
                            <td>{servico.horarios}</td>
                            </tr>
                            <tr>
                            <td>Destalhes do Serviço: </td>
                            <td>{servico.detalhesServico}</td>
                            </tr>
                            <tr>
                            <td>Portfólio: </td>
                            <td>{servico.portfolio}</td>
                            </tr>
                            <td>
                                
                                
                            </td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan={3}>Sem Serviços</td>
                    </tr>
                )
                }
            </tbody>
        </table>
    )
}

export default VerMaisTable