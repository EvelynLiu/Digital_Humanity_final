$(document).on('click', '.dropdown-toggle', function () {
    //console.log("Selected Option:"+$(this).text());
    var el = document.getElementById('age');
    var h = el.getElementsByTagName("h4");
    var old = "年號：";
    h[1].innerHTML = old + $(this).text();
});

$(document).on('click', '.dropdown-menu li a', function () {
    //console.log("Selected Option:"+$(this).text());
    var el = document.getElementById('age');
    var h = el.getElementsByTagName("h4");
    var old = h[1].innerHTML;
    h[1].innerHTML = old + $(this).text();
    h[0].innerHTML = h[1].innerHTML;
});

function show_page() {
	
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
    if (count === 0){ //only春秋
		$( $('.book')[0] ).attr("class", "book col-sm-12 content");
		
    	$( $('.book')[1] ).attr("class", "hidden");
		$( $('.book')[2] ).attr("class", "hidden");
		$( $('.book')[3] ).attr("class", "hidden");
    }
    else if (count === 1){ //col-sm-6 * 2 => checked[0]
		$( $('.book')[0] ).attr("class", "book col-sm-6 content");
		
		if(checked[0] == "左傳") {
			$( $('.book')[1] ).attr("class", "book col-sm-6 content");
			
			$( $('.book')[2] ).attr("class", "book col-sm-6 content hidden");
			$( $('.book')[3] ).attr("class", "book col-sm-6 content hidden");
		}
				
		else if (checked[0] == "公羊傳"){
			$( $('.book')[2] ).attr("class", "book col-sm-6 content");
			
			$( $('.book')[1] ).attr("class", "book col-sm-6 content hidden");
			$( $('.book')[3] ).attr("class", "book col-sm-6 content hidden");
		}
		else if (checked[0] == "穀梁傳") {
			$( $('.book')[3] ).attr("class", "book col-sm-6 content");
			
			$( $('.book')[1] ).attr("class", "book col-sm-6 content hidden");
			$( $('.book')[2] ).attr("class", "book col-sm-6 content hidden");
		}
    }
    else if (count === 2){ //col-sm-4 * 3 => checked[0][1]
    	$( $('.book')[0] ).attr("class", "book col-sm-4 content");
		
		if(checked[0] == "左傳" && checked[1] == "公羊傳") {
			$( $('.book')[1] ).attr("class", "book col-sm-4 content");
			$( $('.book')[2] ).attr("class", "book col-sm-4 content");
			
			$( $('.book')[3] ).attr("class", "book col-sm-4 content hidden");
		} 
		else if(checked[0] == "左傳" && checked[1] == "穀梁傳") {
			$( $('.book')[1] ).attr("class", "book col-sm-4 content");
			$( $('.book')[3] ).attr("class", "book col-sm-4 content");
			
			$( $('.book')[2] ).attr("class", "book col-sm-4 content hidden");
		}
		else if(checked[0] == "公羊傳" && checked[1] == "穀梁傳") {
			$( $('.book')[1] ).attr("class", "book col-sm-4 content hidden");
			
			$( $('.book')[2] ).attr("class", "book col-sm-4 content");
			$( $('.book')[3] ).attr("class", "book col-sm-4 content");
		}
    }
    else if (count === 3){ //col-sm-3 * 4 => checked[0][1][2]
    	$( $('.book')[0] ).attr("class", "book col-sm-3 content");
		
    	$( $('.book')[1] ).attr("class", "book col-sm-3 content");
		$( $('.book')[2] ).attr("class", "book col-sm-3 content");
		$( $('.book')[3] ).attr("class", "book col-sm-3 content");
    }
	/*
    else if (count === 4){ //col-sm-2 * 5 => checked[0][1][2]
    	$( $('.book')[0] ).attr("class", "book col-sm-3 content");
		
    	$( $('.book')[1] ).attr("class", "book col-sm-3 content");
		$( $('.book')[2] ).attr("class", "book col-sm-3 content");
		$( $('.book')[3] ).attr("class", "book col-sm-3 content");
    }*/
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