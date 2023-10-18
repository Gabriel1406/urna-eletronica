function urnaEletronica() {
    // Aqui vai todo o código do programa

    console.log('Iniciando o programa');

    let totalVotosCandidato1 = 0;
    let totalVotosCandidato2 = 0;
    let totalVotosCandidato3 = 0;
    let totalVotosBrancos = 0;
    let totalVotosNulo = 0;

    let voto = 0;
    let confirmacao = '';

    do {

        // Instruções
        console.log('| 1 | Camdidato 1');
        console.log('| 2 | Camdidato 2');
        console.log('| 3 | Camdidato 3');
        console.log('| 5 | Branco');
        console.log('| 8 | Nulo');
        console.log('| 0 | Encerrar a votação');

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
        } else if (voto == 0) {
            confirmacao = prompt('Você tem certeza? Digite S ou N:');

        } else {
            return;
        }

    } while (confirmacao !== 'S');




    console.log("Total de votos do Bolsonaro: " + totalVotosCandidato1)
    console.log("Total de votos do Lula: " + totalVotosCandidato2)
    console.log("Total de votos do Ciro Gomes: " + totalVotosCandidato3)
    console.log("Total de votos brancos: " + totalVotosBrancos)
    console.log("Total de votos nulos: " + totalVotosNulo)



}