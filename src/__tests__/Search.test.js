import React from "react";
import { render, screen } from "@testing-library/react";
import Search from "../components/Search";

describe("Search", () => {
  const { asFragment } = render(<Search />);

  it("renders correctly", () => {
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders a text input form", () => {
    render(<Search />);
    const input = screen.getByTestId("input");

    expect(input).toHaveAttribute("type", "text");
  });

  it("renders a submit button", () => {
    render(<Search />);
    const button = screen.getByTestId("button");

    expect(button).toHaveAttribute("type", "submit");
  });
});
