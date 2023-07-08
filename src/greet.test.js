import { render, screen } from "@testing-library/react";
import { Greet } from "./greet";

// grouping tests using "describe"

describe("GREET", () => {
  test("testing greeting", () => {
     render(<Greet />)
     const reqGreetText = screen.getByText("hello");
     expect(reqGreetText).toBeInTheDocument();
});

test("lower test check", () => {
     render(<Greet />)
     const gText = screen.getByText("vaibhav");
     expect(gText).toBeInTheDocument();
})   
})