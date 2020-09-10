// Add li when press enter
$("input").on("keypress", function (e) {
  if (e.which === 13) {
    var input = $(this).val();
    // set string to be empty after typing
    $(this).val(null);
    $("ul").append(
      "<li>" +
        '<span><i class="far fa-trash-alt"></i></span> ' +
        input +
        "</li>"
    );
  }
});

// Remove Todos
$("ul").on("click", "span", function (event) {
  $(this)
    // span parent is li
    .parent()
    .fadeOut(function () {
      // this refers to span and its  parent
      $(this).remove();
    });
  // stop event bubbling; fire only for span not li
  event.stopPropagation();
});

// Add Line-Through Class
$("ul").on("click", "li", function () {
  $(this).toggleClass("done");
});

// Hide button
$(".fa-plus").on("click", function () {
  $("input").fadeToggle();
});
