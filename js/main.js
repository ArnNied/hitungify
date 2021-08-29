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
  let storage = window.localStorage;
  const id = string_generator(10);

  if (storage.getItem(key) != null) {
    stored = JSON.parse(storage.getItem(key));
    stored[id] = data;

    storage.setItem(key, JSON.stringify(stored));
  } else {
    let to_be_stored = {};
    to_be_stored[id] = data;

    storage.setItem(key, JSON.stringify(to_be_stored));
  }
}

function segitiga_hitung() {
  let tinggi = document.getElementById("segitiga-tinggi").value;
  let alas = document.getElementById("segitiga-alas").value;

  let luas = (parseFloat(alas) * parseFloat(tinggi)) / 2;
  let keliling = parseFloat(alas) * 3;

  document.getElementById("segitiga-luas").value = luas;
  document.getElementById("segitiga-keliling").value = keliling;

  const data = {
    time: Date.now(),
    tinggi: tinggi,
    alas: alas,
    luas: luas,
    keliling: keliling,
  };
  io_storage(data, "segitiga");

  stats_render();
}

function persegi_hitung() {
  let sisi = document.getElementById("persegi-sisi").value;

  let luas = parseFloat(sisi) ** 2;
  let keliling = parseFloat(sisi) * 4;

  document.getElementById("persegi-luas").value = luas;
  document.getElementById("persegi-keliling").value = keliling;

  const data = {
    time: Date.now(),
    sisi: sisi,
    luas: luas,
    keliling: keliling,
  };
  io_storage(data, "persegi");

  stats_render();
}

function lingkaran_hitung() {
  let jari_jari = document.getElementById("lingkaran-jari-jari").value;

  let luas = Math.PI * parseFloat(jari_jari) ** 2;
  let keliling = Math.PI * 2 * parseFloat(jari_jari);

  document.getElementById("lingkaran-luas").value = luas;
  document.getElementById("lingkaran-keliling").value = keliling;

  const data = {
    time: Date.now(),
    jari_jari: jari_jari,
    luas: luas,
    keliling: keliling,
  };
  io_storage(data, "lingkaran");

  stats_render();
}

function stats_render() {
  let storage = window.localStorage;

  let segitiga = JSON.parse(storage.getItem("segitiga"));
  let persegi = JSON.parse(storage.getItem("persegi"));
  let lingkaran = JSON.parse(storage.getItem("lingkaran"));

  segitiga = segitiga ? Object.keys(segitiga).length : 0;
  persegi = persegi ? Object.keys(persegi).length : 0;
  lingkaran = lingkaran ? Object.keys(lingkaran).length : 0;
  const total = segitiga + persegi + lingkaran;

  segitiga = parseFloat((segitiga / total) * 100).toFixed(3)
  persegi = parseFloat((persegi / total) * 100).toFixed(3)
  lingkaran = parseFloat((lingkaran / total) * 100).toFixed(3)

  document.getElementById("total-statistik").textContent = total;
  document.getElementById("segitiga-statistik").textContent = !isNaN(segitiga) ? segitiga+"%" : 0+"%"
  document.getElementById("persegi-statistik").textContent = !isNaN(persegi) ? persegi+"%" : 0+"%"
  document.getElementById("lingkaran-statistik").textContent = !isNaN(lingkaran) ? lingkaran+"%" : 0+"%"
}

function stats_reset() {
  let storage = window.localStorage;

  storage.clear();
  stats_render();
}
