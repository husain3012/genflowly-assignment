import ListItem from "./ListItem";
import { render } from "@testing-library/react";
import { describe, test, expect } from "vitest";

describe("List Item test", () => {
  test("Should render a list item", () => {

    const children = <span> List Item 1 </span>;

    const { container } = render(
      <ListItem  id="list-item-1">{children}</ListItem>
    );

  

    expect(container.querySelector('#list-item-1')).toBeInTheDocument();
    expect(container.querySelector('#list-item-1')?.tagName).toEqual('LI');
   
  });
});
