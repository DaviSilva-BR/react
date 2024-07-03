import Button from "../Button"

export default function Evento({numero})
{
    function  meuEvento(){
        alert(`numero: ${numero}`)
    }
    return(
        <>
            <h1>Evento</h1>
            <Button text="Primeiro Evento" />
            <button onClick={meuEvento}>Ativar</button>
        </>
    )
}