var together = [];
console.log(localStorage.project);
let allUsers = localStorage.project? JSON.parse(localStorage.project):[];
// console.log(project);
function show(){
    let emailFinder =allUsers? allUsers.find((val) =>  val.Email == email.value ):null;
    // console.log(emailFinder);

    if (emailFinder) {
        alert("Email already exist");
    }
    else{
       
        let gd = document.getElementById('gen');
          let gd2 = gd.options[gd.selectedIndex].text;
          let rush = {
            ffname:fname.value,
            LstName:lname.value,
            Address:add.value,
            Email:email.value,
            Password:pwd.value,
            PhoneNumber:pass.value,
            Gender:gd2,
            note: [],
            Event:[],
            contact: [],
            

          }
          if(fname.value == "" ||  lname.value == "" || add.value == ""  || pwd.value == "" || pass.value == "" || gd2 == ""){
            err1.innerHTML = "Enter the value of the firstname"
            err1.style.color = "red";
            err2.innerHTML = "Enter the value of the Lastname"
            err2.style.color = "red";
            err3.innerHTML = "Enter the value of the address"
            err3.style.color = "red";
            err4.innerHTML = "Enter the value of the email"
            err4.style.color = "red";
            err5.innerHTML = "Enter the value of the password"
            err5.style.color = "red";
            err6.innerHTML = "Enter the value of the phoneNumber"
            err6.style.color = "red";
            err6.innerHTML = "Enter the value of the gender"
            err6.style.color = "red";
          }
          else if(fname.value == ""){
            err1.innerHTML = "Enter the value of the firstname"

          }

          
          else {
            // raph = JSON.parse(localStorage.getItem("project"));
            allUsers.push(rush)
            localStorage.project = JSON.stringify(allUsers)
            console.log(allUsers)
            location.assign("signin.html")
          }
    }
    
}