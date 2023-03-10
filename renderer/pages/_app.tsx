import Icon from "@/components/Icon"
import Toggle from "@/components/Toggle"
import "@/styles/globals.css"
import { ipcRenderer } from "electron"
import type { AppProps } from "next/app"
import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
const ipc = ipcRenderer

const NAV_ITEMS = {
  HOME: "/home",
  TREYARCH: "/studios/treyarch",
  "INFINITE WARD": "/studios/infiniteward",
  SLEEDGEHAMER: "/studios/sleedgehammer",
}

const handleBack = (router) => () => router.asPath !== "/home" && router.back()

// App Function

const closeButton = () => {
  ipc.send("closeApp")
}

const minimizeButton = () => {
  ipc.send("minimizeApp")
}

const maximizeButton = () => {
  ipc.send("maximizeApp")
}

const HeaderIcons = (props) => {
  return (
    <Icon
      className="cursor-pointer hover:text-blue-800 active:bg-blue-500"
      {...props}
    />
  )
}

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter()
  const [maximize, setMaximisize] = useState(false)

  const changeMaxResButton = (isMaximizedApp) => setMaximisize(isMaximizedApp)

  useEffect(() => {
    ipc.on("isMaximized", () => {
      changeMaxResButton(true)
    })

    ipc.on("isRestored", () => {
      changeMaxResButton(false)
    })
  })

  return (
    <>
      <header className="sticky top-0 z-10 bg-blue-600 shadow-xl dark:bg-gray-900">
        {/* Window Bar */}

        <div className="flex w-full justify-between">
          <div className="flex w-full">
            <HeaderIcons
              icon="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
              onClick={handleBack(router)}
              title="Back"
            />
            <div id="drag" className="w-full">
              <h2 className="ml-5 font-medium text-gray-400">ZOMBIES WIKI</h2>
            </div>
          </div>
          <div className="flex">
            <HeaderIcons
              onClick={minimizeButton}
              icon="M19.5 12h-15"
              title="Minimize"
            />
            <HeaderIcons
              onClick={maximizeButton}
              title={maximize ? "Restore" : "Maximize"}
              icon={
                maximize
                  ? "M9 9V4.5M9 9H4.5M9 9L3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5l5.25 5.25"
                  : "M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
              }
            />
            <HeaderIcons
              onClick={closeButton}
              title="Close"
              icon="M6 18L18 6M6 6l12 12"
            />
          </div>
        </div>

        {/* Nav Bar */}

        <div className="flex justify-between p-5 text-white ">
          <h1 className="font-bold">Zombies Wiki ?????????????</h1>
          <nav>
            <ul className="flex gap-6">
              <Toggle />
              {/* <LightDarkButton /> */}
              {Object.entries(NAV_ITEMS).map(([name, route]) => (
                <li key={name} className="hover:underline">
                  <Link href={route}>{name}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
