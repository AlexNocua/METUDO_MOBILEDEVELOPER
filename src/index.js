const { read } = require("fs")

// Precesado da consola
const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
})


const variavels = {
    "minvida": 0,
    "maxdistancia": 100,
    "distanciacorte": 5,
    "afetacaoDanoDistancia ": 10
}

const tagogando = false

// Criacao de personagems
class Personagem {
    constructor(nome, vida, poder, velocidade, manobrabilidade, distancia) {
        this.nome = nome
        this.vida = vida
        this.poder = poder
        this.velocidade = velocidade
        this.manobrabilidade = manobrabilidade
        this.distancia = distancia
    }

    // apresentarPersonagem(){
    //     console.log(`O personagem registrado tem o nome de ${this.nome}`)
    // }
}
let rodovia = ["CONFRONTO", 'RETA', 'CRUVA']

// funcao para simular a jogada de dados
function jogadaDados() {
    return Math.floor(Math.random() * 6 + 1)
}
function jodaRuta() {
    // armacenar a variavle random
    let random = Math.random()
    let item = Math.floor(random * rodovia.length)
    return rodovia[item]
}

//List Personagems
const listPersonagem = [
    new Personagem('Mario', 100, 4, 6, 6, 0),
    new Personagem("Luigi", 90, 6, 6, 7, 0),
    new Personagem("Bowser", 150, 9, 8, 3, 0),
    new Personagem("Peach", 80, 5, 4, 8, 0)
]

const copyPersonagems = listPersonagem.map(p => new Personagem(p.nome, p.vida, p.poder, p.velocidade))


//Logica de ataque a jogadores
function ataqueJogadores(personagem) {
    while (true) {
        let random = Math.random()
        let item = Math.floor(random * listPersonagem.length)
        let jogadorAfetado = listPersonagem[item]
        if (jogadorAfetado != personagem) {
            console.log(`O jogador afetado for ${jogadorAfetado.nome}`)
            return listPersonagem[item]
        }

    }

}

// logica de percorida de jogadores
function calculoDistnaciaJogador(valor, personagem) {
    for (i = 0; i < listPersonagem.length; i++) {
        if (listPersonagem[i] === personagem) {
            console.log(valor)
            // indexPersoonagem = copyPersonagems.findIndex(p => p.name === personagem.name) //Procurar index da comparaiva dos personagems 
            let dataPersonagem = copyPersonagems.find(p => p.name === personagem.name)
            console.log("data:---", dataPersonagem)
            listPersonagem[i].distancia += valor + dataPersonagem.velocidade
            console.log(`Seu personagem ${listPersonagem[i].nome} sumou uma distancia de:`, listPersonagem[i].distancia, `\nDistancia Atual de ${personagem.distancia} é: ${personagem.nome}`)
        } else {
            console.log(`A distancia atual do jogador ${listPersonagem[i].nome} é: `, listPersonagem[i].distancia += valor)
        }
        if (listPersonagem[i].distancia >= variavels.maxdistancia) {
            console.log(`O jogador ${listPersonagem[i].nome} Ganhou!!!!!!!!!!!!!!!`)
            eliminarJogador(listPersonagem.indexOf(personagem))
        }
    }
}


// logica de eliminar jogador 
function eliminarJogador(index) {
    if (index !== -1) {
        listPersonagem.slice(index, 1)
    }
}


function logicaJogo(num) {
    console.log(`O personagem que voce escolheu é: ${listPersonagem[num - 1].nome}\n Bora jogar!!!`)
    const personagem = listPersonagem[num - 1]
    listPersonagem.pop(personagem)

    function rodada() {
        readline.question("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\nNova jogada\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\nPara continuar pulce a tecla 'X'", (tecla) => {
            if (tecla == "x") {
                let ruta = jodaRuta()
                console.log(`A secao do jogo e ${ruta}`)
                if (ruta === "CONFRONTO") {

                    //logica da vida dos personagems
                    let valor = jogadaDados()
                    let jogadorAfetado = ataqueJogadores(personagem)
                    jogadorAfetado.vida -= personagem.poder + valor
                    console.log(`A vida do jogador afetado é ${jogadorAfetado.vida}`)
                    console.log(`O dano que voce fez é: ${personagem.poder + valor}`)
                    if (jogadorAfetado.vida <= 0) {

                        console.log("O jogador ", jogadorAfetado.nome, " morreu.")
                        //Olhar de novo a logica de eliminar jogador
                        eliminarJogador(listPersonagem.indexOf(personagem))
                    }

                } else if (ruta === "RETA") {
                    let valor = jogadaDados()
                    console.log(personagem)
                    calculoDistnaciaJogador(valor, personagem)
                    // console.log("A distancia do jogador que recorreu é ", personagem.distancia )
                } else {

                    let valor = jogadaDados()
                }
                rodada()
            } else {
                readline.close()
            }



        })
    }
    rodada()
}



function jogar() {

    readline.question("Por favor escolha um personagem:\n1 - Mario\n2 - Luigi\n3 - Bowser\n4 - Peach\n0 - Sair\nDigite o número correspondente:", (escolha) => {
        if (!tagogando) {
            switch (escolha) {
                case "1":

                    logicaJogo(escolha)
                    break;
                case "2":
                    logicaJogo(escolha)
                    break;
                case "3":

                    logicaJogo(escolha)

                    break;
                case "4":

                    logicaJogo(escolha)
                    break;
                case "0":
                    console.log("Muito obrigado por jogar.")
                    readline.close()
                    break;
            }
        }
        else {
            readline.close()
        }
    })


}


jogar()


// o Loop ja ta em funcionamento