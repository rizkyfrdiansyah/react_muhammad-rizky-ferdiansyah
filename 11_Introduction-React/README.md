# SECTION 11_INTRODUCTION REACT

Pada materi ini terdapat 3 point yaitu :

1. React
2. Virtual DOM
3. Set up Development Environment

## APA ITU REACT ?

React adalah sebuah library JavaScript yang digunakan untuk membangun user interface yang interaktif. Library ini dibuat oleh Facebook dan bersifat open source. Library ini sangat populer digunakan dan selalu dikembangkan baik oleh kontributor utama ataupun komunitas. React berisi kumpulan snippet kode JavaScript (disebut ‘komponen’) yang bisa digunakan berulang kali untuk mendesain antarmuka pengguna.

## React terkenal karena konsep komponen. Di dalam React ada dua tipe komponen, yaitu:

- Functional component
  Functional component adalah komponen React yang dibangun murni menggunakan fungsi JavaScript. Functional component tidak menyimpan state dan digunakan hanya untuk menampilkan UI. Dengan kata lain, komponen ini dapat disebut dengan komponen stateless. Walaupun stateless, komponen ini dapat menerima data melalui properti atau dikenal dengan props.

- Class component
  Class component ialah komponen yang dibuat melalui Class JavaScript dan mewarisi sifat React Component. Berbeda dengan Functional Component, Class Component dapat menyimpan dan mengelola state serta memiliki beberapa metode salah satunya adalah render digunakan untuk menampilkan UI. Komponen ini dapat disebut dengan komponen stateful karena dapat memiliki state.

## Kelebihan ketika kamu memanfaatkan komponen React dalam membuat UI website:

- State Management: Ketika membuat stateful komponen, kamu bisa memanfaatkan state untuk memutuskan bagaimana UI di-render berdasarkan sebuah nilai/keadaan secara reactive.
- Encapsulated: Seluruh data (gambar, CSS, atau data terstruktur) yang dibutuhkan oleh komponen dalam menampilkan UI berada di dalam komponen tersebut. Itulah mengapa komponen React terenkapsulasi.
- Reusable: Selain terenkapsulasi, komponen React juga bersifat reusable atau dapat digunakan kembali. Kamu tidak perlu membuat banyak komponen untuk menampilkan UI yang sama. Cukup gunakan yang sudah kamu buat.
- Fast Development: Efek dari komponen yang reusable adalah pengembangannya jadi cepat. Berbeda bila kamu harus membuat segala sesuatu dari nol.

## Fitur-Fitur yang Ada di React

- JSX
  JSX merupakan ekstension dari sintaks JavaScript yang memungkinkan kamu untuk menuliskan sintaks bergaya XML guna memodifikasi DOM (Document Object Model).

- Data binding searah
  Data binding ini merupakan suatu proses menghubungkan elemen tampilan atau user interface dengan data atau komponen yang mengisinya.

## KENAPA MENGGUNAKAN REACT ?

- Deklaratif
  React membuatnya mudah untuk membuat UI interaktif. Rancang tampilan sederhana untuk setiap status dalam aplikasi Anda, dan React akan secara efisien memperbarui dan merender komponen yang tepat saat data Anda berubah.
  Tampilan deklaratif membuat kode Anda lebih dapat diprediksi dan lebih mudah untuk di-debug.

- Berbasis Komponen
  Bangun komponen yang dienkapsulasi yang mengelola statusnya sendiri, lalu menyusunnya untuk membuat UI yang kompleks.
  Karena logika komponen ditulis dalam JavaScript alih-alih template, Anda dapat dengan mudah meneruskan data kaya melalui aplikasi Anda dan menjauhkan status dari DOM.

- Belajar Sekali, Menulis Di Mana Saja
  Kami tidak membuat asumsi tentang sisa tumpukan teknologi Anda, sehingga Anda dapat mengembangkan fitur baru di React tanpa menulis ulang kode yang ada.
  React juga dapat merender di server menggunakan Node dan menjalankan aplikasi seluler menggunakan React Native.

## APA ITU VIRTUAL DOM ?

Manipulasi DOM adalah jantung dari web modern dan interaktif. Representasi dari UI berbentuk Javascript Object yang disimpan pada memori

## Masalah yang dihadapi dengan DOM manipulation

1. DOM manipulation secara manual dapat membuat code berantakan
2. Sulit untuk mengingat DOM state sebelumnya
3. Jauh lebih lambat daripada operasi javascript pada umumnya

## Set up Development Environment

Tools yang diperlukan

- Browser
  Google Chrome

- Text Editor / IDE
  Visual Studio Code

- Command Line Interface
  Untuk pengguna Linux/MacOs, dapat menggunakan terminal.
  Terminal ini sudah terpasang secara bawaan pada OS (tidak perlu install)

Untuk pengguna Windows, dapat menggunakan CMD / Powershell.
CMD ini juga sudah terpasang secara bawaan pada OS (tidak perlu install)

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
