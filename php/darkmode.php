<?php
    // get language
    if ($_COOKIE['darkstatus'] == 0) {
        setcookie("darkstatus", 1, time() + (86400 * 30), "/");
    } else if ($_COOKIE['darkstatus'] == 1) {
        setcookie("darkstatus", 0, time() + (86400 * 30), "/");
    }

    // get path
    $link = "../{$_GET['path']}.php";
    
    // get id
    $id = $_GET['id'];
    
    // if id had value
    if (isset($id)) {
        $link = $link . "?id=" . $id;
    }

    // get keyword
    $keyword = $_GET['keyword'];
    
    // if keyword had value
    if (isset($keyword)) {
        $link = $link . "?keyword=" . $keyword;
    }

    // redirect
    redirect($link);

    // reditect function
    function redirect($url) {
        ob_start();
        while (ob_get_status()) {
            ob_end_clean();
        }
        header( "Location: $url" );
    }
?>