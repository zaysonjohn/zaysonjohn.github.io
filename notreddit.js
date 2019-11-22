<script>
function CreateAccount()                                
{
    var name = document.forms["NewAcctReg"]["Name"];            
    var email = document.forms["NewAcctReg"]["EMail"];
    var password = document.forms["NewAcctReg"]["Password"];
   
    if (name.value == "")                                
    {
        window.alert("Please enter your name.");
        name.focus();
        return false;
    }

     
    if (email.value == "")                                
    {
        window.alert("Please enter a valid e-mail address.");
        email.focus();
        return false;
    }

   
    if (password.value == "")                    
    {
        window.alert("Please enter a password");
        password.focus();
        return false;
    }

     return true;
}</script>


