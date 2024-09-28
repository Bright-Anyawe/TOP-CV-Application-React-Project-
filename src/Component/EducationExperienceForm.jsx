
    // import { useState } from "react";


export function EducationExperienceForm() {
  return (
    <>
      <section className="educationExperience">
        <form onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="schoolName">Enter your School Name</label>
          <input type="text" className="SchoolName" id="schoolName" />

          <label htmlFor="studiesTitle">Enter studies title</label>
          <input type="text" className="studiesTitle" id="studiesTitle" />

          <label htmlFor="date">Select date of studies</label>
          <input type="date" className="date" id="date" />
        </form>
      </section>
    </>
  );
}