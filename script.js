function calcula(){
    const P = document.getElementById('porcentagem').value /*periodicidade*/
    const V = document.getElementById('valor').value /* valor */
    let R = V*(1+P);

    document.getElementById('resul').innerText = R;

}