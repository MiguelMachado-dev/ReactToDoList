import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  margin-top: 7rem;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;

  ${media.lessThan('medium')`
    margin-top: 3rem;
  `}
`

export const Content = styled.div`
  margin-top: 4.8rem;
  flex: 1 0 auto;

  ${media.lessThan('medium')`
    margin-top: 1.6rem;
  `}
`

export const SectionFooter = styled.section`
  margin-top: 4rem;
  padding-bottom: 1.6rem;
  background-color: rgb(250, 250, 250);

  padding-top: 11.2rem;
  clip-path: polygon(0 15%, 100% 0%, 100% 100%, 0 100%);

  ${media.lessThan('medium')`
    padding-top: 6rem;
  `}
`

export const Footer = styled.footer`
  display: flex;
  justify-content: center;
  color: var(--background-color);
  p {
    font-size: 2rem;

    ${media.lessThan('medium')`
      font-size: 1.6rem;
    `}
  }
`
