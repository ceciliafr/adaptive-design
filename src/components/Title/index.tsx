import * as Styled from './styles'

type TitleProps = {
  children: React.ReactNode
}

export default function Title({ children }: TitleProps) {
  return <Styled.Container>{children}</Styled.Container>
}