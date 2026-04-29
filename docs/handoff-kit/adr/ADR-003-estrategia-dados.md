# ADR-003: Estrategia de dados de transicao SQLite para Oracle

- Status: Aprovado
- Data: 2026-04-29
- Responsavel: Time de Dados

## Contexto

O prototipo evolui com SQLite para agilidade local. A solucao final sera Oracle 23ai/Autonomous na fabrica.

## Decisao

Adotar modelo canonico de dados independente de tecnologia e mapear tipos SQLite para Oracle desde o handoff.

Diretrizes:

1. Evitar SQL especifico de SQLite em regras de negocio.
2. Tratar datas em ISO-8601 no contrato.
3. Definir enumeracoes e constraints no dicionario canonico.
4. Versionar migracoes de schema.

## Consequencias

### Positivas

- Menor risco na migracao para Oracle.
- Menos ambiguidade para implementacao da fabrica.

### Negativas / trade-offs

- Exige documentacao adicional no prototipo.

## Alternativas consideradas

1. Ajustar dados somente no inicio do desenvolvimento da fabrica.
2. Preparar estrategia de dados ainda no prototipo.

## Referencias

- docs/handoff-kit/data-dictionary-template.md
