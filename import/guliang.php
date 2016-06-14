<?php
	$data = $db -> query_book(3);
	$title = "";
	$content = "";
	// print_r($data);
	// echo "<a href=\"\" class=\"abgne_gotoheader\">Go To Target</a>";
	for($i=0; $i<count($data);$i++){
		$item = $data[$i];
		$start = $item['START_YEAR'];
		$end = $item['END_YEAR'];
		$classYear = "";
		for($j = -1; $j < substr($end, 5,2) - substr($start, 5,2); $j++){
			$temp = substr($start, 5, 2) + $j + 1;
			if ((substr($start, 5, 2) + $j + 1) < 10) {
				$temp = "0".$temp;
			}
			$classYear.=" ".substr($start, 0,5).$temp;
		}
		if($item['TITLE'] == $title) {
			$content.="<li><a href=\"#\" class=\"text".$classYear."\" id=\"".$start."\">".$data[$i]['CONTENT']."</a></li>";		
		} else {
			if( $title != "") {
				echo "<div class='block $title' name='$title'>";
				echo "<p class='title'>$title</p>";
				echo "$content";
				echo "<br></div>";
			}
			$title = "";
			$content = "";
			
			$title = $data[$i]['TITLE'];
			$content.="<li><a href=\"\" class=\"text".$classYear."\" id=\"".$start."\">".$data[$i]['CONTENT']."</a></li>";
			
		}
	}
?>