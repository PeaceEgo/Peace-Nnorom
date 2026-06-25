const CV_URL =
  "https://drive.google.com/uc?export=download&id=1GLOPyZaPCNHzncYcjFeXMEPpDDtB99R_"

export function downloadCV() {
  const link = document.createElement("a")
  link.href = CV_URL
  link.setAttribute("download", "Peace_Nnorom_CV.pdf")
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

export function scrollToSection(selector: string) {
  document.querySelector(selector)?.scrollIntoView({ behavior: "smooth" })
}
