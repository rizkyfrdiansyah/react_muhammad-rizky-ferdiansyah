# SECTION 17_GLOBAL STATE MANAGEMENT - DATA FETCHING

Pada section ini mempelajari mengenai redux dan restful API, terdapat beberapa point pada materi ini, yaitu :

1. Global State Management

## PENGGUNAAN REDUX

1. Banyak state yang perlu ditaruh di banyak tempat
2. State pada app sering berubah
3. Logic untuk mengubah state kompleks
4. Ukuran codebase yang sedang-besar, dan dikerjakan oleh banyak orang
5. Perlu untuk mengetahui bagaimana state diupdate seiring dengan waktu

## REDUX LIBRARIES DAN TOOLS

- React-Redux
- Redux Toolkit
- Redux DevTools Extension

## KOMPONEN REDUX

- Actions
- Reducer
- Store

## ACTION

Digunakan untuk memberikan informasi dari aplikasi ke store

## REDUCER

Pure javascript functions yang mengambil state aplikasi saat ini dan object action lalu mengembalikan state aplikasi terbaru

## STORE

Objek sentral yang menyimpan state pada aplikasi

## MEMAKAI DAN MENGUBAH STATE

- HOOKS
- CONNECT

## CONNECT

1. mapStateToProps?: Function
2. mapDispatchToProps?: Function | Object
3. mergePropS?: Function
4. optiopn?: Object

## RANGKUMAN

1. Redux adalah library untuk manajemen state global
2. Redux menggunakan struktur "one-way data flow"
3. Redux menggunakan beberapa tipe code

---

2. Redux Thunk

## REDUX THUNK

Thunk Middleware untuk redux yang memungkinkan kita untuk membuat action creator yang mengembalikan function bukan action

## KENAPA PERLU REDUX THUNK

Untuk menghandle side effect logic seperti logic synchronous kompleks yang perlu mengakses store dan juga logic async seperti request data

## INSTALL REDUX

## `npm install redux-thunk`

---

3. Hasura

## APA ITU HASURA?

Hasura GraphQL Engine adalah sebuah server GraphQL ultra-cepat yang menyediakan API GraphQL instan dan real-time diatas Postgres, dengan pemicu webhook pada event basis data, dan skema jarak jauh untuk mengimplementasi logika bisnis.

## FITUR

- Buat query yang andal: Tersedia query bawaan untuk menyaring, mengatur halaman, mencari pola, menyisipkan banyak sekaligus, pembaruan, penghapusan data.
- Realtime: Ubah query GraphQL biasa menjadi live query dengan menggunakan subscriptions.
- Gabungkan skema jarak jauh: Akses skema custom GraphQL untuk logika bisnis melalui sebuah GraphQL Engine endpoint.
- Picu webhooks atau fungsi serverless: Pada event penyisipan/perbaruan/penghapusan data di Postgres.
- Dapat bekerja dengan basis data yang telah ada sebelumnya: Arahkan pada sebuah basis data Postgres yang telah ada sebelumnya untuk mendapatkan API GraphQL yang dapat langsung digunakan.
- Kontrol akses yang sangat terukur: Kontrol akses yang dinamik yang terintegrasi dengan sistem otentikasi semisal auth0 atau firebase-auth
- Performa tinggi & rekam jejak yang kecil: Docker image sebesar ~15MB; ~50MB RAM pada 1000 req/detik; sadar multi-core.
- Antarmuka untuk admin & proses migrasi: Antarmuka untuk admin & proses migrasi yang terinspirasi dari Rails.
- Postgres ❤️: Mendukung types dari Postgres (PostGIS/geo-location, dll.), ubah views menjadi graphs, memicu fungsi tersimpan (stored functions) atau prosedur dengan mutasi.

---

4. REST API at POSTMAN

## APA ITU POSTMAN ?

Postman adalah sebuah aplikasi yang berfungsi sebagai REST CLIENT untuk uji coba REST API. Postman biasa digunakan oleh developer pembuat API sebagai tools untuk menguji API yang telah mereka buat.

## KENAPA MENGGUNAKAN POSTMAN ?

- Mudah untuk berkolaborasi dengan auto sync lainnya memberi
- Antarmuka sederhana
- Gratis hingga 3 anggota dan koleksi tak terbatas

## POSTMAN fitur

- Collection
  Pengelompokan request API yang bisa disimpan atau diatur dalam bentuk folder. Memudahkan untuk pengelompokan request sesuai dengan proyek ataupun modul yang sedang dikerjakan.

- Environment
  Semacam config untuk menyimpan attribute dan attribute tersebut dapat digunakan ataupun dimanipulasi dalam proses request API.

- “Example” response
  Contoh respon dari API yang akan dibuat. Developer dapat membuat Mockup API sebelum benar-benar mengimplementasikan ke dalam proyek.

