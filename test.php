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
$from = $_POST["from"];
$to = $_POST["to"];
$category = $_POST['category'];

$datefrom = $_POST['datefrom'];
$dateto = $_POST['dateto'];



$pdo = new PDO("mysql:host=$host; dbname=$database_name",$user,$password, array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));


	$qvery = $pdo->prepare("SELECT id FROM categories WHERE category_name like '$category' ");
	if ($qvery != "") {
		$qvery->execute();
		if ($qvery->rowCount() > 0 ) {
			$result = $qvery->fetchAll();
			$id =  $result[0][0];
			if ($from!='' && $to!='' && $datefrom!='' && $dateto!='') {
				$qvery = $pdo->prepare("SELECT * FROM payments WHERE category_id like '$id' and payment_date BETWEEN '$datefrom' AND '$dateto' AND amount BETWEEN '$from' AND '$to'");
			}
			elseif ($datefrom!='' && $dateto!='') {
				$qvery = $pdo->prepare("SELECT * FROM payments WHERE category_id like '$id' and payment_date BETWEEN '$datefrom' AND '$dateto'");
			}			elseif ($from!='' && $to!='') {
				$qvery = $pdo->prepare("SELECT * FROM payments WHERE category_id like '$id' AND amount BETWEEN '$from' AND '$to'");
			}
			else{
				$qvery = $pdo->prepare("SELECT * FROM payments WHERE category_id like '$id'");
			}

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