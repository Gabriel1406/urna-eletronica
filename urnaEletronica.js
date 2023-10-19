function urnaEletronica() {
    // Aqui vai todo o código do programa

    console.log('Iniciando o programa');

    let totalVotosCandidato1 = 0;
    let totalVotosCandidato2 = 0;
    let totalVotosCandidato3 = 0;
    let totalVotosBrancos = 0;
    let totalVotosNulo = 0;
    let totalVotos = 0;

    let voto = 141206;
    let confirmacao = 'N';
    let votosCandidato1 = 0;
    let votosCandidato2 = 0;
    let votosCandidato3 = 0;
    let votosBrancos = 0;
    let votosNulos = 0;
    let totalDeVotos = 0;
    let nomeGanhador;
    let votosGanhador;
    let ganhador = true;

    do {

        // Instruções
        console.log('| 1 | Camdidato 1');
        console.log('| 2 | Camdidato 2');
        console.log('| 3 | Camdidato 3');
        console.log('| 5 | Branco');
        console.log('| 8 | Nulo');

        voto = parseInt(prompt('Digite sua opção de voto:'));



        if (voto == 1) {
            totalVotosCandidato1++;
        } else if (voto == 2) {
            totalVotosCandidato2++;
        } else if (voto == 3) {
            totalVotosCandidato3++;
        } else if (voto == 5) {
            totalVotosBrancos++;
        } else if (voto == 8) {
            totalVotosNulo++;
        } else if (voto == 141206) {
            confirmacao = prompt('Você tem certeza? Digite S ou N:');

        } else {
            return;
        }

    } while (confirmacao !== 'S');


    console.clear();
    console.log('** BOLETIM DE URNA - RESULTADOS **');
    console.log('Total de votos: ' + totalVotos);
    console.log('Total de votos do candidato 1: ' + totalVotosCandidato1 + ' voto(s) (' + (totalVotosCandidato1 / totalVotos * 100) + '%)');
    console.log('Total de votos do candidato 2: ' + totalVotosCandidato2 + ' voto(s) (' + (totalVotosCandidato2 / totalVotos * 100) + '%)');
    console.log('Total de votos do candidato 3: ' + totalVotosCandidato3 + ' voto(s) (' + (totalVotosCandidato3 / totalVotos * 100) + '%)');
    console.log('Total de votos brancos: ' + totalVotosBrancos+ ' voto(s) (' + (totalVotosBrancos/ totalVotos * 100) + '%)');
    console.log('Total de votos nulos: ' + totalVotosNulo + ' voto(s) (' + (totalVotosNulo / totalVotos * 100) + '%)');

    // determina o ganhador
    if (totalVotosCandidato1 > totalVotosCandidato2 && totalVotosCandidato1 > totalVotosCandidato3) {
        nomeGanhador = 'Candidato 1';
        votosGanhador = totalVotosCandidato1 + totalVotosBrancos;
    } else if (totalVotosCandidato2 > totalVotosCandidato1 && totalVotosCandidato2 > totalVotosCandidato3) {
        nomeGanhador = 'Candidato 2';
        votosGanhador = totalVotosCandidato2 + totalVotosBrancos;
    } else if (totalVotosCandidato3 > totalVotosCandidato1 && totalVotosCandidato3 > totalVotosCandidato2) {
        nomeGanhador = 'Candidato 3';
        votosGanhador = totalVotosCandidato3 + totalVotosBrancos;
    } else {
        ganhador = false;
    }

    // apresenta o ganhador
    console.log('------');

    if (ganhador) {
        console.log('O ganhador nesta urna foi o candidato ' + nomeGanhador + ' com ' + votosGanhador + ' voto(s) absoluto(s) (' + (votosGanhador / totalVotos * 100) + '%)');
    } else {
        console.log('Não houve ganhador nesta urna (empate entre dois ou mais candidatos).');
    }

}
