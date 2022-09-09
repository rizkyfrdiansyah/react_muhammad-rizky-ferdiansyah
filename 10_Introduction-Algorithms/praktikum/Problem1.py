def bilanganPrima(angka):
  if angka <= 1:
    return print("Nilai angka harus lebih besar dari 1")

  if (angka % 2 == 0) or (angka % 3 == 0):
    if (angka / 2 == 1) or (angka / 3 == 1):
      return print("{} adalah bilangan prima".format(angka))
    else:
      return print("{} bukan bilangan prima".format(angka))
  else:
    return print("{} adalah bilangan prima".format(angka))

angka = input("Masukkan nilai angka : ")
bilanganPrima(int(angka))