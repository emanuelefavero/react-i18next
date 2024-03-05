import './App.css'
import './i18n.ts'
import { useTranslation } from 'react-i18next'

function App() {
  const { t, i18n } = useTranslation()

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language)
  }

  return (
    <>
      <h1>{t('welcome')}</h1>
      <button onClick={() => changeLanguage('en')}>EN</button>
      <button onClick={() => changeLanguage('it')}>IT</button>
    </>
  )
}

export default App
