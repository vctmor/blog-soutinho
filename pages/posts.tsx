import Link from 'next/link';
import { Container, Main, Title, Description } from '../components/sharedstyles';


export default function Posts(){

    return(
        <Container>
            <Main>
                <Title>Posts</Title>
                <Description>
                    <Link href='/'>&larr; Voltar</Link>
                </Description>
            </Main>
        </Container>
    )

}