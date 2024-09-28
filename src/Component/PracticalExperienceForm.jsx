
    // import { useState } from "react";


export function PracticalExperienceForm() {
  return (
    <>
      <section className="practicalExperience">
        <form onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="NameOfCompany">Enter The Company&apos;s Name</label>
          <input type="text" id="NameOfCompany" />

          <label htmlFor="PosInJob">Enter Position Title</label>
          <input type="text" id="PosInJob" />

          <label htmlFor="Job_responsibilities">
            Main responsibilities of the Jobs
          </label>
          <textarea type="text" id="Job_responsibilities" />

          <label htmlFor="JobEntry">Date for job commercement</label>
          <input type="date" className="date" id="JobEntry" />

          <label htmlFor="JobExit">Date for job exit</label>
          <input type="date" className="date" id="JobExit" />
        </form>
      </section>
    </>
  );
}