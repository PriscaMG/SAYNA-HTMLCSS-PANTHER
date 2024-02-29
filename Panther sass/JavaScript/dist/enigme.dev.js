"use strict";

/**Quizz */
//Tableau des questions 2 et 3 du quizz
var qTab = [{
  question: "Une anecdote intéressante est écrite juste en dessous mais elle est codée par un code césar également appelé code de chiffrement par décalage . L’alphabet a été décalé, trouve la clé de chiffrement qui te permettrait de retrouver les lettres et retranscris la phrase :",
  indice: "Tm nqtu lmjcbm i Wikstivl mv Kitqnwzvqm. Qt a'ioqb lm ti dqttm lwvb mab wzqoqviqzm Zgiv Kwwotmz mb moitmumvb ti dqttm ycq i dc viqbzm tm uwcdmumvb xwtqbqycm lma jtiks xivbpmza",
  reponse: "Le film debute a Oackland en Californie. Il s'agit de la ville dont est originaire Ryan Coogler et egalement la ville qui a vu naitre le mouvement politique des black panthers",
  doYouKnow: "Plusieurs sources s’entendent pour dire que la lettre la plus utilisée en français est la lettre E. En pourcentage de fréquence, la lettre est utilisée à 14% dans une phrase. Et si tu regardais quel symbole revient le plus souvent pour en déduire son décalage dans l’alphabet ? "
}, {
  question: "Lorsque T’Challa mange l’herbe en forme de coeur pour recevoir les pouvoirs du Black Panther, il voit son père afin de lui demander conseil afin de devenir un bon roi. Cette scène rappelle la même scène d’un certain film où un père dit à son fils de ne pas oublier qui il est et d’où il vient. Quel est ce film ?",
  indice: "01001100 01000101 00100000 01010010 01001111 0100100<br>00100000 01001100 01001001 01001111 01001110 00001101<br>00001010",
  reponse: "Le roi lion",
  doYouKnow: "Le philosophe Francis Bacon inventa en 1605 un alphabet bilitère, uniquement composé des deux lettres A et B. Cest en quelque sorte lancêtre du système binaire des ordinateurs actuels car toute lettre pouvait être construite avec un enchainement précis de ces deux lettres, tandis que le système binaire informatique utilise 0 et 1."
}];
/**Selecteurs */

var quizzAnswerForm = document.querySelector(".quizzAnswerForm");
var submitAnswer = document.querySelector("#quizzSubmitButton");
var resultPopupBox = document.querySelector("#ResponsepopupBox");
var enigPopupBox__blur = document.querySelector(".ResponsepopupBox");
var userAnswer = document.querySelector("#reponse");
var enigmeAnswer = "SI JE SUIS FIDELE C'EST A CE TRONE PEU IMPORTE QUI MONTE DESSUS";
var congrat = document.querySelector(".win");
var resultComment = document.querySelector(".winText");
var nextQ = document.querySelector(".nextQuestion");
var comingFigCompte = document.querySelector(".comingFigCompte");
var q1h2 = document.querySelector("#translate");
var q1dl = document.querySelector(".alphabet");
var qCurrentNumber = document.querySelector(".currentOrder");
var currentQuestionSentence = document.querySelector(".currentQuestion");
var currentIndice = document.querySelector(".currentIndice");
var doYouKnow = document.querySelector(".doYouKnow");
var indexPage = document.querySelector(".indexPage");
/**Submit answer */

quizzAnswerForm.addEventListener("submit", function (e) {
  e.preventDefault();
  resultPopupBox.style.display = "flex";
  enigPopupBox__blur.style.display = "block";
  var userAnswerVal = userAnswer.value.toUpperCase().replaceAll(" ", "");
  console.log(userAnswerVal, enigmeAnswer.toUpperCase().replaceAll(" ", ""));

  if (userAnswerVal === enigmeAnswer.toUpperCase().replaceAll(" ", "")) {
    if (qIndex >= qTab.length) {
      congrat.innerText = "Ton initiation est terminée !";
      resultComment.remove();
      nextQ.style.display = "none";
      enigGoIndex.style.display = "block";
      comingFigCompte.style.display = "flex";
      return;
    }

    congrat.innerText = "Bravo !";
    resultComment.innerText = "Tu as trouvé la réponse. Es tu prêt pour l'énigme suivante ?";
    nextQ.style.display = "block";
  } else {
    congrat.innerText = "Désolé !";
    resultComment.innerText = "Ce n'est pas tout à fait ça. N'abandonne pas !";
    nextQ.style.display = "none";
  }
});
/**Next question si reponse est vraie */

var qIndex = 0;
var qNumber = 1;
nextQ.addEventListener("click", function (e) {
  e.preventDefault();
  q1h2.style.display = "none";
  q1dl.style.display = "none";
  userAnswer.value = "";
  ++qNumber;
  qCurrentNumber.innerText = qNumber;
  currentQuestionSentence.innerText = qTab[qIndex].question;
  currentIndice.innerHTML = qTab[qIndex].indice;
  doYouKnow.innerText = qTab[qIndex].doYouKnow;
  enigmeAnswer = qTab[qIndex].reponse;
  ++qIndex;
});
/**Fermer quizz popupbox */

document.addEventListener("click", function () {
  resultPopupBox.style.display = "none";
  enigPopupBox__blur.style.display = "none";
});
/**Revenir à la page principale à la fin du Quizz */

var enigGoIndex = document.querySelector("#back");
enigGoIndex.addEventListener("click", function () {
  indexPage.click();
});
/**Compte à rebour à la fin du quizz */

function reboursF() {
  var rebours = document.querySelector(".countDownBox");
  var jour = document.querySelector("#jour");
  var heure = document.querySelector("#heure");
  var minute = document.querySelector("#minute");
  var seconde = document.querySelector("#seconde");
  var today = new Date();
  var endDate = new Date("december 31, 2023 00:00:00");
  var total_secondes = (endDate - today) / 1000;

  if (total_secondes > 0) {
    var nb_jours = Math.floor(total_secondes / (60 * 60 * 24));
    var nb_heures = Math.floor((total_secondes - nb_jours * 60 * 60 * 24) / (60 * 60));
    var nb_minutes = Math.floor((total_secondes - (nb_jours * 60 * 60 * 24 + nb_heures * 60 * 60)) / 60);
    var nb_secondes = Math.floor(total_secondes - (nb_jours * 60 * 60 * 24 + nb_heures * 60 * 60 + nb_minutes * 60));
    jour.textContent = caractere(nb_jours);
    heure.textContent = caractere(nb_heures);
    minute.textContent = caractere(nb_minutes);
    seconde.textContent = caractere(nb_secondes);
  }

  var minuteur = setTimeout("reboursF();", 1000);

  function caractere(nb) {
    return nb < 10 ? '0' + nb : nb;
  }
}

reboursF();