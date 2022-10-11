function pwdLength() {
  var x = document.getElementById("pwd").value.length;
  document.getElementById("demo").innerHTML = x;
  return x;
}

function buttonmove(){
  var submit = $("#submit");
  var input = $("#pwd");
  var x = pwdLength();

  if (x < 7) { 
    var randX = Math.floor(Math.random() * (window.innerWidth - 100));
    console.log(randX);
    submit.stop().animate({"left": randX + "px"});
    submit.css('background-color', '#ff6766');
    input.css('border', '1px solid #ff6766');       
  }
  else{
    input.css('border', '1px solid #66a182');
    submit.css('background-color', '#66a182');
  }
  
}