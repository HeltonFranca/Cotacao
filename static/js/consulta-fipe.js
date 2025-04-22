document.addEventListener('DOMContentLoaded', function() {
    const consultarFipeBtn = document.getElementById('consultarFipeBtn');
    const placaFipeInput = document.getElementById('placaFipe');
    const resultadoFipeDiv = document.getElementById('detalhesPlacaFipe');
    const resultadoFipeContainer = document.getElementById('resultadoFipe');
    const valorVeiculoInput = document.getElementById('valorVeiculo');

    consultarFipeBtn.addEventListener('click', consultarPlaca);

    function formatarPlaca(placa) {
        // Remove todos os caracteres que não sejam números ou letras
        placa = placa.replace(/[^a-zA-Z0-9]/g, '');
        
        // Converte para maiúsculas
        placa = placa.toUpperCase();
        
        // Verifica se tem o formato correto (placa antiga ou Mercosul)
        if (placa.length === 7 && 
            (/^[A-Z]{3}\d{4}$/.test(placa) || // Formato antigo: AAA1234
             /^[A-Z]{3}\d[A-Z]\d{2}$/.test(placa) || // Formato Mercosul: AAA1A23
             /^[A-Z]{3}[A-Z]\d{3}$/.test(placa))) { // Outro formato Mercosul: AAAA123
            return placa;
        }
        
        console.error('Formato de placa inválido');
        return null;
    }

    function consultarPlaca() {
        const placaFormatada = formatarPlaca(placaFipeInput.value);
        
        if (!placaFormatada) {
            resultadoFipeDiv.innerHTML = 'Placa inválida. Use o formato AAA1234 ou AAA1A23.';
            resultadoFipeContainer.classList.remove('hidden');
            return;
        }
    
        console.log('Placa formatada:', placaFormatada);
    
        fetch(`/consulta?placa=${placaFormatada}`)
            .then(response => {
                console.log('Resposta bruta:', response);
                return response.json();
            })
            .then(data => {
                console.log('Resposta do backend:', data);
                
                // Verifica se há um erro de limite
                if (data.erro === 'Limite atingido') {
                    resultadoFipeDiv.innerHTML = 'Limite de consultas atingido. Por favor, tente novamente mais tarde.';
                    resultadoFipeContainer.classList.remove('hidden');
                    return;
                }
                
                // Formata a resposta de forma mais legível
                const detalhes = `
                    <p><strong>Marca:</strong> ${data.informacoes_veiculo.marca || 'Não disponível'}</p>
                    <p><strong>Modelo:</strong> ${data.informacoes_veiculo.modelo || 'Não disponível'}</p>
                    <p><strong>Ano:</strong> ${data.informacoes_veiculo.ano_modelo || 'Não disponível'}</p>
                    <p><strong>Valor FIPE:</strong> R$ ${data.fipe[0].valor ? parseFloat(data.fipe[0].valor).toLocaleString('pt-BR') : 'Não disponível'}</p>
                `;
                
                // Preenche o campo de valor do veículo com o valor FIPE
                const valorFipe = data.fipe[0].valor ? parseFloat(data.fipe[0].valor) : null;
                if (valorFipe) {
                    valorVeiculoInput.value = Math.round(valorFipe);
                    
                    // Dispara evento de mudança para outros scripts
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
