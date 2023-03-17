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

export interface CoffeeItemType {
  id?: string;
  image: string;
  title: string;
  description: string;
}

export interface OrderModalType {
  orderContent: {
    coffeeMethod: string;
    coffeeType: string;
    amount: string;
    grindType: string;
    delivery: string;
  };
  isCapsule: boolean;
  shippingPrice: number;
  closeModal: () => void;
}
