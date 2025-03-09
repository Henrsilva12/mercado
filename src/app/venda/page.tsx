"use client";

import React, { useState } from "react";
import styles from './styles.module.css'
import Navbar from "../../componentes/header";

export default function Cliente() {
    const [nome, setNome] = useState('');
    /*const [endereco, setEndereco] = useState('');
    const [data, setData] = useState('');
    const [telefone, setTelefone] = useState('');*/
    const [quantidade, setQuantidade] = useState('');
    const [total, setTotal] = useState('');
    
    const handleSubmit = async (event) => {
        event.preventDefault();
    
    const response = await fetch('/api/grupo', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nome, /*endereco, data, telefone,*/ quantidade, total }),
    });

    if (response.ok) {
        // Limpa os campos após o sucesso
        setNome('');
        /*setEndereco('');
        setData('');
        setTelefone('');*/
        setQuantidade('');
        setTotal('');
        alert('Produto cadastrada com sucesso!');
    } else {
        console.error('Erro ao cadastrar produto');
    }
    };
     
    return (
        <div className={styles.container}>
            < Navbar/>
            <div className={styles.header}>
                <p className={styles.title}>Produtos</p>
            </div>
    
            <form onSubmit={handleSubmit}>
                <div className={styles.formularios}>
                    <div className={styles.name}>
                        <p>Nome do produto</p>
                        <input
                            type="text"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            placeholder="Digite o nome do produto"
                            required
                        />
                </div>
            {/*
                <div className={styles.end}>
                    <p>Endereço</p>
                    <input
                        type="text"
                        value={endereco}
                        onChange={(e) => setEndereco(e.target.value)}
                        placeholder="Digite seu endereço"
                        required
                    />
                </div>

                <div className={styles.data}>
                    <p>Data</p>
                    <input
                        type="date"
                        value={data}
                        onChange={(e) => setData(e.target.value)}
                        placeholder="Digite a data"
                        required
                    />
                </div>

                <div className={styles.telefone}>
                    <p>Telefone</p>
                    <input
                        type="text"
                        value={telefone}
                        onChange={(e) => setTelefone(e.target.value)}
                        placeholder="Digite seu telefone"
                        required
                    />
                */}
                    <div className={styles.quantidade}>
                        <p>Quantidade</p>
                        <input
                            type="number"
                            value={quantidade}
                            onChange={(e) => setQuantidade(e.target.value)}
                            placeholder="Digite a quantidade do produto"
                            required
                        />
                    </div>
        
                    <div className={styles.total}>
                        <p>Total</p>
                        <input
                            type="number"
                            value={total}
                            onChange={(e) => setTotal(e.target.value)}
                            placeholder="Digite o total"
                            required
                        />
                    </div>
                <button type="submit" className={styles.button}>Cadastrar</button>
            </div>
        </form>
    </div>

    )
}

