<?php
    // json-1
    $json_file = file_get_contents('./data/elements_th.json');
    $json_data = json_decode($json_file, true);
    // json-2
    $json_file1 = file_get_contents('./data/data_th.json');
    $json_data1 = json_decode($json_file1, true);
    // json-3
    $json_file2 = file_get_contents('./data/wikipedia.json');
    $json_data2 = json_decode($json_file2, true);
    $id = (int) $_GET['id'] - 1;
    $id_ = $id + 1;
    if ($id_ > 118 || $id_ < 1) {
        redirect("./index.php");
    }

    function redirect($url) {
        ob_start();
        while (ob_get_status()) {
            ob_end_clean();
        }
        header( "Location: $url" );
    }
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title><?php echo($json_data[$id]['Element'] . " | ตารางธาตุ"); ?></title>
    <link rel="icon" href="./assets/logo/logo.png" type="image/png">
    <!-- ios -->
    <meta name="apple-mobile-web-app-title" content="<?php echo($json_data[$id]['Element'] . " | ตารางธาตุ"); ?>">
    <link rel="apple-touch-icon" href="./assets/logo/logo.png">
    <!-- css -->
    <link rel="stylesheet" href="./css/bootstrap.min.css">
    <link rel="stylesheet" href="./css/fontawesome.min.css">
    <link rel="stylesheet" href="./css/solid.min.css">
    <link rel="stylesheet" href="./css/brands.min.css">
    <link rel="stylesheet" href="./css/style.css">
    <link rel="stylesheet" href="<?php if($_COOKIE['darkstatus']) echo "./css/darkstyle.css"; else echo "./css/style.css";?>">
</head>

