#!/bin/bash

# Script de Deploy - SILIC 2.0 Portal
# Facilita o processo de upload para GitHub

echo "🚀 DEPLOY SILIC 2.0 PORTAL"
echo "=========================="

# Verificar se estamos no diretório correto
if [ ! -f "index.html" ]; then
    echo "❌ Erro: Execute este script na pasta raiz do projeto (onde está o index.html)"
    exit 1
fi

echo "📁 Verificando estrutura do projeto..."

# Verificar arquivos essenciais
required_files=("index.html" "assets/css/portal.css" "assets/js/portal.js" "README.md")
for file in "${required_files[@]}"; do
    if [ ! -f "$file" ]; then
        echo "❌ Arquivo não encontrado: $file"
        exit 1
    fi
done

echo "✅ Estrutura verificada"

# Verificar se git está inicializado
if [ ! -d ".git" ]; then
    echo "🔧 Inicializando repositório Git..."
    git init
    git branch -M main
fi

# Adicionar arquivos
echo "📦 Adicionando arquivos..."
git add .

# Verificar se há mudanças
if git diff --staged --quiet; then
    echo "ℹ️  Nenhuma mudança detectada"
else
    # Commit
    echo "💾 Fazendo commit..."
    commit_msg="feat: deploy $(date '+%Y-%m-%d %H:%M')"
    git commit -m "$commit_msg"
    
    echo "✅ Commit realizado: $commit_msg"
fi

# Verificar se remote origin existe
if ! git remote get-url origin &> /dev/null; then
    echo "🔗 Configurando remote origin..."
    read -p "Digite o URL do repositório GitHub (ex: https://github.com/usuario/silic-portal.git): " repo_url
    git remote add origin "$repo_url"
fi

# Push
echo "🌐 Enviando para GitHub..."
if git push -u origin main; then
    echo ""
    echo "🎉 DEPLOY CONCLUÍDO COM SUCESSO!"
    echo "================================"
    echo ""
    echo "📋 Próximos passos:"
    echo "1. Acesse o repositório no GitHub"
    echo "2. Vá em Settings > Pages"
    echo "3. Configure Source: Deploy from a branch"
    echo "4. Selecione branch: main, folder: / (root)"
    echo "5. Aguarde ~5-10 minutos para ativação"
    echo ""
    echo "🌐 URL do portal (após ativação):"
    echo "   https://SEU_USUARIO.github.io/silic-portal/"
    echo ""
else
    echo "❌ Erro no push. Verifique:"
    echo "- Conexão com internet"
    echo "- Credenciais do GitHub"
    echo "- URL do repositório"
fi
