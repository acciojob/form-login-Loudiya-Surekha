function getFormvalue(event) {
	  event.preventDefault();
	let form=document.getElementById("form1");
	let firstName = form.fname.value.trim();
    let lastName = form.lname.value.trim();
            alert(`${firstName} ${lastName}`);
}
