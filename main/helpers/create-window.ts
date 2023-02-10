import {
  BrowserWindow,
  BrowserWindowConstructorOptions
} from "electron"
import { setupTitlebar, attachTitlebarToWindow } from "custom-electron-titlebar/main"

// setup the titlebar main process
setupTitlebar()

const createWindow = (windowName, options) => {
  const browserOptions: BrowserWindowConstructorOptions = {
    ...options,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      ...options.webPreferences,
    },
    frame: false,
  }
  const win = new BrowserWindow(browserOptions)

  attachTitlebarToWindow(win)

  return win
}

export default createWindow