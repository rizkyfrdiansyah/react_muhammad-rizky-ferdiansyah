# SECTION 19_DEPLOYMENT

Pada section ini mempelajari cara mendeploy aplikasi yang sudah dibuat dan terdapat beberapa point penting pada materi ini yaitu :

1. Build React App

## KENAPA PERLU BUILD ?

Karena react mengandung banyak pesan peringatan. Peringatan ini sangat berguna dalam pengembangan aplikasi. Namun, pesan ini membuat React menjadi lebih besar dan lambat. Oleh karenanya kita harus menggunakan versi produksi ketika men-deploy aplikasi.
Tujuan melakukan build agar aplikasi menjadi versi production, sehingga performance lebih ringat cepat.

## BUILD REACT APP

Karena proyek dibangun menggunakan Create React App. Contoh pemanggilan nya : `npm run build`
Membuat versi produksi untuk aplikasi di dalam folder `build/`. Ini diperlukan sebelum men-deploy ke produksi. Untuk pengembangan normal, gunakan npm start.

## Run Optimized App

## Untuk menjalankan aplikasi yang optimal di lokal komputer kita, kita bisa menggunakan serve.

2. DEPLOYMENT

## APA ITU DEPLOYMENT ?

Deployment adalah kegiatan yang bertujuan untuk menyebarkan aplikasi yang sudah dibuat. Harapanya aplikasi tersebut dapat diakses oleh banyak orang, tidak hanya oleh kita sendiri.

## APA ITU SURGE ?

Surge adalah layanan penerbit website statik (Static web publishing) gratis untuk Front-End Developers. Website statik yang menggunakan surge akan memiliki subdomain \*.surge.sh. Surge dapat menerima file HTML, CSS, dan JS.

## INSTALL SURGE

`npm install --global surge`

## Terdown Surge

Terkadang tidak ingin mempublikasikan sebagaian domain atau subdomain. Untuk itu bisa teardown sebuah project melalui surge CLI. Ini efektif membuat proyek kita offline.

## APA ITU NETLIFY ?

Netlify adalah salah satu platform penyedia layanan build tools sekaligus Continous Deployment Netlify memungkinkan untuk mempublish website statis secara gratis. Netlify juga sudah terintegrasi dengan Git Host popular seperti Github, Gitlab dan Bitbucket.

## DEPLOY dengan Netlify

1. Buat akub Netlify
2. install Netlify CLI di terminal
   `npm install netlify-cli -g`
3. Jalankan perintah netlify deploy di terminal
4. Verify akun melalui browser, pilih Authorize
5. Pilih "Create & configure a new site"
6. Pilih lokasi file yang akan di deploy. Pilih ./build
