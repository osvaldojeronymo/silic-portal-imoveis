# SILIC 2.0 - Portal de Serviços

Portal ## 🌐 Deploy

### GitHub Pages
O projeto está configurado para deploy automático no GitHub Pages:

1. **Build automático**: `npm run build`
2. **Deploy**: `npm run deploy` 
3. **URL**: https://osvaldojeronymo.github.io/silic-portal-imoveis/

> ⚠️ **Nota**: Aguarde alguns minutos após o push para que o GitHub Actions processe o deploy.desenvolvido com **Vite + TypeScript + SCSS** para o sistema SILIC da CAIXA.

## ⚡ Tecnologias Utilizadas

- **Vite** - Build tool moderna e rápida
- **TypeScript** - Tipagem estática para JavaScript
- **SCSS** - Preprocessador CSS com variáveis e mixins
- **HTML5** - Estrutura semântica
- **FontAwesome** - Ícones

## 🚀 Desenvolvimento

### Pré-requisitos
- Node.js 16+ 
- npm ou yarn

### Instalação
```bash
git clone https://github.com/osvaldojeronymo/silic-portal-imoveis.git
cd silic-portal-imoveis
npm install
```

### Scripts disponíveis

```bash
# Desenvolvimento
npm run dev

# Build de produção
npm run build

# Preview da versão de produção
npm run preview

# Deploy para GitHub Pages
npm run deploy
```

## 🌐 Deploy

### GitHub Pages
O projeto está configurado para deploy automático no GitHub Pages:

1. **Build automático**: `npm run build`
2. **Deploy**: `npm run deploy` 
3. **URL**: https://osvaldojeronymo.github.io/portal-imoveis/

### Configuração
- **Base path**: `/portal-imoveis/`
- **Assets**: Organizados em `dist/assets/`
- **Otimização**: CSS e JS minificados

## 📁 Estrutura do Projeto

```
portal-imoveis/
├── index.html              # HTML principal
├── src/
│   ├── main.ts             # TypeScript principal
│   └── style.scss          # Estilos SCSS
├── public/
│   └── logo-caixa.svg      # Assets estáticos
├── dist/                   # Build de produção
├── package.json            # Dependências
├── tsconfig.json           # Config TypeScript
├── vite.config.ts          # Config Vite
└── README.md              # Este arquivo
```

## 🎨 Funcionalidades

### Portal Principal
- **Navegação por serviços**: Gestão, Solicitações, Dashboard
- **Ações rápidas**: Links para sistemas auxiliares  
- **Design responsivo**: Mobile-first
- **Tipagem TypeScript**: Interfaces e tipos seguros

### Sistemas Integrados
- **Gestão de Imóveis**: https://osvaldojeronymo.github.io/show-input-doc/
- **Solicitações**: https://osvaldojeronymo.github.io/silic-request-service/
- **Dashboard**: https://osvaldojeronymo.github.io/silic-hands-on/

### Design System CAIXA
- **Cores institucionais**: `#003366`, `#005ca9`, `#1976d2`
- **Tipografia**: Segoe UI
- **Componentes**: Cards, botões, gradientes
- **Responsividade**: Breakpoints 768px e 480px

## 🔧 Migração da Versão Anterior

Esta é uma versão modernizada do projeto original:

### O que mudou:
- ✅ **Vite** substituiu servir arquivos estáticos
- ✅ **TypeScript** substituiu JavaScript vanilla  
- ✅ **SCSS** organizado com variáveis e nesting
- ✅ **Build otimizado** com minificação automática
- ✅ **Hot reload** para desenvolvimento rápido
- ✅ **Tipagem segura** com interfaces TypeScript

### Compatibilidade:
- ✅ **Todas as funcionalidades** mantidas
- ✅ **URLs dos sistemas** preservadas
- ✅ **Design visual** idêntico
- ✅ **Responsividade** melhorada

## 🤝 Desenvolvimento

### Padrões de código
- **TypeScript**: Interfaces para todos os dados
- **SCSS**: Variáveis para cores e medidas
- **Responsivo**: Mobile-first approach
- **Performance**: Otimização automática do Vite

### Próximos passos
- [ ] Componentização com Web Components
- [ ] Integração com APIs reais
- [ ] Testes automatizados
- [ ] PWA (Progressive Web App)

---

## 📄 Licença

Este projeto segue as diretrizes da CAIXA. Uso restrito para fins institucionais.

**Desenvolvido por:** [Osvaldo Jeronymo](https://github.com/osvaldojeronymo)  
**LinkedIn:** [osvaldojeronymo](https://www.linkedin.com/in/osvaldojeronymo/)  
**Repositório:** https://github.com/osvaldojeronymo/silic-portal-imoveis