import React, { useContext } from "react";
import CompC from "./CompC";
import { FirstName, LastName } from "./CompA";

const CompB = () => {
  const fName = useContext(FirstName);
  const lName = useContext(LastName);
  return (
    <>
      <h1>
        hello contex 2 {fName} {lName}
      </h1>
    </>
  );
};

export default CompB;
