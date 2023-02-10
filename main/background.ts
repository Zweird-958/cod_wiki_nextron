import { app, ipcMain } from "electron"
import serve from "electron-serve"
import createWindow from "./helpers/create-window"

const ipc = ipcMain
const isProd: boolean = process.env.NODE_ENV === "production"

if (isProd) {
  serve({ directory: "app" })
} else {
  app.setPath("userData", `${app.getPath("userData")} (development)`)
}

(async () => {
  await app.whenReady()

  const mainWindow = createWindow("main", {
    minWidth: 1000,
    minHeight: 600,
    // webPreferences: {devTools: true}
  })


  
  mainWindow.setMenu(null)

  if (isProd) {
    await mainWindow.loadURL("app://./home.html")
  } else {
    const port = process.argv[2]
    await mainWindow.loadURL(`http://localhost:${port}/home`)
    mainWindow.webContents.openDevTools()
  }

  ipc.on("minimizeApp", () => {
    mainWindow.minimize()
  })

  ipc.on("maximizeApp", () => {
    if (mainWindow.isMaximized()) {
      mainWindow.restore()
    } else {
      mainWindow.maximize()
    }
  })

  mainWindow.on("unmaximize", () => {
    mainWindow.webContents.send("isRestored")
  })
})()

ipc.on("closeApp", () => {
  app.quit()
})


app.on("window-all-closed", () => {
  app.quit()
})