<body onload="loaingFunction()">
    <div id="loading">
        <div class="show-box mybox
            <?php
                if($json_data[$id]['Type'] == "อโลหะ") echo "cl_Nonmetal";
                else if($json_data[$id]['Type'] == "โลหะอัลคาไล") echo "cl_AlkaliMetal";
                else if($json_data[$id]['Type'] == "โลหะอัลคาไลน์เอิร์ธ") echo "cl_AlkalineEarthMetal";
                else if($json_data[$id]['Type'] == "กึ่งโลหะ") echo "cl_Metalloid";
                else if($json_data[$id]['Type'] == "ก๊าซเฉี่อย") echo "cl_NobleGas";
                else if($json_data[$id]['Type'] == "โลหะหลังทรานซิชัน") echo "cl_PostTransitionMetal";
                else if($json_data[$id]['Type'] == "โลหะทรานซิชัน") echo "cl_TransitionMetal";
                else if($json_data[$id]['Type'] == "แลนทาไนด์") echo "cl_Lanthanide";
                else if($json_data[$id]['Type'] == "แอกทิไนด์") echo "cl_Actinide";
                else if($json_data[$id]['Type'] == "") echo "cl_artificial";
            ?>">
            <box>
                <number><?php echo $json_data[$id]['AtomicNumber'] ?></number>
                <symbol><?php echo $json_data[$id]['Symbol'] ?></symbol>
                <element><?php echo $json_data[$id]['Element'] ?></element>
                <mass><?php echo $json_data[$id]['AtomicMass'] ?></mass>
            </box>
        </div>
    </div>
    <div id="page">
        <!-- navbar -->
        <nav class="navbar <?php if($_COOKIE['darkstatus']) echo "navbar-dark bg-dark"; else echo "navbar-light bg-light";?> navbar-expand-lg pr-2">
            <a class="navbar-brand" href="./index.php">
                <img src="./assets/logo/logo.png" width="30" height="30" alt="โลโก้เว็บไซต์ ตารางธาตุ" class="mr-1">
                ตารางธาตุ
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item mx-1">
                        <a class="nav-link" href="./index.php">หน้าหลัก</a>
                    </li>
                    <li class="nav-item mx-1">
                        <a class="nav-link" href="./list.php">ธาตุ</a>
                    </li>
                    <li class="nav-item mx-1">
                        <a class="nav-link" href="./media.php">สื่อ</a>
                    </li>
                    <li class="nav-item mx-1">
                        <a class="nav-link" href="./quiz.php">ควิช</a>
                    </li>
                    <li class="nav-item mx-1">
                        <a class="nav-link" href="./developer.php">ผู้พัฒนา</a>
                    </li>
                </ul>
                <!-- search -->
                <form class="form-inline" action="./search.php" method="POST">
                    <div class="input-group">
                        <input class="form-control" type="search" placeholder="ค้นหา" aria-label="Search" name="msg">
                        <div class="input-group-append">
                            <button class="btn btn-outline-secondary" type="submit"><i class="fas fa-search"></i></button>
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
                            <a class="dropdown-item" <?php echo("href=\"./php/change.php?lang=en&path=data&id={$id_}\"") ?>><span
                                    class="flag-icon flag-icon-us mr-2"></span>อังกฤษ</a>
                            <a class="dropdown-item" <?php echo("href=\"./php/change.php?lang=th&path=data&id={$id_}\"") ?>><span
                                    class="flag-icon flag-icon-th mr-2"></span>ไทย<i
                                    class="fas fa-check text-success ml-1"></i></a>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>

        <!-- content -->
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-md-11 col-sm-12 col-12 topic mx-auto py-3 my-3">
                    <h3 class="text-center font-weight-bold"><?php echo("{$json_data[$id]['Element']}")?></h3>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-4 col-md-11 col-sm-12 col-12 mx-auto my-3">
                    <img class="element-img radius mx-auto d-block" src="./assets/element/e<?php
                        $picname = '' . $id_;
                        if (strlen($picname) == 1) {
                            $picname = '00' . $id_;
                        } else if (strlen($picname) == 2) {
                            $picname = '0' . $id_;
                        } else if (strlen($picname) == 3) {
                            $picname = $id_;
                        }
                        echo("{$picname}");
                    ?>.png" alt="<?php echo("{$json_data[$id]['Element']}")?>">
                </div>
                <div class="col-lg-4 col-md-11 col-sm-12 col-12 mx-auto my-3">
                        <table class="table table-bordered full-table no-wrap">
                            <tr class="table-yellow">
                                <td class="font-weight-bold"><i class="fas fa-angle-right mx-1"></i> เลขอะตอม : </td>
                                <td class="text-center"><?php if ($json_data[$id]['AtomicNumber'] == "") {echo("-");} echo("{$json_data[$id]['AtomicNumber']}")?></td>
                            </tr>
                            <tr class="table-yellow">
                                <td class="font-weight-bold"><i class="fas fa-angle-right mx-1"></i> ธาตุ : </td>
                                <td class="text-center"><?php if ($json_data[$id]['Element'] == "") {echo("-");} echo("{$json_data[$id]['Element']}")?></td>
                            </tr>
                            <tr class="table-yellow">
                                <td class="font-weight-bold"><i class="fas fa-angle-right mx-1"></i> สัญลักษณ์ : </td>
                                <td class="text-center"><?php if ($json_data[$id]['Symbol'] == "") {echo("-");} echo("{$json_data[$id]['Symbol']}")?></td>
                            </tr>
                            <tr class="table-yellow">
                                <td class="font-weight-bold"><i class="fas fa-angle-right mx-1"></i> จำนวนนิวตรอน : </td>
                                <td class="text-center"><?php if ($json_data[$id]['NumberofNeutrons'] == "") {echo("-");} echo("{$json_data[$id]['NumberofNeutrons']}")?></td>
                            </tr>
                            <tr class="table-yellow">
                                <td class="font-weight-bold"><i class="fas fa-angle-right mx-1"></i> จำนวนโปรตรอน : </td>
                                <td class="text-center"><?php if ($json_data[$id]['NumberofProtons'] == "") {echo("-");} echo("{$json_data[$id]['NumberofProtons']}")?></td>
                            </tr>
                            <tr class="table-yellow">
                                <td class="font-weight-bold"><i class="fas fa-angle-right mx-1"></i> จำนวนอิเล็กตรอน : </td>
                                <td class="text-center"><?php if ($json_data[$id]['NumberofElectrons'] == "") {echo("-");} echo("{$json_data[$id]['NumberofElectrons']}")?></td>
                            </tr>
                            <tr class="table-yellow">
                                <td class="font-weight-bold"><i class="fas fa-angle-right mx-1"></i> สถานะ : </td>
                                <td class="text-center"><?php if ($json_data[$id]['Phase'] == "") {echo("-");} echo("{$json_data[$id]['Phase']}")?></td>
                            </tr>
                            <tr class="table-yellow">
                                <td class="font-weight-bold"><i class="fas fa-angle-right mx-1"></i> ชนิด : </td>
                                <td class="text-center"><?php if ($json_data[$id]['Type'] == "") {echo("-");} echo("{$json_data[$id]['Type']}")?></td>
                            </tr>
                            <tr class="table-yellow">
                                <td class="font-weight-bold"><i class="fas fa-angle-right mx-1"></i> ค้นพบโดย : </td>
                                <td class="text-center"><?php if ($json_data[$id]['Discoverer'] == "") {echo("-");} echo("{$json_data[$id]['Discoverer']}")?></td>
                            </tr>
                            <tr class="table-yellow">
                                <td class="font-weight-bold"><i class="fas fa-angle-right mx-1"></i> ปีที่ค้นพบ : </td>
                                <td class="text-center"><?php if ($json_data[$id]['Year'] == "") {echo("-");} echo("{$json_data[$id]['Year']}")?></td>
                            </tr>
                            
                        </table>
                </div>
            </div>

            <div class="row">
                <div class="col-lg-11 col-md-11 col-sm-11 col-11 mx-auto info py-4 px-4 my-4">
                    <?php
                        echo("<h4 class=\"font-weight-bold ml-1\"><i class=\"fas fa-angle-right mx-1\"></i> รายละเอียด <i class=\"fas fa-info-circle\"></i></h4><hr class=\"hr-black mt-0 mb-2\">");
                        foreach($json_data1[$id]['Description'] as $data) {
                            if ($data == "") {
                                echo("<p class=\"description my-3\">&emsp;ไม่พบข้อมูล!</p>");
                            } else {
                                echo("<p class=\"description my-3\">&emsp;&emsp;&emsp;&emsp;{$data}</p>");
                            }
                        }
                    ?>
                </div>
            </div>
            
            <div class="row">
                <div class="col-lg-5 col-md-11 col-sm-11 col-11 mx-auto history py-4 px-4 my-4">
                <?php
                    echo("<h4 class=\"font-weight-bold ml-1\"><i class=\"fas fa-angle-right mx-1\"></i> ประวัติการค้นพบ <i class=\"fas fa-compass\"></i></h4><hr class=\"hr-black mt-0 mb-2\">");
                    foreach($json_data1[$id]['Discovery'] as $data) {
                        if ($data == "") {
                            echo("<p class=\"description my-3\">&emsp;ไม่พบข้อมูล!</p>");
                        } else {
                            echo("<p class=\"description my-3\">&emsp;&emsp;&emsp;{$data}</p>");
                        }
                    }
                ?>
                </div>
                <div class="col-lg-5 col-md-11 col-sm-11 col-11 mx-auto benefit py-4 px-4 my-4">
                <?php
                    echo("<h4 class=\"font-weight-bold ml-1\"><i class=\"fas fa-angle-right mx-1\"></i> ประโยชน์ <i class=\"fas fa-question-circle\"></i></h4><hr class=\"hr-black mt-0 mb-2\">");

                    foreach($json_data1[$id]['Benefit_extra'] as $data) {
                        if ($data != "") {
                            echo("<p class=\"description my-3\">&emsp;&emsp;{$data}</p>");
                        }
                    }

                    foreach($json_data1[$id]['Benefit'] as $data) {
                        if ($data == "") {
                            echo("<p class=\"description my-3\">&emsp;ไม่พบข้อมูล!</p>");
                        } else {
                            echo("<p class=\"description mt-3\">&emsp;&emsp;- {$data}</p>");
                        }
                    }
                    echo("</div>");
                ?>
                </div>
                <div class="text-center">
                    <a href="<?php echo ("{$json_data2['wiki'][$id]['th']}"); ?>"><button type="button" class="btn btn-purple py-2 px-3 no-wrap">ข้อมูลเพิ่มเติม <i class="fab fa-wikipedia-w"></i></button></a>
                </div>
                <a class="btn_change" href="<?php echo "./php/darkmode.php?path=data&id={$id_}"?>"><?php if($_COOKIE['darkstatus']) echo "<i class='fas fa-lightbulb'></i>"; else echo "<i class='fas fa-moon'></i>";?></a>
            <!-- footer -->
            <hr>
            <p class="text-center <?php if($_COOKIE['darkstatus']) echo "text-light"; else echo "text-dark";?>"><i class="fas fa-flask"></i> Periodic-Table | Web Technology Project (2019)</p>
            </div>
        </div>
    </div>
    <!-- script -->
    <script src="./js/jquery-3.4.1.min.js"></script>
    <script src="./js/popper.min.js"></script>
    <script src="./js/bootstrap.min.js"></script>
    <script src="./js/fontawesome.min.js"></script>
    <script src="./js/solid.min.js"></script>
    <script src="./js/brands.min.js"></script>
    <script src="./js/myScript/loading.js"></script>
</body>

</html>