import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
html,
body {
  font-family: 'Inter', sans-serif;
  font-size: 62.5%;
  font-weight: 400;
  letter-spacing: 0.05rem;
}
#__next {
  margin: 3.2rem auto;
  margin-bottom: 9.6rem;
  max-width: 128rem;

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.tablet}) {
    margin-bottom: 4.8rem;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.phone}) {
  }
}
header {

  margin: 0 1.6rem;
}
main {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-column-gap: 3.2rem;
  margin: 0 1.6rem;

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.tablet}) {
    grid-column-gap: 3.2rem;
  }
  @media screen and (max-width: ${({ theme }) => theme.breakPoint.phoneLarge}) {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, min-content);
    grid-column-gap: 1.6rem;
  }
}
footer {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-column-gap: 3.2rem;
  margin: 0 1.6rem;

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.phoneLarge}) {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, min-content);
    grid-column-gap: 1.6rem;
  }
}

h1 {
  font-size: ${({ theme }) => theme.font.desktop.h1};
  line-height: ${({ theme }) => theme.lineHeight.desktop.h1};
  margin-top: ${({ theme }) => theme.margin.desktop.top};
  color: ${({ theme }) => theme.color.black};
  text-transform: capitalize;
  font-weight: 900;

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.tablet}) {
  font-size: ${({ theme }) => theme.font.phone.h1};
  line-height: ${({ theme }) => theme.lineHeight.phone.h1};
  }
  @media screen and (max-width: ${({ theme }) =>
    theme.breakPoint.phoneMedium}) {
  font-size: ${({ theme }) => theme.font.phone.h1Medium};
  line-height: ${({ theme }) => theme.lineHeight.phone.h1Medium};
  }
  @media screen and (max-width: ${({ theme }) => theme.breakPoint.phoneSmall}) {
  font-size: 5.6rem;
  line-height: calc(5.6rem + .8rem);
  }
}

 
h2 {
  font-size: ${({ theme }) => theme.font.desktop.h2};
  line-height: ${({ theme }) => theme.lineHeight.desktop.h2};
  text-transform: capitalize;
  margin-bottom: ${({ theme }) => theme.margin.desktop.bottom};
  color: ${({ theme }) => theme.color.lightGreen};
  font-weight: 400;
  
  @media screen and (max-width: ${({ theme }) => theme.breakPoint.tablet}) {
  font-size: ${({ theme }) => theme.font.phone.h2};
  line-height: ${({ theme }) => theme.lineHeight.phone.h2};
  margin-bottom: 1.6rem;
  }
  @media screen and (max-width: ${({ theme }) =>
    theme.breakPoint.phoneMedium}) {
  font-size: 2.4rem; 
  line-height: 3.2rem;
  margin-bottom: 1.6rem;
  }
}
h3 {
    font-size: ${({ theme }) => theme.font.desktop.h3};
    line-height: ${({ theme }) => theme.lineHeight.desktop.h3};
    text-transform: capitalize;
    font-weight: 900;

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.tablet}) {
  font-size: ${({ theme }) => theme.font.phone.h3};
  line-height: ${({ theme }) => theme.lineHeight.phone.h3};
  }
}
h4 {
  font-size: ${({ theme }) => theme.font.desktop.h4};
  line-height: ${({ theme }) => theme.lineHeight.desktop.h4};
  margin-bottom: 1.6rem;
  font-weight: 700;
  text-transform: capitalize;
}
h5 {
    font-size: ${({ theme }) => theme.font.desktop.h5};
    line-height: ${({ theme }) => theme.lineHeight.desktop.h5};
    font-weight: 700;
    text-transform: capitalize;
    margin: 1.6rem 0;
}
h6 {
    font-size: ${({ theme }) => theme.font.desktop.h6};
    line-height: ${({ theme }) => theme.lineHeight.desktop.h6};
    font-weight: 500;
    text-transform: capitalize;
    margin: 1.6rem 0;
    text-decoration: underline;
}

