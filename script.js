function calculateAge() {
    var DOB = document.getElementById("DOB").value;
    var todaydate = document.getElementById("todaydate").value;
    if (DOB === "") {
        document.getElementById("result").innerHTML = "Please Enter a Valid Date.";
        return;
    } else if (todaydate === ""){
        document.getElementById("result").innerHTML = "Please Enter a Valid Date.";
    }
    
    var DOBDate = new Date(DOB);
    var todaydate = new Date(todaydate);
    
    var age = todaydate.getFullYear() - DOBDate.getFullYear();
    var month = todaydate.getMonth() - DOBDate.getMonth();
    var day = todaydate.getDate() - DOBDate.getDate();
    
    if (month < 0 || (month === 0 && day < 0)) {
        age--;
    }
    
    document.getElementById("result").innerHTML = `Your age is ${age}!`;
}