<?php 

require_once("db_config.php");

class Database {

	public $connection;

	function __construct(){

		$this->open_db_connection();

	}

	public function open_db_connection(){

		$this->connection = new mysqli(DB_HOST,DB_USER,DB_PASS,DB_NAME);

		if($this->connection->connect_errno){

			die("Database connection failed very badly" . $this->connection->connect_error);
		}
		

	}

	public function query($sql){
		$result = $this->connection->query($sql);
		
		return $result;
	}

	private function confirm_query($result){
		if(!result){
			die("query failed" . $this->connection->error);
		}
	}

	public function prepare($sql){
		$result = $this->connection->prepare($sql);
		
		return $result;
	}

}

$database = new Database();


?>