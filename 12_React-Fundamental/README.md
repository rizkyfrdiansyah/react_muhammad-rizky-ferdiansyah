# SECTION 12_REACT-FUNDAMENTAL

Pada materi ini terdapat 6 point yaitu :

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

- `FilterableProductTable`
- `SearchBar`
- `ProductTable`
- `ProductCategoryRow`
- `ProductRow`

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

## POINT DARI MENTOR :

- number => getter
- setNumber => setter
- mutable artinya tipe data yang nilainya dapat diubah. Jenis tipe data notabene merupakan objek seperti :

  - object literal
  - array
  - function
  - date

- immutable artinya tipe data yang nilainya tetap. Jenis tipe data notabene merupakan primitive tipe seperti :

  - string
  - number
  - boolean
  - null
  - undefined
  - symbol

- initial state = state awal
- Encapsulation: Public, Private, Protected
