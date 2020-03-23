<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Media | Periodic-Table</title>
    <link rel="icon" href="./assets/logo/logo.png" type="image/png">
    <!-- ios -->
    <meta name="apple-mobile-web-app-title" content="Periodic-Table">
    <link rel="apple-touch-icon" href="./assets/logo/logo.png">
    <!-- css -->
    <link rel="stylesheet" href="./css/bootstrap.min.css">
    <link rel="stylesheet" href="./css/fontawesome.min.css">
    <link rel="stylesheet" href="./css/solid.min.css">
    <link rel="stylesheet" href="./css/brands.min.css">
    <link rel="stylesheet" href="./css/regular.min.css">
    <link rel="stylesheet" href="./css/style.css">
    <link rel="stylesheet" href="<?php if($_COOKIE['darkstatus']) echo "./css/darkstyle.css"; else echo "./css/style.css";?>">
</head>

<body onload="loaingFunction()">
    <div id="loading"><p><i class="fas fa-photo-video"></i></p></div>
    <div id="page">
        <!-- navbar -->
        <nav class="navbar <?php if($_COOKIE['darkstatus']) echo "navbar-dark bg-dark"; else echo "navbar-light bg-light";?> navbar-expand-lg pr-2">
            <a class="navbar-brand" href="./index.php">
                <img src="./assets/logo/logo.png" width="30" height="30" alt="Periodic-Table's logo" class="mr-1">
                Periodic-Table
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item mx-1">
                        <a class="nav-link" href="./index.php">Home</a>
                    </li>
                    <li class="nav-item mx-1">
                        <a class="nav-link" href="./list.php">Element</a>
                    </li>
                    <li class="nav-item mx-1 active">
                        <a class="nav-link" href="./media.php">Media</a>
                    </li>
                    <li class="nav-item mx-1">
                        <a class="nav-link" href="./quiz.php">Quiz</a>
                    </li>
                    <li class="nav-item mx-1">
                        <a class="nav-link" href="./developer.php">Developer</a>
                    </li>
                </ul>
                <!-- search -->
                <form class="form-inline" action="./search.php" method="POST">
                    <div class="input-group">
                        <input class="form-control" type="search" placeholder="Search" aria-label="Search" name="msg">
                        <div class="input-group-append">
                            <button class="btn btn-outline-secondary" type="sumbit"><i class="fas fa-search"></i></button>
                        </div>
                    </div>
                </form>
                <!-- language -->
                <ul class="navbar-nav">
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle ml-1" href="#" id="dropdownLanguage" data-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="false">
                            <i class="fas fa-globe-americas"></i>
                        </a>
                        <div class="dropdown-menu dropdown-menu-right mt-2" aria-labelledby="dropdownLanguage">
                            <a class="dropdown-item" href="./php/change.php?lang=en&path=media"><span class="flag-icon flag-icon-us mr-2"></span>English<i
                                    class="fas fa-check text-success ml-1"></i>
                            </a>
                            <a class="dropdown-item" href="./php/change.php?lang=th&path=media"><span class="flag-icon flag-icon-th mr-2"></span>Thai</a>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>

        <!-- content -->
        <div class="container">
            <h3 class="my-3">Media</h3>
            <hr>
            <div class="row" id="mediaList"></div>
            <a class="btn_change" href="./php/darkmode.php?path=media"><?php if($_COOKIE['darkstatus']) echo "<i class='fas fa-lightbulb'></i>"; else echo "<i class='fas fa-moon'></i>";?></a>
            <!-- footer -->
            <hr>
            <p class="text-center <?php if($_COOKIE['darkstatus']) echo "text-light"; else echo "text-dark";?>"><i class="fas fa-flask"></i> Periodic-Table | Web Technology Project (2019)</p>
        </div>
    </div>
    <!-- script -->
    <script src="./js/jquery-3.4.1.min.js"></script>
    <script src="./js/popper.min.js"></script>
    <script src="./js/bootstrap.min.js"></script>
    <script src="./js/fontawesome.min.js"></script>
    <script src="./js/solid.min.js"></script>
    <script src="./js/brands.min.js"></script>
    <script src="./js/regular.min.js"></script>
    <script src="./js/myScript/media.js"></script>
    <script src="./js/myScript/loading.js"></script>
</body>

</html>