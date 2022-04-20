var btn_comprar = document.getElementById('comprarI')
var btn_dir = document.getElementById('direcionarI')

btn_comprar.addEventListener('click', function(){
    alert("Dados da Conta: Conta:XXXXXX, Agência XXXX")
})

btn_dir.addEventListener('click', function(){
    alert('Necessário fazer Login!')
    window.location.href = "../paginas/login.html";
})