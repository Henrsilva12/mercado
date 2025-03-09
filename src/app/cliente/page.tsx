"use client";

import React, { useState } from "react";
import styles from './styles.module.css';
import Input from "../../componentes/inputs";
import Navbar from "../../componentes/header";

export default function Cliente() {
    const [name, setName] = useState('');
    const [endereco, setEndereco] = useState('');
    const [cidade, setCidade] = useState('');
    const [telefone, setTelefone] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const response = await fetch('/api/grupo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, endereco, cidade, telefone }),
        });

        if (response.ok) {
            // Limpa os campos após o sucesso
            setName('');
            setEndereco('');
            setCidade('');
            setTelefone('');
            alert('Cliente cadastrado com sucesso!');
        } else {
            console.error('Erro ao cadastrar cliente');
        }
    };

    return (
        <div className={styles.container}>
            <Navbar />
            <div className={styles.header}>
                <p className={styles.title}>Cadastro de Clientes</p>
            </div>

            <form onSubmit={handleSubmit}>
                <div className={styles.formularios}>
                    <div className={styles.name}>
                        <p>Nome</p>
                        <Input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Digite seu nome"
                            required
                        />
                    </div>

                    <div className={styles.end}>
                        <p>Endereço</p>
                        <Input
                            type="text"
                            value={endereco}
                            onChange={(e) => setEndereco(e.target.value)}
                            placeholder="Digite seu endereço"
                            required
                        />
                    </div>

                    <div className={styles.cidade}>
                        <p>Cidade</p>
                        <Input
                            type="text"
                            value={cidade}
                            onChange={(e) => setCidade(e.target.value)}
                            placeholder="Digite sua cidade"
                            required
                        />
                    </div>

                    <div className={styles.telefone}>
                        <p>Telefone</p>
                        <Input
                            type="text"
                            value={telefone}
                            onChange={(e) => setTelefone(e.target.value)}
                            placeholder="Digite seu telefone"
                            required
                            format="phone"
                        />
                    </div>

                    <button type="submit" className={styles.button}>Cadastrar</button>
                </div>
            </form>
        </div>
    );
}