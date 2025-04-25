// Dados extraídos das tabelas PDF
const tabelaPrecos = {
  "Carro Passeio": {
    faixasValor: [
      { min: 1, max: 15000, prata: 94.90, ouro: 106.50, platinum: 145.00 },
      { min: 15001, max: 20000, prata: 105.00, ouro: 116.50, platinum: 154.00 },
      { min: 20001, max: 25000, prata: 115.00, ouro: 126.50, platinum: 165.00 },
      { min: 25001, max: 30000, prata: 127.00, ouro: 138.50, platinum: 175.00 },
      { min: 30001, max: 35000, prata: 136.00, ouro: 147.50, platinum: 189.00 },
      { min: 35001, max: 40000, prata: 145.00, ouro: 156.50, platinum: 203.00 },
      { min: 40001, max: 45000, prata: 165.00, ouro: 176.50, platinum: 223.00 },
      { min: 45001, max: 50000, prata: 185.00, ouro: 196.50, platinum: 243.00 },
      { min: 50001, max: 55000, prata: 200.00, ouro: 211.50, platinum: 258.00 },
      { min: 55001, max: 60000, prata: 215.00, ouro: 226.50, platinum: 273.00 },
      { min: 60001, max: 65000, prata: 233.00, ouro: 244.50, platinum: 291.00 },
      { min: 65001, max: 70000, prata: 250.00, ouro: 261.50, platinum: 308.00 },
      { min: 70001, max: 75000, prata: 267.00, ouro: 278.50, platinum: 325.00 },
      { min: 75001, max: 80000, prata: 280.00, ouro: 291.50, platinum: 338.00 }
    ],
    coberturas: {
      prata: {
        "Casco Total": "SIM",
        "Reboque após pane": "400KM",
        "Reboque após colisão": "800KM",
        "Danos a terceiros": "R$ 20.000,00",
        "Carro reserva": "NÃO ADICIONADO",
        "Vidro básico": "NÃO ADICIONADO",
        "Vidro completo": "NÃO ADICIONADO",
        "AP Premiado": "NÃO ADICIONADO",
        "Assistência funeral": "NÃO ADICIONADO",
        "Assessoria jurídica": "SIM",
        "Assessoria DPVAT": "SIM",
        "Desconto farmácia": "SIM",
        "Clube de descontos": "SIM",
        "1º Para-brisa grátis": "NÃO ADICIONADO"
      },
      ouro: {
        "Casco Total": "SIM",
        "Reboque após pane": "500KM",
        "Reboque após colisão": "1000KM",
        "Danos a terceiros": "R$ 30.000,00",
        "Carro reserva": "7 DIAS",
        "Vidro básico": "SIM",
        "Vidro completo": "NÃO ADICIONADO",
        "AP Premiado": "5MIL M.A/50MIL SORTEIO",
        "Assistência funeral": "NÃO ADICIONADO",
        "Assessoria jurídica": "SIM",
        "Assessoria DPVAT": "SIM",
        "Desconto farmácia": "SIM",
        "Clube de descontos": "SIM",
        "1º Para-brisa grátis": "NÃO ADICIONADO"
      },
      platinum: {
        "Casco Total": "SIM",
        "Reboque após pane": "600KM",
        "Reboque após colisão": "1200KM",
        "Danos a terceiros": "R$ 50.000,00",
        "Carro reserva": "15 DIAS",
        "Vidro básico": "SIM",
        "Vidro completo": "SIM",
        "AP Premiado": "5MIL M.A/50MIL SORTEIO",
        "Assistência funeral": "ATÉ R$ 2.000,00",
        "Assessoria jurídica": "SIM",
        "Assessoria DPVAT": "SIM",
        "Desconto farmácia": "SIM",
        "Clube de descontos": "SIM",
        "1º Para-brisa grátis": "SIM/CARÊNCIA 60 DIAS"
      }
    }
  },
  "SUV/Caminhonete": {
    faixasValor: [
      { min: 1, max: 15000, comercial: 107.00, suv: 114.00, vans: null },
      { min: 15001, max: 20000, comercial: 117.00, suv: 126.00, vans: null },
      { min: 20001, max: 25000, comercial: 127.00, suv: 138.00, vans: null },
      { min: 25001, max: 30000, comercial: 139.00, suv: 152.40, vans: 215.00 },
      { min: 30001, max: 35000, comercial: 148.00, suv: 163.20, vans: 222.99 },
      { min: 35001, max: 40000, comercial: 157.00, suv: 174.00, vans: 226.90 },
      { min: 40001, max: 45000, comercial: 177.00, suv: 198.00, vans: 227.70 },
      { min: 45001, max: 50000, comercial: 197.00, suv: 222.00, vans: 239.90 },
      { min: 50001, max: 55000, comercial: 212.00, suv: 240.00, vans: 276.00 },
      { min: 55001, max: 60000, comercial: 227.00, suv: 258.00, vans: 296.70 },
      { min: 60001, max: 65000, comercial: 245.00, suv: 279.60, vans: 321.54 },
      { min: 65001, max: 70000, comercial: 262.00, suv: 300.00, vans: 345.00 },
      { min: 70001, max: 75000, comercial: 279.00, suv: 320.40, vans: 368.46 },
      { min: 75001, max: 80000, comercial: 296.00, suv: 349.80, vans: 402.27 },
      { min: 80001, max: 85000, comercial: 313.00, suv: 361.20, vans: 415.38 },
      { min: 85001, max: 90000, comercial: 330.00, suv: 381.60, vans: 438.84 }
    ],
    coberturas: {
      comercial: {
        "Casco Total": "SIM",
        "Reboque após pane": "400KM",
        "Reboque após colisão": "800KM",
        "Danos a terceiros": "R$ 20.000,00",
        "Carro reserva": "NÃO ADICIONADO",
        "Vidro básico": "NÃO ADICIONADO",
        "Vidro completo": "NÃO ADICIONADO",
        "AP Premiado": "NÃO ADICIONADO",
        "APP": "R$ 10 MIL",
        "Assistência funeral": "NÃO ADICIONADO",
        "Assessoria jurídica": "SIM",
        "Assessoria DPVAT": "SIM",
        "Desconto farmácia": "SIM",
        "Clube de descontos": "SIM"
      },
      suv: {
        "Casco Total": "SIM",
        "Reboque após pane": "500KM",
        "Reboque após colisão": "1000KM",
        "Danos a terceiros": "R$ 30.000,00",
        "Carro reserva": "NÃO ADICIONADO",
        "Vidro básico": "NÃO ADICIONADO",
        "Vidro completo": "NÃO ADICIONADO",
        "AP Premiado": "NÃO ADICIONADO",
        "APP": "R$ 10 MIL",
        "Assistência funeral": "NÃO ADICIONADO",
        "Assessoria jurídica": "SIM",
        "Assessoria DPVAT": "SIM",
        "Desconto farmácia": "SIM",
        "Clube de descontos": "SIM"
      },
      vans: {
        "Casco Total": "SIM",
        "Reboque após pane": "500KM",
        "Reboque após colisão": "1000KM",
        "Danos a terceiros": "R$ 30.000,00",
        "Carro reserva": "NÃO ADICIONADO",
        "Vidro básico": "NÃO ADICIONADO",
        "Vidro completo": "NÃO ADICIONADO",
        "AP Premiado": "5MIL M.A / 50 MIL SORTEIO",
        "APP": "R$ 10 MIL",
        "Assistência funeral": "NÃO ADICIONADO",
        "Assessoria jurídica": "SIM",
        "Assessoria DPVAT": "SIM",
        "Desconto farmácia": "SIM",
        "Clube de descontos": "SIM"
      }
    }
  },
  "Moto": {
    faixasValor: [
      { min: 1, max: 6000, prata: 49.90, ouro: null },
      { min: 6001, max: 10000, prata: 64.90, ouro: null },
      { min: 10001, max: 15000, prata: null, ouro: 88.00 },
      { min: 15001, max: 20000, prata: null, ouro: 130.00 },
      { min: 20001, max: 25000, prata: null, ouro: 158.00 },
      { min: 25001, max: 30000, prata: null, ouro: 188.00 },
      { min: 30001, max: 35000, prata: null, ouro: 210.00 },
      { min: 35001, max: 40000, prata: null, ouro: 230.00 },
      { min: 40001, max: 45000, prata: null, ouro: 280.00 },
      { min: 45001, max: 50000, prata: null, ouro: 299.00 }
    ],
    coberturas: {
      prata: {
        "Casco Total": "SIM",
        "Reboque após pane": "200KM",
        "Reboque após colisão": "400KM",
        "Danos a terceiros": "NÃO ADICIONADO",
        "AP Premiado": "NÃO ADICIONADO",
        "Assistência funeral": "NÃO ADICIONADO",
        "Assessoria jurídica": "SIM",
        "Assessoria DPVAT": "SIM",
        "Desconto farmácia": "SIM",
        "Clube de descontos": "SIM"
      },
      ouro: {
        "Casco Total": "SIM",
        "Reboque após pane": "500KM",
        "Reboque após colisão": "1000KM",
        "Danos a terceiros": "R$ 10.000,00",
        "AP Premiado": "NÃO ADICIONADO",
        "Assistência funeral": "NÃO ADICIONADO",
        "Assessoria jurídica": "SIM",
        "Assessoria DPVAT": "SIM",
        "Desconto farmácia": "SIM",
        "Clube de descontos": "SIM"
      }
    }
  }
};

