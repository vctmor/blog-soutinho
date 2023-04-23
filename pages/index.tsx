import styled from "styled-components"
import Link from 'next/link'
import React from "react"
import { join } from "path"

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

      <div>
      <section className="postsContainer">
        <h2>Repositórios Favoritos</h2>
        {
          props.repos.map((project) => {
            return(
              <article className="postsContainer__post">
                
                <p>Título: <a href={project.html_url}>
                   
                   {project.name}
                   
                 </a></p> 
                
                <p>
                  Descrição: {project.description}
                </p>
              </article>
            )
          })
        }

      </section>
    </div>

    </div>

    

    )
}


export async function getStaticProps(){
const gitRubResponse = await fetch("https://api.github.com/users/victormoreira")
.then(res => res.json())



const repos = await fetch('https://api.github.com/users/vctmor/repos')
.then(res => res.json())


  return {
    
    props: {
      avatar_url: gitRubResponse.avatar_url,
      repos,
      
    }
    
  }

}