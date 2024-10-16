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
    if (hideContactEdit === false) {
      setDisplayPersonalContact(true);
      setHideContactEdit(true);
    } else if (hideForEducationEdit === false) {
      setDisplayEducationDetails(true);
      setHideForEducationEdit(true);
    } else if (hideEProfessionalEdit === false) {
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
