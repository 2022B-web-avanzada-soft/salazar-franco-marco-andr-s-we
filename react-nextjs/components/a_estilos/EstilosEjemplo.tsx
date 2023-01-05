//components/a_estilos/EstilosEjemplos.tsx
import styles from './estilos.module.css'
import styled from "@emotion/styled";

//los estilos deben de tener el nombre "module.css"
//Styled components // npm i @emotion/styled @emotion/react

const Titulo = styled.h1`
    font-size: 2rem;
    text-transform: uppercase;
    color: orange;
`
const TituloRojo = styled.h1`
    font-size: 1.5rem;
    text-transform: capitalize;
    color: red;
`
const Subtitulo = styled.h2`
    font-size: 1.5rem;
    text-transform: capitalize;
    color: green;
`
export default function (){
    const misEstilos ={
        color: "white",
        backgroundColor: "black",
        borderBottom: "5px solid yellow"
    }
    return (
        <>
            <Titulo>Hola Titulo</Titulo>
            <TituloRojo>Hola titulo rojo</TituloRojo>
            <Subtitulo>Hola subtitulo</Subtitulo>

            <h1 style={
                {
                    color: misEstilos.color,
                    backgroundColor: misEstilos.backgroundColor,
                    borderBottom: misEstilos.borderBottom,
                }
            }>
                Estilos en objeto
            </h1>
            <div style={misEstilos}> Otros Estilos </div>
            <div className={styles.rojo}> Hola </div>
        </>
    )
}