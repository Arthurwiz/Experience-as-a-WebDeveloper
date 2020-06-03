function validateuserinputs() {
    
    var FirstName = document.getElementById("FirstName");
    var LastName = document.getElementById("LastName");
    var product = document.getElementById("product");
    var txtproblem = document.getElementById("txtproblem");

    if (txtproblem.value == '' || FirstName.value == '' || LastName.value == '' || product.value == '') {
        alert("Please fill out the required fields.");
    }
    else {
        submitdata();
    };
}

function submitdata() {
    //code for submitting to an API
    alert("The ticket has been successfully created.");
}