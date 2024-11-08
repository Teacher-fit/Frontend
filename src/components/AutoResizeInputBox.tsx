import { useEffect, useRef, ChangeEvent } from 'react'
import styled from 'styled-components'

type AutoResizeInputBoxProps = {
  placeholder?: string
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void // onChange 추가
}

export const InputBox = styled.textarea`
  width: 100%;
  height: auto;
  min-height: 130px;
  border-radius: 8px;
  background-color: #f7f7ff;
  border: solid #d3d5ff 0.7px;
  padding: 16px;
  font-size: 18px;
  resize: none;
  overflow: hidden;
  color: #666666;

  &::placeholder {
    color: #b3b3b3;
  }
`

const AutoResizeInputBox: React.FC<AutoResizeInputBoxProps> = ({
  placeholder,
  onChange, // onChange prop 받기
}) => {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null)

  useEffect(() => {
    const textarea = textareaRef.current

    const handleResizeHeight = () => {
      if (textarea) {
        textarea.style.height = 'auto'
        textarea.style.height = `${textarea.scrollHeight}px`
      }
    }

    textarea?.addEventListener('input', handleResizeHeight)
    handleResizeHeight() // 초기 높이 조절

    return () => {
      textarea?.removeEventListener('input', handleResizeHeight)
    }
  }, [])

  return (
    <InputBox ref={textareaRef} placeholder={placeholder} onChange={onChange} />
  )
}

export default AutoResizeInputBox
