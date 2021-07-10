import React, { useState } from 'react'

function AddServicoForm(props) {
    const initialState = { id: null, nomeServico: '', insumos: '', horarios: '', detalhesServico: '',
    portfolio:''}
    const [servico, setServico] = useState(initialState)

    function handleInputChange(event) {
        const { name, value } = event.target
        setServico({ ...servico, [name]: value })
    }

    return (
        <form onSubmit={event => {
            event.preventDefault();
            if (!servico.nomeServico  || !servico.insumos ||!servico.horarios || !servico.detalhesServico ||!servico.portfolio ) return;
            props.addServico(servico);
            setServico(initialState);
        }

        }>

        <div className="AddServGer">

             <div className="AddServNome">     
                    <label>Nome do Servico</label>
                    <input type="text"
                    className="AddServNameCamp"
                    name="nomeServico"
                    value={servico.nomeServico}
                    onChange={handleInputChange} />
            </div>  

                <div className="AddServInsumos"> 
                         <label>Insumos</label>
                         <input type="text"
                         className="AddServInsumosCamp"
                        name="insumos"
                        value={servico.insumos}
                        onChange={handleInputChange} />
                </div> 

                <div className="AddServHora"> 
                        <label>Horários</label>
                        <input type="text"
                        className="AddServHoraCamp"
                        name="horarios"
                        value={servico.horarios}
                        onChange={handleInputChange} />
                </div>

                <div className="AddServDet"> 
                        <label>Detalhes do Serviço</label>
                        <input type="text"
                        className="AddServDetCamp"
                        name="detalhesServico"
                        value={servico.detalhesServico}
                        onChange={handleInputChange} />
                </div>

                <div className="AddServPort"> 
                        <label>Portfólio</label>
                        <input type="text"
                        className="AddServPortCamp"
                        name="portfolio"
                        value={servico.portfolio}
                        onChange={handleInputChange} />
                </div>
            </div>
            <button className="btnAddServ">Adicionar novo Serviço</button>
        </form>
    )
}

export default AddServicoForm