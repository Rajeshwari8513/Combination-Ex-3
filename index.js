let userRole = "User";
let userStatus = "InActive";


switch (userRole){
    case "Admin" :
    if (userStatus === "Active"){
        console.log("Welcome, Admin!")
    }else{
        console.log("Inactive Admin account")
    }
    break;
    
    case "User" :
    if (userStatus === "Active"){
        console.log("Welcome, User!")
    }else{
        console.log("Inactive User account")
    }
    break;

    default :
    console.log("Invalid")
    break;
   
}
 