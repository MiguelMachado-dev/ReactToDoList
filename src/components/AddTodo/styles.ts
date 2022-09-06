import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  gap: 0.8rem;
  padding: 2.4rem;
`

export const Input = styled.input`
  padding: 0.6rem;
  font-size: 1.8rem;
`

export const Button = styled.button`
  padding: 0.6rem 1.2rem;
  font-size: 1.8rem;
  cursor: pointer;
  transition: filter 0.2s ease-in-out;
  border-radius: 0.4rem;
  border: none;

  &:disabled {
    cursor: not-allowed;
    color: #1d1c1c;
  }

  &:hover {
    filter: brightness(0.9);
  }
`
