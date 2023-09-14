type ButtonVariant = 'default'

type ButtonColor = 'default' | 'accent' | 'warning' | 'error' | 'success'

export interface ButtonProps {
  variant?: ButtonVariant
  primary?: boolean
  color?: ButtonColor
  fullWidth?: boolean
  disabled?: boolean
  hotkey: string
  sizeMac: 's' | 'm'
}
