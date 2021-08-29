function string_generator(length) {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return result;
}

function segitiga_hitung() {
    let tinggi = document.getElementById("segitiga-tinggi").value
    let alas = document.getElementById("segitiga-alas").value

    let luas = parseInt(alas) * parseInt(tinggi) / 2
    let keliling = parseInt(alas) * 3
    
    document.getElementById("segitiga-luas").value = luas
    document.getElementById("segitiga-keliling").value = keliling
}

function persegi_hitung() {
    let sisi = document.getElementById("persegi-sisi").value

    let luas = parseInt(sisi)**2
    let keliling = parseInt(sisi) * 4

    document.getElementById("persegi-luas").value = luas
    document.getElementById("persegi-keliling").value = keliling
}

function lingkaran_hitung() {
    let jari_jari = document.getElementById("lingkaran-jari-jari").value

    let luas = Math.PI * parseInt(jari_jari)**2
    let keliling = Math.PI * 2 * parseInt(jari_jari)

    document.getElementById("lingkaran-luas").value = luas
    document.getElementById("lingkaran-keliling").value = keliling

}
