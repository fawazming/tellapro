Here's the PHP proxy code you should save as `proxy.php` in the same directory:

php
<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: text/html; charset=utf-8');

if(!isset($_GET['url'])) {
    die('Missing URL parameter');
}

// Force English if no language specified
$url = $_GET['url'];
if(strpos($url, 'hl=') === false) {
    $url .= (strpos($url, '?') === false ? '?' : '&') . 'hl=en';
}

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
$response = curl_exec($ch);

if(curl_errno($ch)) {
    http_response_code(500);
    die('Proxy Error: ' . curl_error($ch));
}

curl_close($ch);
echo $response;
?>