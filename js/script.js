$(document).ready(function () {
  $("#todo, #doing, #done")
    .sortable({
      connectWith: ".listOfCards",
    })
    .disableSelection();

  $("#dialog").hide();

  $(".card").click(function () {
    $("#dialog")
      .dialog({
        width: 500,
        closeOnEscape: true,
        show: {
          effect: "fade",
          duration: 400,
        },
        hide: {
          effect: "fade",
          duration: 400,
        },
      })
      .bind("clickoutside", function (event) {
        $(this).hide();
      });

    $("#datepicker").datepicker();
    $("#tabs").tabs();
  });
});
