
function DisplayEducationExperience({ educationExperience, className }) {
  //     const contactDisplay = document.querySelector(`.${className}`);
  // contactDisplay.style.display = "none";

  return (
    <div className={className}>
      <p>
        {" "}
        <span>School Name:</span> {educationExperience.SchoolName}{" "}
      </p>
      <p>
        <span>Studies Title:</span> {educationExperience.StudiesTitle}{" "}
      </p>
      <p>
        {" "}
        <span>Studies Title:</span> {educationExperience.StudiesDate}{" "}
      </p>
    </div>
  );
}

export default DisplayEducationExperience;