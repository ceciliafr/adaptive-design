import { DeviceProvider } from '@/contexts/device'
import { ThemeProvider } from '@/contexts/theme'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <DeviceProvider {...pageProps}>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </DeviceProvider> 
  )
}
