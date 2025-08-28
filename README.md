# Program untuk Monitoring Prototype System Photovoltaic
## 📌 Tujuan Tugas
Tugas project yang dilaksanakan secara kelompok/tim ini bertujuan untuk memenuhi nilai mata kuliah Sistem Telekomunikasi pada Semester 4. 

## 📝 Desikripsi Singkat Project
Proyek ini merupakan sistem lampu taman tenaga surya yang memanfaatkan panel surya 5V untuk mengisi baterai lithium 18650 bertegangan 3,7V melalui modul pengisi daya TP4056 agar proses pengisian lebih aman dan stabil. Energi yang tersimpan pada baterai kemudian digunakan untuk menyalakan lampu LED 5V sebagai sumber penerangan. Prototype Sistem ini dirancang agar hemat energi, ramah lingkungan, dan dapat bekerja secara mandiri tanpa sumber listrik PLN.

## ⚙️ Cara Kerja Prototype System Photovoltaic
### 1. Panel Surya Mengisi Baterai 3.7 volt (tipe 18650)
Panel surya yang digunakan untuk mengisi baterai merupakan panel surya 5 volt.

Baterai yang digunakan untuk menyimpan listrik yang dihasilkan panel surya merupakan baterai 3,7 volt dengan tipe 18650.


### 2. Pengisian Baterai dari Panel Surya Menggunakan Modul TP4056
Baterai 3,7 volt diisi menggunakan modul TP4056 sehingga tegangan dari panel surya akan lebih stabil sebelum masuk ke baterai.
### 3. Baterai yang Terisi akan Menghidupkan Lampu LED 5V
Baterai digunakan untuk menghidupkan lampu LED 5 volt yang dimisalkan sebagai lampu taman.
## 🖥️ Cara Kerja Website Monitoring
### 1. Data Dikirim dari Perangkat Mikrokontroller ESP32

![koneksiWebServer png](https://github.com/user-attachments/assets/36eeae43-a30b-41c4-aefa-bc7044e5b7ea)

![kirimData png](https://github.com/user-attachments/assets/adb60e38-2357-4645-aef3-5e2abd89389c)

### 2. Data Diupload ke Lokal Database

![updateData png](https://github.com/user-attachments/assets/43a17977-7179-471b-a765-3eb5633bb92d)

![databaseMySQL png](https://github.com/user-attachments/assets/718b1efa-693e-41c9-b077-428561e0f11b)

### 3. Data dari Database Ditampilkan ke Website

![jQuery png](https://github.com/user-attachments/assets/927d1b80-bd40-4707-bd6f-5356f0ef0a96)

![bacaStatusLampu png](https://github.com/user-attachments/assets/e5633cda-2a08-4140-8101-695a08426942)

![monitoring-pv-v1 png](https://github.com/user-attachments/assets/0e80e82a-2f29-45e4-9481-78eed972da17)

### 4. Hasil Pengujian Sistem Monitoring
![HasilON](https://github.com/user-attachments/assets/bbdf9feb-5569-4c70-901c-8a451362af5a)

