//02-interfaces
export class A{

}
export interface B{

}
interface Usuario{
    nombre: string;
    apellido: string;
    edad?: number | undefined;
    sueldo?: number;
    casado: boolean | 0 | 1;
    estado: 'AC' | 'IN' | 'BN';
    //funciones
    imprimirUsuario: (mensaje: string) => string | 'BN';
    calcularImpuesto: (impuesto: number) => number;
    estadoActual?: () => 'AP' | 'AF' | 'AT'; //opcional
    // calcularImpuesto parametro numero impuesto, sueldo + sueldo * impuesto
    // estadoActual no reciba parametros, 'AP' 'AF' 'AT'
}

let user: Usuario ={
    nombre: 'Marco',
    apellido: 'Salazar',
    casado: 0;
    sueldo: 11.2,
    estado: 'AC',
    imprimirUsuario: (mensaje: string) => {
        return 'El mensaje es: ' + mensaje;
    },
    calcularImpuesto: impuesto => {
        return user.sueldo + this.sueldo * impuesto;
    },
    estadoActual: () => {
        switch (this.estado){
            case 'AC':
                return 'AP';
            case 'IN':
                return 'AF';
            case 'BN':
                return 'AT';
        }
    }
}

