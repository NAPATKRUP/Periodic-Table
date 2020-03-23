<?php
    function page_lang() {
        if (check_cookie()) {
            include("./page/quiz/th.php");
        } else if ($_COOKIE['lang'] == "th") {
            include("./page/quiz/th.php");
        } else if ($_COOKIE['lang'] == "en") {
            include("./page/quiz/en.php");
        } else {
            setcookie("lang", "th", time() + (86400 * 30), "/");
            include("./page/quiz/th.php");
        }
    }

    function check_cookie() {
        if (!isset($_COOKIE['lang'])) {
            setcookie("lang", "th", time() + (86400 * 30), "/");
            return true;
        } else {
            return false;
        }
    }

    function check_darkmode() {
        if (!isset($_COOKIE['darkstatus'])) {
            setcookie("darkstatus", 0, time() + (86400 * 30), "/");
            header('Location: '.'./quiz.php');
        }
    }

    check_darkmode();

    page_lang();
?>