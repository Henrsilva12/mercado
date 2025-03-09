'use client';

import styles from './styles.module.css'
import Navbar from "../../componentes/header";
import { useEffect, useState } from "react";


export default function Grupo(){
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch ('/api/cliente');
            const data = await response.json();
            setUsers(data);
        }
        fetchData();
    }, []);

    return (

        <div className={styles.container}>
            <div className={styles.Navbar}>
                < Navbar/>
            </div>
            <div className={styles.header}>
                <p className={styles.title}>Dados Recebidos</p>
            </div>
        
        <div className={styles.information}>
            {users.map((user) => (
                <div key={user.id}>
                    <p>Nome do cliente: {user.name} </p>
                    <p>Endereço do cliente: {user.endereco} </p>
                    <p>Cidade do cliente: {user.cidade} </p>
                    <p>Telefone do cliente {user.telefone} </p>
                </div>
            ))}
        </div>

    </div>
    )
}