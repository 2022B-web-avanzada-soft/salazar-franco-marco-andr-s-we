// b_componentes/Componente.tsx

// @ts-ignore
import EstilosEjemplo from "../a_estilos/EstilosEjemplo";
import {useState} from "react";

type PropiedadesComponente = {
    url: string;
    iteraciones: number;
    mostrar: boolean;
};

//interface PropiedadesComponentes{}

export default  function (props: PropiedadesComponente){
    const {url, iteraciones, mostrar} = props;
    const [iteracion, setIteracion] = useState(iteraciones)
    // const url = prop.url;
    // const iteraciones = props.iteraciones;
    const contenidoCondicional = ()=> {
        if(mostrar){
            return<p>Hola</p>
        }
        return <></>
    }
    return (
        <>
            <a target="_blank" href={url}>IR A GOOGLE </a>.
            {mostrar ? <p>Hello</p> : <></>}
            {contenidoCondicional()}
            
            <div>
                {iteracion}
            </div>
            <button className="bg-blue-500" onClick={
                (event)=>{
                    console.log(event);
                    setIteracion(iteracion + 1)
                }
            }>Aumentar</button>
        </>
    )
}