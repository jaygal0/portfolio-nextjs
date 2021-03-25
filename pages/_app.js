import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../styles/globalStyles'
import Theme from '../styles/theme'
import '../styles/styles.css'
import Scroll from '../components/Scroll'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <Component {...pageProps} />
        <Scroll />
      </ThemeProvider>
    </>
  )
}

export default MyApp
