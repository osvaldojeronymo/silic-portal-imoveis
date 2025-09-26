# Documentação Técnica - SILIC 2.0 Portal

## Arquitetura

### Frontend
- **HTML5**: Estrutura semântica
- **CSS3**: Design responsivo com Grid/Flexbox
- **JavaScript ES6+**: Funcionalidades interativas

### Estrutura de Arquivos
```
silic-portal/
├── index.html              # Página principal
├── assets/
│   ├── css/
│   │   └── portal.css      # Estilos principais
│   ├── js/
│   │   └── portal.js       # Lógica do portal
│   └── images/
│       └── logo-caixa.svg  # Assets visuais
├── docs/                   # Documentação
└── README.md              # Documentação principal
```

## Funcionalidades

### Navegação
- `navegarPara(servico)`: Abre sistemas em nova aba
- `acao(tipo)`: Executa ações rápidas

### Dashboard
- `atualizarDashboard()`: Atualiza contadores
- Dados mockados para demonstração

### Responsividade
- Breakpoints: 768px, 480px
- Layout adaptativo para mobile

## Integração

### URLs dos Sistemas
```javascript
const URLS = {
    gestao: 'https://osvaldojeronymo.github.io/show-input-doc/',
    solicitacoes: 'https://osvaldojeronymo.github.io/show-request-service/'
};
```

### Futuras Integrações
- API para dados do dashboard
- SSO (Single Sign-On)
- Notificações push

## Manutenção

### Deploy
- GitHub Pages automático
- Atualização via push para main

### Atualizações
1. Editar arquivos localmente
2. Commit e push
3. Deploy automático em ~5min

## Padrões de Código

### CSS
- BEM-like naming
- Variáveis CSS para cores
- Mobile-first approach

### JavaScript
- ES6+ features
- Funções puras quando possível
- Console.log para debug
