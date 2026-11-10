# Painéis fiscais — Campo Largo/PR (Siconfi)

Conjunto de páginas HTML independentes que consultam a **API de Dados Abertos do Tesouro Nacional (Siconfi)** e mostram os demonstrativos fiscais do município de **Campo Largo (IBGE 4104204)** em tabelas, gráficos, CSV e versão para impressão/PDF.

Cada arquivo funciona sozinho: basta abrir no navegador. Não há servidor, instalação nem build.

- [Visão geral](#visão-geral)
- [Arquivos](#arquivos)
- [Como usar](#como-usar)
- [Como funciona a busca de período](#como-funciona-a-busca-de-período)
- [Painel de Indicadores](#painel-de-indicadores-indicadores_atualizadohtml)
- [Estrutura comum dos HTML de anexo](#estrutura-comum-dos-html-de-anexo)
- [Limitações e cuidados](#limitações-e-cuidados)
- [Como adaptar para outro município](#como-adaptar-para-outro-município)
- [Como alterar ou criar um anexo](#como-alterar-ou-criar-um-anexo)

---

## Visão geral

| Grupo | O que é | Periodicidade | Arquivos |
|---|---|---|---|
| **RREO** | Relatório Resumido da Execução Orçamentária | Bimestral (6 períodos por ano) | `rreo_anexo*_atualizado.html` |
| **RGF** | Relatório de Gestão Fiscal | Quadrimestral (3 períodos por ano) | `rgf_anexo*_atualizado.html` |
| **Indicadores** | Painel que cruza vários anexos RREO, RGF e DCA | Quadrimestral | `indicadores_atualizado.html` |

Tecnologias: HTML + JavaScript puro, Bootstrap 5 e Chart.js (carregados por CDN). Os dados vêm de:

- `https://apidatalake.tesouro.gov.br/ords/cdwhprd/siconfi/tt/rreo`
- `https://apidatalake.tesouro.gov.br/ords/cdwhprd/siconfi/tt/rgf`
- `https://apidatalake.tesouro.gov.br/ords/cdwhprd/siconfi/tt/dca` (somente o painel de Indicadores)

> **Requisito:** o computador precisa de internet para carregar Bootstrap/Chart.js (jsdelivr) e consultar a API.

---

## Arquivos

### RREO — bimestral

| Arquivo | Demonstrativo | `no_anexo` na API |
|---|---|---|
| `rreo_anexo1_atualizado.html` | Balanço Orçamentário | `RREO-Anexo 01` |
| `rreo_anexo2_atualizado.html` | Despesas por Função/Subfunção | `RREO-Anexo 02` |
| `rreo_anexo3_atualizado.html` | Receita Corrente Líquida | `RREO-Anexo 03` |
| `rreo_anexo4_atualizado.html` | Receitas e Despesas Previdenciárias (RPPS) | `RREO-Anexo 04` |
| `rreo_anexo6_atualizado.html` | Resultados Primário e Nominal | `RREO-Anexo 06` |
| `rreo_anexo7_atualizado.html` | Restos a Pagar por Poder e Órgão | `RREO-Anexo 07` |
| `rreo_anexo9_atualizado.html` | Receitas de Operações de Crédito e Despesas de Capital (Regra de Ouro) | `RREO-Anexo 09` |
| `rreo_anexo10_atualizado.html` | Projeção Atuarial do RPPS | `RREO-Anexo 10 - RPPS` |
| `rreo_anexo11_atualizado.html` | Receita de Alienação de Ativos e Aplicação dos Recursos | `RREO-Anexo 11` |
| `rreo_anexo13_atualizado.html` | Parcerias Público-Privadas (PPP) | `RREO-Anexo 13` |
| `rreo_anexo14_atualizado.html` | Demonstrativo Simplificado do RREO | `RREO-Anexo 14` |

Não há página para o **RREO Anexo 5** (ainda não enviado) nem para os **Anexos 8 (MDE) e 12 (Saúde)**, que deixaram de ser enviados ao Siconfi.

### RGF — quadrimestral

| Arquivo | Demonstrativo | `no_anexo` na API |
|---|---|---|
| `rgf_anexo1_atualizado.html` | Despesa com Pessoal | `RGF-Anexo 01` |
| `rgf_anexo2_atualizado.html` | Dívida Consolidada Líquida | `RGF-Anexo 02` |
| `rgf_anexo3_atualizado.html` | Garantias e Contragarantias | `RGF-Anexo 03` |
| `rgf_anexo4_atualizado.html` | Operações de Crédito | `RGF-Anexo 04` |
| `rgf_anexo5_atualizado.html` | Disponibilidade de Caixa e Restos a Pagar | `RGF-Anexo 05` |
| `rgf_anexo6_atualizado.html` | Demonstrativo Simplificado do RGF | `RGF-Anexo 06` |

Os RGF consultam com `in_periodicidade=Q` e `co_poder=E` (Poder Executivo). O poder é um campo oculto na página.

### Indicadores

| Arquivo | O que faz |
|---|---|
| `indicadores_atualizado.html` | Painel de indicadores fiscais: resultado primário e nominal, endividamento, liquidez, pessoal, restos a pagar e caixa, autonomia tributária e dívida ativa. Combina RREO 01, 07 e 14, RGF 1, 2 e 5 e DCA. |

---

## Como usar

1. Abra o arquivo `.html` desejado no navegador (duplo clique).
2. A página **já consulta sozinha** o período mais recente com dados (veja a próxima seção).
3. Para consultar outro período, preencha os campos e clique no botão de busca (lupa):

| Campo | Significado |
|---|---|
| **Exercício** | Ano do demonstrativo (ex.: 2026). |
| **Período** | Bimestre (RREO: 1º a 6º) ou quadrimestre (RGF e Indicadores: 1º a 3º). |
| **Ente (código IBGE)** | Código IBGE do município. Padrão: `4104204` (Campo Largo). |
| **Esfera** | Municipal, Estadual ou União (nos RREO). Nos RGF e Indicadores é fixa em Municipal e fica oculta. |

Botões comuns às páginas:

- **Ver Tabelas / Ver Gráficos:** alterna a visualização.
- **Exportar CSV:** baixa os dados exibidos (separador `;`, com BOM para abrir bem no Excel).
- **Imprimir / Gerar PDF:** abre a impressão com um layout próprio (cabeçalho, tabelas e rodapé com a URL consultada e a data/hora).
- **Carregar JSON Local:** importa um arquivo baixado da API (objeto com a chave `items`), útil quando o navegador bloqueia a consulta direta (CORS). No painel de Indicadores esse recurso é o bloco "Dados paralelos (JSON)", com seleção do anexo.

---

## Como funciona a busca de período

### Busca automática (ao abrir a página)

A página parte do **último período já fechado**, em relação à data de hoje:

- **RREO (bimestre):** com 2 bimestres fechados a cada 4 meses, vale `bimestres fechados = ⌊(mês − 1) / 2⌋`. Em novembro, por exemplo, o último fechado é o 5º bimestre (Set-Out). Em janeiro e fevereiro nenhum bimestre do ano está fechado e a busca começa no 6º bimestre do ano anterior.
- **RGF e Indicadores (quadrimestre):** de setembro a dezembro vale o 2º quadrimestre; de maio a agosto, o 1º; de janeiro a abril, o 3º quadrimestre do ano anterior.

Se a API **não retornar dados** para esse período, a página **recua um período por vez** e, ao passar do 1º, vai para o último do ano anterior, até achar dados. Limites de tentativas:

| Tipo | Tentativas | Alcance |
|---|---|---|
| RREO | 24 | cerca de 4 anos |
| RGF e Indicadores | 12 | cerca de 4 anos |

Ao achar dados, a página preenche **Exercício** e **Período** com o que foi encontrado e informa na barra de status. Se nada for encontrado, volta ao período inicial e exibe o relatório **zerado**, com um aviso.

### Busca manual (botão de busca)

Usa exatamente o Exercício, o Período e o Ente escolhidos, **sem recuar**. Se não houver dados, o relatório é **zerado** e aparece "Sem dados para o período selecionado" nas tabelas. Antes, uma resposta vazia deixava na tela os dados da consulta anterior, o que foi corrigido.

### Por que "sem dados" pode ser normal

A API do Siconfi **omite as contas cujo valor é zero em todas as colunas**. Por isso, em anexos como RGF 3 (Garantias), RGF 4 (Operações de Crédito), RGF 6, RREO 13 (PPP) e partes de outros, uma resposta vazia ou parcial é comum. Nesses casos a página mostra todas as linhas com zero ou uma linha "Sem dados" e o indicador de situação fica cinza.

O **RREO Anexo 10** costuma ser publicado só no 6º bimestre; por isso a busca automática deve recuar até o 6º bimestre do ano anterior antes de achar dados.

---

## Painel de Indicadores (`indicadores_atualizado.html`)

É a página mais completa: em vez de um único anexo, ela monta uma **leitura geral da situação fiscal** a partir de várias fontes.

### Fontes consultadas

| Fonte | Para quê | Período |
|---|---|---|
| RREO Anexo 14 | Resultado primário, nominal, RCL | Bimestre de fechamento do quadrimestre |
| RREO Anexo 14 (bimestres 1 até o atual) | Gráfico de evolução bimestral | Bimestre a bimestre |
| RGF Anexo 2 | Dívida consolidada líquida (DCL), caixa, passivo atuarial | Quadrimestre |
| RGF Anexo 1 | Despesa total com pessoal (Poder Executivo) | Quadrimestre |
| RGF Anexo 5 | Caixa e restos a pagar | Quadrimestre |
| RREO Anexo 01 | Execução da receita e despesa, autonomia, rigidez | Bimestre |
| RREO Anexo 07 | Cancelamento de restos a pagar | Bimestre |
| DCA (I-AB e I-C) | Dívida ativa e tributos próprios | Exercício anual (exercícios encerrados) |

### O que o painel mostra

- **Posição do município** em cartões por tema (resultado primário, endividamento, liquidez, despesa com pessoal, educação e saúde, risco de longo prazo), cada um com uma faixa de cor: *Confortável*, *Atenção*, *Crítico* ou *Sem dados*, e uma leitura geral.
- **Resultado primário e nominal:** meta da LDO × apurado, evolução bimestral e convergência entre o resultado nominal e a variação da DCL.
- **Indicadores adicionais:** execução orçamentária, restos a pagar e caixa, autonomia tributária e dívida ativa.
- **Transparência e metodologia:** de onde vem cada número, critério de cálculo, base legal dos limites, glossário e limitações.

### Busca com recuo por anexo e coluna "Período encontrado"

Como o painel usa vários anexos, **cada anexo recua sozinho** quando o período pedido ainda não tem dados:

1. O **RREO Anexo 14** define o período principal exibido (Exercício e Quadrimestre ficam preenchidos com ele).
2. Os demais anexos (RGF 1, 2 e 5, RREO 01 e 07) partem desse período e recuam, cada um, até achar dados.
3. A tabela **"Fontes desta consulta"** (em *Transparência e metodologia*) traz a coluna **Período encontrado**, com origem do dado (API Siconfi, JSON anexado ou sem dados) e o período usado por anexo, por exemplo:

| Demonstrativo | Origem | Período encontrado |
|---|---|---|
| RREO Anexo 14 | API Siconfi | 4º Bimestre/2026 |
| RGF Anexo 2 | API Siconfi | 1º Quadrimestre/2026 `recuou` |
| RREO Anexo 07 | API Siconfi | 6º Bimestre/2025 `recuou` |
| DCA Anexo I-AB / 2025 | API Siconfi | exercício 2025 (anual) |

O selo amarelo **`recuou`** indica que o período pedido ainda não tinha dados. O selo **`≠ principal`** indica período diferente do anexo principal. O link "abrir consulta" abre a mesma consulta, para conferência.

A **DCA é anual** e não recua: a coluna mostra o exercício consultado.

> Atenção: como cada anexo recua por conta própria, o painel pode **misturar períodos diferentes**. É essa coluna que mostra o que aconteceu em cada fonte. Os rodapés "Fonte/Período" dos cartões mostram o período principal.

### Dados paralelos (JSON)

Quando a API está indisponível ou bloqueada por CORS, é possível anexar o JSON de cada anexo (RREO 14, 01, 07, RGF 1, 2, 5, DCA I-AB e I-C). Os dados anexados têm prioridade sobre a API e aparecem como "JSON anexado" na tabela de fontes.

---

## Estrutura comum dos HTML de anexo

Todas as páginas de anexo seguem o mesmo padrão:

1. **Cabeçalho** com o nome do demonstrativo e a base legal.
2. **Barra de status** (`#status`): informa o que está sendo buscado, o sucesso, o recuo de período ou o erro.
3. **Filtros:** Exercício, Período e Ente (e Esfera nos RREO).
4. **KPIs** com os principais valores do anexo.
5. **Tabelas** do demonstrativo, com linhas hierarquizadas.
6. **Gráficos** (Chart.js), alternados com as tabelas.
7. **Área de impressão** (`#printArea`), oculta na tela e usada só em *Imprimir / Gerar PDF*.
8. **Script** com a lógica:
   - `montarUrl()`: monta a URL da API com os parâmetros.
   - `buscarLista()` / `consultarManual()` / `consultarAutomatica()`: consulta, recuo de período e tratamento de vazio.
   - `processarDados()`: organiza o retorno em contas, colunas e níveis.
   - `renderizar…()`: tabelas, KPIs e gráficos.
   - `exportarCSV()`, leitor de JSON local e impressão.

Parâmetros enviados à API:

| Parâmetro | RREO | RGF |
|---|---|---|
| `an_exercicio` | ano | ano |
| `nr_periodo` | bimestre (1–6) | quadrimestre (1–3) |
| `co_tipo_demonstrativo` | `RREO` | `RGF` |
| `no_anexo` | ex.: `RREO-Anexo 14` | ex.: `RGF-Anexo 02` |
| `co_esfera` | `M`, `E` ou `U` | `M` |
| `id_ente` | código IBGE | código IBGE |
| `in_periodicidade` | — | `Q` |
| `co_poder` | — | `E` |

---

## Limitações e cuidados

- **Teste contra a API real:** as páginas foram verificadas quanto à sintaxe e ao comportamento de busca e recuo com respostas simuladas. O ambiente de desenvolvimento não acessava o Siconfi, então confira o resultado de cada página com o demonstrativo oficial na primeira utilização.
- **CORS:** se o navegador bloquear a consulta direta à API, a busca automática **não recua** e aparece a mensagem de erro. Use *Carregar JSON Local* (ou *Dados paralelos* no painel de Indicadores).
- **Dados oficiais prevalecem:** o Siconfi pode diferir do relatório do sistema contábil do município (retificações, deduções da RCL, relatórios ainda não homologados). Em caso de diferença, vale o demonstrativo oficial homologado.
- **Períodos parciais:** metas da LDO e mínimos constitucionais (25% educação, 15% saúde) são anuais. Valores de períodos parciais não projetam o fechamento do exercício.
- **Faixas de cor:** só pessoal e DCL têm limites fixados em lei. As faixas dos indicadores gerenciais (investimento, rigidez, autonomia, cancelamento de RP, dívida ativa) são ilustrativas.
- **Educação e saúde:** os Anexos 8 e 12 não são mais enviados ao Siconfi; o cartão só traz valor se o Anexo 14 ou um JSON anexado tiver essas linhas.
- **Chart.js:** é carregado de `cdn.jsdelivr.net/npm/chart.js` sem versão fixa. Para uso estável em produção, convém fixar uma versão ou hospedar o arquivo.

---

## Como adaptar para outro município

Em cada arquivo, altere:

1. O valor padrão do campo **Ente (código IBGE)** (`id="filtroEnte"`, hoje `4104204`).
2. Os textos fixos "Campo Largo" no `<title>`, no cabeçalho de impressão e no rodapé (o nome da instituição na tela e na impressão vem da própria resposta da API quando há dados).
3. Se for uma esfera diferente, o campo **Esfera** (nos RREO) ou o valor oculto `filtroEsfera` (nos RGF e Indicadores).

---

## Como alterar ou criar um anexo

- Para **mudar o período padrão ou o limite de tentativas**, procure por `ultimoPeriodoFechado` / `ultimoQuadrimestreFechado` e por `LIMITE_TENTATIVAS` (ou `max` em `buscarFonte`, no painel de Indicadores).
- Para **criar a página de um anexo novo**, copie o HTML mais parecido (por exemplo, `rreo_anexo9_atualizado.html` para anexos com várias colunas, ou `rreo_anexo13_atualizado.html` para anexos com linhas e projeções), troque `no_anexo` e adapte a função que classifica as contas (`bucketDoItem` ou equivalente) e as tabelas.
- Em qualquer alteração, valide o script antes de usar: extraia o conteúdo de `<script>` e rode `node --check arquivo.js`.
