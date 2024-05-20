import { useEffect, useState } from "react"

export const changeTheme = () => {

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
