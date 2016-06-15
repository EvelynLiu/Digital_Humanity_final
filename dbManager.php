
<?php
	class dbManager{
		//attribute
		private $dbhost = '140.112.30.226:13003';
		private $dbuser = 'test';
		private $dbpass = 'lab303';
		private $dbname = 'chunqiusys';
		private $bookID_Name = array(1=>"chunqiu", 2=>"zuozhuan", 3=>"gongyang", 4=>"guliang", 5=>"chunqiujingjie");
		private $conn;
		//constructor
		function __construct() {
			$this->conn = mysql_connect($this->dbhost, $this->dbuser, $this->dbpass) or die('Error with MySQL connection');
			mysql_query("SET NAMES 'utf8'", $this->conn);
			mysql_select_db($this->dbname, $this->conn);
		}
		function __destruct() {
			mysql_close($this->conn);
		}
			
		function query_book($bookID){
			$sql = "SELECT * FROM ".$this->bookID_Name[$bookID].";";
			$result = mysql_query($sql, $this->conn) or die('MySQL query error');
			$data = array();
			while($record = mysql_fetch_array($result)){
				array_push($data, $record);
			}
			return $data;
		}
		
		function query_title($title, $bookID){
			$sql = "SELECT * FROM ".$this->bookID_Name[$bookID]." WHERE TITLE='".$title."';";
			$result = mysql_query($sql, $this->conn) or die('MySQL query error');
			$data = array();
			while($record = mysql_fetch_array($result)){
				array_push($data, $record);
			}
			return $data;
		}
		
		function search_TITLEandCONTENT($word, $bookID){
			$sql = "SELECT * FROM ".$this->bookID_Name[$bookID]." WHERE TITLE LIKE '%".$word."%' OR CONTENT LIKE '%".$word."%';";
			$result = mysql_query($sql, $this->conn) or die('MySQL query error');
			$data = array();
			while($record = mysql_fetch_array($result)){
				array_push($data, $record);
			}
			return $data;
		}
		
		function find_BOOKCASE_ID($bookName){
			if(preg_match("/經解/",$bookName)){
				$bookName = "春秋經解";
			}
			else if(preg_match("/公羊/",$bookName)){
				$bookName = "春秋公羊傳";
			}
			else if(preg_match("/左/",$bookName)){
				$bookName = "春秋左氏傳";
			}
			else if(preg_match("/穀梁/",$bookName)){
				$bookName = "春秋穀梁傳";
			}
			else{
				$bookName = "春秋";
			}
			$sql = "SELECT BOOK_ID FROM bookcase WHERE BOOK_NAME='".$bookName."';";
			$result = mysql_query($sql, $this->conn) or die('MySQL query error');
			$bookID = mysql_fetch_array($result);
			return $bookID["BOOK_ID"];
		}
		
		function find_title($year){
			$year = '0'.$year.'-01-01';
			$sql = "SELECT TITLE FROM time WHERE START_YEAR='".$year."';";
			$result = mysql_query($sql, $this->conn) or die('MySQL query error');
			$title = mysql_fetch_array($result);
			return $title["TITLE"];
		}
		
		function find_year($title){
			$sql = "SELECT START_YEAR FROM time WHERE TITLE='".$title."';";
			$result = mysql_query($sql, $this->conn) or die('MySQL query error');
			$year_month_date = mysql_fetch_array($result);
			$dataArray = explode("-",$year_month_date['START_YEAR']);
			$year = $dataArray[0];
			return $year;
		}
	}
?>



