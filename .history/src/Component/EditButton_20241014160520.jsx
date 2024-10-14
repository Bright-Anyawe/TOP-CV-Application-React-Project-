// import DisplayUserContact from "./DisplayUserInfo.jsx";

export function Edit({ setDisplayPersonalContact }) {
  function handleUserContactDisplayForEdit() {
     const edit = document.querySelector(".edit");
     console.log(edit);
     edit.style.display = "block";
   
   
   
    setDisplayPersonalContact(true);
  }

  return (
    <button className="edit" onClick={handleUserContactDisplayForEdit}>
      Edit
    </button>
  );
}
