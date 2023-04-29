import { render, screen } from "@testing-library/react";
import Coffee from "./Coffee";
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
    render(
      <Coffee
        image={""}
        title={""}
        description={""}
        ingredients={[]}
      />
    );

    const listItemElements = await screen.findAllByRole("listitem");
    expect(listItemElements).not.toHaveLength(0);
  });
});
