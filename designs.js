// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {

// Your code goes here!
var canvas, cell, gridHeight, gridWidth, rows;

canvas = $("#pixelCanvas");
gridHeight = $('#inputHeight').val();
gridWidth = $('#inputWidth').val();

canvas.children().remove();

for (x = 0; x < gridHeight; x++) {
	canvas.append('<tr></tr>');
	}

	rows = $('tr');

	for (i = 0; i < gridWidth; i++) {
	rows.append('<td></td>');
	}



	$('td').click(function(){
		var color;
		color = $("#colorPicker").val();

		 $(this).css("background-color", color);
});
}

$('input[type="submit"]').click(function(){
	event.preventDefault();
  makeGrid();
});
