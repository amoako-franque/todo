// click on to-do to cancel
$("ul").on("click", "li", function () {
	$(this).toggleClass('complete');
});

// click on X to delete to-do
$("ul").on("click", "span", function (event) {
	$(this).parent().fadeOut(500, function () {
		$(this).remove();
	  });
	event.stopPropagation();
});

$("input[type=text]").keypress(function (e) {
	if (e.which === 13) {
		// getting to-do value entered
		var todoVal = $(this).val();
		$(this).val("");
		// create li and append value to ul
		$("ul").append("<li><span><i class='fa fas fa-trash-restore-alt'></i></span> " + todoVal + "</li>");
	}
});

$(".fa-plus-circle").click(function () { 
	$("input[type='text']").fadeToggle();
	
});