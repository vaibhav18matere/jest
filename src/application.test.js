import { Application } from "./application";
import { render, screen } from "@testing-library/react";

describe("APPLICATION", () => {
     // step 1 => check the components render
     test("to check if component renders correctly", () => {
          render(<Application />)
          // now check the elements are available are not
          const nameElm = screen.getByRole("textbox", {
               name:"Name"
          });
          expect(nameElm).toBeInTheDocument();

          //check  title of page
          const titleOfPage = screen.getByRole("heading", {
               level:1,
          });
          
          expect(titleOfPage).toBeInTheDocument();

          // "getByLabelText"
          
          const labelName = screen.getByLabelText("Name");
          expect(labelName).toBeInTheDocument();

          // check sub heading of page
          const subHeading = screen.getByRole("heading", {
               level:2,
          });
          
          expect(subHeading).toBeInTheDocument();

          // "getByText"
          const textSearchElm = screen.getByText("All fields are mandatory");
          expect(textSearchElm).toBeInTheDocument();

          // "getByPlaceHolderText"
          const placeHolderTextElm = screen.getByPlaceholderText("Fullname")
          expect(placeHolderTextElm).toBeInTheDocument();

          // "getByDisplayValue"
          const displayValueElm = screen.getByDisplayValue("Value is - Vaibhav");
          expect(displayValueElm).toBeInTheDocument();

          const bioElm = screen.getByRole("textbox", {
               name: "Bio" // this is option - of whatever we are writing as a next argument inside object
          });
          expect(bioElm).toBeInTheDocument();
          
          const jobLocationElm = screen.getByRole("combobox");
          expect(jobLocationElm).toBeInTheDocument();

          const termsElm = screen.getByRole("checkbox");
          expect(termsElm).toBeInTheDocument();

          // "getByLabelText"

          const termsElmLabel = screen.getByLabelText("I agree to the terms and conditions");
          expect(termsElmLabel).toBeInTheDocument();

          // when there are multiple elements with same label text
          // const remoteLabelText = screen.getLabelText("Remote", {
          //      selector:"input"
          // });
          // expect(remoteLabelText).toBeInTheDocument();

          const submitBtnElm = screen.getByRole("button");
          expect(submitBtnElm).toBeInTheDocument();

          // here is the link to know more about all the "roles"
          // https://www.w3.org/TR/html-aria/#docconformance
     })
})
