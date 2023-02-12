


window.onscroll = function() {scrollFunction()};

function scrollFunction() 
{
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) 
  {
    document.getElementById("navbar").style.background = "black";
  } else {
    document.getElementById("navbar").style.background = "none";
  }
}