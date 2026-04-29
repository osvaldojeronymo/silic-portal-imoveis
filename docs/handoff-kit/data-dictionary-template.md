# Dicionario de Dados Canonico

## Como preencher

- Uma linha por atributo canonico.
- Nome canonico nao deve depender de tela.
- Informar regra de obrigatoriedade e validacao.
- Vincular origem atual (prototipo) e destino alvo (Quarkus/Angular/Oracle).

## Entidades principais

- Servico
- Solicitacao
- Imovel
- DecisaoRenovacao
- Usuario

## Tabela de atributos canonicos (primeira versao preenchida)

| Entidade         | Atributo canonico      | Tipo logico | Obrigatorio | Regra de negocio                          | Origem no prototipo                                                    | Destino alvo                       | Observacoes                                         |
| ---------------- | ---------------------- | ----------- | ----------- | ----------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------- | --------------------------------------------------- |
| Servico          | idServico              | string      | Sim         | Identifica unicamente o servico no portal | index.html atributo data-service (`solicitacoes`, `handson`, `gestao`) | tabela SERVICO.ID_SERVICO          | Chave de negocio do card                            |
| Servico          | nomeServico            | string      | Sim         | Nome exibido no card principal            | index.html h3 dos cards                                                | tabela SERVICO.NOME                | Ex.: Dashboard                                      |
| Servico          | descricaoServico       | string      | Sim         | Lista resumida de capacidades do servico  | index.html lista ul/li de cada card                                    | tabela SERVICO.DESCRICAO           | Usar para catalogo de servicos                      |
| Servico          | urlAlvoServico         | string      | Sim         | URL para navegacao ao sistema alvo        | src/main.ts constante URLS                                             | tabela SERVICO.URL_ALVO            | URL externa com query `?from=portal`                |
| Servico          | ordemExibicao          | integer     | Sim         | Define ordenacao dos cards no portal      | index.html ordem no DOM                                                | tabela SERVICO.ORDEM_EXIBICAO      | 1..N                                                |
| Solicitacao      | idSolicitacao          | string      | Sim         | Identificador unico da solicitacao        | previsto no OpenAPI                                                    | tabela SOLICITACAO.ID              | Formato SOL-AAAA-NNNN                               |
| Solicitacao      | tipoSolicitacao        | enum        | Sim         | Tipo de demanda solicitada                | card "Solicitacoes de Servicos" e OpenAPI                              | tabela SOLICITACAO.TIPO            | Enumeracao padronizada                              |
| Solicitacao      | statusSolicitacao      | enum        | Sim         | Estado atual do fluxo                     | OpenAPI schema StatusSolicitacao                                       | tabela SOLICITACAO.STATUS          | Sincronizar com frontend                            |
| Solicitacao      | dataCriacaoSolicitacao | datetime    | Sim         | Data/hora de abertura da solicitacao      | OpenAPI `dataCriacao`                                                  | tabela SOLICITACAO.DATA_CRIACAO    | UTC                                                 |
| Imovel           | idImovel               | string      | Sim         | Identificador interno do imovel           | URL de integracao de gestao + OpenAPI                                  | tabela IMOVEL.ID                   | Chave tecnica                                       |
| Imovel           | codigoImovel           | string      | Sim         | Codigo de negocio do imovel               | OpenAPI Imovel.codigo                                                  | tabela IMOVEL.CODIGO               | Unico por unidade de negocio                        |
| Imovel           | statusImovel           | enum        | Sim         | Estado operacional do imovel              | OpenAPI StatusImovel                                                   | tabela IMOVEL.STATUS               | ATIVO/PROSPECCAO/MOBILIZACAO/DESMOBILIZACAO/INATIVO |
| Imovel           | dataFimVigencia        | date        | Nao         | Apoia decisao de renovacao                | OpenAPI ImovelDetalhe.dataFimVigencia                                  | tabela IMOVEL.DATA_FIM_VIGENCIA    | Base para alertas                                   |
| DecisaoRenovacao | idDecisaoRenovacao     | string      | Sim         | Identifica registro de decisao            | endpoint POST /renovacoes/decisoes                                     | tabela DECISAO_RENOVACAO.ID        | Chave tecnica                                       |
| DecisaoRenovacao | decisao                | enum        | Sim         | Renovar ou nao renovar                    | card "Gestao de Imoveis" + OpenAPI                                     | tabela DECISAO_RENOVACAO.DECISAO   | RENOVAR/NAO_RENOVAR                                 |
| DecisaoRenovacao | motivoDecisao          | string      | Condicional | Obrigatorio quando NAO_RENOVAR            | OpenAPI DecisaoRenovacaoRequest.motivo                                 | tabela DECISAO_RENOVACAO.MOTIVO    | Ate 1000 caracteres                                 |
| DecisaoRenovacao | protocoloRenovacao     | string      | Sim         | Protocolo de rastreabilidade da decisao   | OpenAPI DecisaoRenovacaoResponse.protocolo                             | tabela DECISAO_RENOVACAO.PROTOCOLO | Ex.: REN-2026-000123                                |
| AcaoRapida       | idAcaoRapida           | string      | Sim         | Identifica botao de acao rapida           | index.html botoes `.quick-btn`                                         | tabela ACAO_RAPIDA.ID_ACAO         | Chave funcional                                     |
| AcaoRapida       | nomeAcaoRapida         | string      | Sim         | Nome apresentado no botao                 | index.html texto do botao                                              | tabela ACAO_RAPIDA.NOME            | Ex.: Processo Digital                               |
| AcaoRapida       | urlAcaoRapida          | string      | Sim         | URL aberta ao clicar no botao             | atributo data-url em index.html                                        | tabela ACAO_RAPIDA.URL             | Integracao externa                                  |

## Enumeracoes

### StatusSolicitacao

- ABERTA
- EM_ANALISE
- PENDENTE
- CONCLUIDA
- CANCELADA

### StatusImovel

- ATIVO
- PROSPECCAO
- MOBILIZACAO
- DESMOBILIZACAO
- INATIVO

## Regras de integridade

1. Todo servico publicado no portal precisa de `idServico`, `nomeServico` e `urlAlvoServico` validos.
2. Toda solicitacao precisa de tipo, status e data de criacao.
3. Todo imovel precisa ter codigo de negocio unico.
4. Decisao de nao renovacao exige motivo.
5. Toda acao rapida precisa de URL valida HTTPS.

## Mapeamento SQLite para Oracle (guia rapido)

| Conceito logico | SQLite atual  | Oracle alvo      |
| --------------- | ------------- | ---------------- |
| Identificador   | TEXT          | VARCHAR2(50)     |
| Texto curto     | TEXT          | VARCHAR2(255)    |
| Texto longo     | TEXT          | CLOB             |
| Data/hora       | TEXT ISO-8601 | TIMESTAMP        |
| Booleano        | INTEGER 0/1   | NUMBER(1)        |
| Enum            | TEXT          | VARCHAR2 + CHECK |

## Pendencias para handoff

- Validar tamanhos maximos de campos com negocio e seguranca.
- Confirmar ownership de cada entidade no dominio alvo (Quarkus).
- Definir mascaras e formatos obrigatorios para IDs de negocio.
- Fechar regras de auditoria por entidade (quem, quando, origem).
- Revisar politicas de retencao e LGPD para solicitacoes e decisoes.
