function afficherDate() {
  var element = document.getElementById("date-affichee");
  if (element === null) {
    return;
  }

  var decalage = Number(element.getAttribute("data-decalage"));
  var date = new Date();
  date.setDate(date.getDate() + decalage);

  var options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  element.textContent = date.toLocaleDateString("fr-FR", options);
}

function filtrerActus(categorie) {
  var cartes = document.getElementsByClassName("actu");

  for (var i = 0; i < cartes.length; i++) {
    var categorieCarte = cartes[i].getAttribute("data-categorie");

    if (categorie === "Toutes" || categorie === categorieCarte) {
      cartes[i].style.display = "block";
    } else {
      cartes[i].style.display = "none";
    }
  }
}

afficherDate();
