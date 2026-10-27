import type { ButtonHTMLAttributes } from 'react';
import './switch.css';

type SwitchProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children' | 'role' | 'aria-checked'> & { checked: boolean };

export function Switch({ checked, className = '', ...props }: SwitchProps) {
  return <button {...props} type="button" className={`toggle-switch ${className}`.trim()} role="switch" aria-checked={checked}><span aria-hidden="true" /></button>;
}
