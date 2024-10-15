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
    if (setDisplayPersonalContact) {
      setDisplayPersonalContact(true);
    } 
    
    if (setDisplayEducationDetails) {
      setDisplayEducationDetails(true);
          setHideEdit(true);

    }
    if (setDisplayProfessionalDetails) {
      setDisplayProfessionalDetails(true);
          setHideEdit(true);

    }
     
    
  }

  return (
    <button className="edit" onClick={handleUserContactDisplayForEdit}>
      Edit
    </button>
  );
}
