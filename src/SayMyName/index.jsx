import styles from './SayMyName.module.css';

export default function SayMyName(props){
    return(
        <>
            <p className={styles.title}>Nome: {props.nome}</p>
            <p>Idade: {props.idade}</p>
        </>
    )
}