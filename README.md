![homepage](./screenshots/homepage-desktop.PNG)

# Coffee Roasters Website

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### Main Use Case

Users should be able to:

- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements throughout the site
- Make selections to create a coffee subscription and see an order summary modal of their choices

### Links

- Solution URL: [Github Repo](https://github.com/kebin20/coffee-roasters-website)
- Live Site URL: [Coffee Roasters](shiny-lollipop-8dea8b.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- CSS Modules
- Mobile-first workflow
- [TypeScript](https://www.typescriptlang.org/) - TypeScript - Strongly typed programming language on top of JS
- [React](https://reactjs.org/) - JS library
- [React Router](https://reactrouter.com/en/main) - React routing library

### What I learned

UPDATE: Implemented a test using jest

- Recently completed a basic tutorial on testing using jest and react testing library. It was quite challenging having to wrestle with the config settings to suit TypeScript, as well as getting the tests to run successfully. After debugging and internet searches, I have finally successfully implemented a basic test for making sure an async function fetches the data successfully from an API:

An example of my test for my CoffeeList: 

```jsx 

import { render, screen } from "@testing-library/react";
import CoffeeList from "./CoffeeList";
import React from "react";

describe("Async function", () => {
  test("renders coffee items if request succeeds", async () => {
    window.fetch = jest.fn().mockResolvedValueOnce({
      json: async () => [
        {
          id: "1",
          image: "https://example.com/coffee1.jpg",
          title: "Dark Roast",
          description:
            "A bold and rich coffee with notes of chocolate and caramel.",
          ingredients: ["coffee beans", "water"],
        },
      ],
    });
    render(<CoffeeList coffees={[]} />);

    const listItemElements = await screen.findAllByRole("list");
    expect(listItemElements).not.toHaveLength(0);
  });
});


```

I had to revise my original solution in mapping all of the subscription option sections as the requirements provided by the challenge proved it to be difficult to implement while mapping the options. Therefore, I decided to create separate sections as there were a lot of moving parts:

```jsx
           <Method
                id="method"
                plan={planOption[0]}
                onHoldChoice={(id: string, event: MouseEvent) =>
                  holdChoice(planOption[0].id, id, event)
                }
                onButtonClick={handleCoffeeMethodBtn}
              />
              <CoffeeType
                id="coffee-type"
                plan={planOption[1]}
                onHoldChoice={(id: string, event: MouseEvent) =>
                  holdChoice(planOption[1].id, id, event)
                }
                onButtonClick={handleCoffeeTypeBtn}
              />
              <Amount
                id="amount"
                plan={planOption[2]}
                onHoldChoice={(id: string, event: MouseEvent) =>
                  holdChoice(planOption[2].id, id, event)
                }
                onButtonClick={handleAmountBtn}
                onSetWeight={setWeightBoolean}
              />
              <Grind
                id="grind"
                plan={planOption[3]}
                isCapsule={isCapsule}
                onHoldChoice={(id: string, event: MouseEvent) =>
                  holdChoice(planOption[3].id, id, event)
                }
                onButtonClick={handleGrindTypeBtn}
              />
              <Delivery
                id="delivery"
                plan={planOption[4]}
                onHoldChoice={(id: string, event: MouseEvent) =>
                  holdChoice(planOption[4].id, id, event)
                }
                onButtonClick={handleDeliveryBtn}
                onSetFrequency={setFrequencyBoolean}
                weight={weight}
              />
```
This code was one example of the use case provided by the project challenge, where shipping price is calculated according to the frequency and weight chosen by the customer:

```jsx
 function displayShippingPrice() {
    let price: number;
    if (frequency.isWeekSelected && weight.firstWeight) {
      price = 7.2 * 4;
    } else if (frequency.isFortnightSelected && weight.firstWeight) {
      price = 9.6 * 2;
    } else if (frequency.isMonthSelected && weight.firstWeight) {
      price = 12.0;
    } else if (frequency.isWeekSelected && weight.secondWeight) {
      price = 13.0 * 4;
    } else if (frequency.isFortnightSelected && weight.secondWeight) {
      price = 17.5 * 2;
    } else if (frequency.isMonthSelected && weight.secondWeight) {
      price = 22.0;
    } else if (frequency.isWeekSelected && weight.thirdWeight) {
      price = 22.0 * 4;
    } else if (frequency.isFortnightSelected && weight.thirdWeight) {
      price = 32.0 * 2;
    } else if (frequency.isMonthSelected && weight.thirdWeight) {
      price = 42.0;
    } else {
      price = 0;
    }
    setShippingPrice(price);
  }

  useEffect(() => {
    displayShippingPrice();
  }, [weight, frequency]);
```
A lot of variables depending on each other therefore, made it difficult for me to implement these conditional variables when mapping over elements.

Another significant learning aspect of this project was the use of TypeScript. I have went through basic TS tutorials offered by Microsoft as well as Scrimba and I understood and grasped the basics. However, doing it in React proved to be a challenge as there were HTML elements that I did not know how to declare which took a lot of Googling and asking ChatGPT to explain and provide examples of these types such as:

```jsx 
  function handleClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    const target = event.target as HTMLInputElement;
    event.preventDefault();
    onButtonClick(target.value);
  }
```


### Continued development

This website will be an ongoing project and function as a sandbox to implement new techniques and concepts.

Future implementations:

~- Create a "Types of Coffee" page to display common coffee types by fetching data from a Coffee API.~ (COMPLETED)

~- Migrating the project to TypeScript.~ (COMPLETED)

- Enable user to create a personal account. (WIP)

- Enable user login to check their account by using BaaS like Firebase for the backend.

- Create another "Shop" page to display around 6 items for sale and the ability to add it to the custom order plan.

- Add a "add to shopping cart" functionality.

### Useful resources

- [Scaler](https://www.scaler.com/topics/text-gradient-css/) - This helped me for creating the text gradient for the title within the homepage.
- [MDN - CSS](https://developer.mozilla.org/en-US/docs/Web/CSS/background-clip) - This doc helped me to create the transparent looking style of the hamburger menu.
- [Stack Overflow](https://stackoverflow.com/a/50885613) - This SO thread helped me to understand how to add a br tag in React
- [Stack Overflow](https://stackoverflow.com/questions/51498816/how-to-conditionally-apply-styles-in-a-react-component-with-css-modules) - This thread helped me with conditional styling
- [MDN - CSS](https://developer.mozilla.org/en-US/docs/Web/CSS/pointer-events) - This mdn doc helped me to disable the elements within the button element.

## Author

- Frontend Mentor - [@kebin20](https://www.frontendmentor.io/profile/kebin20)

## Frontend Mentor - Coffeeroasters subscription site solution

This is a solution to the [Coffeeroasters subscription site challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/coffeeroasters-subscription-site-5Fc26HVY6). Frontend Mentor challenges help you improve your coding skills by building realistic projects.
