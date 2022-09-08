// CODINGAN JS
class user {
    var id;
    var username;
    var password;
}

class userservice {
    user[] users = [];

    users[] getallusers() {
        return users;
    }

    user getuserbyid(userid) {
        return users.filter(userid);
    }
}

// JAWABAN PRBOLEM 1

// 1. Kekurangan yang ditemukan :
//    - Tidak menggunakan huruf kapital pada penamaan class.
//    - Tidak menggunakan huruf kapital tiap penggantian kata pada penamaan method atau function (kecuali kosakata awal).
//    - Pembuatan function atau method yang tidak benar.
//    - Tidak menggunakan constructor.
//    - Tidak menggunakan metode Inheritance.
//    - Tidak menggunakan fungsi array filter dengan benar.


// 2. Kekurangan yang terjadi pada bagian :
//    - class user.
//    - class userservice.
//    - method getalluser pada class userservice.
//    - method getuserbyid pada class userservice.
//    - fungsi array filter pada getuserbyid.


// 3. Alasan kekurangan :
//    a. class user :
//      - Tidak menggunakan huruf kapital pada penamaan class, harusnya User.
//      - Tidak menggunakan constructor pada tiap property seperti id, username, dan password.

//    b. class userservice :
//      - Tidak menggunakan huruf kapital pada penamaan class, harusnya User.
//      - Tidak menggunakan metode Inheritance/Pewarisan untuk mewarisi property-property yang terdapat pada class.
//      - Tidak menggunakan constructor pada property users.

//    c. method getalluser pada class userservice :
//      - Tidak menggunakan huruf kapital pada tiap penggantian kata pada nama method (kecuali kosakata awal), harusnya getAllUser.
//      - Meletakkan tipe data user[] sebelum nama method yang tidak diperlukan dan akan menimbulkan error.
//      - Penyebutan variable (users) yang tidak benar, harusnya (this.users) .

//    d. method getuserbyid pada class userservice :
//      - Tidak menggunakan huruf kapital pada tiap penggantian kata pada nama method (kecuali kosakata awal), harusnya getUserById.
//      - Meletakkan tipe data user sebelum nama method yang tidak diperlukan dan akan menimbulkan error.
//      - Penyebutan variable (users) yang tidak benar, harusnya (this.users) .
//      - Fungsi array filter yang tidak benar, harusnya meletakkan parameter function yang akan meng-(return) tipe data Boolean (true/false).