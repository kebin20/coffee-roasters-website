import { ReactNode } from 'react';

export interface MainButtonType {
  type: 'button' | 'submit' | 'reset' | undefined;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  disabled: boolean;
  children?: ReactNode;
}

export interface PropsType {
  children?: ReactNode;
}
