# Kit de Handoff para Fabrica de Software

Este kit organiza os artefatos minimos para transicao do prototipo atual para desenvolvimento industrializado com arquitetura alvo Quarkus + Angular + Oracle 23ai/Autonomous.

## Objetivo

Permitir que a fabrica inicie o desenvolvimento com:

- contrato de API claro e versionado
- regras de negocio rastreaveis
- dados canonicos definidos
- decisoes arquiteturais registradas
- criterios objetivos de aceite

## Escopo do kit

1. OpenAPI base dos servicos principais
2. Dicionario de dados canonico
3. Matriz de rastreabilidade
4. ADRs iniciais
5. Checklist de aceite para handoff

## Estrutura

- openapi/openapi-base.yaml
- data-dictionary-template.md
- traceability-matrix-template.md
- adr/ADR-000-template.md
- adr/ADR-001-arquitetura-alvo.md
- adr/ADR-002-contract-first.md
- adr/ADR-003-estrategia-dados.md
- checklist-aceite-fabrica.md

## Como aproveitar o que ja existe

1. Reaproveitar os fluxos funcionais do prototipo como fonte de verdade de negocio.
2. Congelar payloads e campos em openapi/openapi-base.yaml antes de codificacao backend.
3. Preencher o dicionario de dados com os campos reais das telas e regras de validacao.
4. Vincular cada historia a endpoints, tabelas e cenarios de teste na matriz de rastreabilidade.
5. Atualizar ADRs quando houver mudanca de decisao tecnica.

## Processo recomendado de handoff

1. Refinar backlog por dominio: Solicitacoes, Dashboard, Gestao de Imoveis, Renovacoes.
2. Revisar o OpenAPI com negocio e arquitetura.
3. Confirmar entidades canonicas e chaves de negocio.
4. Definir NFRs minimos: seguranca, auditoria, performance e observabilidade.
5. Executar checklist de aceite e anexar evidencias.

## Definicao de pronto do handoff

- OpenAPI validado pelas partes
- Matriz de rastreabilidade preenchida para historias prioritarias
- Dicionario de dados sem campos ambiguos
- ADRs iniciais aprovados
- Checklist final assinado pelos responsaveis
