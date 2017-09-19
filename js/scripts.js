$(document).ready(function() {

  $("#formOne").submit(function(event) {
    var userResponse = [];
    var luckyScore = 0;

    $("input:checkbox[name=unlucky]:checked").each(function() {
      var unlucky = parseInt($(this).val());
      return luckyScore = luckyScore + unlucky;

    });
    $("input:checkbox[name=lucky]:checked").each(function() {
      var lucky = parseInt($(this).val());
      return luckyScore = luckyScore + lucky;
    })

    if (luckyScore === 0) {
      $("#result3").show();
    } else if (luckyScore >= 0) {
      $("#result1").show();
    } else if (luckyScore <= 0) {
      $("#result2").show();
    }

    event.preventDefault();
  })
});
