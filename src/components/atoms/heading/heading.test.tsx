import Heading from "./Heading";
import {  render } from "@testing-library/react";
import { describe, test, expect } from "vitest";

describe("Heading test", () => {
  test("Should render level 1 heading", () => {
  
    const text = "Level 1 heading";

    const { getByText } = render(<Heading.H1 id='heading'>{text}</Heading.H1>);

    expect(getByText(text).tagName).toEqual("H1");
    expect(getByText(text).id).toEqual("heading");
   
  
  });

  test("Should render level 2 heading", () => {
  
    const text = "Level 2 heading";

    const { getByText } = render(<Heading.H2 id='heading'>{text}</Heading.H2>);

    expect(getByText(text).tagName).toEqual("H2");
    expect(getByText(text).id).toEqual("heading");
   
  
  });


  test("Should render level 3 heading", () => {
  
    const text = "Level 3 heading";

    const { getByText } = render(<Heading.H3 id='heading'>{text}</Heading.H3>);

    expect(getByText(text).tagName).toEqual("H3");
    expect(getByText(text).id).toEqual("heading");
   
  
  });
});
