# Guia de Deploy - SILIC 2.0 Portal

## Pré-requisitos

1. Conta no GitHub
2. Repositório criado: `silic-portal`
3. Arquivos do projeto prontos

## Passos para Deploy

### 1. Criar Repositório no GitHub
```bash
# No GitHub, criar novo repositório:
# Nome: silic-portal
# Descrição: Portal de entrada para sistemas SILIC 2.0
# Público: ✅
# README: ❌ (já temos)
```

### 2. Inicializar Git Local
```bash
cd /home/osvaldo/Área\ de\ Trabalho/Prototipos/CAIXA/silic-portal
git init
git add .
git commit -m "feat: versão inicial do portal SILIC 2.0"
```

### 3. Conectar com GitHub
```bash
git remote add origin https://github.com/osvaldojeronymo/silic-portal.git
git branch -M main
git push -u origin main
```

### 4. Configurar GitHub Pages
1. Ir para Settings do repositório
2. Páginas → Source: Deploy from a branch
3. Branch: main
4. Folder: / (root)
5. Save

### 5. Verificar Deploy
- URL: https://osvaldojeronymo.github.io/silic-portal/
- Aguardar ~5-10 minutos para primeira ativação

## URLs Finais

- **Portal:** https://osvaldojeronymo.github.io/silic-portal/
- **Gestão:** https://osvaldojeronymo.github.io/show-input-doc/
- **Solicitações:** https://osvaldojeronymo.github.io/show-request-service/

## Comandos Úteis

### Atualizar Portal
```bash
git add .
git commit -m "feat: descrição da alteração"
git push
```

### Ver Status
```bash
git status
git log --oneline
```

### Backup Local
```bash
cp -r silic-portal silic-portal-backup-$(date +%Y%m%d)
```

## Troubleshooting

### GitHub Pages não ativa
- Verificar se o repositório é público
- Confirmar que existe index.html na raiz
- Aguardar até 10 minutos

### 404 Error
- Verificar nome do arquivo: `index.html` (lowercase)
- Confirmar se está na branch main
- Verificar configuração Pages

### CSS/JS não carrega
- Verificar caminhos relativos
- Confirmar estrutura de pastas
- Testar localmente primeiro

## Manutenção Contínua

### Atualizações Regulares
1. Fazer alterações localmente
2. Testar no navegador local
3. Commit e push
4. Verificar em produção

### Monitoramento
- Acessar regularmente para verificar funcionamento
- Verificar logs do navegador (F12)
- Monitorar issues no GitHub
