<html>
<head>
    <title>PHP TESTING</title>
    <style>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 70%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>
</head>
<body>
	<form action="" method="post">
        <label>Name</label>
        <input type="text" name="name" value="Enter name" />
        <label>Roll</label>
        <input type="int" name="roll" value="Enter roll number" />
        <input type="submit" name="submit" value="Submit" />
    </form>
    <table>
        <tr>
            <th>StudentName</th>
            <th>roll</th>
        </tr>
 
<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "myDB";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if (isset($_POST['submit'])) { //to check if the form was submitted
	$name= $_POST['name'];
	$roll= $_POST['roll'];

$sql = "INSERT INTO studentsdata (StudentName, roll)
VALUES ('$name', '$roll');";


if ($conn->multi_query($sql) === TRUE) {
    echo "New records created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}
}
$sql = "SELECT StudentName, roll from studentsdata";
    $result = $conn -> query($sql);
        
    if($result -> num_rows > 0){
        while ($row = $result -> fetch_assoc()){
            echo "<tr><th>" . $row["StudentName"] ."<th>" . $row["roll"]. "</th></tr>" ;
        }
        echo "</table>";
    }else{
        echo "0  result";
    }

$conn->close();

?>
</table>
</body>
</html>
