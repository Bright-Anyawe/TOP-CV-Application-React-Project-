// import DisplayUserContact from "./DisplayUserInfo.jsx";

export function Edit({
  setDisplayPersonalContact,
  hideContactEdit,
  hideForEducationEdit,
  hideProfessionalEdit,
  setHideContactEdit,
  setHideForEducationEdit,
  setHideProfessionalEdit,
  setDisplayEducationDetails,
  setDisplayProfessionalDetails,
}) {
  function handleUserContactDisplayForEdit() {
    // const edit = document.querySelector(".edit");
    // console.log(edit);
    // edit.style.display = "block";
    if (hideContactEdit === false) {
      setDisplayPersonalContact(true);
      setHideContactEdit(true);
    } else if (hideForEducationEdit === false) {
      setDisplayEducationDetails(true);
      setHideForEducationEdit(true);
    } else if (hideProfessionalEdit === false) {
      setDisplayProfessionalDetails(true);
      setHideProfessionalEdit(true);
    }
  }

  return (
    <button className="edit" onClick={handleUserContactDisplayForEdit}>
      Edit
    </button>
  );
}
