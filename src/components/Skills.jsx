// import {useState} from "react";

export const Skills = ({skills}) => {
    
     return (
          <>
               <ul>
                    {
                         skills.map((skill) => {
                              return <li key={skill}>{skill}</li>
                         })
                   } 
          </ul>
          </> 
  )
};
