import { ReactNode } from "react";

export interface MainButtonProps {
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  children?: ReactNode;
}

export interface ContainerProps {
  children?: ReactNode;
}

export interface CoffeeItemProps {
  id?: string;
  image: string;
  title: string;
  description: string;
  ingredients: string[];
}

export interface OrderSummaryProps {
  orderContent: {
    coffeeMethod: string;
    coffeeType: string;
    amount: string;
    grindType: string;
    delivery: string;
  };
  isCapsule: boolean;
}

export interface OrderModalProps extends OrderSummaryProps {
  shippingPrice: number;
  closeModal?: () => void;
}

export interface DropdownItemProps {
  id?: string | null | undefined;
  isSelected: boolean;
  isCapsule?: boolean;
  type?: "button" | "submit" | "reset" | undefined;
  onClick: (event: React.MouseEvent<HTMLButtonElement>, id: string) => void;
  title: string;
  description: string;
}

export interface SubscriptionDescription {
  week: string;
  fortnight: string;
  month: string;
}
