def lampuTombol(n):
    lampu = False
    for i in range(1, (n + 1)):
        if n % i == 0:
            lampu = not lampu

    if lampu is True:
        return print("Lampu menyala")
    else:
        return print("Lampu mati")


n = input("Masukkan nilai n : ")
lampuTombol(int(n))