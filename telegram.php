<?php

/* https://api.telegram.org/bot5905226234:AAGrEUKo_ci2iNRkKho1eTGIi0Kq2v5Ida4/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

$name = $_POST['user_name'];
$phone = $_POST['user_phone'];
$email = $_POST['user_email'];
$question = $_POST['user_question'];
$token = "5905226234:AAGrEUKo_ci2iNRkKho1eTGIi0Kq2v5Ida4";
$chat_id = "-838190707";
$arr = array(
  'Имя пользователя: ' => $name,
  'Телефон: ' => $phone,
  'Почта: ' => $email,
  'Запитання: ' => $question,
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  header('Location: thank-you.html');
} else {
  echo "Error";
}
?>
