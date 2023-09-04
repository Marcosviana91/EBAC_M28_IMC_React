export default ({peso=1, altura=1}) => {
    function resultado () {
        if ((peso / (altura * altura)) < 18.5) {
            return "magro";
        } else if ((peso / (altura * altura)) < 24.9) {
            return "normal";
        } else if ((peso / (altura * altura)) < 29.9) {
            return "com sobrepeso";
        } else if ((peso / (altura * altura)) < 34.9) {
            return "com obesidade grau I";
        } else if ((peso / (altura * altura)) < 40) {
            return "com obesidade grau II";
        } else return "com obesidade grau III";
    } 
    return (
        <>
            <h2>Resultado:</h2>
            <p>Pesando <b>{peso}</b>kg e com <b>{altura}</b>m de altura. Você está {resultado()}.</p>
        </>
    )
}