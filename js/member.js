const list = [
  {
    "name": "Adinda Aulia Rahma Dewi",
    "peran": "Bendahara"
  },
  {
    "name": "Afifah Retnoningsih"
  },
  {
    "name": "Ahmad Fauzi"
  },
  {
    "name": "Anisa Sufi Yulianti"
  },
  {
    "name": "Arifatul Amri"
  },
  {
    "name": "Awitinanti Mauly Wiritanaya"
  },
  {
    "name": "Bagas Tri Ramadhani"
  },
  {
    "name": "Bintang Nugraha Putra",
    "peran": "Anomali"
  },
  {
    "name": "Desita Aliyah Fatiah"
  },
  {
    "name": "Destriyan Putra Prabowo"
  },
  {
    "name": "Devika Ayu Nirmala"
  },
  {
    "name": "Dhea Rintan Az Zahra Aprias"
  },
  {
    "name": "Dito Yus Dermawan"
  },
  {
    "name": "Erfi Nafasa Fadhilah Putri"
  },
  {
    "name": "Fawwaz Izzan Tsaqif"
  },
  {
    "name": "Feni Prihartini"
  },
  {
    "name": "Inayah Arsyika Basyari"
  },
  {
    "name": "Juwita Rohmawati"
  },
  {
    "name": "Kartika Aulia Hidayah"
  },
  {
    "name": "Katika Vasanti"
  },
  {
    "name": "Khanifah Zulfi"
  },
  {
    "name": "M. Aryo Pramudya",
    "peran": "Ketua Kelas"
  },
  {
    "name": "Maulin Aprilia"
  },
  {
    "name": "Muhammad Bustanul Arifin"
  },
  {
    "name": "Nia Rachmawati",
    "peran": "Wakil Ketua"
  },
  {
    "name": "Nuny Rahmadini"
  },
  {
    "name": "Probo Dwi Yulastono"
  },
  {
    "name": "Rakhelya Dewi Prasanti"
  },
  {
    "name": "Ridlo Yusuf Abdilah"
  },
  {
    "name": "Rifa Aulanisa"
  },
  {
    "name": "Salwa Amelia Putri"
  },
  {
    "name": "Septianingrum Gautami"
  },
  {
    "name": "Syahla Istiqomah"
  },
  {
    "name": "Tsamrotul Khoeriyah"
  },
  {
    "name": "Zahra Khoirotul Aniah"
  }
]

window.addEventListener('load', () => {

const member = document.getElementById("member")
let countMem = 1;
for(let siswa of list) {
  if(!siswa.peran) siswa.peran = "Anggota"
  member.innerHTML += `<div class='siswa'>${countMem}. <b>${siswa.name}</b><p>${siswa.peran}<br>Motto:</p></div>`
  countMem++
}

})