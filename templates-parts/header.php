<!DOCTYPE html>
<html lang="pl-PL">

<head>
    <title><?php echo $title; ?></title>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="<?php echo $desc; ?>" />
    <meta name="robots" content="<?php echo $bots; ?>" />
    <link rel="icon" href="img/favicon.png" sizes="32x32">

    <!-- bootstrap 4.0 -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.3/css/bootstrap.min.css">

    <!-- fontawesome 4.7.0 -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">

    <!-- fonts -->
    <link href="https://fonts.googleapis.com/css?family=Raleway:300,400,700" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Ubuntu:400,700&amp;subset=latin-ext" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Roboto+Condensed:400,700|Roboto:400,700&amp;subset=latin-ext" rel="stylesheet"> 

    <!-- datatables -->
    <link rel="stylesheet" href="https://cdn.datatables.net/1.10.16/css/dataTables.bootstrap4.min.css">
    <link rel="stylesheet" href="https://cdn.datatables.net/plug-ins/1.10.16/integration/font-awesome/dataTables.fontAwesome.css">

    <!-- custom scripts and css -->
    <link rel="stylesheet" href="css/style.css" type="text/css" />
    
    <!-- google recaptcha -->
    <script src='https://www.google.com/recaptcha/api.js'></script>
</head>

<body>
<nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="/frontend">
        <img src="/frontend/img/logo_1.png" height="30" alt=""> CenUJ
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse">
        <ul class="navbar-nav mr-auto" id="navbarSupportedContent">
            <li class="nav-item active">
                <a href="/frontend" class="nav-link">
                    <i class="fa fa-home" aria-hidden="true"></i> Kokpit
                </a>
            </li>
            <li class="nav-item">
                <a href="/frontend" class="nav-link">
                    <i class="fa fa-plus" aria-hidden="true"></i> Dodaj produkt
                </a>
            </li>
        </ul>

        <ul class="navbar-nav ml-auto">

            <span class="navbar-text">Zalogowano jako</span>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style="font-size: 1rem;"><i class="fa fa-user-circle" aria-hidden="true"></i> User </a>
            
                <div class="dropdown-menu" style="right: 0px; left: -100%;" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="/frontend/login.php?action=logout"><i class="fa fa-sign-out" aria-hidden="true"></i> Wyloguj</a>
                </div>
            </li>
        </ul>
    </div>
</nav>