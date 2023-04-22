import styled from "styled-components"
import Link from 'next/link'
import React from "react"
import { join } from "path"

/*
import {

  Title,
  
} from '../components/sharedstyles'
import Cards from '../components/cards'
*/

const Title = styled.h1`
font-size: 50px;
// color: ${({ theme }) => theme.colors.primary};
`

export default function Home(props) {
  return (
    <div>
      <header className="headerContainer">
        <img src={props.avatar_url} />
      <Link href='/sobre'>
          <h1>Moreira blogue</h1>
      </Link>  

      </header>
    </div>
    )
}


export async function getStaticProps(){
  return {
    props: {
      avatar_url: "https://avatars.githubusercontent.com/u/125832442?v=4"
    }
  }

}