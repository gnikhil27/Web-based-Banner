<?php 
    session_start();
    if(isset($_POST["logout"]))$_SESSION["auth"]=false;
    elseif(  // Lowest Security
        isset($_POST["username"]) && $_POST["username"] == "test"  &&
        isset($_POST["password"]) && $_POST["password"] == "test"
    )$_SESSION["auth"] = true;
    elseif(
        isset($_REQUEST["jtext"]) && $_REQUEST["jtext"] != ""
    ){
        $data = json_decode(file_get_contents("./js/data.json"));
        $data->text = $_REQUEST["jtext"];
        file_put_contents("./js/data.json", json_encode($data));
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="author" content="N. S. Gupta">
    <meta name="description" content="LD Alumni Meet Banner page.">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Panel</title>
</head>
<body>
    <?php if(isset($_SESSION["auth"]) && $_SESSION["auth"] == true){?>
        <section id="admin_page">
            
        </section>
    <?php } else {?>
        <section id="login_page">
            
        </section>
    <?php }?>
    <script src="./js/html_loader.js"></script>
    <script src="./js/socket.js"></script>
</body>
</html>