

function DisplayUserContact({ className}) {

    //     const contactDisplay = document.querySelector(`.${className}`);
    // contactDisplay.style.display = "none";
        let userContact = JSON.parse(localStorage.getItem('userContact')) 

return (
  <div className="userContactDisplay">
    <p className="userNameContainer"> {userContact.PersonName} </p>
    div
  </div>
);
}

export default DisplayUserContact