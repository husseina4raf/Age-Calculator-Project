let birthday = document.getElementById('birthday');
birthday.max = new Date().toISOString().split("T")[0];
let calAge = document.getElementById('calAge');
let result = document.getElementById('result');
calAge.addEventListener("click", function(){
    const birthdayValue = birthday.value;
    if(birthdayValue === ""){
        alert("Please Enter Your Birthday");
    }
    else{
        const age = getAge(birthdayValue);
        result.innerHTML = `Your age is ${age} ${age > 1 ? "years" : "year"} old`;   
     }
})
function getAge(birthdayValue) {
    const currentDate = new Date();
    const birthdayDate = new Date(birthdayValue);
    let age = currentDate.getFullYear() - birthdayDate.getFullYear();
    const month = currentDate.getMonth() - birthdayDate.getMonth();
  
    if (
      month < 0 ||
      (month === 0 && currentDate.getDate() < birthdayDate.getDate())
    ) {
      age--;
    }
  
    return age;
  }




