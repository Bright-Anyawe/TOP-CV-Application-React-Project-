// import DisplayUserContact from "./DisplayUserInfo.jsx";

export function Edit({ setDisplayPersonalContact, setHideEdit, s }) {

  function handleUserContactDisplayForEdit() {
     const edit = document.querySelector(".edit");
     console.log(edit);
     edit.style.display = "none";
    setHideEdit(false);
    if(setDisplayPersonalContact) {
      setDisplayPersonalContact(true);

    }
  }

  return (
    <button className="edit" onClick={handleUserContactDisplayForEdit}>
      Edit
    </button>
  );
}
