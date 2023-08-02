const list = [
  {
    "name": "Adinda Aulia Rahma Dewi",
    "peran": "Bendahara",
    "piket": "Kamis"
  },
  {
    "name": "Afifah Retnoningsih",
    "piket": "Selasa"
  },
  {
    "name": "Ahmad Fauzi",
    "piket": "Rabu"
  },
  {
    "name": "Anisa Sufi Yulianti",
    "peran": "Koordinator Mapel PJOK",
    "piket": "Jumat"
  },
  {
    "name": "Arifatul Amri",
    "piket": "Rabu"
  },
  {
    "name": "Awitinanti Mauly Wiritanaya",
    "piket": "Selasa"
  },
  {
    "name": "Bagas Tri Ramadhani",
    "piket": "Senin"
  },
  {
    "name": "Bintang Nugraha Putra",
    "peran": "Anomali",
    "piket": "Kamis"
  },
  {
    "name": "Desita Aliyah Fatiah",
    "piket": "Rabu"
  },
  {
    "name": "Destriyan Putra Prabowo",
    "piket": "Senin"
  },
  {
    "name": "Devika Ayu Nirmala",
    "piket": "Jumat"
  },
  {
    "name": "Dhea Rintan Az Zahra Aprias",
    "piket": "Senin"
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
    "name": "Fawwaz Izzan Tsaqif",
    "piket": "Selasa"
  },
  {
    "name": "Feni Prihartini",
    "peran": "Koordinator Mapel Bahasa Indonesia",
    "piket": "Jumat"
  },
  {
    "name": "Inayah Arsyika Basyari",
    "piket": "Senin"
  },
  {
    "name": "Juwita Rohmawati",
    "piket": "Selasa"
  },
  {
    "name": "Kartika Aulia Hidayah",
    "piket": "Senin"
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
    "peran": "Ketua Kelas",
    "piket": "Rabu"
  },
  {
    "name": "Maulin Aprilia",
    "piket": "Kamis"
  },
  {
    "name": "Muhammad Bustanul Arifin",
    "peran": "Koordinator Mapel Bio",
    "piket": "Selasa"
  },
  {
    "name": "Nia Rachmawati",
    "peran": "Wakil Ketua",
    "piket": "Selasa"
  },
  {
    "name": "Nuny Rahmadini",
    "piket": "Senin"
  },
  {
    "name": "Probo Dwi Yulastono",
    "piket": "Kamis"
  },
  {
    "name": "Rakhelya Dewi Prasanti",
    "peran": "Koordinator Mapel Kimia",
    "piket": "Rabu"
  },
  {
    "name": "Ridlo Yusuf Abdilah",
    "piket": "Jumat"
  },
  {
    "name": "Rifa Aulanisa",
    "piket": "Rabu"
  },
  {
    "name": "Salwa Amelia Putri",
    "piket": "Rabu"
  },
  {
    "name": "Septianingrum Gautami",
    "piket": "Selasa"
  },
  {
    "name": "Syahla Istiqomah",
    "piket": "Jumat"
  },
  {
    "name": "Tsamrotul Khoeriyah",
    "piket": "Senin"
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