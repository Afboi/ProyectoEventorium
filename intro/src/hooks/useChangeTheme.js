import { useEffect, useState } from "react"

//Hook in charge of making the changes from light to dark theme by placing style tags in the base html document.

export const useChangeTheme = () => {

    const [theme, setTheme] = useState('light')

    useEffect(() => {
        if (theme === 'dark') {
            document.querySelector('html').classList.add('dark')
        } else {
            document.querySelector('html').classList.remove('dark')
        }
    }, [theme])


    const handleChangeTheme = () => {
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light')
    }

    return handleChangeTheme;
}
