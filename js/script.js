document.querySelector("#closeModal").addEventListener("click", () => {
  closeModal();
});
document.querySelector("#screen01").addEventListener("click", () => {
  closeModal();
});

function closeModal() {
  document.querySelector("#screen01").classList.remove("animateScreen");
  document.querySelector("#modal01").classList.remove("animateModal");
}

document.querySelector("#bt01").addEventListener("click", () => {
  document.querySelector("#screen01").classList.add("animateScreen");

  document.querySelector("#modal01").classList.add("animateModal");

  /* document.querySelector("#screen01").style.display = "block";
        document.querySelector("#modal01").style.display = "block"; */
});
