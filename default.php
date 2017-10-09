<?php




define("DB_TYPE","mysql");
define("DB_HOST","localhost");
define("DB_NAME","task");
define("DB_USER","root");
define("DB_PASS","");

$host = DB_HOST;
$user = DB_USER;
$password = DB_PASS;
$database_name = DB_NAME;
$category = $_POST['category'];





$pdo = new PDO("mysql:host=$host; dbname=$database_name",$user,$password, array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));


	$qvery = $pdo->prepare("SELECT id FROM categories WHERE category_name like '$category' ");
	if ($qvery != "") {
		$qvery->execute();
		if ($qvery->rowCount() > 0 ) {
			$result = $qvery->fetchAll();
			$id =  $result[0][0];
			$qvery = $pdo->prepare("SELECT * FROM payments WHERE category_id like '$id'");

			if ($qvery != "") {
				$qvery->execute();
				if ($qvery->rowCount() > 0 ) {
					$result = $qvery->fetchAll();
					echo json_encode($result);
				}
			}
		}
	}



?>