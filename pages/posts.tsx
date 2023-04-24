import Link from 'next/link';
import { Container, Main, Title, Description, SubTitle } from '../components/sharedstyles';


export default function Posts(){

    return(
        <Container>
            <Main>
                <Title>Posts</Title>

                    <article>
                        <a href='/'>
                        post.js, ou .tsx 01!
                        </a>
             
                        <p>Muito legal esta publicação</p> 
             
                        <p>             </p>
                    </article>

                <Description>
                    
                    <Link href='/'>&larr; Voltar</Link>
                </Description>
            
        
               
            </Main>

        

            
        </Container>

         
         

    )

}
