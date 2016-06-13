var app = angular.module("myApp", []);

$(document).ready(function(){
  $.ajax(users)
})

$('#customer').submit(function(e){
  // e.preventDefault();
  $.ajax({
    url:'http://localhost:3000/api/people',
    type: 'post',
    data:$('#customer').serialize(),
    success:function(){
      document.location.replace("http://stackoverflow.com");
    }
  });
});



var users = {
  type: "get",
  dataType: "json",
  url: "http://localhost:3000/api/people",
  success: function(users){
    console.log(users);
    console.log("We got the users!");
    for (i = 0; i < users.length; i++){
      if (users[i].firstname !== "undefined"){
        $("#here").append("<h2><a href='/api/people/" + users[i].id +"'>" + users[i].firstname + "</a></h2>")
        $("#here").append("<p>id: " + users[i].id + "</p>");
      }
      else{
        $("#here").append("<h2>err</h2>");
      }
    }
  },
  error: function(err){
    console.log(err);
  }
}


//









end
