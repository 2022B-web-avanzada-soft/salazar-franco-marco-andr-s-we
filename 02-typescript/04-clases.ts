// 04-clases.ts
class Persona{
    public nombre: string;
    public apellido: string;
    static nombreReferencial: string = 'Humano';
    protected  nombreYApellido = ''; // Duck Typing -> string
    constructor(
        nombreParametro: string,
        apellidoParametro: string,
    ) {
        this.nombre = nombreParametro;
        this.apellido = apellidoParametro;
        this.nombreYApellido = nombreParametro + ' ' + apellidoParametro;
    }
    private mostrarNombreApellido(): string{
        return this.nombreYApellido;
    }
}

class Usuario extends Persona{
    constructor(
        nombreParametro: string, // Parametros del constructor
        apellidoParametro: string, // Parametros del constructor
        public cedula: string, // Modificador acceso -> Propiedad de la clase
        public estadoCivil: string, // Modificador acceso -> Propiedad de la clase
    ) {
        super(nombreParametro, apellidoParametro);
        this.cedula;
        this.estadoCivil;
    }
}
const marco = new Usuario(
    'Marco',
    'Salazar',
    '1004749873',
    'soltero'
);
marco.nombre;
marco.apellido;
marco.cedula; // '1004749873'
marco.estadoCivil; //'soltero'