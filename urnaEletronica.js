function verificaUrnaAtual() {

    fetch('urnaEletronica.js')
        .then(response => response.text())
        .then(response => CryptoJS.SHA256(response).toString())
        .then(hashUrnaAtual => {
            
            fetch('hashValido')
                .then(response => response.text())
                .then(hashValido => {

                    if (hashUrnaAtual === hashValido) {
                        console.log('Urna verificada, código íntegro.')
                    } else {
                        console.log('URNA ADULTERADA! HASHES NÃO CONFEREM!')
                        console.log(`HASH DA URNA: ${hashUrnaAtual}`);
                        console.log(`HASH ESPERADO: ${hashValido}`);
                    }

                })
            
        });

}

function dataHoraAtual() {
    
    const dataHora = new Date();
    const dia = dataHora.getDate();
    const mes = dataHora.getMonth() + 1;
    const ano = dataHora.getFullYear();
    const hora = dataHora.getHours();
    const min = dataHora.getMinutes();
    const seg = dataHora.getSeconds();
    const ms = dataHora.getMilliseconds();

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg} ${ms}`;
}

function urnaEletronica() {

    // declaração de variáveis
    let voto;
    let votosCandidato1 = 0;
    let votosCandidato2 = 0;
    let votosCandidato3 = 0;
    let votosBrancos = 0;
    let votosNulos = 0;
    let totalVotos = 0;

    let nomeGanhador;
    let votosGanhador;
    let ganhador = true;

    let Bolsonaro;
    let Lula;
    let Ciro;

    let encerrarVotacao = '';
    let senhaMesario;
    let primeiraConfiguracao = true;
    let opcaoNome;

    let dataHoraInicial, dataHoraFinal;

    console.log('Início do programa');

    console.log('** CONFIGURAÇÃO DA URNA **');
    senhaMesario = parseInt(prompt('Defina a senha do mesário:'));


    // laço de votação
    dataHoraInicial = dataHoraAtual();

    do {

        console.clear();
        console.log(`[1] Bolsonaro: ${Bolsonaro}`);
        console.log(`[2] Lula: ${Lula}`);
        console.log(`[3] Ciro: ${Ciro}`);
        console.log(`[5] Voto em branco`);
        console.log(`[8] Voto nulo`);

        voto = parseInt(prompt('Digite sua opção de voto:'));

        totalVotos++;

        if (voto === 1) {
            votosCandidato1++;
        } else if (voto === 2) {
            votosCandidato2++;
        } else if (voto === 3) {
            votosCandidato3++;
        } else if (voto === 5) {
            votosBrancos++;
        } else if (voto === 8) {
            votosNulos++;
        } else if (voto === senhaMesario) {

            encerrarVotacao = prompt('Deseja REALMENTE encerrar a votação? Digite [S] para Sim ou [N] para Não').charAt(0).toUpperCase();

            if (encerrarVotacao !== 'S' && encerrarVotacao !== 'N') {
                alert('Opção inválida!');
            }

            totalVotos--;
        } else {
            return; // botão de emergência
        }

    } while (encerrarVotacao !== 'S');

    // apresenta os resultados
    console.clear();
    console.log('** BOLETIM DE URNA - RESULTADOS **');
    console.log('Total de votos: ' + totalVotos);

    console.log(`Total de votos do(a) candidato(a) ${Bolsonaro}: ${votosCandidato1} voto(s) (${(votosCandidato1 / totalVotos * 100).toFixed(2)}%)`);

    console.log(`Total de votos do(a) candidato(a) ${Lula}: ${votosCandidato2} voto(s) (${(votosCandidato2 / totalVotos * 100).toFixed(2)}%)`);

    console.log(`Total de votos do(a) candidato(a) ${Ciro}: ${votosCandidato3} voto(s) (${(votosCandidato3 / totalVotos * 100).toFixed(2)}%)`);

    console.log(`Total de votos brancos: ${votosBrancos} voto(s) (${(votosBrancos / totalVotos * 100).toFixed(2)}%)`);

    console.log(`Total de votos nulos: ${votosNulos} voto(s) (${(votosNulos / totalVotos * 100).toFixed(2)}%)`);

    // determina o ganhador
    if (votosCandidato1 > votosCandidato2 && votosCandidato1 > votosCandidato3) {
        nomeGanhador = Bolsonaro;
        votosGanhador = votosCandidato1 + votosBrancos;
    } else if (votosCandidato2 > votosCandidato1 && votosCandidato2 > votosCandidato3) {
        nomeGanhador = Lula;
        votosGanhador = votosCandidato2 + votosBrancos;
    } else if (votosCandidato3 > votosCandidato1 && votosCandidato3 > votosCandidato2) {
        nomeGanhador = Ciro;
        votosGanhador = votosCandidato3 + votosBrancos;
    } else {
        ganhador = false;
    }

    // apresenta o ganhador
    console.log('------');

    if (ganhador) {
        console.log('O ganhador nesta urna foi o candidato ' + nomeGanhador + ' com ' + votosGanhador + ' voto(s) absoluto(s) (' + (votosGanhador / totalVotos * 100).toFixed(2) + '%)');
    } else {
        console.log('Não houve ganhador nesta urna (empate entre dois ou mais candidatos).');
    }

    dataHoraFinal = dataHoraAtual();
    
    console.log(`Data/hora de início da votação: ${dataHoraInicial}`);
    console.log(`Data/hora de encerramento da votação: ${dataHoraFinal}`);
    
    verificaUrnaAtual();

    console.log('Fim do programa');

}