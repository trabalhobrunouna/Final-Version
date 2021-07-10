import React, { useState, useEffect, Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import EditServicoForm from '../Forms/EditServicoForm'
import VerMaisTable from '../Tabelas/VerMaisTable'

const App = () => {
    const baseUrl = "https://bancocadastro.herokuapp.com/servicos/40";

    const initialFormState = {
        id: null, nomeServico: '', insumos: '', horarios: '', detalhesServico: '',
        portfolio: ''
    }

    const [servico, setServico] = useState([])
    const [currentServico, setCurrentServico] = useState(initialFormState)
    const [editing, setEditing] = useState(true)

    useEffect(() => {
        getServicoService();
    }, []);

    const updateServico = (id, updateServico) => {
        updateServicoService(updateServico)
    }

    const editRow = servico => {
        setEditing(true)
        setCurrentServico({
            id: servico.id, nomeServico: servico.nomeServico, insumos: servico.insumos, horarios: servico.horarios,
            detalhesServico: servico.detalhesServico, portfolio: servico.portfolio
        })
    }


    return (
        <section>
            <p class="siteCliente" >ASO.com</p>
            <div className="telaVerMaisP">
                <NavLink to="profissional" style={{ textDecoration: 'none' }}>
                    <div class="voltarP">
                        <button type="button" class="VoltarVMC">
                            Voltar
                        </button>
                    </div>
                </NavLink>

                <div className="containerP">

                    <div className="flex-row">
                        <div className="flex-large">
                            <section class="resultadoCliente">




                                <div className="dadosClienteCliente" servico={servico} editRow={editRow} />


                                <div className="DadosServicoSalvo">
                                    <h2 className="DadosSerVM">Dados do Serviço</h2>
                                    <VerMaisTable servico={servico} editRow={editRow} />
                                </div>

                                <div className="EditDadosServVMC">
                                        <Fragment>
                                            <EditServicoForm
                                                editing={editing}
                                                setEditing={setEditing}
                                                currentServico={currentServico}
                                                updateServico={updateServico}
                                            />
                                        </Fragment>
                                </div>






                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

    async function getServicoService() {
        fetch(baseUrl)
            .then(response => response.json())
            .then(data => {
                setServico([data]);
            });
    }

    async function updateServicoService(servico) {
        fetch(baseUrl + servico.id, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            method: "PUT",
            body: JSON.stringify(servico)
        })
            .then(
                response => {
                    setCurrentServico(servico);
                    getServicoService()
                })
    }
}






export default App