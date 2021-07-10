import React, {useState, useEffect, Fragment} from 'react'
import { NavLink } from 'react-router-dom'
import AddServicoForm from '../Forms/AddServicoForm'

const CadServico = () => {
    const baseUrl = "https://bancocadastro.herokuapp.com/servicos/";

    const initialFormState = { id: null, nomeServico: '', insumos: '', horarios: '', detalhesServico: '',
                                portfolio:'' }
    
    const [ servico, setServico ] = useState([])

    useEffect(() => { 
     getServicoService();
     }, []);

    const addServico = servico => {
        addServicoService(servico);
    }

    return (
        <section>
        <p class="siteP" >ASO.com</p>
       <div className="telaVerMaisP">
           <NavLink to="profissional" style={{ textDecoration: 'none' }}> 
         <div class="voltarP">
            <button type="button" class="VoltarCadServ">
            Voltar
            </button>
         </div>
        </NavLink>
        <section class="resultadoCliente">
       <div className="containerP">
           <div className="flex-row">
            <div className="flex-large">
                <section className="resultadoP">
                     
                        <Fragment>
                            <h2 className="TextAddServ">Adicionar Serviço</h2>
                            <AddServicoForm addServico={addServico} />
                        </Fragment>
                        </section>
             </div>
           </div>
          </div>
          </section>
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

async function addServicoService(servico) {
    fetch(baseUrl, {
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify(servico)
    })
    }
}

export default CadServico