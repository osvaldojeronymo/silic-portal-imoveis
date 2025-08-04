# Guia de Portabilidade e Demonstração para Projetos Web

## Estrutura de Repositórios
- Cada serviço/projeto deve ter seu próprio repositório (local e GitHub) com a mesma estrutura.
- Exemplo:
  - `/CAIXA/silic-portal` → `github.com/osvaldojeronymo/silic-portal-imoveis`
  - `/CAIXA/silic-request-service` → `github.com/osvaldojeronymo/show-request-service`

## Versionamento Essencial
- Use `.gitignore` para excluir arquivos temporários, de build, IDE, etc.
- Mantenha apenas:
  - Código-fonte (`index.html`, `assets/`, etc)
  - Documentação (`README.md`, instruções)
  - Imagens institucionais
  - Scripts JS e CSS finais

## Política de Commits
- Commits frequentes e descritivos.
- Push para o GitHub sempre que possível.
- Use branches para novas features/correções.

## Demonstração Online (GitHub Pages)
- Ative o GitHub Pages em cada repositório (Settings > Pages).
- Fonte: branch `main` e pasta `/` (raiz).
- O link será: `https://osvaldojeronymo.github.io/<nome-do-repositorio>/`
- Adicione esse link no README.md.

## Navegação entre Serviços
- Use URLs absolutas do GitHub Pages para links entre serviços.
- Exemplo: 
  - `<a href="https://osvaldojeronymo.github.io/show-request-service/?from=portal">Nova Solicitação</a>`

## Portabilidade Total
- Com essa estrutura, basta clonar o repositório em qualquer máquina:
  ```bash
  git clone https://github.com/osvaldojeronymo/silic-portal-imoveis.git
  ```
- Abra o `index.html` no navegador para visualizar localmente.
- O cliente pode acessar a demonstração online via GitHub Pages.

## Sincronização Manual
- Sempre que atualizar localmente:
  ```bash
  git add .
  git commit -m "Descrição clara da alteração"
  git push
  ```
- O GitHub Pages será atualizado automaticamente.

---

Este guia garante portabilidade, transparência e facilidade de demonstração para você e seus clientes.
