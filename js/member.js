const list = [
  {
    "name": "Adinda Aulia Rahma Dewi",
    "peran": "Bendahara",
    "piket": "Kamis"
  },
  {
    "name": "Afifah Retnoningsih"
  },
  {
    "name": "Ahmad Fauzi"
  },
  {
    "name": "Anisa Sufi Yulianti",
    "peran": "Koordinator Mapel PJOK",
    "piket": "Jumat"
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
    "peran": "Anomali",
    "piket": "Kamis"
  },
  {
    "name": "Desita Aliyah Fatiah"
  },
  {
    "name": "Destriyan Putra Prabowo"
  },
  {
    "name": "Devika Ayu Nirmala",
    "piket": "Jumat"
  },
  {
    "name": "Dhea Rintan Az Zahra Aprias"
  },
  {
    "name": "Dito Yus Dermawan",
    "peran": "Koordinator Mapel Seni",
    "piket": "Jumat"
  },
  {
    "name": "Erfi Nafasa Fadhilah Putri",
    "peran": "Koordinator Mapel Fisika",
    "piket": "Kamis"
  },
  {
    "name": "Fawwaz Izzan Tsaqif"
  },
  {
    "name": "Feni Prihartini",
    "peran": "Koordinator Mapel Bahasa Indonesia",
    "piket": "Jumat"
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
    "name": "Katika Vasanti",
    "piket": "Jumat"
  },
  {
    "name": "Khanifah Zulfi",
    "piket": "Kamis"
  },
  {
    "name": "M. Aryo Pramudya",
    "peran": "Ketua Kelas"
  },
  {
    "name": "Maulin Aprilia",
    "piket": "Kamis"
  },
  {
    "name": "Muhammad Bustanul Arifin",
    "peran": "Koordinator Mapel Bio"
  },
  {
    "name": "Nia Rachmawati",
    "peran": "Wakil Ketua"
  },
  {
    "name": "Nuny Rahmadini"
  },
  {
    "name": "Probo Dwi Yulastono",
    "piket": "Kamis"
  },
  {
    "name": "Rakhelya Dewi Prasanti",
    "peran": "Koordinator Mapel Kimia"
  },
  {
    "name": "Ridlo Yusuf Abdilah",
    "piket": "Jumat"
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
    "name": "Syahla Istiqomah",
    "piket": "Jumat"
  },
  {
    "name": "Tsamrotul Khoeriyah"
  },
  {
    "name": "Zahra Khoirotul Aniah",
    "piket": "Kamis"
  }
]

window.addEventListener('load', () => {

const member = document.getElementById("member")
let countMem = 1;
for(let siswa of list) {
  if(!siswa.peran) siswa.peran = "Anggota"
  if(!siswa.piket) siswa.piket = "Belum ditulis"
  member.innerHTML += `<div class='siswa'>${countMem}. <b>${siswa.name}</b><p>${siswa.peran}<br>Piket: ${siswa.piket}</p></div>`
  countMem++
}

})