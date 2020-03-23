<?php
    // get language
    if ($_GET['lang'] == "th") {
        setcookie("lang", "th", time() + (86400 * 30), "/");
    } else if ($_GET['lang'] == "en") {
        setcookie("lang", "en", time() + (86400 * 30), "/");
    }

    // get path
    $link = "../{$_GET['path']}.php";

    // get id
    $id = $_GET['id'];
    
    // if id had value
    if (isset($id)) {
        $link = $link . "?id=" . $id;
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