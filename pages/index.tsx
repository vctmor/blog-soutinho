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
const gitRubResponse = await fetch("https://api.github.com/users/victormoreira")
.then(res => res.json())

  return {
    props: {
      avatar_url: gitRubResponse.avatar_url
    }
  }

}