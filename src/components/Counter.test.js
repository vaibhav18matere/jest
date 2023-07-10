import {render, screen} from "@testing-library/react"
import "./Counter";
import { Counter } from "./Counter";

describe("Counter Tests", () => {
     test("check COUNTER renders correctly or not", () => {
          render(<Counter />)
          const counterElm = screen.getByRole("heading");
          expect(counterElm).toBeInTheDocument();

          const counterBtnElm = screen.getByRole("button", {
               name: "INCREMENT +"
          });
          expect(counterBtnElm).toBeInTheDocument();
     });

     test("renders count of 0 on initial render", () => {
          render(<Counter />)
          const counterElement = screen.getByRole("heading");
          // "toHaveTextContent"
          expect(counterElement).toHaveTextContent("0");
     })
})