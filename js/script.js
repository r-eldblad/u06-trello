$(document).ready(function () {
  $("#todo, #doing, #done")
    .sortable({
      connectWith: ".listOfCards",
    })
    .disableSelection();

  $("#dialog").hide();

  $("h1").click(function () {
    $("h1").effect("shake");
  });

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

  $.widget("complete"),
    {
      _create: function () {
        const progress = "<em>Klar</em>";
        this.element.addClass("complete").append(progress);
      },
    };

  $(".card em").progressbar();
});
