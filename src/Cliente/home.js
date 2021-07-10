import React, {useState, useEffect, Fragment} from 'react'
import { NavLink } from 'react-router-dom'

document.title = "Página do cliente";

function Home() {
  return (
  <section class="htmlCliente">
    <p class="siteCliente">ASO.com</p>
    <h3 class="saudacaoCliente">Bem Vindo, Fulano!</h3>

    <section class="grid-menuCliente">

    <NavLink to="Perfil" style={{ textDecoration: 'none' }}> 
      <div class="perfilCliente">
            <button type="button" class="perfilCliente">
            <img src="imagens/usuario.svg" alt="ícone usuário" />
            Perfil
            </button>
        </div>
        </NavLink>

        <NavLink to="Agendamentos" style={{ textDecoration: 'none' }}>
        <div class="agendadoCliente">
            <button type="button" class="agendadoCliente">
            <img src="imagens/relógio.svg" alt="ícone relógio" />
            Serviços agendados
            </button>
        </div>
        </NavLink>

        <NavLink to="sair" style={{ textDecoration: 'none' }}>
        <div class="sairCliente">
            <button type="button" class="sairCliente">
            <img src="imagens/porta.svg" alt="ícone porta" />
            Sair
            </button>
        </div>    
        </NavLink>

    </section>

<h4 class="mensagemCliente">Encontre profissionais com apenas um clique:</h4>
<div className="BuscarGeral">
<form class="buscarCliente">
    <input type="text" placeholder="Digite o serviço desejado"></input>
    <button type="submit" class="botaoCliente">Buscar</button>
</form>
<a className="btnMsgC" href="http://localhost:3001" style={{ textDecoration: 'none' }}>Mensagens</a>
</div>

<section class="resultadoCliente">
    <div class="conjuntoCliente">
        <div class="res1Cliente">
        <p>Criação e edição de sites para empresas de médio e pequeno porte do ramo alimentício e nutricional</p>
            <p>Insumos: Computador, Internet e cabo ETH</p>
            <p>Horário: 11:00 - 13:00</p>
        </div>
        <NavLink to="vermais">
            <div>
            <button type="button" class="mais1Cliente">Ver Mais</button>
            </div>
        </NavLink>
    </div>
    <div class="conjuntoCliente">
    <div class="res2Cliente">
    <p>Atende local e visita a casa do cliente se necessário. O objetivo do serviço é configurar o modem.</p>
            <p>Insumos: Computador, Internet e cabo ETH</p>
            <p>Horário: 09:00 - 12:00</p>
    </div>
    <NavLink to="vermais">
            <div>
            <button type="button" class="maisCliente">Ver Mais</button>
            </div>
        </NavLink>
    </div>
    
    
</section>
</section>

  );
}

export default Home;
