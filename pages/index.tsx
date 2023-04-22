import { createGlobalStyle } from "styled-components"
/*
import {

  Title,
  
} from '../components/sharedstyles'
import Cards from '../components/cards'
*/

const Title = styled.h1`
font-size: 50px;
color: ${({ theme }) => theme.colors.primary};
`

export default function Home() {
  return (
    <div>
      <header>
        <Title>Minha Página</Title>
        <img src='...'/>

      </header>
    </div>
    )
}
