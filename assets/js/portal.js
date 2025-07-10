// URLs dos sistemas integrados
const URLS = {
    gestao: 'https://osvaldojeronymo.github.io/show-input-doc/?from=portal',
    solicitacoes: 'https://osvaldojeronymo.github.io/show-request-service/?from=portal'
};

/**
 * Navega para um sistema específico
 * @param {string} servico - Nome do serviço (gestao ou solicitacoes)
 */
function navegarPara(servico) {
    console.log('Navegando para:', servico);
    
    if (URLS[servico]) {
        window.open(URLS[servico], '_blank');
    } else {
        console.error('Serviço não encontrado:', servico);
    }
}

/**
 * Executa ações rápidas
 * @param {string} tipo - Tipo da ação (cadastro, busca, relatorio)
 */
function acao(tipo) {
    console.log('Ação:', tipo);
    
    switch(tipo) {
        case 'cadastro':
            // Vai diretamente para a seção de cadastro no sistema de gestão
            window.open(URLS.gestao + '#cadastro', '_blank');
            break;
            
        case 'busca':
            // Vai para a seção de busca/SIPGE no sistema de gestão
            window.open(URLS.gestao + '#sipge', '_blank');
            break;
            
        case 'relatorio':
            // Placeholder - em desenvolvimento
            alert('Funcionalidade de relatórios em desenvolvimento.\n\nEm breve você poderá:\n• Gerar relatórios de imóveis\n• Exportar dados\n• Visualizar dashboards');
            break;
            
        default:
            console.error('Ação não reconhecida:', tipo);
    }
}

/**
 * Atualiza os números do dashboard
 * Esta função pode ser expandida para buscar dados reais de uma API
 */
function atualizarDashboard() {
    // Placeholder - em produção, estes dados viriam de uma API
    const dados = {
        suasSolicitacoes: 3,
        imoveisAtivos: 100,
        solicitacoesDaUnidade: 8
    };
    
    // Atualiza os elementos na tela
    const elementos = document.querySelectorAll('.status-number');
    if (elementos.length >= 3) {
        elementos[0].textContent = dados.suasSolicitacoes;
        elementos[1].textContent = dados.imoveisAtivos;
        elementos[2].textContent = dados.solicitacoesDaUnidade;
    }
}

/**
 * Adiciona interações e animações
 */
function adicionarInteracoes() {
    // Adiciona hover effects nos cards
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Adiciona hover effects nos botões rápidos
    const quickBtns = document.querySelectorAll('.quick-btn');
    quickBtns.forEach(btn => {
        btn.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px)';
        });
        
        btn.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}

/**
 * Inicialização quando a página carrega
 */
document.addEventListener('DOMContentLoaded', function() {
    console.log('Portal SILIC 2.0 carregado!');
    
    // Atualiza o dashboard
    atualizarDashboard();
    
    // Adiciona interações
    adicionarInteracoes();
    
    // Log para debug
    console.log('Sistemas disponíveis:', Object.keys(URLS));
});

// Exporta funções para uso global
window.navegarPara = navegarPara;
window.acao = acao;
