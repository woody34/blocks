import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("App", () => {
  render(<App />);
  const linkElement = screen.getByText("Podcast");
  expect(linkElement).toBeInTheDocument();
});
