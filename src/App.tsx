import './App.css'
import './i18n.ts' // * Import the i18n configuration
import { useTranslation } from 'react-i18next'

function App() {
  // * Use the t() function to translate text, and the i18n object to change the language
  const { t, i18n } = useTranslation()

  // * Change language method
  const changeLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const language = event.target.value
    i18n.changeLanguage(language)
  }

  return (
    <>
      <h1>{t('welcome')}</h1>
      <p>{t('description')}</p>

      {/* CHANGE LANGUAGE */}
      <label htmlFor='language-select'>{t('changeLanguage')}:</label>
      <select
        onChange={changeLanguage}
        defaultValue={i18n.language}
        id='language-select'
      >
        <option value='en'>{t('english')}</option>
        <option value='it'>{t('italian')}</option>
        <option value='es'>{t('spanish')}</option>
        {/* Add more languages here... */}
      </select>
    </>
  )
}

export default App
