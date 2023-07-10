import { render, screen } from "@testing-library/react";
import { Skills } from "./Skills";

describe("Skills component", () => {
     const skills = ["html", "css", "js", "react"];

     test("rendering list correctly checking", () => {
          render(<Skills skills={skills} />)
          // check skills list present on UI
          const listElm = screen.getByRole("list");
          expect(listElm).toBeInTheDocument();
     });

     test("rendereing list of skills", () => {
          render(<Skills skills={skills} />)
          // check total skills - list-items length
          const listItemsElm = screen.getAllByRole("listitem");
          expect(listItemsElm).toHaveLength(skills.length);
     });

     test("renders LOGIN button initially", () => {
          render(<Skills skills={skills} />)
          // check LOGIN button is present on the UI initially or not
          const loginBtn = screen.getByRole("button");
          expect(loginBtn).toBeInTheDocument();
     });

     // "queryByRole"
     test("START LEARNING button should not render initially", () => {
          render(<Skills skills={skills} />);
          const startLearningBtn = screen.queryByRole("button", {
               name: "START LEARNING"
          });
           expect(startLearningBtn).not.toBeInTheDocument();
     });
})