//$('#global-header').load('file:///views/partials/_header.html')
$('#sidebar').load('file:///views/partials/_right_sidebar.html');
$('#loader').load('file:///views/partials/_loader.html');
$('#chat_inner').load('file:///views/partials/_inner_chat.html');
$('#aside').load('file:///views/partials/_aside.html');

$(document).ready(function() {
  $('.page-body').load('file:///views/home/welcome.html');
  $('#staffs').on('click', function() {
    // $('head').append( $('<link rel="stylesheet/less" type="text/css" />').attr('href', '..\assets\Pages\Home\_staff_header.less') );
    $('.page-body').load('file:///views/partials/staff/_staff.html');
  });
  $('#homepage').on('click', function() {
    $('.page-body').load('file:///views/home/welcome.html');
  });
  $('#homepage-title').on('click', function() {
    $('.page-body').load('file:///views/home/welcome.html');
  });
  $(function() {
    $('#menu-toggle').click(function(e) {
      e.preventDefault();
      $('#wrapper').toggleClass('toggled');
      if ($('#wrapper').hasClass('toggled')) {
        $('.pcoded-content').attr('style', 'margin-left: 250px');
      } else {
        $('.pcoded-content').attr('style', 'margin-left: 0');
      }
    });

    $(window).resize(function(e) {
      if ($(window).width() <= 768) {
        $('#wrapper').removeClass('toggled');
      } else {
        $('#wrapper').addClass('toggled');
      }
    });
  });
});
