//components/a_estilos/EstilosEjempli.tsx
import styles from './estilos.module.css'
//Los estilos deben tener el nombre "module.css"
export default function (){
    const misEstilos = {
        color: 'white',
        backgroundColor: 'black',
        borderBottom: '5px solid yellow',
    };
    return (
        <>
            <div style={misEstilos}>OtrosEstilos</div>
            <div className={styles.rojo}>Hola</div>
        </>
    )
}
