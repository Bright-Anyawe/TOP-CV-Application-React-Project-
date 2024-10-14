// import DisplayUserContact from "./DisplayUserInfo.jsx";

export function Edit({ setDisplayPersonalContact }) {
  function handleUserContactDisplayForEdit() {
    
    // const inputElContainer = document.querySelector(".inputContainer");
    // inputElContainer.style.display = "block";
    // handleUserContactDisplay()
    setDisplayPersonalContact(true);
  }

  return (
    <button className="edit" onClick={handleUserContactDisplayForEdit}>
      Edit
    </button>
  );
}
