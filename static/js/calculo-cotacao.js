function calcularCotacao() {
  if (!tipoVeiculo || !valorVeiculo) {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  const valor = parseFloat(valorVeiculo);
  const tabela = tabelaPrecos[tipoVeiculo];
  const regionalSelect = document.getElementById('regional');
  const regionalSelecionada = regionalSelect.value;
  
  if (!tabela) return;

  // Encontrar a faixa de valor correspondente
  const faixa = tabela.faixasValor.find(f => valor >= f.min && valor <= f.max);
  
  if (!faixa) {
    alert("Valor do veículo fora das faixas disponíveis");
    return;
  }

  // Determinar planos disponíveis para esta faixa
  planosDisponiveis = getSubtipos(tipoVeiculo).filter(p => faixa[p] !== null);
  
  if (planosDisponiveis.length > 0) {
    // Se não há plano selecionado, seleciona o primeiro disponível
    if (!planoSelecionado || !planosDisponiveis.includes(planoSelecionado)) {
      planoSelecionado = planosDisponiveis[0];
    }
    
    // Obtém o valor do plano selecionado
    let valorPlano = faixa[planoSelecionado];

    // Aplicar desconto regional para João Pessoa e Alagoas
    const regionaisComDesconto = ['João Pessoa', 'Alagoas'];
    let descontoAplicado = false;
    
    if (regionaisComDesconto.includes(regionalSelecionada)) {
      const descontoOriginal = valorPlano;
      valorPlano *= 0.9; // 10% de desconto
      descontoAplicado = true;
      
      console.log(`Desconto regional aplicado para ${regionalSelecionada}`);
      console.log(`Plano: ${planoSelecionado}`);
      console.log(`Valor original: R$ ${descontoOriginal.toFixed(2)}`);
      console.log(`Valor com desconto: R$ ${valorPlano.toFixed(2)}`);
    }

    cotacao = {
      valorBase: valorPlano,
      coberturas: tabela.coberturas[planoSelecionado],
      descontoRegional: descontoAplicado
    };
    valorTotal = valorPlano;
    
    // Exibir resultado
    exibirResultado();
    
    // Opcional: Mostrar mensagem de desconto
    if (descontoAplicado) {
      alert(`Desconto regional de 10% aplicado para ${regionalSelecionada}. 
Plano: ${planoSelecionado}
Valor final: R$ ${valorPlano.toFixed(2)}`);
    }
  } else {
    alert("Não há planos disponíveis para este valor de veículo");
  }
}

// Adicionar evento de mudança de plano para recalcular
function adicionarEventoPlano() {
const planosRadio = document.querySelectorAll('input[name="plano"]');
planosRadio.forEach(radio => {
  radio.addEventListener('change', function() {
    planoSelecionado = this.value;
    calcularCotacao();
  });
});
}

// Chamar após carregar os planos
document.addEventListener('DOMContentLoaded', adicionarEventoPlano);
