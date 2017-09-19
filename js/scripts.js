$(document).ready(function() {

  $("#formOne").submit(function(event) {
    alert("hello");
    var unluckyArray = [];
    $("input:checkbox[name=unlucky]:checked").each(function() {
      var unlucky = $(this).val();
      unluckyArray.push(unlucky);
    });
          alert(unluckyArray);

    event.preventDefault();
  })
});
