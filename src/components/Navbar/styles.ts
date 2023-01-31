import styled from 'styled-components'

export const Container = styled.nav`
  width: 100%; 
  height: 4rem;
  background-color: #105f65; 
  display: flex;
  justify-content: ${({theme}) => theme.isDesktop ? 'flex-end' : 'space-between'};
`

export const Ul = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 1rem;
  max-width: ${({theme}) => theme.isDesktop ? '25rem' : '30rem'};
`

export const Li = styled.li`
  list-style-type: none;
  font-weight: 600;
  color: white;
`
