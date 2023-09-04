import './main.css'

export default ({ alteraPeso, alteraAltura, calcular }) => {
    return (
        <>
            <h2>Cálculo do IMC</h2>
            <form onSubmit={calcular}>
                <div>
                    <div>
                        <label>Peso (Kg)</label>
                        <input type="number" min={0} step={0.1} required placeholder="ex. 65" onChange={alteraPeso} />
                    </div>
                    <div>
                        <label>Altura (m)</label>
                        <input type="number" min={0} step={0.01} placeholder="ex. 1.74" onChange={alteraAltura} />
                    </div>
                </div>
            </form>
        </>
    )
}