import { Application } from "./application";
import { render, screen } from "@testing-library/react";

describe("APPLICATION", () => {
     // step 1 => check the components render
     test("to check if component renders correctly", () => {
          render(<Application />)
          // now check the elements are available are not
          const nameElm = screen.getByRole("textbox");
          expect(nameElm).toBeInTheDocument();

          const jobLocationElm = screen.getByRole("combobox");
          expect(jobLocationElm).toBeInTheDocument();

          const termsElm = screen.getByRole("checkbox");
          expect(termsElm).toBeInTheDocument();

          const submitBtnElm = screen.getByRole("button");
          expect(submitBtnElm).toBeInTheDocument();

          // here is the link to know more about all the "roles"
          // https://www.w3.org/TR/html-aria/#docconformance
     })
})
