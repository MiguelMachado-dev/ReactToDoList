import { Container } from 'components/Container'

import * as S from './styles'

export type BaseTemplateProps = {
  children: React.ReactNode
}

const Base = ({ children }: BaseTemplateProps) => {
  return (
    <S.Wrapper>
      <S.Content>{children}</S.Content>

      <S.SectionFooter>
        <Container>
          <S.Footer>
            <p>
              Made by{' '}
              <a
                href="https://github.com/MiguelMachado-dev"
                target="_blank"
                rel="noreferrer"
              >
                Miguel Machado
              </a>{' '}
              and{' '}
              <a
                href="https://github.com/RaineCorrea"
                target="_blank"
                rel="noreferrer"
              >
                Raine Corrêa
              </a>{' '}
              with ❤️
            </p>
          </S.Footer>
        </Container>
      </S.SectionFooter>
    </S.Wrapper>
  )
}

export { Base }