// Adicionais disponíveis
const adicionaisDisponiveis = [
  { id: "reboque", nome: "Reboque Pane/Colisão Estendido", valor: 5.99, descricao: "600/1200 KM, 3 por evento" },
  { id: "vidro-basico", nome: "Vidro Básico (Nacional)", valor: 12.00, descricao: "Todos os vidros, exceto faróis, retrovisores e lanternas" },
  { id: "vidro-completo", nome: "Vidro Completo (Nacional)", valor: 18.00, descricao: "Vidros, faróis e lanternas (exceto retrovisores)" },
  { id: "danos-30", nome: "Danos a Terceiros 30 mil", valor: 15.90, descricao: "Cobertura de R$ 30.000,00" },
  { id: "danos-50", nome: "Danos a Terceiros 50 mil", valor: 25.90, descricao: "Cobertura de R$ 50.000,00" },
  { id: "ap-premiado-5", nome: "AP Premiado 5 mil", valor: 3.30, descricao: "5 MIL M.A./ 5 MIL I.P.A./50 MIL SORTEIO" },
  { id: "ap-premiado-10", nome: "AP Premiado 10 mil", valor: 4.80, descricao: "10 MIL M.A./ 10 MIL I.P.A./50 MIL SORTEIO" },
  { id: "ap-premiado-15", nome: "AP Premiado 15 mil", valor: 5.65, descricao: "15 MIL M.A./ 15 MIL I.P.A./50 MIL SORTEIO" },
  { id: "app-10", nome: "APP 10 mil - Passeio", valor: 5.00, descricao: "10 MIL - PASSEIO" },
  { id: "app-20", nome: "APP 20 mil - Passeio", valor: 10.30, descricao: "20 MIL - PASSEIO" },
  { id: "app-30", nome: "APP 30 mil - Passeio", valor: 18.60, descricao: "30 MIL - PASSEIO" },
  { id: "carro-reserva-7", nome: "Carro Reserva 7 dias", valor: 15.00, descricao: "Disponibilidade de carro reserva por até 7 dias" },
  { id: "carro-reserva-15", nome: "Carro Reserva 15 dias", valor: 25.00, descricao: "Disponibilidade de carro reserva por até 15 dias" },
  { id: "carro-reserva-30", nome: "Carro Reserva 30 dias", valor: 40.00, descricao: "Disponibilidade de carro reserva por até 30 dias" },
  { id: "funeral-ind", nome: "Assistência Funeral Individual", valor: 5.00, descricao: "2 MIL POR PESSOA" },
  { id: "funeral-fam", nome: "Assistência Funeral Familiar", valor: 6.90, descricao: "2 MIL POR PESSOA" },
  {
    id: "rastreamento", 
    nome: "Rastreamento Veicular", 
    valor: 49.90, 
    descricao: "Rastreamento 24h com suporte e localização em tempo real"
  },
  {
    id: "instalacao-rastreador", 
    nome: "Instalação de Rastreador", 
    valor: 99.90, 
    descricao: "Instalação profissional do dispositivo de rastreamento"
  }
];


