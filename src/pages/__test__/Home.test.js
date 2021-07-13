import { render, screen, cleanup } from "@testing-library/react";
import Home from "../Home";
import "@testing-library/jest-dom/extend-expect";

afterEach(() => {
  cleanup();
});

test("showcase for the rest of projects", () => {
  render(<Home />);
  const HomeComponent = screen.getByTestId("home");
  expect(HomeComponent).toBeVisible();
});
