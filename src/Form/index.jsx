import { useState } from "react";
export default function Form(){

    function cadastrarUsuario(e){
        e.preventDefault();
        alert(`nome:${name} - email: ${email} - senha: ${senha}`);
    }

    const [name, setName] = useState();
    const [senha, setSenha] = useState();
    const [email, setEmail] = useState();
    return(
        <>
        <h1>Form</h1>
        <form onSubmit={cadastrarUsuario}>
            <label htmlFor="name">Nome</label>
            <input type="text" name="name" placeholder="Nome:"       onChange={(e) => setName(e.target.value)} /><br />
            <label htmlFor="senha">Senha</label>
            <input type="password" name="senha" placeholder="Senha:" onChange={(e) => setSenha(e.target.value)} /><br />

            <label htmlFor="email">Email</label>
            <input type="email" name="email"  onChange={(e) => setEmail(e.target.value)} /><br />
            <input type="submit" value="ENVIAR" />
        </form>
        </>
    )
}