import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { GlobalStyle } from '@/styles/global'
import { useDeviceContext } from '@/contexts/device'

type ThemeProviderProps = {
    children?: React.ReactNode
}

export const ThemeProvider = (props: ThemeProviderProps) => {
  const { isDesktop } = useDeviceContext()

  return (
    <StyledThemeProvider theme={{ isDesktop }}>
      <GlobalStyle />
      {props.children}
    </StyledThemeProvider>
  )
}