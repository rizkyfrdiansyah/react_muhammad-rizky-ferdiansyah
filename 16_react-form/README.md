# SECTION 16_REACT-FORM

Pada section kali ini mempelajari react form dan terdapat beberapa poin penting yaitu :

1. Basic Form
2. Controlled Component
3. Uncontrolled Component
4. Uncontrolled Component vs Controlled Component
5. Basic Validation

## PENERAPAN FORM

Form merupakan salah hal krusial dalam pengembangan aplikasi website. Form dapat digunakan untuk menghandle inputan dari user.

## MACAM FORM

### Element `<input>`

Elemen `<input>` biasanya digunakan inputan yang tidak terlalu panjang.

### Elemet `<textarea>`

Element `<textarea>` biasanya digunakan inputan yang cukup panjang. Semisal deskripsi

### Element `<select>`

Element `<select>` biasanya digunakan inputan yang pilihan yang sudah ditentukan.

### Radio Button

Radiobutton merupakan salah satu type di elemen <input>. Hanya bisa memilih 1 pilihan menggunakan radiobutton.

### Checkbox

Checkbox merupakan salah satu typ di elemen <input>. Bisa memilih lebih dari 1 pilihan menggunakan checkbox.

### Type elemen input

- text (default)
- button
- color
- checkbox
- date
- datetime-local
- email
- file
- hidden
- image
- month
- number
- password
- radio
- range
- reset
- search
- submit
- tel
- time
- url
- week

---

## APA ITU CONTROLLED COMPONENT ?

Dapat menggabungkan cara menyimpan dan memberbarui state di HTML dan React dengan menggunakan state pada React. Komponen React merender sebuah form juga mengontrol apa yang terjadi dalam form tersebut pada masukan pengguna selanjutnya. Sebuah elemen masukan form yang nilainya dikontrol oleh React melalui cara seperti ini disebut sebagai "controlled component".

## Textarea pada HTML

Mendefinisikan teks didalamnya sebagai anaknya (child). Di React <textarea> menggunakan atribut value. Dengan cara ini sebuah form yang menggunakan <textarea> dapat ditulis dengan cara yang sangat mirip dengan sebuah form menggunakan input satu baris.

## TAG SELECT

Membuat sebuah daftar drop-down

## Atribut Name

## Menambahkan atribut name pada setiap elemen dan membiarkan fungsi handler memilih apa yang harus dilakukan berdasarkan nilai dari event.target.name.

## APA ITU UNNCONTROLLED COMPONENT ?

Alternatif lain dari controlled component, dimana data form akan ditangani oleh DOM-nya sendiri.

## Atribut defaultValue

Pada lifecycle rendering React. atribut value pada elemen form akan menimpan nilai pada DOM. Dengan Uncontrolled component, dapat menentukan nilai awal tetapi pembaruan berikutnya dilakukan secara Uncontrolled. Untuk menangani kasus ini bisa menggunakan atribut defaultValue.

## TAG FILE INPUT

## Memungkinkan pengguna untuk memilih satu atau beberapa file dari media penyimpanan mereka untuk diunggah ke server atau dimanipulasi dengan javascript lewat file API.

## UNNCONTROLLED VS CONTROLLED COMPONENT

### UNNCONTROLLED COMPONENT

Menarik dari field saat kita membutuhkannya. Bisa terjadi ketika formulir disubmit. Cara paling sederhana untuk mengimplementasikan input formulir. Tentu ada kasus yang valid untuk menggunakannya dalam form sederhana dan saat belajar React.

### CONTROLLED COMPONENT

Menerima nilai saat ini sebagai prop, serta callback untuk mengubah nilai tersebut. Kita bisa mengatakan cara yang leibh "React way" untuk pendekatan (yang tidak berarti harus selalu menggunakannya). Tetapi nilai input harus ada di state yang disimpan di suatu tempat. Biasanya, komponen merender input menyimpan di state. Tentu itu, bisa dalam state komponen lain atau di penyimpanan state terpisah (separate state store), seperti Redux.

