// Programa: Calculadora de Partidas Rankeadas

let resposta, idioma, lerTeclado = require("prompt-sync")(), nomeJogador, numeroVitorias, numeroDerrotas;

function isInteger(valor){
    return typeof valor === "number" && isFinite(valor) && Math.floor(valor) === valor;
}

do {
    console.log("EM QUE IDIOMA PRETENDE EXECUTAR O PROGRAMA? | WHAT IS THE LANGUAGE YOU WANT TO RUN THE PROGRAM?");
    console.log("\n===============================================================================================\n");
    console.log("PARA PORTUGUÊS PRESSIONE A TECLA '1' | FOR ENGLISH TYPE '2'");
    console.log("\n===========================================================\n");
    idioma = lerTeclado();

    if(idioma == 1){
        console.log("VOCÊ ESCOLHEU 'PORTUGUÊS'!");
        console.log("\n==========================\n");
        console.log("PROGRAMA: ---- CALCULADORA DE PARTIDAS RANKEADAS ----");
        console.log("\n=====================================================\n");
        console.log("QUAL É O NOME DO JOGADOR?");
        nomeJogador = String(lerTeclado());
        console.log("\n=========================\n");
        console.log("QUAL É O NÚMERO TOTAL DE VITÓRIAS PARA O JOGADOR " + nomeJogador.toUpperCase() + "?");
        numeroVitorias = Number(lerTeclado());
        console.log("\n===================================================================================\n");
        
        if(isInteger(numeroVitorias)){
            if(numeroVitorias >= 1000000){
                console.log("O NÚMERO DE VITÓRIAS NÃO PODEM SER IGUAIS OU SUPERIORES À 1000000!");
                console.log("\n==================================================================\n");
            }
        }else{
            console.log("O NÚMERO DIGITADO É INVÁLIDO!");
            console.log("\n=============================\n");
        }

        console.log("QUAL É O NÚMERO TOTAL DE DERROTAS PARA O JOGADOR " + nomeJogador.toUpperCase() + "?");
        numeroDerrotas = Number(lerTeclado());
        console.log("\n===================================================================================\n");

        if(isInteger(numeroDerrotas)){
            if(numeroDerrotas >= 1000000){
                console.log("O NÚMERO DE VITÓRIAS NÃO PODEM SER IGUAIS OU SUPERIORES À 1000000!");
                console.log("\n==================================================================\n");
            }
        }else{
            console.log("O NÚMERO DIGITADO É INVÁLIDO!");
            console.log("\n=============================\n");
        }

        calcularRanking(numeroVitorias, numeroDerrotas, idioma, nomeJogador);
        console.log("\n==============================================================================\n");
        console.log("DESEJA REPETIR? S/N");
        resposta = converterChar(lerTeclado(), idioma);
    }else
        if(idioma == 2){
            console.log("YOU CHOSE 'ENGLISH'!");
            console.log("\n====================\n");
            console.log("PROGRAM: ---- RANKED MATCHES CALCULATOR ----");
            console.log("\n============================================\n");
            console.log("WHAT IS THE PLAYER NAME?");
            nomeJogador = String(lerTeclado());
            console.log("\n========================\n");
            console.log("WHAT IS THE TOTAL NUMBER OF WINS FOR PLAYER " + nomeJogador.toUpperCase() + "?");
            numeroVitorias = Number(lerTeclado());
            console.log("\n==============================================================================\n");

            if(isInteger(numeroVitorias)){
                if(numeroVitorias >= 1000000){
                    console.log("THE NUMBER OF WINS CANNOT BE EQUAL TO OR GREATER THAN 1000000!");
                    console.log("\n==============================================================\n");
                }
            }else{
                console.log("THE NUMBER YOU TYPED IS NOT VALID!");
                console.log("\n==================================\n");
            }

            console.log("WHAT IS THE TOTAL NUMBER OF LOSSES FOR PLAYER " + nomeJogador.toUpperCase() + "?");
            numeroDerrotas = Number(lerTeclado());
            console.log("\n================================================================================\n");

            if(isInteger(numeroDerrotas)){
                if(numeroDerrotas >= 1000000){
                    console.log("THE NUMBER OF WINS CANNOT BE EQUAL TO OR GREATER THAN 1000000!");
                    console.log("\n==============================================================\n");
                }
            }else{
                console.log("THE NUMBER YOU TYPED IS NOT VALID!");
                console.log("\n==================================\n");
            }

            calcularRanking(numeroVitorias, numeroDerrotas, idioma, nomeJogador);
            console.log("\n==============================================================================\n");
            console.log("DO YOU WISH TO REPEAT IT? Y/N");
            resposta = converterChar(lerTeclado(), idioma);
        }else{
            console.log("IDIOMA NÃO ATRIBUÍDO! | NON-ASSIGNED LANGUAGE!");
        }
} while(resposta == 's');

