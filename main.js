const { app, BrowserWindow, Menu, shell } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 1280,
    height: 820,
    minWidth: 980,
    minHeight: 640,
    backgroundColor: '#060816',
    title: 'CodeStudy Pro Desktop',
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: true
    }
  });

  win.loadFile(path.join(__dirname, 'app', 'index.html'));

  const template = [
    {
      label: 'Arquivo',
      submenu: [
        { role: 'reload', label: 'Recarregar' },
        { role: 'toggleDevTools', label: 'DevTools' },
        { type: 'separator' },
        { role: 'quit', label: 'Sair' }
      ]
    },
    {
      label: 'Estudo',
      submenu: [
        { label: 'Cursos', click: () => win.webContents.executeJavaScript("go('home')") },
        { label: 'Estudo de Hoje', click: () => win.webContents.executeJavaScript("go('study')") },
        { label: 'Projetos', click: () => win.webContents.executeJavaScript("go('projects')") },
        { label: 'IA', click: () => win.webContents.executeJavaScript("go('ai')") },
        { label: 'Progresso', click: () => win.webContents.executeJavaScript("go('progress')") }
      ]
    },
    {
      label: 'Ajuda',
      submenu: [
        {
          label: 'Abrir dados do app',
          click: () => shell.openPath(app.getPath('userData'))
        }
      ]
    }
  ];

  Menu.setApplicationMenu(Menu.buildFromTemplate(template));
}

app.whenReady().then(() => {
  createWindow();
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});