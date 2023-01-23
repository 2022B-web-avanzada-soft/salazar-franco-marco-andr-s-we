// components/d_hook_custom/EjemploHookCustom.tsx
import useSelectMoneda from "../hooks/useSelectMoneda";
import {useEffect} from "react";
import {MONEDAS} from "./monedas";

export default function (){
    const [moneda, UseSelectMonedas] = useSelectMoneda(
        'Moneda',
            MONEDAS

    )
    useEffect(
        ()=>{
            console.log('Cambio moneda', moneda)
        },
        [moneda]
    )
    return(
        <>
            {UseSelectMonedas}
        </>
    )
}