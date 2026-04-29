# Matriz de Rastreabilidade

## Objetivo

Garantir rastreabilidade completa entre requisito, regra de negocio, contrato de API, dados e testes.

## Instrucoes

- Cada linha representa uma historia/sub-historia implementavel.
- Nao deixar historia sem cenario de teste.
- Manter IDs consistentes com backlog oficial.

## Matriz (5 historias prioritarias prontas)

| ID Requisito | Historia                                     | Regra de negocio                                          | Tela/Fluxo                                                          | Endpoint OpenAPI                                     | Entidades/atributos                                                                   | Cenarios de teste                                                                                             | Status              | Evidencia                                                 |
| ------------ | -------------------------------------------- | --------------------------------------------------------- | ------------------------------------------------------------------- | ---------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------- | --------------------------------------------------------- |
| US-001       | Criar solicitacao de servico                 | Solicitacao exige tipo e descricao validos                | Portal > Card "Solicitacoes de Servicos" > botao "Nova Solicitacao" | POST /api/v1/solicitacoes                            | Solicitacao.idSolicitacao, tipoSolicitacao, statusSolicitacao, dataCriacaoSolicitacao | CT-001 cria com sucesso; CT-002 rejeita sem tipo; CT-003 rejeita sem descricao                                | Pronto para handoff | index.html card solicitacoes + openapi-base.yaml          |
| US-002       | Consultar fila de solicitacoes no dashboard  | Listagem aceita filtro por status e paginacao             | Portal > Card "Dashboard" > botao "Acessar Dashboard"               | GET /api/v1/solicitacoes                             | Solicitacao.statusSolicitacao                                                         | CT-010 lista sem filtro; CT-011 filtra por status; CT-012 valida paginacao                                    | Pronto para handoff | index.html card dashboard + openapi-base.yaml             |
| US-003       | Visualizar resumo de indicadores             | Dashboard deve mostrar totais consolidados e consistentes | Portal > Dashboard (carregamento inicial)                           | GET /api/v1/dashboard/resumo                         | ResumoDashboard.totalSolicitacoes, pendentes, concluidas, totalImoveis                | CT-020 retorna estrutura completa; CT-021 valida tipos numericos; CT-022 trata indisponibilidade da API       | Pronto para handoff | src/main.ts funcao atualizarDashboard + openapi-base.yaml |
| US-004       | Consultar e atualizar informacoes de imoveis | Gestao de imoveis deve permitir consulta detalhada por id | Portal > Card "Gestao de Imoveis" > botao "Gerenciar Imoveis"       | GET /api/v1/imoveis e GET /api/v1/imoveis/{imovelId} | Imovel.idImovel, codigoImovel, statusImovel, dataFimVigencia                          | CT-030 lista com filtro por UF/status; CT-031 consulta detalhe valido; CT-032 retorna 404 para id inexistente | Pronto para handoff | index.html card gestao + openapi-base.yaml                |
| US-005       | Registrar decisao de renovacao               | Decisao NAO_RENOVAR exige motivo obrigatorio              | Gestao de Imoveis > fluxo de renovacoes                             | POST /api/v1/renovacoes/decisoes                     | DecisaoRenovacao.decisao, motivoDecisao, protocoloRenovacao                           | CT-040 grava RENOVAR sem motivo; CT-041 grava NAO_RENOVAR com motivo; CT-042 rejeita NAO_RENOVAR sem motivo   | Pronto para handoff | texto funcional do card + openapi-base.yaml               |

## Escala de status sugerida

- Nao iniciado
- Em andamento
- Bloqueado
- Pronto para homologacao
- Concluido

## Checklist de qualidade da matriz

1. Toda historia tem ao menos 1 endpoint ou acao sem API justificada.
2. Toda regra tem ao menos 1 cenario de teste associado.
3. Toda entidade citada existe no dicionario de dados.
4. Toda evidencia aponta para artefato real (documento, teste, log, print).
