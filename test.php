<html>
	<link rel="stylesheet" href="index.css" type="text/css" >


<?php
	include("dbManager.php");
	
	$db = new dbManager;
	
/*
	$data = $db -> query_book(1);
	for($i=0; $i<count($data);$i++){
		echo $data[$i]['CONTENT']."<br>";
	}
*/

	$data = $db -> query_book(1);
	$title = "";
	$content = "";
	
	for($i=0; $i<count($data);$i++){
		
		if($data[$i]['TITLE'] == $title) {
			
			$content.=$data[$i]['CONTENT']."<br>";
			
			
		} else {
			if( $title != "") {
				echo "<div class='block' name='$title'>";
				echo "<p class='title'>$title</p>";
				echo "$content";
				echo "<br></div>";
			}
			$title = "";
			$content = "";
			
			$title = $data[$i]['TITLE'];
			$content.=$data[$i]['CONTENT']."<br>";
			
		}
	}
	
?>

</html>