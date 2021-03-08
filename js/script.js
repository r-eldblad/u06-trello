$(document).ready(function () {
  $("#todo, #doing, #done")
    .sortable({
      connectWith: ".listOfCards",
    })
    .disableSelection();
});
