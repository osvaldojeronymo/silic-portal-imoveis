# ADR-001: Arquitetura alvo e stack da fabrica

- Status: Aprovado
- Data: 2026-04-29
- Responsavel: Time de Arquitetura

## Contexto

O prototipo atual foi desenvolvido para validacao de fluxos e UX. A fabrica executara implementacao corporativa com requisitos de escala, governanca e observabilidade.

## Decisao

Adotar arquitetura alvo:

- Frontend: Angular
- Backend: Quarkus
- Banco: Oracle 23ai/Autonomous
- Integracao por APIs REST versionadas

## Consequencias

### Positivas

- Alinhamento com stack corporativa.
- Melhor operabilidade em ambiente enterprise.

### Negativas / trade-offs

- Necessidade de migracao de artefatos TS/SQLite para stack alvo.

## Alternativas consideradas

1. Manter stack de prototipo para producao.
2. Migrar para stack corporativa padrao.

## Referencias

- docs/handoff-kit/openapi/openapi-base.yaml
- docs/handoff-kit/data-dictionary-template.md
