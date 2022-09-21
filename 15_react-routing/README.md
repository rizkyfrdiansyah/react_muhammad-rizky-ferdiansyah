# SECTION 15_REACT-ROUTING

Pada materi ini terdapat beberapa point penting, yaitu :

1. Custom Hook
2. Routes Learning
3. Use url params
4. Hook Routing React Learning

## Custom Hook

Membuat hook sendiri memungkinkan mengekstrak komponen logika ke fungsi yang dapat digunakan lagi.

## APA ITU ROUTER ?

`Router` merupakan `modul` dalam react yang berfungsi untuk melakukan proses `navigasi` pada SPA (Single page application).

## APA ITU MULTI PAGE APPLICATION ?

`Tradisional web app` adalah jenis aplikasi website dimana perlu memuat ulang `seluruh` `halaman` web setiap kali membuat permintaan baru.

## APA ITU SINGLE PAGE APPLICATION ?

Salah satu jenis aplikasi website dimana hanya ada `1 halaman` yang menangani `semua aktivitas` yang terjadi dalam aplikasi tersebut.

## KEUNGGULAN SPA DAN MPA

- SINGLE PAGE APPLICATION

  - Waktu loading website jauh lebih cepat
  - Tidak ada query tambahan ke server
  - Front-end yang cepat dan responsif
  - Meningkatkan pengalaman pengguna (user experience)

- MULTI PAGE APPLICATION
  - SEO website akan lebih mudah dioptimasi
  - Memudahkanmu untuk mengubah halaman tertentu untuk setiap kebutuhan yang berbeda
  - Menggunakan tools analisis seperti Google Analytics yang dapat terintegrasi langsung dengan website

## KEKURANGAN SPA DAN MPA

- SINGLE PAGE APPLICATION

  - Tidak bagus dalam hal SEO
  - Berat saat di-load / buka pertama kali
  - Kurang aman dibanding dengan Website biasa
  - Masalah kompatibilitas browser

- MULTI PAGE APPLICATION
  - Kecepatan download website jauh lebih lama jika dibandingkan dengan single page application
  - Kamu perlu mengintegrasikan antara front-end dan back-end
  - Lebih sering membutuhkan maintenance dan update
  - Mungkin akan lebih sering menemukan masalah performa pada website

## BROWSER ROUTER

Sebagai router yang menggunakan `API history` dari HTML5, sehingga dapat menggunakan location untuk sinkronkan UI dengan url. Di dalam object `location` sendiri merepresentasikan dimana lokasi aplikasi sekarang

## ROUTE

Digunakan sebagai `pengarah` jalan `lalu lintas` suatu aplikasi web
Attribute `path` merupakan `url` pada `browser` pada proses routing
Attribute `component` merupakan suatu komponen yang akan `ditampilkan` kepada user saat `mengakses path` yang didefinisikan

## SWITCH

Untuk membungkus kumpulan beberapa component `ROUTE`
`EXACT` bertugas untuk `memastikan` route hanya me-render component yang memiliki `path` yang `cocok`/ Jika tidak ada yang cocok, maka route yang akan di-render yaitu route terakhir dengan component `Notfound`

## LINK

Untuk `berpindah` antar halaman, property `to` merujuk pada path di route yang akan dituju.
Element kosong `<></>` tersebut adalah shorthand dari `<React.Fragment></React.Fragment>` yang mana bisa untuk membungkus child element tanpa menambahkan node ke dalam DOM.

---

## APA ITU URL PARAMETER ?

Suatu parameter yang nilainya ditetapkan `secara dinamis` di URL halaman.

## URL PARAM

- /movies/titanic
- /movie/spiderman
- /movie/batman

## PERBEDAAN LINK DAN REDIRECT

- LINK

  - Dapat digunakan pada kondisi apapun
  - Memberikan history baru pada browser
  - Bereaksi dengan click seperti a href

- REDIRECT
  - Lebih sering digunakan pada halaman 404
  - Menimpa history pada browser
  - Bereaksi dengan suatu kondisi

---

## useHistory

Memberikan akses ke `instance riwayat` yang dapat digunakan untuk bernavigasi
Contoh :

1. length = {angka} Jumlah entri dalam tumpukan riwayat
2. go = {fungsi} Memindahkan penunjuk di tumpukan riwayat sebanyak entri
3. goBack = {fungsi} Setara dengan go(-1)
4. goForward = {fungsi} Setara dengan go(1)
5. Push = {fungsi} Mendorong entri baru ke tumpukan riwayat
6. Replace = {fungsi} Mengganti entri saat ini di tumpukan riwayat history

## useParams

Mengembalikan objek pasangan `kunci/nilai parameter` URL. Gunakan untuk mengakses `match.params` dari <Route> saat ini.

## useRouteMatch

## `Mencocokan URL` dengan cara sama seperti <Route>. Berguna untuk mendapatkan akes ke data kecocokan tanpa benar-benar merender <Route>.

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
