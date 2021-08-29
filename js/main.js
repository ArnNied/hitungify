function string_generator(length) {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return result;
}

function io_storage(data, key) {
  let storage = window.localStorage
  const id = string_generator(10)

  if(storage.getItem(key) != null) {
    stored = JSON.parse(storage.getItem(key))
    stored[id] = data

    storage.setItem(key, JSON.stringify(stored))
  } else {
    let to_be_stored = {}
    to_be_stored[id] = data

    storage.setItem(key, JSON.stringify(to_be_stored))
  }
}

function segitiga_hitung() {
    let tinggi = document.getElementById("segitiga-tinggi").value
    let alas = document.getElementById("segitiga-alas").value

    let luas = parseFloat(alas) * parseFloat(tinggi) / 2
    let keliling = parseFloat(alas) * 3
    
    document.getElementById("segitiga-luas").value = luas
    document.getElementById("segitiga-keliling").value = keliling

    const data = {
      time: Date.now(),
      tinggi: tinggi,
      alas: alas,
      luas: luas,
      keliling: keliling
    }
    io_storage(data, "segitiga")
}

function persegi_hitung() {
    let sisi = document.getElementById("persegi-sisi").value

    let luas = parseFloat(sisi)**2
    let keliling = parseFloat(sisi) * 4

    document.getElementById("persegi-luas").value = luas
    document.getElementById("persegi-keliling").value = keliling

    const data = {
      time: Date.now(),
      sisi: sisi,
      luas: luas,
      keliling: keliling
    }
    io_storage(data, "persegi")
}

function lingkaran_hitung() {
    let jari_jari = document.getElementById("lingkaran-jari-jari").value

    let luas = Math.PI * parseFloat(jari_jari)**2
    let keliling = Math.PI * 2 * parseFloat(jari_jari)

    document.getElementById("lingkaran-luas").value = luas
    document.getElementById("lingkaran-keliling").value = keliling

    const data = {
      time: Date.now(),
      jari_jari: jari_jari,
      luas: luas,
      keliling: keliling 
    }
    io_storage(data, "lingkaran")
}
