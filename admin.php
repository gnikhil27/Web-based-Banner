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
        <section>
            <form method="post"><input type="submit" name="logout" id="logout" value="logout" /></form>
            <form method="get">
                <select name="mode" id="mode">
                    <option value="text_mode">text_mode</option>
                    <option value="donation_mode">donation_mode</option>
                </select>
                <input type="file" name="image" id="image" />
                <input type="text" name="jtext" id="jtext" />

                <input type="submit" value="Modify" />
            </form>
            <br>
            <b>Current Text: </b><span id="data"></span>
            <script src="./js/socket.js"></script>
        </section>
    <?php } else {?>
        <section id="login_page">
            <form method="post">
                <input type="text" name="username" id="username" />
                <input type="password" name="password" id="password" />
                <input type="submit" value="Log In"/>
            </form>
        </section>
    <?php }?>
</body>
</html>