import { render, screen } from "@testing-library/react";
import { App } from "./App";

describe("App tests", () => {
  it("should render the title", () => {
    render(<App />);

    expect(screen.getByText("Board Game Social Media App")).toBeInTheDocument();
  });
});
