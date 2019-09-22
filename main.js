$(function () {
    //function created to bind the 2 checkboxes together. 
    //If one of the checkboxes are changed, all of the class myCheck also change with it

    $(".myCheck").change(function () {
        //When a checkbox changes
        var x = this.checked;
        //gets the value of the check 
        $(".myCheck").prop("checked", x);
    });
});


$(".btn").click(function () {
    //Checks if a button has been clicked to execute this function

    if ($(".myCheck").prop("checked") == true) {

        //alert("Checked");
        //simply checks to see if the check has been checked before pressing the button

        //Code here is for dealing with request from webservice
        const newUrl = 'https://bl45immth4.execute-api.us-east-1.amazonaws.com/production/';

        //create new 

        $.ajax({
            url: newUrl,
            contentType: "application/json",
            dataType: 'json',
            success: function(result){
  


                //Parse result into a json which only includes the values nested in the body section
                var resString = JSON.parse(result.body);

                //Stringify the value that is present at submitok
                var submitokVal = JSON.stringify(resString.submitok);

                //Modify html paragraph with new text from submitOk
                document.getElementById("submitokText1").innerHTML = submitokVal;
                document.getElementById("submitokText2").innerHTML = submitokVal;

            }
        });




    } else if ($(".myCheck").prop("checked") == false) {
        //If the check hasn't been checked then the website will shoot out an alert to the user.
        alert("Please check the checkboxes before registering.");
    }
});

