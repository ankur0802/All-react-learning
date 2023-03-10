import React from "react";
import { FirstName, LastName } from "./CompA";

const CompC = () => {
  return (
    <>
      <FirstName.Consumer>
        {(fName) => {
          return (
            <LastName.Consumer>
              {(lname) => {
                return (
                  <h1>
                    hello contex 2 {fName} {lname}
                  </h1>
                );
              }}
            </LastName.Consumer>
          );
        }}
      </FirstName.Consumer>
    </>
  );
};

export default CompC;
