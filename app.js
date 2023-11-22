
// Definindo variáveis para o nome e a quantidade de experiência (XP) do herói

//Variaveis
const nomeHeroi = "Mancudo" 
const xpHeroi = 1001

let nivelHeroi;

//Estrutura de Decisão

if(xpHeroi <= 1000){
     nivelHeroi = "Ferro";
}else if(xpHeroi >= 1001 && xpHeroi <= 2000){
    nivelHeroi = "Bronze";
}else if(xpHeroi >= 2001 && xpHeroi <= 5000){
    nivelHeroi = "Prata"   
}else if(xpHeroi >= 6001 && xpHeroi <= 7000){
    nivelHeroi = "Ouro"
}else if (xpHeroi >= 7001 && xpHeroi <= 8000){
    nivelHeroi = "Platina"
}else if(xpHeroi >= 8001 && xpHeroi <= 9000){
    nivelHeroi = "Ascendente"
}else if(xpHeroi >= 9001 && xpHeroi <= 1000){
    nivelHeroi = "Imortal"
}else if(xpHeroi >= 10001){
    nivelHeroi = "Radiante"
}

// Exibindo a mensagem com o nível do herói, saída.
console.log(`O Herói de nome ${nomeHeroi} está no nível de ${nivelHeroi}`);

