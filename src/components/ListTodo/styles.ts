import styled from 'styled-components'

export const List = styled.ul`
  max-width: 666px;
  width: inherit;
  list-style: none;
  background-color: #25273c;
  padding: 0.8rem 7.6rem 0.8rem 2.6rem;
  font-size: 2.4rem;
  letter-spacing: 0.1em;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
`

type ListItemProps = {
  isDone: boolean
}

export const ListItem = styled.li<ListItemProps>`
  display: flex;
  align-items: center;
  text-decoration: ${({ isDone }) => (isDone ? 'line-through' : 'none')};
  color: ${({ isDone }) => (isDone ? 'rgba(15, 144, 161, 0.57)' : '#fff')};
  word-break: break-all;
  transition: filter 0.2s ease-in-out;
  user-select: none;
  min-height: 84px;

  &:last-child {
    border-bottom: 0;
  }

  &:hover {
    cursor: pointer;
    filter: brightness(0.8);
  }
`

export const TodoText = styled.p`
  width: 100%;
  padding-left: 1.6rem;
`

export const CustomRadio = styled.div<ListItemProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  border-radius: 50%;
  min-width: 4.4rem;
  height: 4.4rem;
  border: 2px solid #bf56ff;
  transition: 0.2s background ease-in-out;
  user-select: none;

  background: ${({ isDone }) =>
    isDone
      ? 'linear-gradient(111.35deg, #E600FA 10.12%, rgba(82, 97, 234, 0) 82.22%)'
      : '#25273c'};
`
