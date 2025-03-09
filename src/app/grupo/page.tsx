'use client';

import { useSearchParams } from "next/navigation";
import styles from './styles.module.css'
import Navbar from "../../componentes/header";


export default function Grupo(){
    
    const dados = useSearchParams(); //basca os dados do navegador
    const nome = dados.get("nome");
    const endereco = dados.get("endereco");
    const cidade = dados.get("cidade");
    const telefone = dados.get("telefone");

    return (

        <div className={styles.container}>
            <div className={styles.Navbar}>
                < Navbar/>
            </div>
            <div className={styles.header}>
                <p className={styles.title}>Dados Recebidos</p>
            </div>
        
        <div className={styles.information}>
            <p>Nome do cliente: {nome} </p>
            <p>Endereço do cliente: {endereco} </p>
            <p>Cidade do cliente: {cidade} </p>
            <p>Telefone do cliente {telefone} </p>
        </div>

        </div>
    )
}