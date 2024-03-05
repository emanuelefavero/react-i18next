# React i18next

This is a simple example of how to use i18next with React

> Note: We are using `Vite` to build this project, but you can use `Next.js` or any other bundler

## How to use

1. Clone this repository
2. Install the dependencies with `npm install`
3. Run the project

```bash
npm run dev
```

## How to add a new language

- Create a new file called `translation.json` inside its respective language folder (e.g. `en` for English) and put it inside the `src/locales` folder

```json
{
  "welcome": "Hello World"
}
```

- Add the new language to the `i18n.ts` file

```javascript
// Other code here...

// Import the new language
import en from './locales/en/translation.json'

// Add the new language to the resources object
const resources = {
  en: {
    translation: en,
  },
  // Other languages here...
}
```

- Add the translation in your React components:

```jsx
import './i18n.ts' // * Import the i18n configuration
import { useTranslation } from 'react-i18next'

export default function App() {
  // * Use the t() function to translate text, and the i18n object to change the language
  const { t, i18n } = useTranslation()

  return (
    <>
      <h1>{t('welcome')}</h1>
      <button onClick={() => i18n.changeLanguage('en')}>English</button>
    </>
  )
}
```

## Resources

- [i18next documentation](https://www.i18next.com/)
- [react-i18next documentation](https://react.i18next.com/)
- [Vite documentation](https://vitejs.dev/)
- [Next.js documentation](https://nextjs.org/)

## License

- [MIT](LICENSE.md)
