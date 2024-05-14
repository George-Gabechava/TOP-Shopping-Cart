import { render, screen } from "@testing-library/react";
import App from "../src/App";
import { createBrowserRouter, RouterProvider, createMemoryRouter, MemoryRouter} from "react-router-dom";

describe("App component", () => {
  it("renders correct heading", () => {
    render(
    <MemoryRouter>
      <App />
    </MemoryRouter>);
    expect(screen.getByRole("heading").textContent).toMatch(/our first test/i);
  });
});
