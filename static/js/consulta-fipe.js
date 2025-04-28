document.addEventListener('DOMContentLoaded', function() {
    // Novo trecho para recuperar placa do localStorage
    const placaConsulta = localStorage.getItem('placaConsulta');
    if (placaConsulta) {
        const placaFipeInput = document.getElementById('placaFipe');
        const consultarFipeBtn = document.getElementById('consultarFipeBtn');
        
        if (placaFipeInput && consultarFipeBtn) {
            placaFipeInput.value = placaConsulta;
            localStorage.removeItem('placaConsulta');
            
            // Força o clique do botão de forma assíncrona
            setTimeout(() => {
                consultarFipeBtn.click();
            }, 100);

            // Adiciona uma segunda tentativa de clique
            setTimeout(() => {
                consultarFipeBtn.click();
            }, 500);
        }
    }

    // Novo trecho para consulta automática ao carregar a página
    const placaFipeInput = document.getElementById('placaFipe');
    const consultarFipeBtn = document.getElementById('consultarFipeBtn');
    const valorVeiculoInput = document.getElementById('valorVeiculo');
    
    // Trava o campo de valor para aceitar apenas números
    valorVeiculoInput.addEventListener('input', function(e) {
        // Remove qualquer caractere que não seja número
        this.value = this.value.replace(/\D/g, '');
    });

    // Impede cola de valores não numéricos
    valorVeiculoInput.addEventListener('paste', function(e) {
        e.preventDefault();
        const pastedText = e.clipboardData.getData('text/plain').replace(/\D/g, '');
        this.value = pastedText;
    });
    
    // Verifica se já existe uma placa no input
    if (placaFipeInput && placaFipeInput.value.trim() !== '' && consultarFipeBtn) {
        console.log('Placa encontrada no input, iniciando consulta automática');
        
        // Chama a função de consulta automaticamente
        setTimeout(() => {
            consultarFipeBtn.click();
        }, 200);
    }

    // Elementos importantes
    const resultadoFipeDiv = document.getElementById('detalhesPlacaFipe');
    const resultadoFipeContainer = document.getElementById('resultadoFipe');

    // Adiciona evento de clique
    consultarFipeBtn.addEventListener('click', consultarPlaca);

    function formatarPlaca(placa) {
        // Remove caracteres não alfanuméricos e converte para maiúsculas
        placa = placa.replace(/[^a-zA-Z0-9]/g, '');
        placa = placa.toUpperCase();
        
        // Valida formatos de placa
        if (placa.length === 7 && 
            (/^[A-Z]{3}\d{4}$/.test(placa) || 
             /^[A-Z]{3}\d[A-Z]\d{2}$/.test(placa) || 
             /^[A-Z]{3}[A-Z]\d{3}$/.test(placa))) {
            return placa;
        }
        
        console.error('Formato de placa inválido');
        return null;
    }

    function consultarPlaca() {
        // Formata a placa
        const placaFormatada = formatarPlaca(placaFipeInput.value);
        
        // Valida placa
        if (!placaFormatada) {
            resultadoFipeDiv.innerHTML = 'Placa inválida. Use o formato AAA1234 ou AAA1A23.';
            resultadoFipeContainer.classList.remove('hidden');
            return;
        }
    
        console.log('Placa formatada:', placaFormatada);
    
        // Realiza a consulta
        fetch(`/consulta?placa=${placaFormatada}`)
            .then(response => {
                console.log('Resposta bruta:', response);
                return response.json();
            })
            .then(data => {
                console.log('Resposta do backend:', data);
                
                // Verifica limite de consultas
                if (data.erro === 'Limite atingido') {
                    resultadoFipeDiv.innerHTML = 'Limite de consultas atingido. Por favor, tente novamente mais tarde.';
                    resultadoFipeContainer.classList.remove('hidden');
                    return;
                }
                
                // Monta detalhes do veículo
                const detalhes = `
                    <p><strong>Marca:</strong> ${data.informacoes_veiculo.marca || 'Não disponível'}</p>
                    <p><strong>Modelo:</strong> ${data.informacoes_veiculo.modelo || 'Não disponível'}</p>
                    <p><strong>Ano:</strong> ${data.informacoes_veiculo.ano_modelo || 'Não disponível'}</p>
                    <p><strong>Valor FIPE:</strong> R$ ${data.fipe[0].valor ? parseFloat(data.fipe[0].valor).toLocaleString('pt-BR') : 'Não disponível'}</p>
                `;
                
                // Preenche valor do veículo
                const valorFipe = data.fipe[0].valor ? parseFloat(data.fipe[0].valor) : null;
                if (valorFipe) {
                    valorVeiculoInput.value = Math.round(valorFipe);
                    
                    // Dispara evento de input para atualizar outros campos
                    const event = new Event('input', { bubbles: true });
                    valorVeiculoInput.dispatchEvent(event);
                }
                
                resultadoFipeDiv.innerHTML = detalhes;
                resultadoFipeContainer.classList.remove('hidden');
            })
            .catch(error => {
                console.error('Erro na consulta:', error);
                resultadoFipeDiv.innerHTML = 'Erro na consulta: ' + error.message;
                resultadoFipeContainer.classList.remove('hidden');
            });
    }
});
