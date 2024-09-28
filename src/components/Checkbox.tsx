import styled from 'styled-components'
import { ReactNode } from 'react'

interface CheckboxProps {
  children: ReactNode
  disabled?: boolean
  checked: boolean
  onChange: (checked: boolean) => void
}

export function Checkbox({
  children,
  disabled,
  checked,
  onChange,
}: CheckboxProps) {
  return (
    <Label>
      <StyledCheckbox
        type="checkbox"
        disabled={disabled}
        checked={checked}
        onChange={({ target: { checked } }) => onChange(checked)}
      />
      <Checkmark checked={checked} />
      {children}
    </Label>
  )
}

export default Checkbox

/* Styled Components */
const Label = styled.label`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  margin-top: 17px;
  margin-left: 16px;
  color: #1e1e1e;
  justify: space-between;
  gap: 10px;
  font-size: 16px;
`

const StyledCheckbox = styled.input`
  display: none; /* 기본 체크박스 숨김 */
`

const Checkmark = styled.span<{ checked: boolean }>`
  width: 16px; /* 체크박스 크기 */
  height: 16px; /* 체크박스 크기 */
  background-color: ${({ checked }) =>
    checked ? '#4049F4' : '#eee'}; /* 체크된 상태와 미체크 상태의 배경색 */
  border-radius: 4px; /* 둥근 모서리 */
  border: 2px solid ${({ checked }) => (checked ? '#4049F4' : '#ccc')}; /* 경계선 */
  display: inline-block;
  transition: all 0.3s ease;

  /* Checkmark 표시 (체크된 상태일 때) */
  &:after {
    content: '';
    display: ${({ checked }) => (checked ? 'block' : 'none')};
    width: 6px;
    height: 12px;
    border: solid white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
    position: absolute;
    left: 7px;
    top: 4px;
  }
`
