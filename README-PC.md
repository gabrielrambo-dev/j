# CodeStudy Pro Desktop PC - Instalador Windows

Versão limpa apenas para PC, agora com instalador.

## O que foi adicionado

- Instalador Windows `.exe` com NSIS.
- Atalho na área de trabalho.
- Atalho no menu iniciar.
- Opção de escolher pasta de instalação.
- App instalado como programa normal.

## O que foi removido/evitado

- Não é mais só EXE portátil.
- Não precisa ficar procurando o arquivo `.exe` toda vez.
- Não envie `node_modules` para o GitHub.
- Não envie `dist` para o GitHub.

## O que ficou

- `app/index.html` — app desktop.
- `index-pc-browser.html` — versão navegador.
- `main.js` — inicialização Electron.
- `package.json` — Electron + electron-builder.
- `.github/workflows/build-windows.yml` — gera instalador Windows.
- `README-PC.md` — instruções.

## Como gerar instalador no GitHub

1. Extraia o ZIP.
2. Envie os arquivos para o GitHub.
3. Vá em Actions.
4. Rode `Build Windows Installer`.
5. Baixe o arquivo em Artifacts.
6. Execute o instalador `CodeStudy-Pro-Desktop-Setup`.
7. Marque/crie atalho na área de trabalho.
8. Depois abra pelo atalho, não pelo arquivo do GitHub.

## Como rodar no PC pelo Node

```bash
npm install
npm start
```

## Como gerar instalador localmente

```bash
npm install
npm run build:win
```

O instalador vai aparecer na pasta `dist`.
