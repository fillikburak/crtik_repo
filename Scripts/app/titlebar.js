(function() {
  const { remote } = require('electron');
  $('#close-btn').on('click', () => {
    remote.BrowserWindow.getFocusedWindow().close();
  });
  $('#min-btn').on('click', () => {
    remote.BrowserWindow.getFocusedWindow().minimize();
  });
  $('#max-btn').on('click', () => {
    remote.BrowserWindow.getFocusedWindow().isMaximized()
      ? remote.BrowserWindow.getFocusedWindow().unmaximize()
      : remote.BrowserWindow.getFocusedWindow().maximize();
  });
})();
