# SECTION 09_CLEAN-CODE

## APA ITU "CLEAN CODE" ?

Istilah untuk kode yang mudah dibaca, dipahami dan diubah oleh programmer.

## KENAPA "CLEAN CODE" ?

- Work Collaboration
- Feature Development
- Faster Development

## KARAKTERISTIK "CLEAN CODE"

1. Mudah Dipahami
2. Mudah dieja dan dicari
3. Singkat namun mendeskripsikan konteks
4. Konsisten
5. Hindari penambahan konteks yang tidak perlu
6. Komentar
7. Good Function
8. Gunakan konvensi
9. Formatting

## SARAN "FORMATTING"

- Lebar baris code 80 - 120 karakter.
- Satu class 300 - 500 baris.
- Baris code yang berhubungan saling berdekatan.
- Dekatkan fungsi dengan pemanggilnya.
- Deklarasi variable berdekatan dengan penggunanya.
- Perhatikan indentasi.
- Menggunakan prettier atau formatter.

## KISS (KEEP IT SO SIMPLE)

Hindari membuat fungsi yang dibuat untuk melakukan A, sekaligus memodifikasi B, mengecek fungsi C, dst.

## TIPS UNTUK SELALU KISS

- Fungsi atau class harus kecil.
- Fungsi dibuat untuk melakukan satu tugas saja.
- Jangan guanakan terlalu banyak argumen pada fungsi.
- Harus diperhatikan untuk mencapai kondisi yang seimbang, kecil dan jumlah minimal.

## DRY (DON'T REPEAT YOURSELF)

Duplikasi code terjadi karena sering copy paste. Untuk menghindari duplikasi code buatlah fungsi yang dapat digunakan secara berulang-ulang.

## REFACTORING

Proses restrukturisasi kode yang dibuat, dengan mengubah struktur internal tanpa mengubah perilaku eksternal. Prinsip KISS dan DRY dicapay dengan cara refactor.

## TEKNIK REFACTORING

> - Membuat sebuah abstraksi.
> - Memecah kode dengan fungsi/class.
> - Perbaiki penamaan dan lokasi kode.
> - Deteksi kode yang memiliki duplikasi.
