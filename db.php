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





$name = $_POST['categoryID'];
$id;
$pdo = new PDO("mysql:host=$host; dbname=$database_name",$user,$password, array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));
$qvery = $pdo->prepare("SELECT id FROM categories WHERE category_name like '$name' ");

if ($qvery != "") {
	$qvery->execute();
	if ($qvery->rowCount() > 0 ) {
		$result = $qvery->fetchAll();
	}
}


$sql =$pdo->prepare ("INSERT INTO payments (payment_name, amount, payment_date, category_id, coment) VALUES (?, ?, ?, ?, ?)");

$sql->bindValue("1",$_POST['same_payment']);
$sql->bindValue("2",$_POST['amount']);
$sql->bindValue("3",$_POST['date']);
$sql->bindValue("4",$result[0][0]);
$sql->bindValue("5",$_POST['textID']);

$sql->execute();

echo "ok";
?>