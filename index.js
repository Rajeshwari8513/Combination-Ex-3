let userRole = "User";
let userStatus = "InActive";


switch (userRole){
    case "Admin" :
    if (userStatus === "Active"){
        console.log("Welcome, Admin!")
    }else{
        console.log("Inactive Admin")
    }
    break;
    
    case "User" :
    if (userStatus === "Active"){
        console.log("Welcome, User!")
    }else{
        console.log("Inactive User")
    }
    break;

    default :
    console.log("Invalid")
    break;
   
}
 