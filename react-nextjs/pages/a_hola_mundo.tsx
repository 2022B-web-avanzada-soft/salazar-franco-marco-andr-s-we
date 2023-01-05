// pages/a_hola_mundo
/*const a_componente = function (){
    return(
        <></>
    )
}
const b_componente = ()=>{
    return <></>
}
export default a_componente()*/

import EstilosEjemplo from "../components/a_estilos/EstilosEjemplo";
import Componente from "../components/b_componentes/Componente";

export default function a_hola_mundo(){
    return (
        <>
            <h1>Hola Mundo </h1>
            <EstilosEjemplo></EstilosEjemplo>
            <h1>Hola Mundo</h1>
            <Componente iteraciones={3}
                        mostrar={true}
                        url={'http://google.com'}
            ></Componente>
        </>
    )
}