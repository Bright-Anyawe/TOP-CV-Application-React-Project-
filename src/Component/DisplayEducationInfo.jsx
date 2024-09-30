

function DisplayEducationExperience({ educationExperience, className }) {
  //     const contactDisplay = document.querySelector(`.${className}`);
  // contactDisplay.style.display = "none";

  return (
    <div className={className}>
      <p> School_Name: {educationExperience.SchoolName} </p>
      <p>Studies_Title: {educationExperience.StudiesTitle} </p>
      <p> Studies_Title: {educationExperience.StudiesDate} </p>
    </div>
  );
}

export default DisplayEducationExperience;