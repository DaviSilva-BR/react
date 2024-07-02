export default function Evento({numero})
{
    function  meuEvento(){
        alert(`numero: ${numero}`)
    }
    return(
        <>
            <h1>Evento</h1>
            <button onClick={meuEvento}>Ativar</button>
        </>
    )
}