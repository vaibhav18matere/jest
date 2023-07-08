import { Start } from "./start";
import { render, screen } from "@testing-library/react";

// using "it" nstead of "test"

it("testing greeting", () => {
     render(<Start />)
     const reqGreetText = screen.getByText("start");
     expect(reqGreetText).toBeInTheDocument();
});