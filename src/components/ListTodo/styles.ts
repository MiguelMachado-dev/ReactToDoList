import styled from 'styled-components'

export const List = styled.ul`
  max-width: 666px;
  width: inherit;
  list-style: none;
  background-color: #25273c;
  padding: 0.8rem 7.6rem 0.8rem 2.6rem;
  font-size: 2.4rem;
  line-height: 6rem;
  letter-spacing: 0.1em;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
`

type ListItemProps = {
  isDone: boolean
}

export const ListItem = styled.li<ListItemProps>`
  border-bottom: 2px solid #484040;
  text-decoration: ${({ isDone }) => (isDone ? 'line-through' : 'none')};
  color: ${({ isDone }) => (isDone ? 'rgba(15, 144, 161, 0.57)' : '#fff')};
  word-break: break-all;
  transition: filter 0.2s ease-in-out;

  &:last-child {
    border-bottom: 0;
  }

  &:hover {
    cursor: pointer;
    filter: brightness(0.8);
  }
`
