import React, { useState, useEffect} from 'react'

const EditarPerfil = (props) => {
  const [user, setUser] = useState(props.currentUser)

  useEffect(() => {
    setUser(props.currentUser)
  }, [props])

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setUser({ ...user, [name]: value })
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()
        props.updateUser(user.id, user)
      }}
    >
      <div className="EditCGeral">
      <div className="EditTipoC">
            <label>Profissional</label>
            <input type="radio"
            name="usuario"
            className="opc"
            value="profissional"
            checked={user.usuario === 'profissional'}
            onChange={handleInputChange} />
            <label>Cliente</label>
            <input type="radio"
            name="usuario"
            className="opc"
            value="cliente"
            checked={user.usuario === 'cliente'}
            onChange={handleInputChange} />
      </div>
      
      <div className="EditEmailC">
          <label>E-mail</label>
                <input type="text"
                    name="email"
                    className="CampEmailC"
                    value={user.email}
                    onChange={handleInputChange} />

      </div>

      <div className="EditSenhaC">
                <label>Senha</label>
                <input type="text"
                    name="senha"
                    className="SenhaC"
                    value={user.senha}
                    onChange={handleInputChange} />
                </div>

                <div className="EditCSenhaC">
            <label>Confirmar Senha</label>
            <input type="text"
                name="confirmarSenha"
                className="ConfSenhaC"
                value={user.confirmarSenha}
                onChange={handleInputChange} />

</div>

<div className="EditNomeC">
                <label>Nome</label>
            <input type="text"
                name="nome"
                className="NomeC"
                value={user.nome}
                onChange={handleInputChange} />
</div>
<div className="EditSNomeC">
                <label>Sobrenome</label>
            <input type="text"
                name="sobrenome"
                className="SNomeC"
                value={user.sobrenome}
                onChange={handleInputChange} />

</div>
<div className="EditCidadeC">
                <label>Cidade</label>
            <input type="text"
                name="cidade"
                className="CidadeC"
                value={user.cidade}
                onChange={handleInputChange} />
                </div>

                <div className="EditEstadoC">
                <label>Estado</label>
            <input type="text"
                name="estado"
                className="EstadoC"
                value={user.estado}
                onChange={handleInputChange} />
                <div className="Gênero">

                </div>
                </div>
                <div className="EditGenC">
                <div className="Content">
                    <label for="M">M</label>
                    <input type="radio" id="M" name="genero"
                    className="opc"
                        value="M"
                        checked={user.genero === 'M'}
                        onChange={handleInputChange} />
                    <label for="F">F</label>
                    <input type="radio" id="F" name="genero"
                    className="opc"
                        value="F"
                        checked={user.genero === 'F'}
                        onChange={handleInputChange} />
                    <label for="Outro">Outro</label>
                    <input type="radio" id="Outro" name="genero"
                    className="opc"
                        value="Outro"
                        checked={user.genero === 'Outro'}
                        onChange={handleInputChange} />
                    <label for="Prefiro não informar">Prefiro não <br />informar</label>
                    <input type="radio" id="Prefiro não informar" name="genero"
                    className="opc"
                        value="Prefironaoinformar"
                        checked={user.genero === 'Prefironaoinformar'}
                        onChange={handleInputChange} />
                        </div>
                </div>
        
     <div className="AttRegC"> <button>Atualizar Registro</button></div>
     </div>
    </form>
  )
}

export default EditarPerfil