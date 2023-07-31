window.addEventListener("scroll", () => {
  let scroll = window.scrollY;
  const pano1 = document.getElementById("pano1")
  const pano2 = document.getElementById("pano2")
  const pano3 = document.getElementById("pano3")
  const pano4 = document.getElementById("pano4")
  const pano5 = document.getElementById("pano5")
  const pano6 = document.getElementById("pano6")
  const sman = document.getElementById("sman")

  const navbar = document.querySelector(".navbar")
  const container = document.querySelector(".container")

  // Panorama Parallax
  if (scroll < 200) {
    pano1.style.transform = `translate(${scroll * -0.1}vw, ${scroll * 0.12}vw)`
    pano2.style.transform = `translate(0, ${scroll * 0.08}vw)`
    pano3.style.transform = `translate(0, ${scroll * 0.06}vw)`
    pano4.style.transform = `translate(0, ${scroll * 0.04}vw)`
    pano5.style.transform = `translate(0, ${scroll * 0.05}vw)`
    pano6.style.transform = `translate(0, ${scroll * 0.07}vw)`
    sman.style.transform = `translate(0, ${scroll * 0.13}vw)`
    
    navbar.style.transform = `translate(0, ${scroll * 0.005}vw)`
    container.style.transform = `translate(0, ${scroll * 0.02}vw)`
  }
})