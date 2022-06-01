$(".animated-progress span").each(function () {
    $(this).animate(
      {
        width: $(this).attr("data-progress") + "%",
      },
      1000
    );
    $(this).text($(this).attr("data-progress") + "%");
  });

function myFunction(){
    var x = document.getElementById("myTopNav");
    if (x.className==="topnav"){
        x.className+= " responsive";
    }else{
        x.className="topnav";
    }
}