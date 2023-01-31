import styled from 'styled-components'

export const Container = styled.h2`
  color: white;
  text-align: center;
  padding: 2rem;
  font-size: ${({theme}) => theme.isDesktop ? '3rem': '2rem'};
`
