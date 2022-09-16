import styled from 'styled-components'
import media from 'styled-media-query'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #25273c;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  max-width: 666px;
  width: inherit;
  padding: 0.8rem 2.6rem;
  border: 2px solid #ad02fe;

  ${media.lessThan('medium')`
    padding: 0.8rem 1.4rem;
  `}
`

export const Quantity = styled.p`
  font-size: 2.4rem;

  ${media.lessThan('medium')`
    font-size: 1.6rem;
  `}
`

export const Action = styled.button`
  background-color: #25273c;
  color: var(--text-color);
  border: 0;
  cursor: pointer;
  font-size: 2.4rem;
  line-height: 39px;
  letter-spacing: 0.1em;
  transition: 0.2s all ease-in-out;
  padding: 0.4rem 1.2rem;
  border-radius: 8px;

  &:hover {
    filter: brightness(0.8);
  }

  ${media.lessThan('medium')`
    font-size: 1.6rem;
    padding: 0.4rem 0.8rem;
  `}
`
