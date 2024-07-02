import styles from './Marca.module.css';

export default function Marca(props){

    function meuEvento() {
        alert(1);
    }
    return(
        <>
        <p className={styles.title}>Marca: {props.modelo}</p>
        <button onClick={meuEvento}>go</button>
        </>
    )
}