const form = document.getElementById('form')

form.addEventListener('submit', function(event){
    event.preventDefault()

    const peso = document.getElementById('weight').value
    const altura = document.getElementById('height').value

    const imc = (peso/(altura * altura)).toFixed(2)

    const valor = document.getElementById('value')
    let descricao = ""

    value.classList.add('attention')
    document.getElementById('infos').classList.remove('hidden')

    if (imc < 18.5){
        descricao = "Cuidado! Você está abaixo do peso! "
    }
    else if (imc >= 18.5 && imc <= 25){
        descricao = "Você está no peso ideal!"
        value.classList.remove('attention')
        value.classList.add('normal')
    } 
    else if (imc >25.0 && imc <= 30){
        descricao = "Cuidado! Você está acima do peso!"
    } 
    else if (imc > 30 && imc <= 35){
        descricao = "Cuidado! Você está com obesidade moderada!"
    } 
    else if (imc > 35 && imc <= 40){
        descricao = "Cuidado! Você está com obesidade severa!"
    }
    else{
        descricao = "Cuidado! Você está com obesidade morbida!"

    } 
    value.textContent = imc.replace('.', ",")
    document.getElementById('description').textContent = descricao
})