// Variáveis globais
let tipoVeiculo = "";
let valorVeiculo = "";
let cotacao = null;
let adicionaisSelecionados = [];
let planosDisponiveis = [];
let planoSelecionado = "";
let valorTotal = 0;

// Elementos DOM
document.addEventListener('DOMContentLoaded', function() {
  // Adicionar script da biblioteca jsPDF para geração de PDF
  const jsPDFScript = document.createElement('script');
  jsPDFScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js';
  document.head.appendChild(jsPDFScript);
  
  // Adicionar script para manipulação de imagens no PDF
  const jsPDFImageScript = document.createElement('script');
  jsPDFImageScript.src = 'https://unpkg.com/jspdf-autotable@3.5.28/dist/jspdf.plugin.autotable.js';
  document.head.appendChild(jsPDFImageScript);
  
  const tipoVeiculoSelect = document.getElementById("tipoVeiculo");
  const valorVeiculoInput = document.getElementById("valorVeiculo");
  const calcularBtn = document.getElementById("calcularBtn");
  const resultadoCotacao = document.getElementById("resultadoCotacao");
  const tabsList = document.getElementById("tabsList");
  const tabsContent = document.getElementById("tabsContent");
  const adicionaisContainer = document.getElementById("adicionaisContainer");
  const resumoCotacao = document.getElementById("resumoCotacao");
  const gerarCotacaoBtn = document.getElementById("gerarCotacaoBtn");
  

  // Event Listeners
  tipoVeiculoSelect.addEventListener("change", function() {
    tipoVeiculo = this.value;
  });

  valorVeiculoInput.addEventListener("input", function() {
    valorVeiculo = this.value;
  });

  calcularBtn.addEventListener("click", calcularCotacao);
  gerarCotacaoBtn.addEventListener("click", gerarCotacaoPDF);
});

// Nomes amigáveis para os subtipos
const getNomeSubtipo = (subtipo) => {
  const nomes = {
    "prata": "Prata",
    "ouro": "Ouro",
    "platinum": "Platinum",
    "comercial": "Comercial",
    "suv": "SUV/Caminhonete",
    "vans": "Vans/Utilitário"
  };
  return nomes[subtipo] || subtipo;
};

// Definir subtipos com base no tipo de veículo
const getSubtipos = (tipo) => {
  switch (tipo) {
    case "Carro Passeio":
      return ["prata", "ouro", "platinum"];
    case "SUV/Caminhonete":
      return ["comercial", "suv", "vans"];
    case "Moto":
      return ["prata", "ouro"];
    default:
      return [];
  }
};

// Calcular cotação com base no tipo e valor do veículo
function calcularCotacao() {
  if (!tipoVeiculo || !valorVeiculo) {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  const valor = parseFloat(valorVeiculo);
  const tabela = tabelaPrecos[tipoVeiculo];
  
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
    planoSelecionado = planosDisponiveis[0];
    const valorPlano = faixa[planosDisponiveis[0]];
    cotacao = {
      valorBase: valorPlano,
      coberturas: tabela.coberturas[planosDisponiveis[0]]
    };
    valorTotal = valorPlano;
    
    // Exibir resultado
    exibirResultado();
  } else {
    alert("Não há planos disponíveis para este valor de veículo");
  }
}

// Exibir resultado da cotação
function exibirResultado() {
  const resultadoCotacao = document.getElementById("resultadoCotacao");
  const tabsList = document.getElementById("tabsList");
  const tabsContent = document.getElementById("tabsContent");
  
  // Limpar conteúdos anteriores
  tabsList.innerHTML = "";
  tabsContent.innerHTML = "";
  
  // Mostrar a seção de resultados
  resultadoCotacao.classList.remove("hidden");
  
  // Verificações de segurança
  if (!planosDisponiveis || planosDisponiveis.length === 0) {
    console.error('Nenhum plano disponível');
    return;
  }
  
  // Criar tabs para cada plano disponível
  planosDisponiveis.forEach((plano, index) => {
    // Criar o botão da tab
    const tabTrigger = document.createElement("div");
    tabTrigger.className = `tab-trigger ${plano === planoSelecionado ? "active" : ""}`;
    tabTrigger.textContent = getNomeSubtipo(plano);
    tabTrigger.dataset.plano = plano;
    tabTrigger.addEventListener("click", () => trocarPlano(plano));
    tabsList.appendChild(tabTrigger);
    
    // Criar o conteúdo da tab
    const tabContent = document.createElement("div");
    tabContent.className = `tab-content ${plano === planoSelecionado ? "active" : ""}`;
    tabContent.dataset.plano = plano;
    
    // Encontrar o valor do plano para o veículo
    const valor = parseFloat(valorVeiculo);
    const tabela = tabelaPrecos[tipoVeiculo];
    
    // Verificações de segurança adicionais
    if (!tabela) {
      console.error(`Tabela não encontrada para o tipo de veículo: ${tipoVeiculo}`);
      return;
    }
    
    const faixa = tabela.faixasValor.find(f => valor >= f.min && valor <= f.max) || 
                  tabela.faixasValor[tabela.faixasValor.length - 1];
    const valorPlano = faixa[plano];
    
    // Tratamento para coberturas
    let coberturasHTML = '';
    try {
      if (Array.isArray(tabela.coberturas[plano])) {
        // Se for um array
        coberturasHTML = tabela.coberturas[plano].map(cobertura => `
          <li class="resumo-item">
            <span>${cobertura}</span>
          </li>
        `).join('');
      } else if (typeof tabela.coberturas[plano] === 'object') {
        // Se for um objeto
        coberturasHTML = Object.entries(tabela.coberturas[plano]).map(([cobertura, valor]) => `
          <li class="resumo-item">
            <span>${cobertura}</span>
            <span class="resumo-valor">${valor}</span>
          </li>
        `).join('');
      } else {
        console.warn(`Formato de coberturas não reconhecido para o plano ${plano}`);
      }
    } catch (error) {
      console.error('Erro ao processar coberturas:', error);
    }
    
    // Criar o conteúdo do card
    tabContent.innerHTML = `
      <div class="card">
        <div class="card-header">
          <h2 class="card-title">Plano ${getNomeSubtipo(plano)}</h2>
        </div>
        <div class="card-content">
          <h3 class="font-semibold mb-2">Coberturas Incluídas:</h3>
          <ul class="space-y-1">
            ${coberturasHTML}
          </ul>
        </div>
      </div>
    `;
    
    tabsContent.appendChild(tabContent);
  });
  
  // Exibir adicionais disponíveis
  exibirAdicionais();
  
  // Atualizar resumo
  atualizarResumo();
}


