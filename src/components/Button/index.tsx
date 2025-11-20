import * as S from './styles'

export type Props = {
  asType?: 'button' | 'link' | 'submit' // decide se é <button> ou <Link>
  title: string
  to?: string
  onClick?: () => void
  children: React.ReactNode
  variant?: 'primary' | 'secundary'
  htmlType?: 'button' | 'submit' | 'reset' // tipo nativo do botão
  disabled?: boolean
}

const Button = ({
  asType = 'button',
  title,
  to,
  onClick,
  children,
  disabled,
  variant = 'primary',
  htmlType = 'button'
}: Props) => {
  if (asType === 'button' || asType === 'submit') {
    return (
      <S.ButtonContainer
        type={htmlType} // <- agora passa pro HTML de verdade
        title={title}
        onClick={onClick}
        variant={variant}
        disabled={disabled}
      >
        {children}
      </S.ButtonContainer>
    )
  }

  return (
    <S.ButtonLink to={to as string} title={title}>
      {children}
    </S.ButtonLink>
  )
}

export default Button
