import styled, { keyframes } from 'styled-components'

// TooltipProps 인터페이스로 props 타입을 명시
interface TooltipProps {
  children: React.ReactNode
  message: string
  direction?: string // direction이 선택적일 경우
}

const Tooltip = ({ children, message}: TooltipProps) => {
  return (
    <Wrapper>
      {children}
      {/* dangerouslySetInnerHTML로 HTML 처리 */}
      <Content dangerouslySetInnerHTML={{ __html: message }} />
    </Wrapper>
  )
}

export default Tooltip

const tooltip = keyframes`
  0% { opacity: 0; }
  40% { opacity: 0; }
  50% { opacity: 1; }
  100% { opacity: 1;}
`

const Wrapper = styled.div`
  position: relative;
  display: inline-block;
`

const Content = styled.div`
  visibility: hidden;
  background-color: #FDFDFF; 
  color: #000; 
  text-align: left;
  padding: 10px;
  padding-left: 12px;
  border-radius: 10px;
  border: 1px solid #D3D5FF; 
  position: absolute;
  z-index: 1;
  bottom: 100%; /* 기본적으로 위쪽에 툴팁을 표시 */
  left: 0%;
  transform: translateX(-95%);
  opacity: 0;
  transition: opacity 0.3s;
  min-width: 300px;
  margin-bottom: 8px;

  ${Wrapper}:hover & {
    visibility: visible;
    opacity: 1;
    animation: ${tooltip} 0.5s ease-in-out;
  }

  strong {
    font-weight: bold;
  }
`
