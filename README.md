# Treinamento React

Projeto React + TypeScript + Vite com padronizacao automatica de codigo usando ESLint, Prettier, EditorConfig, Husky e lint-staged.

## Scripts

- npm run dev: inicia o servidor de desenvolvimento.
- npm run build: gera o build de producao.
- npm run preview: sobe o build localmente para teste.
- npm run lint: valida regras de ESLint (falha com warning).
- npm run lint:fix: corrige automaticamente problemas de lint quando possivel.
- npm run format: formata todo o projeto com Prettier.
- npm run format:check: valida se os arquivos estao formatados.
- npm run check: executa lint + format check.

## Padroes configurados

- ESLint com TypeScript + React Hooks + React Refresh.
- Prettier integrado ao ESLint para evitar conflito de regras de estilo.
- EditorConfig para manter padrao de indentacao/fim de linha em qualquer editor.
- Husky com pre-commit rodando lint-staged.
- lint-staged para aplicar lint/format somente nos arquivos alterados antes do commit.

## Fluxo recomendado

1. Durante o desenvolvimento, rode npm run dev.
2. Antes de abrir PR, rode npm run check.
3. No commit, o hook pre-commit ja valida e formata os arquivos alterados automaticamente.

## GitHub API sem bater rate limit

Crie um arquivo `.env.local` na raiz do projeto com um token pessoal do GitHub:

```bash
VITE_GITHUB_TOKEN=seu_token_aqui
```

Use um token pessoal do GitHub com permissao de leitura publica. Com isso, as chamadas deixam de usar o limite anonimo da API e passam a usar a autenticacao do seu usuario.

## Extensoes recomendadas no VS Code

- ESLint (dbaeumer.vscode-eslint)
- Prettier - Code formatter (esbenp.prettier-vscode)