## Flow Controlled Component

Setiap kali kita mengetik karakter baru, handleNameChange dipanggil. Dibutuhkan nilai baru dari input dan mengaturnya di state

## Controlled Component

Form dapat merespon perubahan input dengan segera, misalnya :

- umpan balik di tempat, seperti validasi
- menonaktifkan tombol kecuali semua field memiliki data yang valid
- mengimplementasikan format input tertentu, seperti nomor kartu kredit

## Apa yang membuat elemen 'Controlled' ?

Selain input, ada elemen bentuk lain, seperti checkboxes, radios, selects and textareas. Elemen formulir menjadi "controlled" jika kita menetapkan nilainya melalui prop.

## KESIMPULAN

## Form controlled dan uncontrolled memiliki kelebihan sendiri. Perlu mengevaluasi situasi secara spesifik dan memilih pendekatan apa yang cocok untuk kondisi kita. Jika formulir sangat sederhana dalam hal umpan balik UI, uncontrolled dengan refs sepenuhnya baik. Tidak perlu mendengarkan apa yang dikatakan berbagai artikel bahwa uncontrolled itu "buruk".

## KENAPA PERLU VALIDASI ?

### - Mencari input data yang benar dan sesuai format.

Sebuah web/aplikasi tidak dapat berjalan dengan benar, jika data yang diolah tidak sesuai dengan kebutuhan aplikasi.

### - Melindungi akun pengguna.

Membuat pengguna untuk memasukkan data password yang aman

### - Melindungi sistem/aplikasi.

Validasi form yang kuat dapat meminimalisir perilaku pengguna yang ingin meretas sistem/aplikasi.

## TIPE VALIDASI DATA FORMULIR

### Client-side validation

Validasi dilakukan pada sisi klien (browser). Validasi dilakukan agar data input sesuai dengan kebutuhan form, sebelum data form dikirimkan ke server. Kelebihan validasi sisi klien ialah user-friendly, karena jika terjadi kesalahan pengguna akan langsung diberitahu. Pengguna tidak harus menunggu respon dari server untuk mengetahui hasil validasi.

### Client-side Validation

- Built-in Validation, menggunakan fitur validasi langsung dari HTML 5. Biasanya, validasi tidak membutuhkan Javascript dan memiliki performa yang lebih baik. Contoh : required, minLength, maxLength, min, max, type dan patten.
- Menggunakan javascript. Ini membuat validasi form dapat dikosumisasi. Tetapi kita perlu membuatnya sendiri.

### Server-side validation

Validasi dilakukan pada sisi server. Bertugas untuk memvalidasi data kembali, sebelum disimpan di database. Jika ditemukan kesalahan, maka response akan dikirim kembali ke client berupa koreksi atas kesalahan yang dibuat oleh pengguna. Berbeda dengan validsasi sisi klien, validasi tidak user-friendly. Karena, koreksi kesalahan akan dikirimkan, setelah form disubmit.

## required

Digunakan untuk menentukan field form perlu diisi sebelum formulir dapat dikirimkan.

## minLength dan maxLength

Digunakan untuk menentukan jumlah karakter minimal dan maksimal bisa dimasukkan. Jika kurang dari minLength akan muncul pemberitahuan, dan tidak bisa melebihi maxLength.

## min dan max

min dan max digunakan untuk menentukan nilai minimum dan maksimum angka yang dimasukkan.

## type

Digunakan untuk menentukan apakah data berupa angka email, atau type yang lainnya.

## pattern

Digunakan untuk menentukan regular expression (regex) yang mendefinisikan pola data yang boleh dimasukkan

## Menggunakan JavaScript

- Ketika ada perubahan di form. Ketika ada perubahan akan mentrigger event onChange. Kkup real-time berdasarkan perubahan data, namun fungsi kelebihan validasi akan terus dipanggil selama ada perubahan, bisa dikombinasikan dengan disable button.
- Ketika menekan tombol submit akan mentrigger event onSubmit. Kelebihan validasi cukup sekalim namun tidak akan real-time memvalidasi form.

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
