function lampuTombol(n) {
  let lampu = false;
  for (let i = 0; i < n + 1; i++) {
    if (n % i === 0) {
      lampu = !lampu;
    }
  }
  if (lampu) {
    return console.log("lampu menyala");
  } else {
    return console.log("lampu mati");
  }
}

lampuTombol(0);
