// componentes/c_use_state/EjemploUseState
import {useState} from "react";
interface Usuario{
    nombre: string;
    edad: number;
    casado: boolean;
    hijos?: number[];
}

export default function (){
    const [numero, setNumero] = useState(0);
    const [nombre, setNombre] = useState("");
    const [arregloNumeros, setArregloNumeros] = useState([1,2,3] as number[]);
    const [usuario, setUsuario] = useState({
        nombre: "Marco",
        edad: 21,
        casado: false,
    } as Usuario)
    //setUsuario({nombre: "Marco", edad: 21, casado: true, hijos: []})
    return (<>
        <button className="bg-blue-500" onClick={
            (event)=>{
                event.preventDefault();
                setNumero(numero + 1)
            }
        }>Numero</button>
        <button className="bg-blue-500" onClick={
            (event)=>{
                event.preventDefault();
                setArregloNumeros([...arregloNumeros, 1]);
            }
        }>Arreglo</button>
        <button className="bg-blue-500" onClick={
            (event)=>{
                event.preventDefault();
                let usuarioNuevo={... usuario, nombre: new Date().toString() };
                setUsuario(usuarioNuevo)
            }
        }>Usuario</button>
    </>)
}