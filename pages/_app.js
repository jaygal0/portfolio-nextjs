import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../styles/globalStyles'
import Theme from '../styles/theme'
import '../styles/styles.css'
import SimpleReactLightbox from 'simple-react-lightbox'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <SimpleReactLightbox>
        <ThemeProvider theme={Theme}>
          <GlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>
      </SimpleReactLightbox>
    </>
  )
}

export default MyApp
