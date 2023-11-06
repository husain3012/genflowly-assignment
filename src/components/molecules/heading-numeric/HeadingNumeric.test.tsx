import HeadingNumeric from "./HeadingNumeric";
import { render } from "@testing-library/react";
import { describe, test, expect } from "vitest";

describe("Numeric Heading test", () => {
  test("Should render a value with the symbol", () => {
    const number = 232422;
    const symbol = "$";

    const document = render(
      <HeadingNumeric
        value={number}
        symbol={symbol}
        id="heading"
      ></HeadingNumeric>
    );

    const headingElement = document.container.querySelector("#heading");
    expect(headingElement).toBeInTheDocument();
    expect(headingElement?.tagName).toEqual("H3");
    expect(document.getByText(number).innerText).toEqual(symbol+number.toString());
   
  });
  test("Should render a value in local format", () => {
    const number = 232422;

    const document = render(
      <HeadingNumeric
        value={number}
        id="heading"
        localformat={true}
      ></HeadingNumeric>
    );

    const headingElement = document.container.querySelector("#heading");
    expect(headingElement).toBeInTheDocument();;
    expect(document.getByText(number.toLocaleString())).toBeInTheDocument();
   
  });
});
