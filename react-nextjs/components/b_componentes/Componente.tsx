// b_componentes/Componente.tsx

// @ts-ignore
import EstilosEjemplo from "../a_estilos/EstilosEjemplo";

type PropiedadesComponente = {
    url: string;
    iteraciones: number;
    mostrar: boolean;
};

//interface PropiedadesComponentes{}

export default  function (props: PropiedadesComponente){
    const {url, iteraciones, mostrar} = props;
    // const url = prop.url;
    // const iteraciones = props.iteraciones;

    return (
        <>
            <a target="_blank" href={url}>IR A GOOGLE </a>.
            {mostrar ? <p>Hello</p> : <></>}
            <div>
                {iteraciones}
            </div>
        </>
    )
}