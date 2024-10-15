// import DisplayUserContact from "./DisplayUserInfo.jsx";

export function Edit({ setDisplayPersonalContact, setHideEdit }) {

  function handleUserContactDisplayForEdit() {
   ?elector(".edit");
   ?
   ?
    setHideEdit(false);
    setDisplayPersonalContact(true);
  }

  return (
    <button className="edit" onClick={handleUserContactDisplayForEdit}>
      Edit
    </button>
  );
}
