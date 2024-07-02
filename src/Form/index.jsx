export default function Form(){

    function cadastrarUsuario(e){
        e.preventDefault();
        alert('cadastrado');
    }
    return(
        <>
        <h1>Form</h1>
        <form onSubmit={cadastrarUsuario}>
            <input type="text" name="name" placeholder="Nome:" />
            <input type="submit" value="ENVIAR" />
        </form>
        </>
    )
}