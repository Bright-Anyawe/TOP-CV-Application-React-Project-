// import DisplayUserContact from "./DisplayUserInfo.jsx";

export function Edit({
  setDisplayPersonalContact,
  setHideEdit,
  setDisplayEducationDetails,
  setDisplayProfessionalDetails,
}) {
  function handleUserContactDisplayForEdit() {
    const edit = document.querySelector(".edit");
    console.log(edit);
    edit.style.display = "none";
    setHideEdit(false);
    if (setDisplayPersonalContact) {
      setDisplayPersonalContact(true);
    } else if (setDisplayEducationDetails) {
      setDisplayEducationDetails(true);
    }
    if (setDisplayProfessionalDetails) {
      setDisplayProfessionalDetails(true);
          setHideEdit(false);

    }
     
    
  }

  return (
    <button className="edit" onClick={handleUserContactDisplayForEdit}>
      Edit
    </button>
  );
}
