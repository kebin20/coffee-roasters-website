import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import OrderModal from "./OrderModal";
import React from "react";

describe("OrderModal component", () => {
  test("does not render 'Order Summary' if the button was clicked", () => {
    //Arrange
    render(
      <OrderModal
        shippingPrice={0}
        orderContent={{
          coffeeMethod: "",
          coffeeType: "",
          amount: "",
          grindType: "",
          delivery: "",
        }}
        isCapsule={false}
      />
    );

    //Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    //Assert
    const outputElement = screen.getByText("order summary", {
      exact: false,
    });
    expect(outputElement).toBeNull();
  });

  test("renders 'I drink my coffee' if the button was NOT clicked", () => {
    //Arrange
    render(
      <OrderModal
        shippingPrice={0}
        orderContent={{
          coffeeMethod: "",
          coffeeType: "",
          amount: "",
          grindType: "",
          delivery: "",
        }}
        isCapsule={false}
      />
    );

    //Act
    //...nothing

    //Assert
    const outputElement = screen.getByText("I drink my coffee", {
      exact: false,
    });
    expect(outputElement).toBeInTheDocument();
  });

  test("renders 'Thank you for your order!' if the button was clicked", () => {
    //Arrange
    render(
      <OrderModal
        shippingPrice={0}
        orderContent={{
          coffeeMethod: "",
          coffeeType: "",
          amount: "",
          grindType: "",
          delivery: "",
        }}
        isCapsule={false}
      />
    );

    //Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    //Assert
    const outputElement = screen.getByText("Thank you for your order!", {
      exact: false,
    });
    expect(outputElement).toBeInTheDocument();
  });
});
