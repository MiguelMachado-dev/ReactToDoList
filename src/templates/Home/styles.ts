import styled from 'styled-components'

import { Container } from 'components/Container'

export const Main = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.2rem;
`

export const Title = styled.h1`
  font-size: 3.6rem;
  color: var(--text-color);
  line-height: 1.5;
`
