'use strict';

const electron = require('electron');
const path = require('path');
const TrayService = require('./Scripts/app/tray-service.js');
const url = require('url');

//const logger = require('./Scripts/app/logger');

const { app, BrowserWindow } = electron;

let mainWindow = null;
let splash = null;

class AppService {
  constructor() {
    this.tray = new TrayService(app, BrowserWindow);
  }
  createWindow() {
    //Create a browser window
    mainWindow = new BrowserWindow({
      width: 1200,
      height: 800,
      show: false,
      minWidth: 1000,
      minHeight: 600,
      titleBarStyle: 'customButtonsOnHover',
      frame: false
    });

    splash = new BrowserWindow({
      width: 120,
      height: 120,
      transparent: true,
      frame: false,
      alwaysOnTop: true
    });

    splash.loadURL(
      url.format({
        pathname: path.join(__dirname, 'views/Home/splash.html'),
        protocol: 'file:',
        slashes: true
      })
    );
    splash.center();

    mainWindow.loadURL(
      url.format({
        pathname: path.join(__dirname, 'views/Home/index.html'),
        protocol: 'file:',
        slashes: true
      })
    );
    mainWindow.center();

    mainWindow.webContents.openDevTools();

    mainWindow.once('ready-to-show', () => {
      splash.destroy();
      mainWindow.show();
    });

    mainWindow.on('closed', () => {
      mainWindow = null;
    });

    mainWindow.on('show', () => {
      this.tray.setHighlightMode('always');
    });
    mainWindow.on('hide', () => {
      this.tray.setHighlightMode('never');
    });
  }

  run() {
    app.on('ready', () => {
      this.createWindow();
      this.tray.createTray(mainWindow);
      // logger.info('Uygulama çalıştı.');
    });
  }

  quit() {
    app.quit();
    // logger.warn('Uygulama stop edildi.');
  }
}

const appService = new AppService();
appService.run();

//events
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
app.on('activate', () => {
  if (win === null) {
    this.createWindow();
  }
});
