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
    //checks if button has been c
    if ($(".myCheck").prop("checked") == true) {

        alert("Checked");
        //const Http = new XMLHttpRequest();
        const newUrl = 'https://bl45immth4.execute-api.us-east-1.amazona ws.com/production/';
        $.getJson(newUrl,function(result){
            console.log(result);
            alert(result);
        });
      //  Http.open("GET", url);
      //  Http.send();

        // $.ajax({
        //     url: newUrl,
        //     type:"GET",
        //     success: function(result){
        //         console.log(result)
        //     },
        //     error:function(error){
        //         console.log('Error ${error}')
        //     }
        // });

      


    } else if ($(".myCheck").prop("checked") == false) {
        alert("Please check the checkboxes before registering.");
    }
});