// import DisplayUserContact from "./DisplayUserInfo.jsx";

export function Edit({
  setDisplayPersonalContact,
  hideContactEdit,
  hideForEducationEdit,
  hideEProfessionalEdit,
  setHideContactEdit,
  setHideForEducationEdit,
  setHideEProfessionalEdit,
  setDisplayEducationDetails,
  setDisplayProfessionalDetails,
}) {
  function handleUserContactDisplayForEdit() {
    const edit = document.querySelector(".edit");
    console.log(edit);
    edit.style.display = "none";
    if (setDisplayPersonalContact) {
      setDisplayPersonalContact(true);
      setHideContactEdit(true);
    }

    if (setDisplayEducationDetails) {
      setDisplayEducationDetails(true);
      setHideForEducationEdit(true);
    }
    if (setDisplayProfessionalDetails) {
      setDisplayProfessionalDetails(true);
      setHideEProfessionalEdit(true);
    }
  }

  return (
    <button className="edit" onClick={handleUserContactDisplayForEdit}>
      Edit
    </button>
  );
}
