
// $(document).ready(function() {
//   $('#pagepiling').pagepiling({
//     // sectionsColor: ['#fffff', '#fffff', '#fffff', '#fffff', '#fffff', '#fffff', '#fffff'],
//     //  navigation: {
//     //  	'position': 'right',
//     //   	'tooltips': ['Page 1', 'Page 2', 'Page 3', 'Page 4', 'Page 5', 'Page 6', 'Page 7']
//     //   }
// });
// });

window.onscroll = function() {scrollFunction()};

function scrollFunction() 
{
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) 
  {
    document.getElementById("navbar").style.background = "rgb(33 57 65)";
  } else {
    document.getElementById("navbar").style.background = "none";
  }
}


$('.carosel-control-right').click(function() {
  alert("hi");
  $(this).blur();
  $(this).parent().find('.carosel-item').first().insertAfter($(this).parent().find('.carosel-item').last());
});
$('.carosel-control-left').click(function() {
  $(this).blur();
  $(this).parent().find('.carosel-item').last().insertBefore($(this).parent().find('.carosel-item').first());
});
