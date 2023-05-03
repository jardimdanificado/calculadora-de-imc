var globalDiv = document.createElement('div');
globalDiv.style.width = '100%';
globalDiv.style.height = '100vh';
globalDiv.style.backgroundColor = '#f2f2f2';
globalDiv.style.borderRadius = '10px';
globalDiv.style.display = 'flex';
globalDiv.style.justifyContent = 'center';
globalDiv.style.alignItems = 'center';
globalDiv.style.flexDirection = 'column';
var loginMenuDiv = document.createElement('div');
loginMenuDiv.style.width = (window.innerWidth - ((window.innerWidth / 100) * 50)) + 'px';
loginMenuDiv.style.height = (window.innerHeight - ((window.innerHeight / 100) * 60)) + 'px';
loginMenuDiv.style.backgroundColor = 'grey';
loginMenuDiv.style.borderRadius = '10px';
loginMenuDiv.style.display = 'flex';
loginMenuDiv.style.justifyContent = 'center';
loginMenuDiv.style.alignItems = 'center';
loginMenuDiv.style.flexDirection = 'column';
loginMenuDiv.style.marginTop = '2vh';
var nome = document.createElement('input');
nome.setAttribute('type', 'text');
nome.setAttribute('placeholder', 'nome');
nome.style.marginBottom = '1rem';
var idade = document.createElement('input');
idade.setAttribute('type', 'text');
idade.setAttribute('placeholder', 'idade');
var peso = document.createElement('input');
peso.setAttribute('type', 'text');
peso.setAttribute('placeholder', 'peso');
var altura = document.createElement('input');
altura.setAttribute('type', 'text');
altura.setAttribute('placeholder', 'altura');
var button = document.createElement('button');
button.innerHTML = 'calcular imc';
button.setAttribute('type', 'button');
button.setAttribute('name', 'myButton');
button.style.display = 'flex';
button.style.justifyContent = 'center';
button.style.alignItems = 'center';
var secondDiv = document.createElement('div');
var ball = document.createElement('span');
ball.style.display = 'flex';
ball.style.alignItems = 'center';
ball.style.justifyContent = 'center';
ball.style.width = '150px';
ball.style.height = '150px';
ball.style.borderRadius = '50%';
ball.style.backgroundColor = 'red';
ball.style.marginRight = '10px';
ball.style.fontSize = '26px';
ball.innerHTML = '0';
var firstRect = document.createElement('div');
firstRect.style.display = 'flex';
firstRect.style.alignItems = 'center';
firstRect.style.justifyContent = 'center';
firstRect.style.width = '250px';
firstRect.style.height = '50px';
firstRect.style.backgroundColor = 'gray';
firstRect.style.marginRight = '10px';
firstRect.style.fontSize = '26px';
firstRect.innerHTML = 'nome vai aparecer aqui';
var secondRect = document.createElement('div');
secondRect.style.display = 'flex';
secondRect.style.alignItems = 'center';
secondRect.style.justifyContent = 'center';
secondRect.style.width = '250px';
secondRect.style.height = '50px';
secondRect.style.backgroundColor = 'gray';
secondRect.style.fontSize = '26px';
secondRect.innerHTML = 'idade vai aparecer aqui';
secondDiv.appendChild(ball);
secondDiv.appendChild(firstRect);
secondDiv.appendChild(secondRect);
secondDiv.style.display = 'flex';
secondDiv.style.alignItems = 'center';
secondDiv.style.justifyContent = 'center';
secondDiv.style.marginTop = '50px';
secondDiv.appendChild(ball);
secondDiv.appendChild(firstRect);
secondDiv.appendChild(secondRect);
document.body.appendChild(secondDiv);
button.addEventListener('click', function() {
	var val = (peso.value) / ((altura.value) * (altura.value));
	console.log(altura.value)
	ball.innerHTML = val
	firstRect.innerHTML = nome.value
	secondRect.innerHTML = idade.value
	if (val < 18.5)
		ball.style.backgroundColor = 'yellow'
	else if (val < 24.99)
		ball.style.backgroundColor = 'green'
	else if (val < 29.99)
		ball.style.backgroundColor = 'orange'
	else if (val > 30)
		ball.style.backgroundColor = 'red'
});
loginMenuDiv.appendChild(nome);
loginMenuDiv.appendChild(idade);
loginMenuDiv.appendChild(peso);
loginMenuDiv.appendChild(altura);
loginMenuDiv.appendChild(button);
globalDiv.appendChild(loginMenuDiv);
secondDiv.style.width = '90%';
secondDiv.style.height = '200px';
secondDiv.style.backgroundColor = 'lightblue';
secondDiv.style.borderRadius = '0';
secondDiv.style.marginTop = '2vh';
globalDiv.appendChild(secondDiv);
document.body.appendChild(globalDiv);
