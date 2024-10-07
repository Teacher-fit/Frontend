import styled, { keyframes } from 'styled-components'

// TooltipProps 인터페이스로 props 타입을 명시
interface TooltipProps {
  children: React.ReactNode
  message: string
  direction?: string // direction이 선택적일 경우
}

const Tooltip = ({ children, message, direction }: TooltipProps) => {
  return (
    <>
      {children}
      <Content>{message}</Content>
    </>
  )
}

export default Tooltip

const tooltip = keyframes`
  0% { opacity: 0; }
  40% { opacity: 0; }
  50% { opacity: 1; }
  100% { opacity: 1;}
`
