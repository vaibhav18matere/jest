import { render, screen } from "@testing-library/react";
import { Skills } from "./Skills";

describe("Skills component", () => {
     const skills = ["html", "css", "js", "react"];

     test("renders correctly check", () => {
          render(<Skills skills={skills} />)
          
          const listElm = screen.getByRole("list");
          expect(listElm).toBeInTheDocument();
     });

     test("rendereing list of skills", () => {
          render(<Skills skills={skills} />)
          const listItemsElm = screen.getAllByRole("listitem");
          expect(listItemsElm).toHaveLength(skills.length);
     })
})