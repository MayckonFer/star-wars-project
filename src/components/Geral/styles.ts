import styled from 'styled-components'

// Styles Geral
export const ContainerGeral = styled.div`
  display: flex;
  flex-direction: column;
`;

// Styles Name
export const ContainerName = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;

  img {
    width: 100%;
    max-width: 300px;
    margin-top: 2.5rem;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 3.5rem;

    h2 {
      font-weight: 300;
      font-size: 1.2rem;
      margin-bottom: 1rem;
    }

    input {
      border-bottom: 1px solid #cccccc;
      border-top: none;
      border-right: none;
      border-left: none;
      background: none;
      padding: 1rem;
      width: 100%;
      color: #FCD842;
      font-weight: 700;
    }
  }
`;

// Styles Genre
export const ContainerGenre = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;

  h2 {
    font-size: 1.2rem;
    font-weight: 300;
    margin-top: 5rem;
  }

  div {
    width: 15%;
    margin-top: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
      border: none;
      background-color: #000000;
      color: #FCD842;
      padding: 1rem 1.5rem;
      border-radius: 2rem;
      font-weight: 700;
      transition: .2s;
    }

    .activeMan {
      background-color: #46A046;
    }

    .activeWoman {
      background-color: #46A046;
    }
  }  
`;

// Styles SidePower
export const ContainerSidePower = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;

  h2 {
    font-size: 1.2rem;
    font-weight: 300;
    margin-top: 5rem;

  }

  div {
    width: 15%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 2rem;

    button {
      border: none;
      background-color: #000000;
      color: #FCD842;
      padding: 1rem 1.5rem;
      border-radius: 2rem;
      font-weight: 700;
      transition: .2s;
    }
  }

  .activeJedi {
    background-color: #2f1ba7;
  }

  .activeSith {
    background-color: #9b463e;
  }
`;

// Styles Jedi
export const ContainerJedi = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;

  h1 {
    font-size: 1.2rem;
    font-weight: 300;
    margin-top: 5rem;
  }

  div {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 2rem;

    span {
      border: none;
      background: none;
      display: flex;
      flex-direction: column;
      align-items: center;
      font-weight: 700;
      cursor: pointer;
    }
  }
`;

// Styles Sith
export const ContainerSith = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;

  h1 {
    font-size: 1.2rem;
    font-weight: 300;
    margin-top: 5rem;
  }

  div {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 2rem;

    span {
      border: none;
      background: none;
      display: flex;
      flex-direction: column;
      align-items: center;
      font-weight: 700;
      cursor: pointer;

      img {
        width: 150px;
      }
    }
  }
`;

// Styles Final
export const ContainerFinal = styled.div`
  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    margin-top: 5rem;
    margin-bottom: 2rem;
    width: 370px;
    background-color: #000000;
    border-radius: 2.5rem;
    padding: 2.5rem 2.5rem;
    transition: .2s;
    
    span {
      color: #FCD842;
      font-weight: 700;
      strong {
        color: #FFF;
      }
    }

  }

  img {
    margin-bottom: 1rem;
  }

  .activeJedi {
    background-color: #2f1ba7;
  }

  .activeSith {
    background-color: #9b463e;
  }
`;