import {
  BrowserWindow,
  BrowserWindowConstructorOptions
} from "electron"
import { setupTitlebar, attachTitlebarToWindow } from "custom-electron-titlebar/main"

// setup the titlebar main process
setupTitlebar()

const createWindow = (windowName, options) => {
  const browserOptions: BrowserWindowConstructorOptions = {
    // ...state,
    ...options,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      // sandbox: false,
      // preload: path.join(__dirname, 'preload.js'),
      ...options.webPreferences,
    },
  // transparent: true
    // titleBarStyle: "hidden",
    //frame: false, // needed if process.versions.electron < 14
  }
  const win = new BrowserWindow(browserOptions)

  attachTitlebarToWindow(win)

  return win
}

export default createWindow