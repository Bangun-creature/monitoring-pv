#include <ESP8266HTTPClient.h>
#include <ESP8266WiFi.h>

// Network SSID dan password
const char* ssid = "Free";
const char* pass = "";

// IP server lokal
const char* host = "192.168.109.228";

// Pin analog untuk baca LED
const int LED_ANALOG_PIN = A0;

// Status Default
int statusLampu = 0;

void setup() {
  Serial.begin(9600);

  WiFi.hostname("NodeMCU");
  WiFi.begin(ssid, pass);

  while(WiFi.status() != WL_CONNECTED){
    Serial.print(".");
    delay(500);
  }

  Serial.println("WiFi Terkoneksi");
}

void loop() {
  // Baca Lampu Satu :
  int nilaiAnalog = analogRead(LED_ANALOG_PIN);
  Serial.print("Nilai Analog A0: ");
  Serial.println(nilaiAnalog);

  // Mengisi variabel statusLampu sesuai kondisi LED
  if (nilaiAnalog > 500) {
    statusLampu = 1;
  } else {
    statusLampu = 0;
  }

  WiFiClient client;

  if (WiFi.status() == WL_CONNECTED) {
    
  // Koneksi ke web server apache
  WiFiClient client;
  // Port sesuai XAMPP
  const int httpPort = 80;
  // Uji koneksi ke server
  if(!client.connect(host, httpPort)){
    Serial.println("Koneksi server gagal");
    return;
  }

  // If berhasil koneksi server
  Serial.println("Berhasil koneksi ke server");

    HTTPClient http;

    // =====================
    // KIRIM DATA KE DATABASE
    // =====================

    String urlSend = "http://" + String(host) + "/monitoring-pv-BackEnd/function/updateStatusLamp.php?kindLamp=merah&sensorValue=" + String(statusLampu);

    http.begin(client, urlSend);
    int httpCode = http.GET();
    String responseSend = http.getString();
    http.end();

    Serial.println("Kirim sensor: " + String(statusLampu));
    Serial.println("Response kirim: " + responseSend);

  }

  delay(1000); // tiap 5 detik kirim & ambil data
}
