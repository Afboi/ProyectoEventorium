import { useEffect, useState } from "react"

//Hook encargado de realizar los cambios del tema claro a oscuro colocando etiquetas de estilo en el documento html base.

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
