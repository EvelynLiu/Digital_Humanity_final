function show() {
	var el = document.getElementById('books');
	var input = el.getElementsByTagName('input');
	var count = 0;
	var book_names = [];
	var checked = [];
	var main = document.getElementById('main');
	for (var i = 0, len = input.length; i < len; i++){
        if (input[i].type === 'checkbox'){
            book_names[i] = input[i].value;
            if (input[i].checked) {
            	checked[count] = input[i].value;
            	count++;
            }
            console.log(book_names[i]);
        }
    }
    console.log(count);
    if (count === 1){      //col-sm-6 * 2
    	main.innerHTML = "<div class=\"col-sm-10 col-md-10\"><div class=\"row\"><div class=\"col-sm-6 content\"><h1 class=\"page-header\">春秋</h1><ul class=\"nav nav-sidebar\"><li><a href=\"#\">...</a></li><li><a href=\"#\">...</a></li><li><a href=\"#\">...</a></li></ul></div><div class=\"col-sm-6 content\"><h1 class=\"page-header\">"+checked[0]+"</h1><ul class=\"nav nav-sidebar\"><li><a href=\"#\">...</a></li><li><a href=\"#\">...</a></li><li><a href=\"#\">...</a></li></ul></div></div></div>";
    }
    else if (count === 2){ //col-sm-4 * 3
    	main.innerHTML = "<div class=\"col-sm-10 col-md-10\"><div class=\"row\"><div class=\"col-sm-4 content\"><h1 class=\"page-header\">春秋</h1><ul class=\"nav nav-sidebar\"><li><a href=\"#\">...</a></li><li><a href=\"#\">...</a></li><li><a href=\"#\">...</a></li></ul></div><div class=\"col-sm-4 content\"><h1 class=\"page-header\">"+checked[0]+"</h1><ul class=\"nav nav-sidebar\"><li><a href=\"#\">...</a></li><li><a href=\"#\">...</a></li><li><a href=\"#\">...</a></li></ul></div><div class=\"col-sm-4 content\"><h1 class=\"page-header\">"+checked[1]+"</h1><ul class=\"nav nav-sidebar\"><li><a href=\"#\">...</a></li><li><a href=\"#\">...</a></li><li><a href=\"#\">...</a></li></ul></div></div></div>";
    }
    else if (count === 3){ //col-sm-3 * 4
    	main.innerHTML = "<div class=\"col-sm-10 col-md-10\"><div class=\"row\"><div class=\"col-sm-3 content\"><h1 class=\"page-header\">春秋</h1><ul class=\"nav nav-sidebar\"><li><a href=\"#\">...</a></li><li><a href=\"#\">...</a></li><li><a href=\"#\">...</a></li></ul></div><div class=\"col-sm-3 content\"><h1 class=\"page-header\">"+checked[0]+"</h1><ul class=\"nav nav-sidebar\"><li><a href=\"#\">...</a></li><li><a href=\"#\">...</a></li><li><a href=\"#\">...</a></li></ul></div><div class=\"col-sm-3 content\"><h1 class=\"page-header\">"+checked[1]+"</h1><ul class=\"nav nav-sidebar\"><li><a href=\"#\">...</a></li><li><a href=\"#\">...</a></li><li><a href=\"#\">...</a></li></ul></div><div class=\"col-sm-3 content\"><h1 class=\"page-header\">"+checked[2]+"</h1><ul class=\"nav nav-sidebar\"><li><a href=\"#\">...</a></li><li><a href=\"#\">...</a></li><li><a href=\"#\">...</a></li></ul></div></div></div>";
    }
    else if (count === 4){ //col-sm-2 * 5
    	main.innerHTML = "<div class=\"col-sm-2 content\"><h1 class=\"page-header\">春秋</h1><ul class=\"nav nav-sidebar\"><li><a href=\"#\">...</a></li><li><a href=\"#\">...</a></li><li><a href=\"#\">...</a></li></ul></div><div class=\"col-sm-2 content\"><h1 class=\"page-header\">左傳</h1><ul class=\"nav nav-sidebar\"><li><a href=\"#\">...</a></li><li><a href=\"#\">...</a></li><li><a href=\"#\">...</a></li></ul></div><div class=\"col-sm-2 content\"><h1 class=\"page-header\">公羊傳</h1><ul class=\"nav nav-sidebar\"><li><a href=\"#\">...</a></li><li><a href=\"#\">...</a></li><li><a href=\"#\">...</a></li></ul></div><div class=\"col-sm-2 content\"><h1 class=\"page-header\">穀梁傳</h1><ul class=\"nav nav-sidebar\"><li><a href=\"#\">...</a></li><li><a href=\"#\">...</a></li><li><a href=\"#\">...</a></li></ul></div><div class=\"col-sm-2 content\"><h1 class=\"page-header\">春秋經解</h1><ul class=\"nav nav-sidebar\"><li><a href=\"#\">...</a></li><li><a href=\"#\">...</a></li><li><a href=\"#\">...</a></li></ul></div>";
    }
}
/*
"<div class=\"col-sm-10 col-md-10\">
	<div class=\"row\">
		<div class=\"col-sm-3 content\">
			<h1 class=\"page-header\">春秋</h1>
			<ul class=\"nav nav-sidebar\">
				<li><a href=\"#\">...</a></li>
				<li><a href=\"#\">...</a></li>
				<li><a href=\"#\">...</a></li>
			</ul>
		</div>
		<div class=\"col-sm-3 content\">
			<h1 class=\"page-header\">"+book_names[0]+"</h1>
			<ul class=\"nav nav-sidebar\">
				<li><a href=\"#\">...</a></li>
				<li><a href=\"#\">...</a></li>
				<li><a href=\"#\">...</a></li>
			</ul>
		</div>
	</div>
</div>"
*/