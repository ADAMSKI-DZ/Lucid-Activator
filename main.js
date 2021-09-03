const { app, BrowserWindow, ipcMain, globalShortcut } = require("electron");
const path = require("path");
const { exec } = require("child_process");

const iconPath = path.join(__dirname, "data/logo.png");
let mainWindow = null;

app.on("ready", () => {
  mainWindow = new BrowserWindow({
    width: 712,
    height: 634,
    frame: false,
    resizable: false,
    transparent: true,
    show: false,
    icon: iconPath,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      preload: path.join(__dirname, "preload.js"),
      devTools: false,
    },
  });
  mainWindow.loadFile("src/index.html");
  let splashScreen = new BrowserWindow({
    width: 500,
    height: 500,
    frame: false,
    transparent: true,
    resizable: false,
    icon: iconPath,
    webPreferences: {
      devTools: false,
    },
  });
  globalShortcut.register("CmdOrCtrl+R", () => {});
  splashScreen.loadURL(`file://${__dirname}/src/splash.html`);
  mainWindow.webContents.on("did-finish-load", () => {
    setTimeout(() => {
      if (splashScreen) {
        splashScreen.close();
      }
      mainWindow.show();
    }, 5000);
  });
});
app.on("window-all-closed", function () {
  if (process.platform !== "darwin") app.quit();
});

ipcMain.on("minimize-the-app", () => {
  mainWindow.minimize();
});
ipcMain.on("close-the-app", () => {
  app.quit();
});

ipcMain.on("activate-windows-professional", () => {
  exec(
    "cd resources/app/admin-bat-files && start Windows10-Professional-admin"
  );
  mainWindow.webContents.send("show");
});
ipcMain.on("activate-windows-professionalN", () => {
  exec(
    "cd resources/app/admin-bat-files && start Windows10-Professional-N-admin"
  );
  mainWindow.webContents.send("show");
});
ipcMain.on("activate-windows-home", () => {
  exec("cd resources/app/admin-bat-files && start Windows10-Home-admin");
  mainWindow.webContents.send("show");
});
ipcMain.on("activate-windows-singleLanguage", () => {
  exec(
    "cd resources/app/admin-bat-files && start Windows10-Home-Single-Language-admin"
  );
  mainWindow.webContents.send("show");
});
ipcMain.on("activate-windows-homeN", () => {
  exec("cd resources/app/admin-bat-files && start Windows10-Home-N-admin");
  mainWindow.webContents.send("show");
});
ipcMain.on("activate-windows-countrySpecific", () => {
  exec(
    "cd resources/app/admin-bat-files && start Windows10-Home-Country-Specific-admin"
  );
  mainWindow.webContents.send("show");
});
ipcMain.on("activate-windows-enterprise", () => {
  exec("cd resources/app/admin-bat-files && start Windows10-Enterprise-admin");
  mainWindow.webContents.send("show");
});
ipcMain.on("activate-windows-enterpriseN", () => {
  exec(
    "cd resources/app/admin-bat-files && start Windows10-Enterprise-N-admin"
  );
  mainWindow.webContents.send("show");
});
ipcMain.on("activate-windows-education", () => {
  exec("cd resources/app/admin-bat-files && start Windows10-Education-admin");
  mainWindow.webContents.send("show");
});
ipcMain.on("activate-windows-educationN", () => {
  exec("cd resources/app/admin-bat-files && start Windows10-Education-N-admin");
  mainWindow.webContents.send("show");
});
