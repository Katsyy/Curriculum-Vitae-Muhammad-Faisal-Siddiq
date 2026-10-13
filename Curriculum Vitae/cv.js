function cetakCV() {
  window.print();
}

document.addEventListener("DOMContentLoaded", function () {
  const printButton = document.getElementById("printBtn");

  if (printButton) {
    printButton.addEventListener("click", cetakCV);
  }
});