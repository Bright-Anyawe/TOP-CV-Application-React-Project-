// import DisplayUserContact from "./DisplayUserInfo.jsx";

export function Edit(props) {
  

  function handleUserContactDisplayForEdit() {
    const inputElContainer = document.querySelector(".inputContainer");
    inputElContainer.style.display = "block";
    // handleUserContactDisplay()
  }

  return (
    <button className="edit" onClick={handleUserContactDisplayForEdit}>
      Edit
    </button>
  );
}