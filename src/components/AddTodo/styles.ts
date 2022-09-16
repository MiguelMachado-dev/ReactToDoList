import styled from 'styled-components'
import media from 'styled-media-query'

export const Container = styled.div`
  display: flex;
  padding: 2.4rem;

  ${media.lessThan('medium')`
    padding: 2.4rem 0;
    margin-top: 1.8rem;
  `}
`

export const Input = styled.input`
  font-weight: 400;
  font-size: 3.6rem;
  line-height: 1.5;
  letter-spacing: 0.1em;

  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
  background-color: #25273c;
  padding: 1.8rem 3.2rem;
  font-size: 1.8rem;
  color: rgba(255, 255, 255, 0.7);

  border: 0;

  &:focus {
    outline: 2px auto rgba(191, 86, 255, 0.79);
  }

  ${media.lessThan('medium')`
    width: 100%;
    font-size: 1.6rem;
  `}
`

export const Button = styled.button`
  min-width: 8rem;
  padding: 0.6rem 1.2rem;
  font-size: 1.8rem;
  cursor: pointer;
  transition: filter 0.2s ease-in-out;
  border: none;
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
  background-color: #206510;
  color: #fff;

  &:disabled {
    background-color: rgba(72, 64, 64, 0.37);
    cursor: not-allowed;

    &:hover {
      background-color: rgba(72, 64, 64, 0.25);
    }
  }

  &:hover {
    filter: brightness(0.9);
  }

  &:focus {
    outline: 5px auto rgba(191, 86, 255, 0.79);
  }
`

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
`
