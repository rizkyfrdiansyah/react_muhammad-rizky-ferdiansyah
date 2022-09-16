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
