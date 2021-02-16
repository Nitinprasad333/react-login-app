let value = e.target.value;
const regExp = /\s/g;
// +++++++++++++
// regExp = /\s/g
// Regular Expresion and Code to not allow to Type Space or whitespace in textbox.
// +++++++++++++

if (regExp.test(value)) {
  //alert("space not allow");
  this.setState({
    error: true,
    errorMsg: "Space not allow",
  });
} else if (value.match("^[a-zA-Z]+$")) {
  console.log("Alphabat Entered");

  this.setState({
    isMobile: false,
  });
} else if (value.test("^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$")) {
  console.log("Alphanumber Entered");
  this.setState({
    isMobile: false,
  });
}



//for 1 small,1 capital,1number,1special character & min 8 digit

 
let  regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
if (regex.exec(password) === null) {
  alert('invalid password!')
}
else {
  console.log("valid");
}