// Add tabindex to make element focusable
$(".typaoke").attr("tabindex", "0");

let html = "";

let lines = $(".typaoke_content").text().trim().split("\n").map(line => line.trim().split(''));

let charCount = 0;

for (let i = 0; i < lines.length; i++) {
  for (let j = 0; j < lines[i].length; j++) {
    html += '<span class="typaoke_untyped" id="typaoke_' + (charCount++) + '">' + lines[i][j] + '</span>';
  }
  html += '<br>';
}

$(".typaoke").html(html);

let index = 0;
let typaokeReachedEnd = false;

let characters = lines.flat();

// Going forwards
$(".typaoke").keypress(e => {
  if (characters[index] == '\n') {
    index++;
  }

  if (index < characters.length && String.fromCharCode(e.which) == characters[index]) {
    if (String.fromCharCode(e.which) == " ") {
      e.preventDefault();
    }
    
    $("#typaoke_" + index++).attr("class", "typaoke_typed");
  }

  if (index >= characters.length) {
    typaokeReachedEnd = true;
  }
})

// Going backwards
$(".typaoke").keydown(e => {
  if (index > 0 && e.which == 8) {
    $("#typaoke_" + --index).attr("class", "typaoke_untyped");
  }
})
