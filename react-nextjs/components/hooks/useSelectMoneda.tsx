// hook/useSelectMoneda.tsx

import {MonedasInterface} from "../../interfaces/monedas";
import {useState} from "react";

export default function (label: string, opciones: MonedasInterface[]){
    //select del arreglo de monedas (html - jsx element)
    //valor de esa moneda
    const [moneda, setmMoneda] = useState('');
    const generarJSXElementMonedas: ()=>JSX.Element[] = ()=>{
        return opciones.map(
            (moneda:MonedasInterface)=>
                (// Iteracion (KEY ES REQUERIDO)
                    <option key={moneda.id} id={moneda.id} value={moneda.nombre}>
                    {moneda.nombre}
                    </option>
                )
        );
    };
    const UseSelectMonedas =(
        <>
            <label className="form-label" htmlFor={label}> {label} </label>
            <select className="form-select"
                    name={label}
                    id={label}
                    value={moneda}
                    onChange={e => {
                        e.preventDefault();
                        setmMoneda(e.target.value)
                    }}
                >
                <option value="">Seleccione opción</option>
                {generarJSXElementMonedas()}
            </select>
        </>
    )
    return [moneda, UseSelectMonedas];
}
