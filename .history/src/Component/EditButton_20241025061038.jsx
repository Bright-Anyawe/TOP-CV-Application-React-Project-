// import DisplayUserContact from "./DisplayUserInfo.jsx";
import { UserContactContext } from "./App";
import useC

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
  function handleDisplayForEdit() {
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
    <button className="edit" onClick={handleDisplayForEdit}>
      Edit
    </button>
  );
}
