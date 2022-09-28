# SECTION 18_TESTING

Pada section ini mempelajari sebuah testing pada aplikasi atau website yang sudah dibuat. Terdapat 3 point pada kali ini yaitu :

1. Testing Introduction

## APA ITU TESTING ?

`Testing` adalah proses `memverifikasi` bahwa test assertions kita benar dan bahwa code kita tetap benar sepanjang masa aplikasi. `Test assertion` ini adalah `ekspresi boolean` yang mengembalikan nilai true kecuali ada bug di kode kita.

## MANFAAT TESTING

- Ketika aplikasi mempunyai converage yang baik (mayoritas codebase tercover oleh test).
- Mengurangi bug pada aplikasi. Walaupun testing tidak menjamin aplikasi bebas bug, tetapi bisa mencegah beberapa hal yang berpotensi menjadi bug.

## KATEGORE TESTING

1. Rendering component trees
   Environment tes yang sudah disederhanakan dan ditegaskan dan ditegaska pada keluarannya. Kita akan fokus pada bagian ini.

2. Menjalankan aplikasi lengkap
   Environment peramban (browser) asli atau dikenal sebagai tes "end-to-end"

## PERTIMBANGAN MEMILIH PERKAKAS

### Kecepatan iterasi vs environment yang realistis

Beberapa kakas menwarkan feedback loop yang cepat antara membuat sebuah perubahan dan melihat hasilnya tidak memodelkan sifat dari peramban dengan tepat.

### Seberapa banyak mock

Perbedaan antara tes "unit" dan tes "integrasi" bisa tidak sesuai. Jika kita mengetes sebuah form.

## REKOMENDASI TOOLS

1. Jest
   Test runner pada javascript yang mengakses DOM melalui jsdom.

2. React Testing Library
   Seperangkat helpers yang memungkinkan mengetes komponen pada React tanpa bergantung pada detail implementasi.

---

2. Basic Testing with RTL

## Render dan Debug

Fungsi `render` RTL akan merender file JSX apapun yang dibutuhkan. Memiliki akses komponen react yang akan di test. Untuk meyakinkan bahwa file JSX sudah terender, bisa menggunakan fungsi `debug` RTL. React testing library digunakan untuk berinteraksi dengan komponen kita seperti manusia. Itulah alasan melihat struktur HTML sebagai output dari fungsi render.

## Memilih Elemen

React testing library menawarkan fungsi untuk mendapatkan elemen. Elemen selanjutnya digunakan untuk assertions atau untuk interaksi pengguna. Dapat memilih elemen dengan fungsi object screen RTL. Contoh `getByText` untuk memilih teks dari elemen yang sudah dipilih.

## KATEGORO TESTING

- `LabelText` : getByText: <label for="search"/>
- `PlaceholderText` : getByPlaceholderText: <input placeholder="Search"/>
- `AltText` : getByAltText: <img alt="profile"/>
- `DisplayValue` : getByDisplayValue: <input value="JavaScript"/>

---

3. TESTING CUSTOM HOOK

## Library yang digunakan

## Untuk megetest custom hook, kita menggunakan React Hooks Testing Library. Dia akan memberikan alat untuk mengetest hooks tanpa merender satu komponen `npm install -D @testing-library/react-hooks`
