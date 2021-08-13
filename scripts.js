(function() {

    var demo = $('#demo'); //Quiz div object
  
    // Display coming days
    displayDays();
  
    // Animates buttons on hover
    $('.btn').on('mouseenter', function () {
      $(this).addClass('active');
    });
  
    $('.btn').on('mouseleave', function () {
      $(this).removeClass('active');
    });
  
    function displayDays(){
      var d = new Date();
      var today = d.getDate() + '/' + (d.getMonth()+1) + '/' + d.getFullYear();
      var tomorrow = (d.getDate()+1) + '/' + (d.getMonth()+1) + '/' + d.getFullYear();
      var dayAfterTomorrow = (d.getDate()+2) + '/' + (d.getMonth()+1) + '/' + d.getFullYear();
  
      var todayElement = $("label[for='today']");
      todayElement.text(today);
  
      var tomorrowElement = $("label[for='tomorrow']");
      tomorrowElement.text(tomorrow);
  
      var dayAfterTomorrowElement = $("label[for='day after']");
      dayAfterTomorrowElement.text(dayAfterTomorrow);
    }
  
  // Show day and time on next page
  //  $('#scheduleDemo').on('click', function (e) {
  //     scheduleDemo();
  //   });
    // function scheduleDemo(){
    //     if(validateForm()){
    //       $('.studentDetails').hide();
    //       $('.slotDetails').show();
    //       displayDays();
    //     }
    // }
    function validateForm(){
      var isValid = false;
      var studentAgeGroup = "" //Child Age Group
      var parentName =  $('#pname').val();
      var contactNumber =  $('#phone').val();
      var email = $('#email').val();
      var studentName = $('#fname').val();
      var studentGrade = $('#grade').val();
      if(parentName && contactNumber && email && studentName && studentGrade){
        isValid= true;
        $('.requiredSpan').hide();
      }
      else{
        isValid = false;
        $('.requiredSpan').show();
      }
      return isValid;
    }
  // Display Days
    function displayDays(){
      var d = new Date();
      var today = d.getDate() + '/' + (d.getMonth()+1) + '/' + d.getFullYear();
      var tomorrow = (d.getDate()+1) + '/' + (d.getMonth()+1) + '/' + d.getFullYear();
      var dayAfterTomorrow = (d.getDate()+2) + '/' + (d.getMonth()+1) + '/' + d.getFullYear();
      //var todayElement =  $('#today a')[0];
      var todayElement = $("input[value='today']").parent();
      todayElement.text(today);
      //var tomorrowElement = $('#tomorrow a')[0];
      var tomorrowElement = $("input[value='tomorrow']").parent();
      tomorrowElement.text(tomorrow);
      //var dayAfterTomorrowElement = $('#dayAfterTomorrow a')[0];
      var dayAfterTomorrowElement = $("input[value='day after']").parent();
      dayAfterTomorrowElement.text(dayAfterTomorrow);
    }
  
  // Radio Button - Adding Class on Click
    $('.demo-days label').click(function() {
            $('.demo-days label').removeClass('orangeBackground');
            $(this).addClass('orangeBackground');
        });
    $('.demo-time label').click(function() {
            $('.demo-time label').removeClass('blueBackground');
            $(this).addClass('blueBackground');
        });
  
  })();
  function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
  
  