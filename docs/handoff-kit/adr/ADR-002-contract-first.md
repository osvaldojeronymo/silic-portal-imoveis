# ADR-002: Abordagem contract-first para APIs

- Status: Aprovado
- Data: 2026-04-29
- Responsavel: Time de Arquitetura e Produto

## Contexto

O maior risco no handoff para fabrica e divergencia entre expectativa de front, regra de negocio e implementacao de backend.

## Decisao

Definir e versionar contratos OpenAPI antes da implementacao de servicos.

Regras:

1. Endpoint novo exige atualizacao de OpenAPI.
2. Mudanca breaking exige nova versao de API.
3. Erros padronizados no schema ErroPadrao.

## Consequencias

### Positivas

- Reduz retrabalho entre times.
- Facilita testes de contrato e homologacao.

### Negativas / trade-offs

- Exige disciplina de governanca dos contratos.

## Alternativas consideradas

1. Code-first no backend.
2. Contract-first com OpenAPI versionado.

## Referencias

- docs/handoff-kit/openapi/openapi-base.yaml
- docs/handoff-kit/traceability-matrix-template.md