p {
  font-size: ${({ theme }) => theme.font.desktop.p};
  line-height: ${({ theme }) => theme.lineHeight.desktop.p};
  margin-bottom: 1.6rem;

}

a {
  color: ${({ theme }) => theme.color.green};
  text-decoration: none;
  &:hover {
  color: ${({ theme }) => theme.color.lightGreen};
  }
}

input {
  font-size: ${({ theme }) => theme.font.desktop.p};
  border-radius: 3.2rem;
  outline:none;
  border: none;
  padding: .8rem 2.4rem;
  width: 100%;

::-webkit-input-placeholder {
  color: black;
  opacity: .7;
  }
}

blockquote {
  background: ${({ theme }) => theme.color.grey};
  padding: 2.4rem;
  margin-bottom: 2.4rem;
  border-left: 4px solid ${({ theme }) => theme.color.lightGreen};
}
blockquote p {
}

ul {
  margin-bottom: 3.2rem;
}
ul li {
font-size: ${({ theme }) => theme.font.desktop.p};
line-height: ${({ theme }) => theme.lineHeight.desktop.p};
margin-bottom: .8rem;

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.tablet}) {
    list-style: none;
      }
}
ol {
font-size: ${({ theme }) => theme.font.desktop.p};
}
ol li {
 margin-bottom : 1.6rem ;
 margin-left: 2.4rem;
}

pre {
  font-family: Consolas, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", Monaco, "Courier New", Courier, monospace;
  overflow-x: auto;
  tab-size: 2;
  background: ${({ theme }) => theme.color.grey};
  color: ${({ theme }) => theme.color.black};
  padding: 1.6rem;
  font-size: ${({ theme }) => theme.font.desktop.p};
  line-height: ${({ theme }) => theme.lineHeight.desktop.p};
  margin-bottom: 1.6rem;
  border: .1px grey solid;
  border-radius: 5px;
}

code {
  font-family: Consolas, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", Monaco, "Courier New", Courier, monospace;
  letter-spacing: -0.05em;
  background: ${({ theme }) => theme.color.grey};
  color: ${({ theme }) => theme.color.black};
  border: .1px grey solid;
  border-radius: 5px;
  padding: 0rem .4rem;
}

pre code {
  padding: 0rem;
  background: none;
  border: none;
  background: ${({ theme }) => theme.color.grey};
  color: ${({ theme }) => theme.color.black};
}

// For the button order in the blog list
.order {
    @media screen and (max-width: ${({ theme }) => theme.breakPoint.tablet}) {
          order: 4;
  }
}
// For the cookie consent 
.CookieConsent {
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 1.6rem;
  background: ${({ theme }) => theme.color.lightGreen};
  position: fixed;
  left: 0; 
  bottom: 0;
  font-size: ${({ theme }) => theme.font.desktop.p};
  line-height: ${({ theme }) => theme.lineHeight.desktop.p};
  margin: 1.6rem;
  border-radius: ${({ theme }) => theme.borderRadius};

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.tablet}) {
  width: 70%;
  left: 50%;
  bottom: 50%;
  transform: translate(-50%, 0%);
  }
  @media screen and (max-width: ${({ theme }) => theme.breakPoint.phoneLarge}) {
  width: 90%;
  left: 50%;
  bottom: 50%;
  transform: translate(-50%, 0%);
  z-index: 99;
  margin: 0;
  }
}

#rcc-confirm-button {
  background: ${({ theme }) => theme.color.darkGreen};
  color: ${({ theme }) => theme.color.white};
  border-radius: ${({ theme }) => theme.borderRadius};
  font-size: ${({ theme }) => theme.font.desktop.p};
  padding: .8rem;
  margin-top: ${({ theme }) => theme.margin.desktop.top};
  width: 100%;
  border: none;
}

`
export default GlobalStyle
