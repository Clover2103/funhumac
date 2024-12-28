<?php
// Desactivar la salida de errores en producción
ini_set('display_errors', 0);
ini_set('display_startup_errors', 0);
error_reporting(E_ALL);

// Obtener el dominio permitido de las variables de entorno
$allowedOrigin = getenv('CORS_ALLOWED_ORIGIN');

if ($allowedOrigin) {
    header("Access-Control-Allow-Origin: $allowedOrigin");
} else {
    // Configuración por defecto o error
    header("Access-Control-Allow-Origin: *"); // Nota: '*', aunque es inseguro, para ambientes donde el CORS no sea crítico.
}
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require '../library/PHPMailer/Exception.php';
require '../library/PHPMailer/PHPMailer.php';
require '../library/PHPMailer/SMTP.php';

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

$data = json_decode(file_get_contents("php://input"));

// Validación simple de los datos recibidos
if (!isset($data->solicitud, $data->name, $data->email, $data->subject, $data->message)) {
    echo json_encode(["status" => "error", "message" => "Datos incompletos."]);
    exit();
}

$solicitud = $data->solicitud;
$nombre = $data->name;
$correo = $data->email;
$asunto = $data->subject;
$mensaje = $data->message;

try {
    $mail = new PHPMailer(true);

    // Desactivar la depuración de SMTP
    $mail->SMTPDebug = 0;
    $mail->isSMTP();
    $mail->Host = 'mail.cognoseguridad.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'ingenieria@cognoseguridad.com';
    $mail->Password = 'Admin*3822';
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = 587;

    // Configurar el remitente y el destinatario
    $mail->setFrom('ingenieria@cognoseguridad.com', 'Contacto desde pagina web FUNHUMAC');
    $mail->addAddress('vigiempleocom@gmail.com', $nombre);

    // Contenido del correo
    $mail->isHTML(true);
    $mail->Subject = $solicitud . ' - desde pagina web';
    $mail->Body = '<b>Nombre del remitente:</b> ' . $nombre . '<br><b>Correo del remitente:</b> ' . $correo . '<br><b>Asunto de contacto:</b> ' . $asunto . '<br><br><b>Mensaje:</b> ' . $mensaje;

    // Envía el correo
    $mail->send();
    echo json_encode(["status" => "success"]);
} catch (Exception $e) {
    echo json_encode(["status" => "error", "message" => $mail->ErrorInfo]);
}

?>