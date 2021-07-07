'use strict';

const electron = require('electron');
const { app, Tray, Menu } = electron;
const lo_includes = require('lodash.includes');

const path = require('path');

module.exports = class TrayService {
  constructor(appService) {
    this.appService = appService;
    this.tray = null;
  }

  createTray(window) {
    let iconName =
      process.platform === 'win32' ? 'windows-icon.png' : 'default-icon.png';

    let iconPath = path.join(__dirname, '../../assets/images/icon/', iconName);
    let _isRestarting = false;

    let tray = new Tray(iconPath);
    let menu = Menu.buildFromTemplate([
      {
        label: 'Electronian',
        click: () => {
          window.show();
        }
      },
      {
        type: 'separator'
      },
      {
        label: 'Yeniden Başlat',
        click: () => {
          if (_isRestarting) return;
          _isRestarting = true;

          const args = process.argv.slice(1);
          if (!lo_includes(args, '--restarted')) args.push('--restarted');

          app.relaunch({ args });
          app.exit(0);
        }
      },
      {
        label: 'Çıkış',
        click: () => {
          app.exit(0);
        }
      }
    ]);
    tray.on('click', () => {
      window.isVisible() ? window.hide() : window.show();
    });

    tray.setToolTip('Electronian');
    tray.setContextMenu(menu);

    this.tray = tray;
  }
  setHighlightMode(mode) {
    this.tray.setHighlightMode(mode);
  }
};
