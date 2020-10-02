import React, { useState } from 'react'
import { Link,useHistory } from 'react-router-dom';
import api from '../../services/api'
import "./styles.css"

export default function Subscribe(){
    const history = useHistory();
    const [nome,Setnome] = useState("");
    const [idade,Setidade] = useState("");
    const [empresa,Setempresa] = useState("");
    const [funcao,Setfuncao] = useState("");


    async function handleRegister(e){
        e.preventDefault();
        const data = {
            nome,
            idade,
            empresa,
            funcao
        }

        try{
            const response = await api.post("send",data);
            console.log("enviou");
            alert("Seu cadastro foi concluído");
            history.push("/");
        }catch(error){
            alert("Falha no envio");
        }
        
        console.log(data);
    }

    return(
        <div className="container-form">
            <form onSubmit={handleRegister}>
                <h1>Subscribe</h1>
                <div className="profile"> 
                    <div className="profile-itens">
                        <h4>Nome:</h4>
                        <input value={nome}
                        onChange={ e => Setnome(e.target.value)}
                        ></input>
                    </div>
                    <div className="profile-itens">
                        <h4>Idade:</h4>
                        <input value={idade}
                        onChange={ e => Setidade(e.target.value)}
                        ></input>
                    </div>
                    <div className="profile-itens">
                        <h4>Empresa:</h4>
                        <input value={empresa}
                        onChange={ e => Setempresa(e.target.value)}
                        ></input>
                    </div>

                    <div className="profile-itens">
                        <h4>Função:</h4>
                        <input value={funcao}
                        onChange={ e => Setfuncao(e.target.value)}
                        ></input>
                    </div>
                    <div className="form-footer">
                        <button type='submit' onSubmit={handleRegister}>Enviar</button>  
                        <Link to="/" className="btn">Voltar</Link>        
                    </div>  
                </div>
            </form>
        </div>
    );
}