// Trocar plano selecionado
function trocarPlano(plano) {
  // Atualizar variáveis
  planoSelecionado = plano;
  
  // Atualizar UI das tabs
  const tabsTriggers = document.querySelectorAll(".tab-trigger");
  const tabsContents = document.querySelectorAll(".tab-content");
  
  tabsTriggers.forEach(tab => {
    if (tab.dataset.plano === plano) {
      tab.classList.add("active");
    } else {
      tab.classList.remove("active");
    }
  });
  
  tabsContents.forEach(content => {
    if (content.dataset.plano === plano) {
      content.classList.add("active");
    } else {
      content.classList.remove("active");
    }
  });
  
  // Atualizar cotação
  const valor = parseFloat(valorVeiculo);
  const tabela = tabelaPrecos[tipoVeiculo];
  const faixa = tabela.faixasValor.find(f => valor >= f.min && valor <= f.max);
  const valorPlano = faixa[plano];
  
  cotacao = {
    valorBase: valorPlano,
    coberturas: tabela.coberturas[plano]
  };
  
  // Recalcular valor total
  calcularValorTotal();
  
  // Atualizar resumo
  atualizarResumo();
}

// Exibir adicionais disponíveis
function exibirAdicionais() {
  const adicionaisContainer = document.getElementById("adicionaisContainer");
  adicionaisContainer.innerHTML = "";
  
  adicionaisDisponiveis.forEach(adicional => {
    const adicionalElement = document.createElement("div");
    adicionalElement.className = "adicional-item";
    adicionalElement.innerHTML = `
      <input type="checkbox" id="${adicional.id}" class="checkbox" 
        ${adicionaisSelecionados.includes(adicional.id) ? "checked" : ""}>
      <div class="adicional-info">
        <label for="${adicional.id}" class="adicional-label">
          ${adicional.nome} - R$ ${adicional.valor.toFixed(2)}
        </label>
        <p class="adicional-descricao">${adicional.descricao}</p>
      </div>
    `;
    
    // Adicionar evento de alteração
    const checkbox = adicionalElement.querySelector(`#${adicional.id}`);
    checkbox.addEventListener("change", function() {
      toggleAdicional(adicional.id);
    });
    
    adicionaisContainer.appendChild(adicionalElement);
  });
}

// Alternar adicionais selecionados
function toggleAdicional(id) {
  if (adicionaisSelecionados.includes(id)) {
    adicionaisSelecionados = adicionaisSelecionados.filter(item => item !== id);
  } else {
    adicionaisSelecionados.push(id);
  }
  
  // Recalcular valor total
  calcularValorTotal();
  
  // Atualizar resumo
  atualizarResumo();
}

// Calcular valor total
function calcularValorTotal() {
  if (!cotacao) return;
  
  const valorAdicionais = adicionaisSelecionados.reduce((total, id) => {
    const adicional = adicionaisDisponiveis.find(a => a.id === id);
    return total + (adicional ? adicional.valor : 0);
  }, 0);
  
  valorTotal = cotacao.valorBase + valorAdicionais;
}

