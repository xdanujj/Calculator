$(function(){
    $(".btn").click(function(){
      let val=$(this).text();
      let current=$("#value").val();
      if(val==="C"){
        current="";
      }
      else if(val==="←"){
        current=current.slice(0,-1);
      }
      else if(val==="="){
        try {
            current=eval(current);
        } catch (error) {
            current="Error"
        }
      }
      else{
        current+=val;
      }
      $("#value").val(current);
    })
})