function calcularRanking(vitorias, derrotas, lingua, jogador){
    let calculoDiferenca = vitorias - derrotas;
    jogador = jogador.toUpperCase();

    if(calculoDiferenca >= 11 && calculoDiferenca <= 20){
        if(lingua == 1){
            return console.log(`O JOGADOR **${jogador}** TEM UM SALDO DE **${calculoDiferenca}** VITÓRIAS E ESTÁ NO NÍVEL **BRONZE**`);
        }else{
            return console.log(`THE PLAYER **${jogador}** HAS **${calculoDiferenca}** WINS AND HE/SHE IS AT **BRONZE** LEVEL`);
        }
    }else
        if(calculoDiferenca >= 21 && calculoDiferenca <= 50){
            if(lingua == 1){
                return console.log(`O JOGADOR **${jogador}** TEM UM SALDO DE **${calculoDiferenca}** VITÓRIAS E ESTÁ NO NÍVEL **PRATA**`);
            }else{
                return console.log(`THE PLAYER **${jogador}** HAS **${calculoDiferenca}** WINS AND HE/SHE IS AT **SILVER** LEVEL`);
            }
        }else
            if(calculoDiferenca >= 51 && calculoDiferenca <= 80){
                if(lingua == 1){
                    return console.log(`O JOGADOR **${jogador}** TEM UM SALDO DE **${calculoDiferenca}** VITÓRIAS E ESTÁ NO NÍVEL **OURO**`);
                }else{
                    return console.log(`THE PLAYER **${jogador}** HAS **${calculoDiferenca}** WINS AND HE/SHE IS AT **GOLD** LEVEL`);
                }
            }else
                if(calculoDiferenca >= 81 && calculoDiferenca <= 90){
                    if(lingua == 1){
                        return console.log(`O JOGADOR **${jogador}** TEM UM SALDO DE **${calculoDiferenca}** VITÓRIAS E ESTÁ NO NÍVEL **DIAMANTE**`);
                    }else{
                        return console.log(`THE PLAYER **${jogador}** HAS **${calculoDiferenca}** WINS AND HE/SHE IS AT **DIAMOND** LEVEL`);
                    }
                }else
                    if(calculoDiferenca >= 91 && calculoDiferenca <= 100){
                        if(lingua == 1){
                            return console.log(`O JOGADOR **${jogador}** TEM UM SALDO DE **${calculoDiferenca}** VITÓRIAS E ESTÁ NO NÍVEL **LENDÁRIO**`);
                        }else{
                            return console.log(`THE PLAYER **${jogador}** HAS **${calculoDiferenca}** WINS AND HE/SHE IS AT **LEGENDARY** LEVEL`);
                        }
                    }else
                        if(calculoDiferenca >= 101){
                            if(lingua == 1){
                                return console.log(`O JOGADOR **${jogador}** TEM UM SALDO DE **${calculoDiferenca}** VITÓRIAS E ESTÁ NO NÍVEL **IMORTAL**`);
                            }else{
                                return console.log(`THE PLAYER **${jogador}** HAS **${calculoDiferenca}** WINS AND HE/SHE IS AT **IMMORTAL** LEVEL`);
                            }
                        }else{
                            if(lingua == 1){
                                return console.log(`O JOGADOR **${jogador}** TEM UM SALDO DE **${calculoDiferenca}** VITÓRIAS E ESTÁ NO NÍVEL **FERRO**`);
                            }else{
                                return console.log(`THE PLAYER **${jogador}** HAS **${calculoDiferenca}** WINS AND HE/SHE IS AT **IRON** LEVEL`);
                            }
                        }
}

function converterChar(letra, lingua){
    if(letra == 'Y' || letra == 'y' || letra == 'S' || letra == 's'){
        return 's';
    }else
        if(letra == 'N' || letra == 'n'){
            return 'n';
        }else{
            if(lingua == 1){
                console.log("OPÇÃO INVÁLIDA!");
            }else{
                console.log("NON-VALID OPTION");
            }

            return 'n';
        }
}