- Mock Server
  Fitur ini adalah fake server, karena fitur ini berguna sebagai server sementara. Dengan fitur ini, Mockup API yang dibuat menggunakan fitur “example response” dapat diakses dari internet layaknya Mockup API tersebut sudah di implementasikan dan di deploy ke server.

- Script Test
  Fitur untuk melakukan validasi respon, termasuk di dalamnya menuliskan test sesuai dengan kebutuhan.

- Automated Test (Runner)
  Menjalakan request dalam satu collection secara otomatis, penggunaannya biasanya digabung dengan script test.

- API Documentation
  Dokumentasi API yang dapat di generate otomatis sesuai dengan request yang tersimpan dalam satu collection.

---

5. React rest API

## APA ITU RESTFUL API ?

API RESTful adalah antarmuka yang digunakan oleh dua sistem komputer untuk bertukar informasi secara aman melalui internet.

## Apa itu API?

Antarmuka Program Aplikasi (API) menentukan aturan yang harus Anda ikuti untuk berkomunikasi dengan sistem perangkat lunak lain.

## Klien

Klien adalah pengguna yang ingin mengakses informasi dari web.

## Apa itu REST?

Representational State Transfer (REST) adalah arsitektur perangkat lunak yang memberlakukan syarat mengenai cara API bekerja.

## manfaat API RESTful

- Skalabilitas
  Sistem yang menerapkan API REST dapat menskalakan secara efisien karena REST mengoptimalkan interaksi klien-server. Statelessness menghapus beban server karena server tidak perlu mempertahankan informasi permintaan klien di masa lalu.
- Fleksibilitas
  Layanan web RESTful mendukung pemisahan total klien-server. Layanan web RESTful menyederhanakan dan memisahkan berbagai komponen server sehingga masing-masing bagian dapat berkembang secara mandiri. Kemampuan untuk melapisi fungsi aplikasi semakin meningkatkan fleksibilitas lebih jauh.
- Independensi
  API REST independen terhadap teknologi yang digunakan. Anda dapat menulis baik aplikasi klien dan server dalam berbagai bahasa pemrograman tanpa memengaruhi desain API. Anda juga dapat mengubah teknologi mendasar di kedua sisi tanpa memengaruhi komunikasi.

## cara kerja API RESTful

1. Klien mengirimkan permintaan ke server. Klien mengikuti dokumentasi API untuk memformat permintaan dalam format yang dipahami oleh server.
2. Server mengautentikasi klien dan mengonfirmasi bahwa klien memiliki hak untuk membuat permintaan.
3. Server menerima permintaan dan memproses secara internal.
4. Server mengembalikan respons kepada klien. Respons berisi informasi yang memberitahu klien jika permintaannya berhasil. Respons juga termasuk informasi apa saja yang diminta klien.

## Metode

Developer sering mengimplementasikan API RESTful dengan menggunakan Hypertext Transfer Protocol (HTTP). Metode HTTP memberi tahu server hal-hal yang perlu dilakukan terhadap sumber daya. Berikut ini adalah empat metode HTTP umum:

### GET

Klien menggunakan GET untuk mengakses sumber daya yang berada di URL yang ditentukan pada server. Mereka dapat menyimpan permintaan GET dan mengirim parameter dalam permintaan API RESTful untuk menginstruksikan server memfilter data sebelum mengirim.

### POST

Klien menggunakan POST untuk mengirim data ke server. Mereka menyertakan representasi data dengan permintaan. Mengirim permintaan POST yang sama beberapa kali memiliki efek samping seperti membuat sumber daya yang sama beberapa kali.

### PUT

Klien menggunakan PUT untuk memperbarui sumber daya yang ada di server. Tidak seperti POST, mengirimkan permintaan PUT yang sama beberapa kali dalam layanan web RESTful memberikan hasil yang sama.

### DELETE

Klien menggunakan permintaan DELETE untuk menghapus sumber daya. Permintaan DELETE dapat mengubah status server. Namun, jika pengguna tidak memiliki autentikasi yang sesuai, permintaan akan gagal.
Header HTTP
Header permintaan adalah pertukaran metadata antara klien dan server. Misalnya, header permintaan menunjukkan format permintaan dan respons, memberikan informasi tentang status permintaan, dan sebagainya.

### Data

Permintaan API REST mungkin menyertakan data untuk POST, PUT, dan metode HTTP lainnya agar berhasil.

### Parameter

Permintaan API RESTful dapat termasuk parameter yang memberi server lebih banyak detail tentang hal yang perlu dilakukan. Berikut ini adalah beberapa tipe parameter:

- Parameter jalur yang menentukan detail URL.
- Parameter kueri yang meminta informasi selengkapnya tentang sumber daya.
- Parameter cookie yang mengautentikasi klien dengan cepat.

---

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
