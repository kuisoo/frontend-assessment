import React from "react";
import ExerciseOne from "./@ExerciseOne/page";
import FloatingButton from "./@ExerciseOne/components/FloatingButton";

const Index = () => {
  return (
    <div className="relative grid justify-items-center sm:overflow-x-hidden">
      <FloatingButton />
      <ExerciseOne />
    </div>
  );
};

export default Index;
