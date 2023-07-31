const foto = [
  {
    "name": "Kenangan Foto Wali Kelas XI",
    "photo": "./img/galery1.JPG"
  }
]
window.addEventListener('load', () => {

const galery = document.getElementById("galeryList")
  for(let post of foto) {
    galery.innerHTML += `<div class='post'><b>${post.name}</b><img src='${post.photo}' alt='${post.name}'></div>`
  }
})