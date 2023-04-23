import styled from "styled-components"
import Link from 'next/link'
import React from "react"
import { join } from "path"

import Footer from '../components/Footer';



const SubTitle = styled.h2`
  background-color: var(--primary);
  color: white;
  display: inline-block;
  padding: 5px;
`;
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
        <SubTitle>Posts</SubTitle>
        {
           <article>
            <a href='/'>
              post.js, ou .tsx 01!
            </a>
             
             <p>Muito legal esta publicação</p> 
             
             <p>     
             </p>
           </article>
        }

      </section>

      <section className="postsContainer">
        <SubTitle>Repositórios Github</SubTitle>
        {
          props.repos.map((project) => {
            return(
              <article
              key={project.repo}
              className="postsContainer__post">
                
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
        <Footer/>
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