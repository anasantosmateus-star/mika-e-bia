let nomeJogador = "";
let pontos = 0;
let perguntaAtual = 0;

const perguntas = [
{
pergunta:"🚶 Onde o pedestre deve atravessar a rua?",
respostas:["No meio da rua","Na faixa de pedestres","Entre os carros"],
correta:0
},
{
pergunta:"🚦 O que significa a luz vermelha do semáforo?",
respostas:["Virar à direita","Acelerar","Parar"],
correta:0
},
{
pergunta:"🚗 Para que serve o cinto de segurança?",
respostas:["Enfeitar o carro","Protejer os ocupantes","Segurar objetos"],
correta:0
},
{
pergunta:"🚲 O ciclista deve:",
respostas:["Ignoar o semáfaro","Andar na contramão","Respeitar as placas"],
correta:0
},
{
pergunta:"🛑 Ao encontrar uma faixa de pedestres com pessoas esperando:",
respostas:["Acelerar","parar o veículo","Buzinar"],
correta:0
},
{
pergunta:"📱 O motorista pode usar o celular enquanto dirige?",
respostas:["Sim","Não","Somente no semáforo"],
correta:0
},
{
pergunta:"🌧️ Em dias de chuva o motorista deve:",
respostas:["Reduzir a velocidade","Acelerar","Dirigir sem faróis"],
correta:0
},
{
pergunta:"🚸 O que indica a placa de área escolar?",
respostas:["Estacionamento","reduzir a velociade e ter atenção","Hospital"],
correta:0
},
{
pergunta:"🏍️ O capacete é obrigatório para:",
respostas:["Motoristas","Motociclitas","Pedestres"],
correta:0
},
{
pergunta:"🚦 A luz amarela do semáforo significa:",
respostas:["Atenção, prepare-se para parar","Pode acelerar","Pode estacionar"],
correta:0
}
];

function iniciarJogo(){

nomeJogador =
document.getElementById("nome").value.trim();

if(nomeJogador==""){

alert("Digite seu nome!");

return;

}

document.getElementById("inicio").style.display="none";
document.getElementById("quiz").style.display="block";

mostrarPergunta();

}

function mostrarPergunta(){

let p = perguntas[perguntaAtual];

document.getElementById("pergunta").innerHTML = p.pergunta;

let area = document.getElementById("respostas");

area.innerHTML = "";

document.getElementById("mensagem").innerHTML="";

p.respostas.forEach((texto,indice)=>{

let botao = document.createElement("button");

botao.innerHTML = texto;

botao.onclick = function(){

verificarResposta(indice);

};

area.appendChild(botao);

});

}
function verificarResposta(indice){

let pergunta = perguntas[perguntaAtual];

if(indice === pergunta.correta){

pontos += 10;

document.getElementById("mensagem").innerHTML =
"✅ Correto!";

document.getElementById("mensagem").style.color =
"green";

}else{

document.getElementById("mensagem").innerHTML =
"❌ Resposta incorreta!";

document.getElementById("mensagem").style.color =
"red";

}

document.getElementById("pontos").innerHTML =
"Pontos: " + pontos;

// Atualiza barra de progresso
let porcentagem =
((perguntaAtual + 1) / perguntas.length) * 100;

document.getElementById("progresso").style.width =
porcentagem + "%";

// Vai para a próxima pergunta após 1 segundo
setTimeout(function(){

perguntaAtual++;

if(perguntaAtual < perguntas.length){

mostrarPergunta();

}else{

mostrarCertificado();

}

},1000);

}

function mostrarCertificado(){

document.getElementById("quiz").style.display =
"none";

document.getElementById("certificado").style.display =
"block";

document.getElementById("nomeFinal").innerHTML =
nomeJogador;

document.getElementById("pontuacaoFinal").innerHTML =
"Pontuação Final: " + pontos + " pontos";

let medalha = "";

if(pontos >= 90){

medalha = "🥇 Medalha de Ouro - Herói do Trânsito";

}else if(pontos >= 50){

medalha = "🥈 Medalha de Prata - Motorista Consciente";

}else{

medalha = "🥉 Medalha de Bronze - Aprendiz do Trânsito";

}

document.getElementById("medalha").innerHTML =
medalha;

}
