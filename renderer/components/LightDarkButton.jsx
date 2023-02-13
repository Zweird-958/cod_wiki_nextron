import Icon from "@/components/Icon"
import { useEffect, useState } from "react"

const LightDarkButton = () => {
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark")
      setEnabled(true)
    } else {
      document.documentElement.classList.remove("dark")
      setEnabled(false)
    }
  }, [])

  const handleTheme = () => {
    const newTheme = !enabled
    setEnabled(newTheme)
    localStorage.theme = newTheme ? "dark" : "white"

    if (localStorage.theme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }

  return (
    <>
      {enabled ? (
        <Icon
          onClick={handleTheme}
          className="rounded bg-red-600 shadow shadow-red-600 hover:text-yellow-300"
          icon="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
        />
      ) : (
        <Icon
          onClick={handleTheme}
          className="hover:text-gray-900"
          icon="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
        />
      )}
    </>
  )
}

export default LightDarkButton
