const { contextBridge } = require('electron');

// Expose protected methods that allow the renderer process to use
// the ipcRenderer without exposing the entire object
contextBridge.exposeInMainWorld('electronAPI', {
  // Add any API methods you need to expose to the renderer process here
  // For example:
  // getAppVersion: () => require('electron').app.getVersion(),
});
