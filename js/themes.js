
// ===================== lên trên đầu trang ====================
$("#gototop").hide();
$(function () {
  var wh = $(window).height();
  var whtml =  $(document).height();			
  $(window).scroll(function () {				
    if ($(this).scrollTop() > whtml/10) {
      $('#gototop').fadeIn();
    } else {
      $('#gototop').fadeOut();
    }
  });
  $('#gototop').click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 800);
    return false;
  });
});




// ========================== slider ==============================
$('.slide-nav').on('click', function(e) {
  e.preventDefault();
  // get current slide
  var current = $('.flex-active').data('slide'),
    // get button data-slide
    next = $(this).data('slide');

  $('.slide-nav').removeClass('active');
  $(this).addClass('active');

  if (current === next) {
    return false;
  } else {
    $('.slider-warpper').find('.slider-container[data-slide=' + next + ']').addClass('flex--preStart');
    $('.flex-active').addClass('animate--end');
    setTimeout(function() {
      $('.flex--preStart').removeClass('animate--start flex--preStart').addClass('flex-active');
      $('.animate--end').addClass('animate--start').removeClass('animate--end flex-active');
    }, 800);
  }
});




// ========================== thời gian khuyến mãi ==============================
function makeTimer() {
  var endTime = new Date("30 July 2021 10:00:00 GMT+01:00");  //thời gian diễn ra khuyến mãi	
  endTime = (Date.parse(endTime) / 1000);
  var now = new Date();
  now = (Date.parse(now) / 1000);
  var timeLeft = endTime - now;
  var days = Math.floor(timeLeft / 86400); 
  var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
  var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
  var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
  if (hours < "10") { hours = "0" + hours; }
  if (minutes < "10") { minutes = "0" + minutes; }
  if (seconds < "10") { seconds = "0" + seconds; }
  $("#days").html(days + " Ngày");
  $("#hours").html(hours +" Giờ");
  $("#minutes").html(minutes + " Phút");
  $("#seconds").html(seconds + " Giây");		
}
setInterval(function() { makeTimer(); }, 1000);



// ========================== load tab ==============================
function info(evt, loadInfo) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(loadInfo).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();