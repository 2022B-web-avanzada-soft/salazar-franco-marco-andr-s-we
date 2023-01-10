// componentes/c_use_state/EjemploUseState
import {useEffect, useState} from "react";
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

    // ayuda a escuchar cambios variables
    useEffect(
        ()=>{
            console.log('Inicio el Componente', numero, usuario);
        },
        [] // arregloVariables
                // Si esta vacia se ejecuta al principio una vez
    );

    useEffect(
        ()=>{
            console.log('Cambio numero', numero);
        },
        [numero] // arregloVariables
    );
    useEffect(
        ()=>{
            console.log('Cambio arregloNumeros', arregloNumeros);
        },
        [arregloNumeros] // arregloVariables
    );
    useEffect(
        ()=>{
            console.log('Cambio usuario', usuario);
        },
        [usuario] // arregloVariables
    );

    useEffect(
        ()=>{
            console.log('Cambio todo', numero, arregloNumeros, usuario);
        },
        [numero, arregloNumeros, usuario] // arregloVariables
    );


    //setUsuario({nombre: "Marco", edad: 21, casado: true, hijos: []})
    return (<>
        <button className="bg-blue-500 m-2" onClick={
            (event)=>{
                event.preventDefault();
                setNumero(numero + 1)
            }
        }>Numero</button>
        <button className="bg-blue-500 m-2" onClick={
            (event)=>{
                event.preventDefault();
                setArregloNumeros([...arregloNumeros, 1]);
            }
        }>Arreglo</button>
        <button className="bg-blue-500 m-2" onClick={
            (event)=>{
                event.preventDefault();
                let usuarioNuevo={... usuario, nombre: new Date().toString() };
                setUsuario(usuarioNuevo)
            }
        }>Usuario</button>
    </>)
}