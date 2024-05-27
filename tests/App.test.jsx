import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { describe, it, expect } from "vitest";

// Components
import NavBar from "../src/NavBar";
import Home from "../src/Home";

describe("Home Page", () => {
  it('should render home page after fetching data', async () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path="/" element={<NavBar />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </MemoryRouter>
    );

    // Wait for the data fetching to complete and the heading to be rendered
    const heading = await screen.findByRole('heading', { level: 1 });
    expect(heading).toHaveTextContent(/The Random Stuff Store/i);
  });
});
