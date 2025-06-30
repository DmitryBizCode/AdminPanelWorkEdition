<?php
require 'vendor/autoload.php';

use App\Controllers\MainPageController;

$uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);

switch ($uri) {
    case '/admin':
        (new MainPageController())->showMainAdminPage();
        break;
    case '/admin/login':
        (new MainPageController())->login();
        break;  
    case '/admin/loginv2':
        (new MainPageController())->loginv2();
        break;
    default:
        http_response_code(404);
        echo "404 Not Found";
}