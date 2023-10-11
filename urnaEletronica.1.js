function urnaEletronica() {
    // Aqui vai todo o código do programa

    console.log('Iniciando o programa');

    let totalVotosCandidato1 = 0;
    let totalVotosCandidato2 = 0;
    let totalVotosCandidato3 = 0;
    let totalVotosBrancos = 0;
    let totalVotosNulo = 0;

    let voto;

    do {

        // Instruções
        console.log('| 1 | Camdidato 1');
        console.log('| 2 | Camdidato 2');
        console.log('| 3 | Camdidato 3');
        console.log('| 5 | Branco');
        console.log('| 8 | Nulo');
        console.log('| 0 | Encerrar a votação');

        voto = parseInt(prompt('Digite sua opção de voto:'));

    } while (voto !== 0);

    
}
