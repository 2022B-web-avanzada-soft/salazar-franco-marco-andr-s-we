import {createContext, Dispatch, SetStateAction} from "react";

export const ContenedorContext= createContext({} as any)
export interface ContenedorContextObject{
    nombreUsuario: string;
    setNombreUsuario: Dispatch<SetStateAction<string>>;
}