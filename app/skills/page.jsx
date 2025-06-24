import React from "react";
import CurrentSkills from "../Components/CurrentSkills";
import LearningCards from "../Components/LeaningCards";

function skills() {
  return (
    <div>
      <CurrentSkills />
      <div className="h-[1px] my-6 bg-amber-50"></div>
      <LearningCards />
    </div>
  );
}

export default skills;
