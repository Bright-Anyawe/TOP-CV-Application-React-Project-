import { useState } from "react";

function UserContactForm() {
  const [userName, setuserName] = useState('');
  const [email, setEmail] = useState("");
  const [mobileNumber, setmobileNumber] = useState("");


function handleUserName() {
    setuserName(e => e.target.value)
}

  function handleEmail() {
    setEmail((e) => e.target.value);
  }

  function handleMobileNumber() {
    setmobileNumber((e) => e.target.value);
  }

  return (
    <>
      <section className="userContact">
        <form onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="userName">Enter your fullName</label>
          <input
            type="text"
            className="userName"
            id="userName"
            value={userName}
            onChange={handleUserName}
          />

          <label htmlFor="email">Enter your Email</label>
          <input
            type="email"
            className="email"
            id="email"
            value={email}
            onChange={handleEmail}
          />

          <label htmlFor="mobileNumber">Enter your mobile number</label>
          <input
            type="number"
            className="mobileNumber"
            id="mobileNumber"
            value={mobileNumber}
            onChange={handleMobileNumber}
          />

          <button type="submit"></button>
        </form>
      </section>
    </>
  );
}

function EducationExperienceForm() {

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

function PracticalExperienceForm() {
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

function CvApp() {
  return (
    <div>
          <UserContactForm />
          <EducationExperienceForm />
          <PracticalExperienceForm />
    </div>
  );
}

export default CvApp;
