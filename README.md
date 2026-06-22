# Vacina Kids

Aplicação desenvolvida com Ionic + Angular para acompanhamento da jornada de vacinação infantil.

## Objetivo

Auxiliar pais e responsáveis no acompanhamento da situação vacinal das crianças, substituindo parcialmente a carteira física de vacinação.

---

## Funcionalidades

### Dashboard

- Total de crianças cadastradas
- Total de vacinas aplicadas
- Total de vacinas pendentes
- Total de campanhas ativas

### Gestão de Crianças

- Listagem de crianças
- Informações individuais
- Acompanhamento por criança

### Histórico Vacinal

- Vacinas aplicadas
- Vacinas pendentes
- Vacinas atrasadas
- Indicadores visuais de status

### Campanhas

- Exibição de campanhas de vacinação ativas
- Público-alvo
- Período da campanha

---

## Tecnologias

- Angular
- Ionic Framework
- TypeScript
- SCSS

---

## Estrutura do Projeto

src/app

core/
├── models
├── services
├── mock-data

pages/
├── dashboard
├── children
├── campaigns

---

## Cenários Atendidos

### Cenário 1

Identificação de vacinas aplicadas e pendentes.

### Cenário 2

Identificação de vacinas atrasadas.

### Cenário 3

Visualização de campanhas ativas.

### Cenário 4

Acompanhamento individual de múltiplas crianças.

---

## Executar Projeto

Instalar dependências:

```bash
npm install
