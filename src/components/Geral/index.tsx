import {
  ContainerName,
  ContainerGenre,
  ContainerSidePower,
  ContainerJedi,
  ContainerSith,
  ContainerFinal,
  ContainerGeral
} from "./styles";

// Logo
import Logo from '../../assets/logo.png'

// Images Jedi
import Luke from '../../assets/luke-skywalker.svg'
import Yoda from '../../assets/yoda-jedi.svg'
import Rey from '../../assets/rey-jedi.svg'

// Images Sith
import Kenobi from '../../assets/kenobi-sith.svg'
import Vader from '../../assets/vader-sith.svg'
import Empire from '../../assets/empire-sith.svg'

import { useState } from 'react'

export function Geral() {
  // Name 
  const [name, setName] = useState('')
  // Genre
  const [genre, setGenre] = useState('')
  // SidePower
  const [sidePower, setSidePower] = useState('')
  // Jedi
  const [character, setCharacter] = useState('')

  return (
    <ContainerGeral>
      {/* Name */}
      <ContainerName>
        <img src={Logo} alt="Logo stars-wars" />

        <div>
          <h2>Qual seu nome ?</h2>
          <input
            type="text"
            value={name}
            // Pega o valor do input e guarda no useState
            onChange={(e) => { setName(e.target.value) }}
          />
        </div>
      </ContainerName>

      {/* Genre */}
      <ContainerGenre>
        <h2>Qual o seu gênero</h2>
        <div>
          <button
            // Quando clicar no botão o useState guarda esse valor passado no onClick ('Homem')
            onClick={() => { setGenre('Homen') }}
            // Quando o botão é clicado o class faz uma verificação para adicionar uma class
            className={genre === 'Homen' ? "activeMan" : ''}
          >HOMEN</button>
          <button
            onClick={() => { setGenre('Mulher') }}
            className={genre === 'Mulher' ? 'activeWoman' : ''}
          >MULHER</button>
        </div>
      </ContainerGenre>

      {/* SidePower */}
      <ContainerSidePower>
        <h2>Qual o seu lado da força ?</h2>
        <div>
          <button
            onClick={() => setSidePower('jedi')}
            // Se sidePower for igual a jedi então adicione essa class, se não adiciona uma class vazia
            className={sidePower === 'jedi' ? "activeJedi" : ''}
          >JEDI</button>
          <button
            onClick={() => setSidePower('sith')}
            className={sidePower === 'sith' ? "activeSith" : ''}
          >SITH</button>
        </div>
      </ContainerSidePower>

      {/* Jedi */}
      {/* Condição de acordo com o valor do state */}
      {sidePower === 'jedi' && (
        <ContainerJedi>
          <h1>Escolha seu personagem:</h1>

          <div>
            <span
              onClick={() => { setCharacter(Luke) }}
            >
              <img src={Luke} alt="Luke SkyWalker" />
              Luke Skywalker
            </span>
            <span
              onClick={() => { setCharacter(Yoda) }}
            >
              <img src={Yoda} alt="Mestre Yoda" />
              Mestre Yoda
            </span>
            <span
              onClick={() => { setCharacter(Rey) }}
            >
              <img src={Rey} alt="Rey" />
              Rey
            </span>
          </div>
        </ContainerJedi>
      )}

      {/* Sith */}
      {/* Condição de acordo com o valor do state */}
      {sidePower === 'sith' && (
        <ContainerSith>
          <h1>Escolha seu personagem:</h1>

          <div>
            <span
              onClick={() => { setCharacter(Kenobi) }}
            >
              <img src={Kenobi} alt="Kenobi Sith" />
              Kenobi
            </span>
            <span
              onClick={() => { setCharacter(Vader) }}
            >
              <img src={Vader} alt="Vader Sith" />
              Vader
            </span>
            <span
              onClick={() => { setCharacter(Empire) }}
            >
              <img src={Empire} alt="Empire Sith" />
              Empire
            </span>
          </div>
        </ContainerSith>
      )}

      {/* Final */}
      <ContainerFinal>
        {/* Se sidePower é igual a jedi, então coloque a class activeJedi se não deixe sem nada
         ou sidePower é igual a sith ? então coloque a class activeSith se não deixe sem nada*/}
        <div className={sidePower === "jedi" ? "activeJedi" : "" || sidePower === "sith" ? "activeSith" : ""}>
          <img src={character} alt={character} />
          <span>Nome: <strong> {name}</strong></span>
          <span>Gênero: <strong> {genre}</strong></span>
          <span>Força: <strong> {sidePower}</strong></span>
        </div>
      </ContainerFinal>
    </ContainerGeral >
  )
}