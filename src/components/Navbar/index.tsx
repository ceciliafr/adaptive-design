import Link from "next/link"
import * as Styled from './styles'

export default function Navbar() {
  return (
    <Styled.Container>
      <Styled.Ul>
        <Styled.Li><Link href="/">Home</Link></Styled.Li>
        <Styled.Li>
          <Link href="/server-side-page">Server side page</Link>
        </Styled.Li>    
        <Styled.Li>
          <Link href="/client-side-page">Client side page</Link>
        </Styled.Li>
      </Styled.Ul>
    </Styled.Container>
  )
}