$(function() {
    $("#contact .button").click(function() {
        var name = $("#form_name").val();
        var email = $("#form_email").val();
        var text = $("#msg_text").val();
        var dataString = 'name='+ name + '&email=' + email + '&text=' + text;
        console.log("esta aqui");
        emailjs.send("gmail",dataString,{
     name: "James", 
     notes: "Check this out!"
    })
.then(
  function(response) {
    console.log("SUCCESS", response);
  }, 
  function(error) {
    console.log("FAILED", error);
  }
);

        return false;
    });
});