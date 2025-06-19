const pinCorrecto = "1506";
function verificarPin() {
  const pinIngresado = document.getElementById("pinInput").value;
  if (pinIngresado === pinCorrecto) {
    localStorage.setItem("accesoAdmin", "true");
    document.getElementById("login-panel").style.display = "none";
    document.getElementById("adminPanel").style.display = "block";
  } else {
    alert("PIN incorrecto");
  }
}
function cerrarSesion() {
  localStorage.removeItem("accesoAdmin");
  window.location.href = "index.html";
}
function mostrarSeccion(id) {
  document.querySelectorAll(".seccion").forEach(sec => sec.style.display = "none");
  document.getElementById(id).style.display = "block";
}
window.onload = function () {
  if (localStorage.getItem("accesoAdmin") === "true") {
    document.getElementById("login-panel").style.display = "none";
    document.getElementById("adminPanel").style.display = "block";
  }
};