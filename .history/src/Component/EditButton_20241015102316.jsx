// import DisplayUserContact from "./DisplayUserInfo.jsx";

export function Edit({ setDisplayPersonalContact, setHideEdit, hideEdit }) {

  function handleUserContactDisplayForEdit() {
    //  const edit = document.querySelector(".edit");
    //  console.log(edit);
    //  edit.style.display = "none";
    setHideEdit(false);
    setDisplayPersonalContact(true);
  }

  return (
    <button className="edit" onClick={handleUserContactDisplayForEdit}>

      
    </button>
  );
}
