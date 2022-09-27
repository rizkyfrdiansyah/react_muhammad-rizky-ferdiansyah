# SECTION 13_EVENT-HANDLING

Pada materi ini terdapat 3 point yaitu :

1. State Learning
2. Statefull and Stateless
3. Handling Events

## APA ITU `STATE` ?

Data `private` sebuah component. Data ini hanya tersedia untuk component dan `tidak bisa diakses` dari `component lain`.
Component State yaitu :

1. Data yang bisa dimodifikasi menggunakan setState
2. Setiap terjadi modifikasi akan terjadi render ulang
3. Bersifat Asynchronous
4. Dipakai dalam class

## PERBEDAAN PROPS DAN STATE

- PROPS

  - alat peraga hanya dapat dibaca
  - alat peraga tidak dapat dimodifikasi

- STATE
  - perubahan status bisa tidak sinkron
  - status dapat dimodifikasi menggunakan this.setState

---

## APA ITU STATEFUL COMPONENT ?

Memiliki `state` dengan dibuat component `class`. Kelebihan dari class component adalah memiliki `lifecycle`

## APA ITU STATELESS COMPONENT ?

`Tidak memiliki state` hanya prop. Component dibuat dengan `function` karena codenya lebih ringkas

## KOMPONEN STATEFUL DAN STATELESS

1. Smart component & `Dump` component
2. Container component & `Presentational` component

## PERBEDAAN STATEFUL DAN STATELESS

- STATELESS COMPONENT

  - Tidak tahu tentang aplikasi
  - Tidak melakukan data fetching (pengambilan data)
  - Tujuan utamanya adalah visualisasi
  - Dapat digunakan kembali
  - Hanya berkomunikasi dengan induk langsung

- STATEFUL COMPONENT
  - Mengerti tentang aplikasi
  - Melakukan data fetching (pengambilan data)
  - Berinteraksi dengan aplikasi
  - Tidak dapat digunakan kembali
  - Meneruskan status dan data ke anak-anaknya

---

## APA ITU `HANDLING EVENT` ?

`Metode` untuk menangani sebuah event / `aksi` yang diberikan pengguna kepada suatu `komponen`

## `EVENT`

Suatu `peristiwa` yang `dipicu` oleh pengguna pada suatu komponen, misal tombol ditekan

## CONTOH LIST EVENT

1. Clipboard Events (Promise terpenuhi)
2. Form Events (onChange, onSubmit)
3. Mouse Events (onClick, onDoubleClick, onMouseOver)
4. Generic Events (onError, onLoad)
