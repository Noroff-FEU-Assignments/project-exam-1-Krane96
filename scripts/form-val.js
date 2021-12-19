/* Form Validation*/

function validation(){
    

    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const subject = document.querySelector("#subject").value;
    const message = document.querySelector("#message").value;
    const errorMsg = document.querySelector("#error-message");
    
    let text;
    
    
    if(name.length < 5){
        text = "Please enter a valid name"
        errorMsg.innerHTML = text;
        return false;
        
    } 
    
    if(email.indexOf('@') == -1 || email.length <5 || email.indexOf('.') ==-1){
        text = "Please enter a valid email"
        errorMsg.innerHTML = text;
        return false;
    } 
    


    if(subject.length <15){
        text = "Subject must be 15 characters or longer"
        errorMsg.innerHTML = text;
        return false;
    }
    
    
    if(message.length <25){
        text = "Message must be 25 characters or longer"
        errorMsg.innerHTML = text;
        return false;
    }
    
    
    
    return true;
    
}
    