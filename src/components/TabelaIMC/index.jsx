import styles from "./TabelaIMC.module.css";

export default () => {
    return (
        <>
            <h2>Tabela de IMC</h2>
            <p className={styles.p}>A tabela a seguir indica a classificação dos valores de IMC, de acordo com a Organização Mundial da Saúde:</p>
            <table>
                <thead>
                    <tr>
                        <th>IMC (kg/m²)</th>
                        <th>Classificação</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Menor que 18,5</td>
                        <td>Magreza</td>
                    </tr>
                    <tr>
                        <td>18,5 a 24,9</td>
                        <td>Peso normal</td>
                    </tr>
                    <tr>
                        <td>25 a 29,9</td>
                        <td>Sobrepeso</td>
                    </tr>
                    <tr>
                        <td>30 a 34,9</td>
                        <td>Obesidade grau I</td>
                    </tr>
                    <tr>
                        <td>35 a 40</td>
                        <td>Obesidade grau II</td>
                    </tr>
                    <tr>
                        <td>Maior que 40</td>
                        <td>Obesidade grau III</td>
                    </tr>
                </tbody>
            </table>
            <a href="https://www.tuasaude.com/imc/" target="_blank">Fonte.</a>
        </>

    )
}