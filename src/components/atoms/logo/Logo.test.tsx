import Logo from "./Logo";
import { render } from "@testing-library/react";
import { describe, test, expect } from "vitest";

describe("Logo test", () => {
  test("Should render a logo and alt text using img tag", () => {

    const imgURI = "https://api.dicebear.com/7.x/adventurer/svg?seed=test"
    const imgAltText = "Avatar"


    const document = render(
        <Logo src={imgURI} alt={imgAltText} id="logo-image" />
    );

  
    const imgElement = document.container.querySelector('#logo-image');
    expect(imgElement).toBeInTheDocument();
    expect(imgElement?.tagName).toEqual('IMG');
    expect(imgElement?.getAttribute('src')).toEqual(imgURI);
    expect(imgElement?.getAttribute('alt')).toEqual(imgAltText);
   
  });
});
