import Metadata from '../components/Metadata'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import HeroHeading from '../components/HeroHeading'
import { Wrapper } from '../styles'
import styled from 'styled-components'

const Meta = styled.p`
  font-size: ${({ theme }) => theme.font.desktop.meta};
`
export default function Home() {
  return (
    <>
      <Metadata desc="privacy policy for galina.to" />
      <Nav />
      <main>
        <HeroHeading title="privacy policy" subtitle="information &amp; more" />
        <Wrapper>
          <Meta>Last updated: 02/08/21</Meta>
          <p>
            This privacy notice discloses the privacy practices for
            https://galina.to.
          </p>
          <p>
            This privacy notice applies solely to information collected by this
            website. It will notify you of the following:
          </p>
          <ul>
            <li>
              What personally identifiable information is collected from you
              through the website and how it is used.
            </li>
            <li>
              What choices are available to you regarding the use of your data.{' '}
            </li>
            <li>
              The security procedures in place to protect the misuse of your
              information.
            </li>
            <li> How you can correct any inaccuracies in the information.</li>
          </ul>
          <h5>Information Collection, Use, and Sharing</h5>
          <p>
            Like many site operators, this Site collects information that your
            browser sends whenever you visit the Site (&quot;Log Data&quot;).
          </p>
          <p>
            This Log Data may include information such as your computer&#39;s
            Internet Protocol (&quot;IP&quot;) address, browser type, browser
            version, the pages of our Site that you visit, the time and date of
            your visit, the time spent on those pages and other statistics.
          </p>
          <p>
            In addition, this Site uses third party services such as Google
            Analytics that collect, monitor and analyze the data.
          </p>
          <p>
            Unless you ask me not to, I may contact you via email in the future
            to tell you about specials, new products or services, or changes to
            this privacy policy.
          </p>
          <h5>Your Access to and Control Over Information</h5>
          <p>
            You may opt out of any future contacts from me at any time. You can
            do the following at any time by contacting me via{' '}
            <a href="mailto:hi@joshuagalinato.com" target="_blank" class="url">
              hi@joshuagalinato.com
            </a>
          </p>
          <ul>
            <li> See what data I have about you, if any. </li>
            <li> Change/correct any data I have about you. </li>
            <li> Have me delete any data I have about you. </li>
            <li> Express any concern you have about my use of your data.</li>
          </ul>
          <h5>Security</h5>
          <p>
            The security of your Personal Information is important, but remember
            that no method of transmission over the Internet, or method of
            electronic storage, is 100% secure. While this Site strives to use
            commercially acceptable means to protect your Personal Information,
            I cannot guarantee its absolute security.
          </p>
          <p>
            If you feel that I am not abiding by this privacy policy, you should
            contact me immediately email at{' '}
            <a href="mailto:hi@joshuagalinato.com" target="_blank" class="url">
              hi@joshuagalinato.com
            </a>
            .
          </p>
        </Wrapper>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}
