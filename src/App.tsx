import './App.css'
import './i18n.ts'
import { useTranslation } from 'react-i18next'

function App() {
  const { t, i18n } = useTranslation()

  const changeLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const language = event.target.value
    i18n.changeLanguage(language)
  }

  return (
    <>
      <h1>{t('welcome')}</h1>
      <p>{t('description')}</p>

      <label htmlFor='language-select'>{t('changeLanguage')}:</label>
      <select
        onChange={changeLanguage}
        defaultValue={i18n.language}
        id='language-select'
      >
        <option value='en'>{t('english')}</option>
        <option value='it'>{t('italian')}</option>
        {/* Add more <option> elements here for additional languages */}
      </select>
    </>
  )
}

export default App
