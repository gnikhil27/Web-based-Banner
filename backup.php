<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="refresh" content="20">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="author" content="N. S. Gupta">
    <meta name="description" content="LD Alumni Meet Banner page.">
    <link rel="stylesheet" href="./css/home.css">
    <link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet'>
    <script src="./js/modes.js"></script>
    <script src="./js/writer.js"></script>
    
    <title>Backup Page</title>
</head>
<body>
    <?php $data = json_decode(file_get_contents("./js/data.json"));?>
    <section id="<?= $data->mode?>">
        <?php include_once "theme/".$data->mode.".html";?>
    </section>
    <script src="./js/socket.js"></script>
</body>
</html>