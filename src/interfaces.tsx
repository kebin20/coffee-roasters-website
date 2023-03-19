import { ReactNode } from "react";

export interface MainButtonType {
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
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

export interface OrderSummaryType {
  orderContent: {
    coffeeMethod: string;
    coffeeType: string;
    amount: string;
    grindType: string;
    delivery: string;
  };
  isCapsule: boolean;
}

export interface OrderModalType extends OrderSummaryType {
  shippingPrice: number;
  closeModal?: () => void;
}

export interface DropdownItemType {
  id?: string | null | undefined;
  isSelected: boolean;
  isCapsule?: boolean;
  type?: "button" | "submit" | "reset" | undefined;
  onClick: (event: React.MouseEvent<HTMLButtonElement>, id: string) => void;
  title: string;
  description: string;
}

export interface Description {
  week: string;
  fortnight: string;
  month: string;
}
