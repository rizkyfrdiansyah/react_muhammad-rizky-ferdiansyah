# SECTION 12_REACT-FUNDAMENTAL

Pada materi ini terdapat 7 point yaitu :

1. JSX
2. REACT COMPONENTS
3. COMPONENTS COMPOSITE
4. REACT LIFECYCLE
5. CONDITION AND LIST
6. DIRECTORY STRUCTURE

## APA ITU JSX ?

- Singkata dari javascript XML
- Ekstensi pada javascript

## KENAPA MENGGUNAKAN JSX

- JSX dibuat berdasarkan fakta kalau logika rendering sangat terikat dengan logic UI
- Separation of Technology => Separation of Concerns

## SPESIFIKASI JENIS ELEMEN REACT

- kapitalisasi untuk komponen React
- Huruf kecil (lowercase) untuk komponen bawaan

## MENARUH EXPRESSION PADA JSX

- Dapat menaruh ekspresi JS yang valid pada JSX dengan menggunakan kurang kurawal

## JSX ADALAH EXPRESSION

- Setelah dikompilasi, ekspresi JSX akan menjadi panggilan fungsi javascript biasa dan menjadi objek javascript

## Menentukan atribut dengan JSX

- Tanda kutip untuk menentukan string literal
- Kurung kurawal untuk menyematkan ekspresi JavaScript
- React DOM menggunakan camelCase sbg konvensi penamaan

## Menspesifikasikan elemen anak dengan JSX

- Jika tag bersifat kosong (tidak memiliki elemen anak), bisa dgn menutupnya scara langsung dgan />
- Tag JSX dimungkinkan untuk memiliki elemen anak

---

## APA ITU COMPONENTS ?

Bagian kode yang dapat digunakan kembali yang digunakan untuk menentukan tampilan, behavior, dan state sebagia UI

## COMPONENTS UI

- FilterableProductTable
- SearchBar
- ProductTable
- ProductCategoryRow
- ProductRow

---

## APA ITU PROPS ?

- Propoties membuat kita dapat memberikan argumen / data pada component
- Props membantu untuk membuat komponen menjadi lebih dinamis
- Props dioper ke component sama seperti memberikan atribut pada tag HTML
- Props pada component adalah read-only dan tidak dapat diubah

## KOMPOSISI KOMPONEN

- Kontainmen
- Spesialisasi

---

## LIFECYCLE METHOD

1. render()

   - Fungsi yang paling sering dipakai
   - Required pada class component
   - Pure function tidak boleh ada setState()

2. componentDidMount()

   - Dipanggil ketika component sudah di render untuk pertama kali
   - Tempat yang tepat untuk pemanggilan API
   - Ada setState()

3. componentDidUpdate()

   - Dipanggil ketika terjadi update (props atau state berubah)

4. componentWillUnmount()
   - Dipanggil ketika component akan dihancurkan
   - Cocok untuk clean up actions

## LIFECYCLE METHOD LAIN

1. shouldComponentUpdate()
2. static getDerivedStateFromProps()
3. getSnapshotBeforeUpdaet()

---

## RENDER BERSYARAT

Dapat membuat komponen berbeda yang mencakup perilaku yang dibutuhkan. Dapat merender hanya beberapa bagian saja, berdasarkan state dari aplikasi.

- Menggunakan If
- Inline If dengan operator &&
- Inline If-Else dengan ternary conditional operator
- Mencegah komponen untuk rendering

## RENDER LIST

Dapat membangun koleksi dari beberapa elemen dan menyertakan dalam JSX menggunakan tanda kurang kurawal{}

## KEY

## Membantu react untuk mengidentifikasi item mana yang telah diubat, ditambahkan, atau dihilangkan

## STRUKTUR DIREKTORI

React tidak memiliki pendapat tentang bagaiman cara memasukkan file ke folder

## HINDARI TERLALU BANYAK NESTING

## JANGAN TERLALU MEMIKIRKANNYA

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