// Atualizar resumo da cotação
function atualizarResumo() {
  const resumoCotacao = document.getElementById("resumoCotacao");
  
  // Calcular cota de participação
  const valorFipe = parseFloat(valorVeiculo);
  const cotaParticipacao = getValorPadraoParticipacao(tipoVeiculo);
  const valorCota = (cotaParticipacao / 100) * valorFipe;

  let html = `
    <div class="resumo-item">
      <span class="resumo-label">Tipo de Veículo:</span>
      <span class="resumo-valor">${tipoVeiculo}</span>
    </div>
    <div class="resumo-item">
      <span class="resumo-label">Plano:</span>
      <span class="resumo-valor">${getNomeSubtipo(planoSelecionado)}</span>
    </div>
    <div class="resumo-item">
      <span class="resumo-label">Valor do Veículo:</span>
      <span class="resumo-valor">R$ ${parseFloat(valorVeiculo).toFixed(2)}</span>
    </div>
    <div class="resumo-item">
      <span class="resumo-label">Cota de Participação R$ ${valorCota.toFixed(2)} (${cotaParticipacao}%)</span>

      <div class="resumo-detalhe">
        <p class="observacao">
          <strong>Observação:</strong> Valor real da cota de participação para este veículo.
        </p>
      </div>
    </div>
    <div class="resumo-item">
      <span class="resumo-label">Valor Médio da mensalidade:</span>
      <span class="resumo-valor">R$ ${cotacao.valorBase.toFixed(2)}</span>
    </div>
  `;
  
  if (adicionaisSelecionados.length > 0) {
    html += `
      <div class="resumo-adicionais">
        <h4 class="resumo-adicionais-titulo">Adicionais Selecionados:</h4>
        <ul class="resumo-adicionais-lista">
    `;
    
    adicionaisSelecionados.forEach(id => {
      const adicional = adicionaisDisponiveis.find(a => a.id === id);
      html += `
        <li class="resumo-adicional-item">
          <span>${adicional.nome}</span>
          <span>R$ ${adicional.valor.toFixed(2)}</span>
        </li>
      `;
    });
    
    html += `
        </ul>
      </div>
    `;
  }
  
  html += `
    <div class="resumo-total">
      <span>Valor Total:</span>
      <span>R$ ${valorTotal.toFixed(2)}</span>
    </div>
  `;
  
  resumoCotacao.innerHTML = html;
}

// Função para formatar a data atual
function formatarDataAtual() {
  const data = new Date();
  const dia = String(data.getDate()).padStart(2, '0');
  const mes = String(data.getMonth() + 1).padStart(2, '0');
  const ano = data.getFullYear();
  return `${dia}/${mes}/${ano}`;
}

// Função para formatar valor monetário
function formatarValorMonetario(valor) {
  if (!valor) return "R$ 0,00";
  
  const numero = parseFloat(valor.toString().replace(/[^\d,.-]/g, '').replace(',', '.'));
  if (isNaN(numero)) return "R$ 0,00";
  
  return `R$ ${numero.toFixed(2).replace('.', ',')}`;
}

// Função para formatar percentual
function formatarPercentual(valor) {
  if (!valor) return "0%";
  
  const numero = parseFloat(valor.toString().replace(/[^\d,.-]/g, '').replace(',', '.'));
  if (isNaN(numero)) return "0%";
  
  return `${numero.toFixed(1).replace('.', ',')}%`;
}

// Função para garantir que o texto seja uma string válida
function textoSeguro(texto) {
  if (texto === undefined || texto === null) return "";
  return String(texto);
}

// Função para definir o valor padrão da cota de participação com base no tipo de veículo
function getValorPadraoParticipacao(tipoVeiculo) {
  const tipo = tipoVeiculo.toLowerCase();
  if (tipo.includes('moto')) return 8.0;
  if (tipo.includes('suv')) return 9.0;
  return 7.0; // carro padrão
}

// Definição dos adicionais de AP e APP conforme a tabela
const opcoesAPPremiado = [
  { valor: "5", descricao: "5 MIL M.A./ 5 MIL I.P.A./50 MIL SORTEIO", preco: 3.30 },
  { valor: "10", descricao: "10 MIL M.A./ 10 MIL I.P.A./50 MIL SORTEIO", preco: 4.80 },
  { valor: "15", descricao: "15 MIL M.A./ 15 MIL I.P.A./50 MIL SORTEIO", preco: 5.65 }
];

const opcoesAPP = [
  { valor: "10", descricao: "10 MIL - PASSEIO", preco: 5.00 },
  { valor: "20", descricao: "20 MIL - PASSEIO", preco: 10.30 },
  { valor: "30", descricao: "30 MIL - PASSEIO", preco: 18.60 }
];

const opcaoFuneral = {
  descricao: "2 MIL POR PESSOA",
  preco: 6.90
};

// Função para criar campos de entrada para cota de participação e adesão
function criarCamposConfiguracao() {
  // Verificar se os campos já existem
  if (document.getElementById('configCotacao')) {
    return;
  }
  
  const tipoVeiculo = document.getElementById('tipoVeiculo') ? 
                      document.getElementById('tipoVeiculo').value : 'carro';
  
  const cotaPadrao = getValorPadraoParticipacao(tipoVeiculo);
  
  // Criar container para os campos
  const container = document.createElement('div');
  container.id = 'configCotacao';
  container.style.marginBottom = '20px';
  container.style.padding = '15px';
  container.style.border = '1px solid #ddd';
  container.style.borderRadius = '5px';
  
  // Título
  const titulo = document.createElement('h4');
  titulo.textContent = 'Configurações da Cotação';
  titulo.style.marginTop = '0';
  container.appendChild(titulo);
  
  // Campo para cota de participação
  const divCota = document.createElement('div');
  divCota.style.marginBottom = '10px';
  
  const labelCota = document.createElement('label');
  labelCota.htmlFor = 'cotaParticipacao';
  labelCota.textContent = 'Cota de Participação (%): ';
  labelCota.style.display = 'inline-block';
  labelCota.style.width = '180px';
  divCota.appendChild(labelCota);
  
  const inputCota = document.createElement('input');
  inputCota.type = 'number';
  inputCota.id = 'cotaParticipacao';
  inputCota.value = cotaPadrao;
  inputCota.step = '0.1';
  inputCota.min = '0';
  inputCota.max = '20';
  inputCota.style.width = '80px';
  divCota.appendChild(inputCota);
  
  container.appendChild(divCota);
  
  // Campo para valor de adesão
  const divAdesao = document.createElement('div');
  divAdesao.style.marginBottom = '10px';
  
  const labelAdesao = document.createElement('label');
  labelAdesao.htmlFor = 'valorAdesao';
  labelAdesao.textContent = 'Valor de Adesão (R$): ';
  labelAdesao.style.display = 'inline-block';
  labelAdesao.style.width = '180px';
  divAdesao.appendChild(labelAdesao);
  
  const inputAdesao = document.createElement('input');
  inputAdesao.type = 'number';
  inputAdesao.id = 'valorAdesao';
  inputAdesao.value = '200.00';
  inputAdesao.step = '0.01';
  inputAdesao.min = '0';
  inputAdesao.style.width = '80px';
  divAdesao.appendChild(inputAdesao);
  
  container.appendChild(divAdesao);
  
  // Adicionar o container antes do botão de gerar PDF
  const botaoGerar = document.getElementById('gerarPDF');
  if (botaoGerar) {
    botaoGerar.parentNode.insertBefore(container, botaoGerar);
  } else {
    // Se não encontrar o botão, adiciona ao final do formulário ou ao body
    const form = document.querySelector('form');
    if (form) {
      form.appendChild(container);
    } else {
      document.body.appendChild(container);
    }
  }
  
  // Atualizar a cota de participação quando o tipo de veículo mudar
  const selectTipoVeiculo = document.getElementById('tipoVeiculo');
  if (selectTipoVeiculo) {
    selectTipoVeiculo.addEventListener('change', function() {
      const cotaPadrao = getValorPadraoParticipacao(this.value);
      document.getElementById('cotaParticipacao').value = cotaPadrao;
    });
  }
}

