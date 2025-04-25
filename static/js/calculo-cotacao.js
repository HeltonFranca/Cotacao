function calcularCotacao() {
  if (!tipoVeiculo || !valorVeiculo) {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  const valor = parseFloat(valorVeiculo);
  const tabela = tabelaPrecos[tipoVeiculo];
  
  if (!tabela) return;

  let faixa = tabela.faixasValor.find(f => valor >= f.min && valor <= f.max);
  
  if (!faixa) {
    faixa = tabela.faixasValor[tabela.faixasValor.length - 1];
  }

  planosDisponiveis = getSubtipos(tipoVeiculo).filter(p => faixa[p] !== null);
  
  if (planosDisponiveis.length > 0) {
    if (!planoSelecionado || !planosDisponiveis.includes(planoSelecionado)) {
      planoSelecionado = planosDisponiveis[0];
    }
    
    let valorPlano = faixa[planoSelecionado];

    let valorAdicional = 0;
    
    if (tipoVeiculo === 'SUV/Caminhonete' && valor > 100000) {
      const incrementos = Math.floor((valor - 100000) / 5000) + 1;
      valorAdicional = Math.min(incrementos * 18, 10 * 18);
    }

    cotacao = {
      valorBase: valorPlano + valorAdicional,
      coberturas: tabela.coberturas[planoSelecionado],
      valorAdicional: valorAdicional
    };
    valorTotal = valorPlano + valorAdicional;
    
    exibirResultado();
  } else {
    alert("Não há planos disponíveis para este valor de veículo");
  }
}


function adicionarEventoPlano() {
const planosRadio = document.querySelectorAll('input[name="plano"]');
planosRadio.forEach(radio => {
  radio.addEventListener('change', function() {
    planoSelecionado = this.value;
    calcularCotacao();
  });
});
}

document.addEventListener('DOMContentLoaded', adicionarEventoPlano);
