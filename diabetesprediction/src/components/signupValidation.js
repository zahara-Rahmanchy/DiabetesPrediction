const signupValidation = (Name, email, password, ConPassword, phone, Height) => {
    let err={};
    if(!Name){
        err.name = "Name is required.";
    }else if(!(/^[a-z\s]+$/.test(Name))){
        err.name = "Please enter only letters.";
    }
    if(!Height){
        err.height = "Height is required.";
    }else if(!(/^[0-9.]+?$/.test(Height))){
        err.height = "Please enter only number.";
    }
    if(!email){
        err.email = "Email is required.";
    } else if(!(/^[a-z]+_?\d*@(lus.ac.bd|gmail.com)$/.test(email))){
        err.email = "Invalid Email.";
    }
    if(!phone){
        err.mobile = "Phone number is required.";
    } else if(!(/^(\+88)?01[3-9]{1}[0-9]{8}$/.test(phone))){
        err.mobile = "Invalid phone number";
    }
    if(!password){
        err.password = "Password is required.";
    } else if(!(/^(?=.*[0-9])(?=.*[A-Za-z])(?=.*[!@#$%^&*]).{6,18}$/.test(password))){
        err.password = "Password must contain at least one digit, one alphabet and one special character.";
        if (password.length < 6){
            err.password = "Password length is less than 6 characters.";
        }
    
    }
    if(password!==ConPassword){
        err.confirmPassword = "Password didn't match.";
    }
    return err;
};

export default signupValidation;