// Adicionar os novos adicionais à lista existente
function adicionarNovosAdicionais() {
  // AP Premiado opções
  opcoesAPPremiado.forEach((opcao, index) => {
    adicionaisDisponiveis.push({
      id: `ap-premiado-${opcao.valor}`,
      nome: `AP Premiado ${opcao.descricao}`,
      valor: opcao.preco,
      descricao: opcao.descricao
    });
  });
  
  // APP opções
  opcoesAPP.forEach((opcao, index) => {
    adicionaisDisponiveis.push({
      id: `app-${opcao.valor}`,
      nome: `APP (Acidente Pessoal por Passageiros) ${opcao.descricao}`,
      valor: opcao.preco,
      descricao: `Cobertura de ${opcao.descricao}`
    });
  });
  
  // Assistência Funeral
  adicionaisDisponiveis.push({
    id: "assistencia-funeral",
    nome: "Assistência Funeral Familiar",
    valor: opcaoFuneral.preco,
    descricao: opcaoFuneral.descricao
  });
}

// Função para gerar a cotação em PDF
function gerarCotacaoPDF() {
  // Verificar se a biblioteca jsPDF está disponível
  if (typeof window.jspdf === 'undefined') {
    alert('Carregando biblioteca de PDF. Por favor, tente novamente em alguns segundos.');
    return;
  }
  
  // Criar uma instância de jsPDF
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4'
  });
  
  // Dados do seguro
  const modelo = document.getElementById('modelo') ? document.getElementById('modelo').value : tipoVeiculo;
  const valorFipeElement = document.getElementById('valorFipe');
  const valorFipe = valorFipeElement ? valorFipeElement.value : valorVeiculo;
  const tipoVeiculoText = tipoVeiculo || "Automóvel";
  
  // Obter informações do plano selecionado
  const planoInfo = tabelaPrecos[tipoVeiculo]?.coberturas?.[planoSelecionado] || {};
  
  // Determinar valores de adicionais
  let carroReserva = "NÃO";
  if (planoInfo["Carro reserva"] && planoInfo["Carro reserva"] !== "NÃO ADICIONADO") {
    carroReserva = planoInfo["Carro reserva"];
  } else if (adicionaisSelecionados.includes("carro-reserva-7")) {
    carroReserva = "7 DIAS";
  } else if (adicionaisSelecionados.includes("carro-reserva-15")) {
    carroReserva = "15 DIAS";
  }
  
  let danosTerceiros = "NÃO";
  if (planoInfo["Danos a terceiros"] && planoInfo["Danos a terceiros"] !== "NÃO ADICIONADO") {
    danosTerceiros = planoInfo["Danos a terceiros"];
  } else if (adicionaisSelecionados.includes("danos-30")) {
    danosTerceiros = "R$ 30.000,00";
  } else if (adicionaisSelecionados.includes("danos-50")) {
    danosTerceiros = "R$ 50.000,00";
  }
  
  const rastreadorChecked = document.getElementById('rastreamento') ? document.getElementById('rastreamento').checked : false;
  const custoInstalacaoRastreador = rastreadorChecked ? "R$ 99,90" : "R$ 0,00";
  const mensalidadeRastreador = rastreadorChecked ? "R$ 39,90" : "R$ 0,00";
  
  // Informações de reboque
  let reboqueDescricao = "200KM/400KM";
  let reboqueValor = "0.00";
  
  if (planoInfo["Reboque após pane"] && planoInfo["Reboque após pane"] !== "NÃO ADICIONADO") {
    reboqueDescricao = `${planoInfo["Reboque após pane"]}/${planoInfo["Reboque após colisão"] || "400KM"}`;
  }
  
  if (adicionaisSelecionados.includes("reboque")) {
    reboqueValor = "5.99";
  }
  
  // Informações de vidros
  let vidrosDescricao = "";
  let vidrosValor = "0.00";
  
  if (planoInfo["Vidro completo"] && planoInfo["Vidro completo"] !== "NÃO ADICIONADO") {
    vidrosDescricao = "Completo";
  } else if (planoInfo["Vidro básico"] && planoInfo["Vidro básico"] !== "NÃO ADICIONADO") {
    vidrosDescricao = "Básico";
  } else if (adicionaisSelecionados.includes("vidro-completo")) {
    vidrosDescricao = "Completo";
    vidrosValor = "18.00";
  } else if (adicionaisSelecionados.includes("vidro-basico")) {
    vidrosDescricao = "Básico";
    vidrosValor = "12.00";
  }
  
  // Informações de AP Premiado
  let apPremiado = "NÃO";
  let apPremiadoValor = "0.00";
  
  if (planoInfo["AP Premiado"] && planoInfo["AP Premiado"] !== "NÃO ADICIONADO") {
    apPremiado = planoInfo["AP Premiado"];
  } else {
    for (const opcao of opcoesAPPremiado) {
      if (adicionaisSelecionados.includes(`ap-premiado-${opcao.valor}`)) {
        apPremiado = opcao.descricao;
        apPremiadoValor = opcao.preco.toFixed(2);
        break;
      }
    }
  }
  
  // Informações de APP
  let app = "NÃO";
  let appValor = "0.00";
  
  if (planoInfo["APP"] && planoInfo["APP"] !== "NÃO ADICIONADO") {
    app = planoInfo["APP"];
  } else {
    for (const opcao of opcoesAPP) {
      if (adicionaisSelecionados.includes(`app-${opcao.valor}`)) {
        app = opcao.descricao;
        appValor = opcao.preco.toFixed(2);
        break;
      }
    }
  }
  
  // Informações de Assistência Funeral
  let funeral = "NÃO";
  let funeralValor = "0.00";
  
  if (planoInfo["Assistência funeral"] && planoInfo["Assistência funeral"] !== "NÃO ADICIONADO") {
    funeral = planoInfo["Assistência funeral"];
  } else if (adicionaisSelecionados.includes("assistencia-funeral") || adicionaisSelecionados.includes("funeral-fam")) {
    funeral = opcaoFuneral.descricao;
    funeralValor = opcaoFuneral.preco.toFixed(2);
  } else if (adicionaisSelecionados.includes("funeral-ind")) {
    funeral = "2 MIL POR PESSOA (INDIVIDUAL)";
    funeralValor = "5.00";
  }
  
  // Valores de adesão e mensalidade
  const valorAdesaoElement = document.getElementById('valorAdesao');
  const valorAdesao = valorAdesaoElement ? valorAdesaoElement.value : "99.90";
  const dataVencimentoElement = document.getElementById('dataVencimento');
  const dataVencimento = dataVencimentoElement ? dataVencimentoElement.value : "10";
  const totalValorMensalidade = valorTotal.toFixed(2);
  
  // Cota de participação
  const cotaParticipacaoElement = document.getElementById('cotaParticipacao');
  let cotaParticipacao;
  
  if (cotaParticipacaoElement) {
    cotaParticipacao = formatarPercentual(cotaParticipacaoElement.value);
  } else {
    // Valor padrão baseado no tipo de veículo
    const valorPadrao = getValorPadraoParticipacao(tipoVeiculoText);
    cotaParticipacao = formatarPercentual(valorPadrao);
  }
  
  // Carregar imagem de fundo (substitua pelo URL da sua imagem)
  const imgFundo = new Image();
  imgFundo.src = '/static/images/template-cotacao.png';
  const numeroCotacao = Math.floor(Math.random() * 900000) + 100000;
  function enviarCotacao(numeroCotacao) {
    // Objeto de dados para enviar
    const dadosCotacao = {
      numeroCotacao: numeroCotacao,
      valorVeiculo: valorVeiculo,
      tipoVeiculo: tipoVeiculo,
      planoSelecionado: planoSelecionado,
      adicionaisSelecionados: adicionaisSelecionados,
      valorTotal: valorTotal
    };
  
    // Adicionar placa apenas se estiver disponível
    const placaInput = document.getElementById('placa');
    if (placaInput && placaInput.value) {
      dadosCotacao.placa = placaInput.value;
    }
  
    fetch('/salvar_cotacao', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dadosCotacao)
    })
    .then(response => response.json())
    .then(data => {
      console.log('Cotação salva:', data);
      // Pode adicionar tratamento de sucesso aqui
    })
    .catch(error => {
      console.error('Erro ao salvar cotação:', error);
    });
  }
  
   const desenharPDF = () => {
    // Adicionar imagem de fundo
    try {
      doc.addImage(imgFundo, 'JPEG', 0, 0, 210, 297); // A4 = 210x297mm
    } catch (e) {
      console.error("Erro ao adicionar imagem de fundo:", e);
      // Continuar sem a imagem de fundo
    }
    
    // Configurações de fonte
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    
    // Definir itens a serem impressos no PDF com suas coordenadas
// Definir itens a serem impressos no PDF com suas coordenadas
const itens = [
  // Informações do veículo
  { label: "", value: textoSeguro(modelo), xLabel: 17, xValue: 170, y: 40 },
  { label: "", value: formatarValorMonetario(valorFipe), xLabel: 7, xValue: 160, y: 50 },
  
  // Coberturas principais
  { label: textoSeguro(tipoVeiculoText), value: "Casco Total", xLabel: 17, xValue: 170, y: 92 },
  { 
    label: "Carro Reserva", 
    value: carroReserva !== "NÃO" ? textoSeguro(carroReserva) : "NÃO", 
    xLabel: 17, 
    xValue: 170, 
    y: 99 
  },
  { 
    label: "Danos a terceiros", 
    value: danosTerceiros !== "NÃO" ? textoSeguro(danosTerceiros) : "NÃO", 
    xLabel: 17, 
    xValue: 170, 
    y: 106 
  },
  {
    label: "Rastreador (Instalação) + (Mensalidade)", 
    value: rastreadorChecked ? "R$ 99,90  + R$ 39,90" : "Não adicionado", 
    xLabel: 17, 
    xValue: 170, 
    y: 113 
  }
,
  { label: "Assistência 24hrs", value: "SIM", xLabel: 17, xValue: 170, y: 120 },
  { 
    label: `Reboque após pane/colisão`, 
    value: reboqueValor !== "0.00" ? formatarValorMonetario(reboqueValor) : "400KM/800KM", 
    xLabel: 17, 
    xValue: 170, 
    y: 127 
  },
  { label: "Assessoria jurídica", value: "SIM", xLabel: 17, xValue: 170, y: 134 },
  { label: "Assessoria DPVAT", value: "SIM", xLabel: 17, xValue: 170, y: 141 },
  { label: "Chaveiro", value: "SIM", xLabel: 17, xValue: 170, y: 148 },
  { label: "Borracheiro", value: "SIM", xLabel: 17, xValue: 170, y: 155 },
  
  // Coberturas de sinistro
  { label: "Roubo e Furto", value: "SIM", xLabel: 17, xValue: 170, y: 162 },
  { label: "Colisão", value: "SIM", xLabel: 17, xValue: 170, y: 169 },
  { label: "Incêndio Pós Colisão", value: "SIM", xLabel: 17, xValue: 170, y: 176 },
  
  // Coberturas adicionais
  { 
    label: `Cobertura de Vidros ${textoSeguro(vidrosDescricao)}`, 
    value: vidrosValor !== "0.00" ? formatarValorMonetario(vidrosValor) : "Não adicionado", 
    xLabel: 17, 
    xValue: 170, 
    y: 183 
  },
  { 
    label: "AP premiado", 
    value: apPremiado !== "NÃO" ? textoSeguro(apPremiado) : "NÃO", 
    xLabel: 17, 
    xValue: 170, 
    y: 190 
  },
  { 
    label: "APP (Acidente Pessoal por Passageiros)", 
    value: app !== "NÃO" ? textoSeguro(app) : "NÃO", 
    xLabel: 17, 
    xValue: 170, 
    y: 197 
  },
  { 
    label: "Assistência Funeral Familiar", 
    value: funeral !== "NÃO" ? textoSeguro(funeral) : "NÃO", 
    xLabel: 17, 
    xValue: 170, 
    y: 204 
  },
  { label: "Clube de descontos", value: "SIM", xLabel: 17, xValue: 170, y: 211 },
  
  // Valores financeiros
  { label: "", value: formatarValorMonetario(valorAdesao), xLabel: -1, xValue: 35, y: 243 },
  { 
    label: "", 
    value: `${formatarValorMonetario(totalValorMensalidade)} (A partir do dia ${new Date(new Date().getFullYear(), new Date().getMonth() + 1, dataVencimento).toLocaleDateString('pt-BR')})`, 
    xLabel: -1, 
    xValue: 48, 
    y: 251 
  },
  { label: "", value: textoSeguro(cotaParticipacao), xLabel: -1, xValue: 68, y: 259 }
  
];

// Desenhar todos os itens
itens.forEach(item => {
  try {
    // Desenhar label se existir
    if (item.label && item.xLabel > 0) {
      doc.text(textoSeguro(item.label), item.xLabel, item.y);
    }
    
    // Desenhar valor
    if (item.xValue > 0) {
      doc.text(textoSeguro(item.value), item.xValue, item.y);
    }
  } catch (e) {
    console.error(`Erro ao desenhar item: ${item.label || ''} - ${item.value || ''}`, e);
  }
});

    // Adicionar adicionais selecionados que não estão na lista padrão
    let yPos = 218; // Posição inicial para adicionais extras
    
    adicionaisSelecionados.forEach(id => {
      const adicional = adicionaisDisponiveis.find(a => a.id === id);
      if (!adicional) return;
      
      // Verificar se este adicional já está representado em algum item acima
      const jaRepresentado = itens.some(item => 
        item.label && (
          item.label.includes(adicional.nome) || 
          (item.label.includes("Vidros") && (id === "vidro-basico" || id === "vidro-completo")) ||
          (item.label.includes("Reboque") && id === "reboque") ||
          (item.label.includes("Carro Reserva") && (id === "carro-reserva-7" || id === "carro-reserva-15")) ||
          (item.label.includes("Danos a terceiros") && (id === "danos-30" || id === "danos-50")) ||
          (item.label.includes("AP premiado") && id.includes("ap-premiado")) ||
          (item.label.includes("APP") && id.includes("app-")) ||
          (item.label.includes("Assistência Funeral") && (id === "assistencia-funeral" || id === "funeral-fam" || id === "funeral-ind"))
        )
      );
      
      if (!jaRepresentado) {
        try {
          doc.text(textoSeguro(adicional.nome), 17, yPos);
          doc.text(textoSeguro(formatarValorMonetario(adicional.valor)), 170, yPos);
          yPos += 7;
        } catch (e) {
          console.error(`Erro ao desenhar adicional: ${adicional.nome}`, e);
        }
      }
    });
    
    // Salvar o PDF
    doc.save(`Cotacao_ClasseA_${numeroCotacao}.pdf`);
    enviarCotacao(numeroCotacao);
  };
  
  // Se a imagem de fundo estiver disponível, aguarde o carregamento
  if (imgFundo.complete) {
    desenharPDF();
  } else {
    imgFundo.onload = desenharPDF;
    // Se houver erro no carregamento da imagem, continue sem ela
    imgFundo.onerror = () => {
      console.warn("Não foi possível carregar a imagem de fundo. Gerando PDF sem imagem.");
      desenharPDF();
    };
    
    // Se a imagem não carregar em 3 segundos, continue sem ela
    setTimeout(() => {
      if (!imgFundo.complete) {
        console.warn("Tempo esgotado ao carregar a imagem de fundo. Gerando PDF sem imagem.");
        desenharPDF();
      }
    }, 3000);
  }
}

// Inicializar os campos de configuração quando a página carregar
document.addEventListener('DOMContentLoaded', function() {
  // Adicionar os novos adicionais à lista existente
  adicionarNovosAdicionais();
  
  // Criar os campos de configuração
  criarCamposConfiguracao();
});

// Certificar-se de que os campos são criados quando o script é executado
// (caso o DOMContentLoaded já tenha ocorrido)
if (document.readyState === 'complete' || document.readyState === 'interactive') {
  setTimeout(() => {
    adicionarNovosAdicionais();
    criarCamposConfiguracao();
  }, 1);
}
