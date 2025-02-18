import React from "react";

import styles from './styles.module.css'

export default function Cliente() {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <p className={styles.title}>Página da Venda</p>
            </div>
    
            <form action="./grupo" method="get">
                <div className={styles.formularios}>
                    <div className={styles.name}>
                    <p>Nome</p>
                    <input type="text" name="nome" placeholder="Digite seu nome" id="nome"/>
                    </div>

                    <div className={styles.end}>
                    <p>Endereço</p>
                    <input type="text" name="endereco" placeholder="Digite seu endereço" id="endereco" />
                    </div>

                    <div className={styles.data}>
                    <p>Data da venda</p>
                    <input type="date" name="data" id="data" />
                    </div>

                    <div className={styles.telefone}>
                    <p>Telefone</p>
                    <input type="number" name="telefone" placeholder="Digite seu telefone" id="tel" />
                    </div>

                    <div className={styles.total}>
                    <p>Total</p>
                    <input type="number" name="total" placeholder="Digite o total da compra" id="total" />
                    </div>

                    <button type="submit" className={styles.button}>Enviar</button>

                </div>
            </form>
            </div>
    )
}

