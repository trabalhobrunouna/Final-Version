import React, { useState, useEffect} from 'react'

const EditServicoForm = (props) => {
  const [servico, setServico] = useState(props.currentServico)

  useEffect(() => {
    setServico(props.currentServico)
  }, [props])

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setServico({ ...servico, [name]: value })
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()
        props.updateServico(servico.id, servico)
      }}
    >
      <div className="editServGeralVM">
            <div className="EditServNome">
                          <label>Nome do Serviço</label>
                          <input type="text"
                          className="EditServNomeCamp"
                          name="nomeServico"
                          value={servico.nomeServico}
                          onChange={handleInputChange} />
                </div>
                <div className="EditServInsumos">
                          <label>Insumos</label>
                          <input type="text"
                          className="EditServInsumosCamp"
                          name="insumos"
                          value={servico.insumos}
                          onChange={handleInputChange} />
                </div>

                <div className="EditServHora">
                        <label>Horários</label>
                        <input type="text"
                        className="EditServHoraCamp"
                        name="horarios"
                        value={servico.horarios}
                        onChange={handleInputChange} />
                </div>

                <div className="EditServDet">
                        <label>Detalhes do Serviço</label>
                       <input type="text"
                       className="EditServDetCamp"
                        name="detalhesServico"
                        value={servico.detalhesServico}
                        onChange={handleInputChange} />
              </div>

                <div className="EditServPort">
                        <label>Portfólio</label>
                        <input type="text"
                        className="EditServPortCamp"
                        name="portfolio"
                        value={servico.portfolio}
                        onChange={handleInputChange} />
                </div>

          
          </div>

     <button className="BtnAtualizarServicoVMP">Atualizar serviço</button>
      
    </form>
  )
}

export default EditServicoForm