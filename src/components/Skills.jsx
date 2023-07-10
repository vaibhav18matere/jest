import { useState } from "react";

export const Skills = ({skills}) => {
     
     const [isLoggedIn, setIsloggedIn] = useState(false);

     return (
          <>
               <ul>
                    {
                         skills.map((skill) => {
                              return <li key={skill}>{skill}</li>
                         })
                    }
               </ul>
               
               {
                    isLoggedIn ? (
                         <button>START LEARNING</button>
                    ) : (
                         <button onClick={() => setIsloggedIn(true)} >LOGIN</button>
                    )
               }
          </>
     )
};
