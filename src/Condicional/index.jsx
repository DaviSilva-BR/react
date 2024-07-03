import { useState } from "react"
export default function Condicional(){

    const [email, setEmail] = useState();
    const [userEmail,  setUserEmail] = useState();
    function enviarEmail(e){
        e.preventDefault();
        setUserEmail(email);
    }

    function limparEmail(){
        setUserEmail('');
    }

    return (
        <>
        <h2>Cadastre email</h2>
        <form >
        <input type="text" name="email"  onChange={(e) => setEmail(e.target.value)} />
        <input type="submit" onClick={enviarEmail}  value="Enviar" />
        {userEmail && (
            <div>
                <p>email:{userEmail}</p>
                <button onClick={limparEmail}>Limpar email</button>
            </div>
        )}
        </form>
        </>
    )
}