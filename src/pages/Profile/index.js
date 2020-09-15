import React from 'react'
import { Link } from 'react-router-dom'
import "./styles.css"

export default function Profile(){
    return(
        <div className="container-profile">
            <h1>Profile</h1>
            <div className="profile"> 
                <div className="profile-itens">
                    <h4>Nome:</h4>
                    <span>Aleatorio dos santos</span>
                </div>

                <div className="profile-itens">
                    <h4>Idade:</h4>
                    <span>23</span>
                </div>
                <div className="profile-itens">
                    <h4>Empresa:</h4>
                    <span>Sem</span>
                </div>

                <div className="profile-itens">
                    <h4>Função:</h4>
                    <span>Sem</span>
                </div>

                <Link to="/" className="btn">Home</Link>
            </div>
        </div>
    );
}