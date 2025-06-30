<?php

namespace App\Controllers;

use Exception;

class MainPageController
{
    public function showMainAdminPage()
    {
        require __DIR__ . '/../Views/mainAdminPage.php';
    }

    public function login()
    {
        require __DIR__ . '/../Views/login.html';
    }    public function loginv2()
    {
        require __DIR__ . '/../Views/login-v2.html';
    }
}