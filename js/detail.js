// function showDetail() {
//   document.getElementById("detail").style.display = "block";
//   document.getElementById("infoPenting").style.display = "none";
// }

// function showInfo() {
//   document.getElementById("detail").style.display = "none";
//   document.getElementById("infoPenting").style.display = "block";
// }

// function showDetail() {
//   document.getElementById("detail").style.display = "block";
//   document.getElementById("infoPenting").style.display = "none";
//   document.getElementById("detailTab").classList.add("active");
//   document.getElementById("infoPentingTab").classList.remove("active");
// }

function showDetail() {
  document.getElementById("detail").style.display = "block";
  document.getElementById("infoPenting").style.display = "none";
  document.getElementById("detailTab").classList.add("active");
  document.getElementById("infoPentingTab").classList.remove("active");
}

function showInfo() {
  document.getElementById("detail").style.display = "none";
  document.getElementById("infoPenting").style.display = "block";
  document.getElementById("detailTab").classList.remove("active");
  document.getElementById("infoPentingTab").classList.add("active");
}

function toggleFollow() {
  const followBtn = document.querySelector(".follow-btn");
  followBtn.textContent =
    followBtn.textContent === "Follow" ? "Following" : "Follow";
  followBtn.classList.toggle("following");
}

let hargaProduk = 2000000;
let jumlahProduk = 1;

function updateTotal() {
  const totalElement = document.getElementById("total");
  const quantityElement = document.getElementById("quantity");
  const total = hargaProduk * jumlahProduk;
  totalElement.textContent = "Rp " + total.toLocaleString("id-ID");
  quantityElement.textContent = jumlahProduk;
}

function incrementQuantity() {
  jumlahProduk++;
  updateTotal();
}

function decrementQuantity() {
  if (jumlahProduk > 1) {
    jumlahProduk--;
    updateTotal();
  }
}
updateTotal();

function showPopup() {
  document.getElementById("popupOverlay").style.display = "block";
}

function hidePopup() {
  document.getElementById("popupOverlay").style.display = "none";
}
