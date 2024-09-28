function DisplayUserContact({userContact, className}) {

    //     const contactDisplay = document.querySelector(`.${className}`);
    // contactDisplay.style.display = "none";
        

return (
<div className={className} >
    <p> Name: {userContact.PersonName} </p>
<p>Email: {userContact.Email} </p>
<p> Mobile Number: {userContact.MobileNumber} </p>
    
     </div>
)
}

export default DisplayUserContact