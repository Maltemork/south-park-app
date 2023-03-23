"use strict";

// ============ LOAD & INIT APP ============ //
window.addEventListener("load", initApp);

//============START============//

async function initApp() {
  // Harry Potter
  const christinaAguilera = await getCharacter("data/christinaAguilera.json");
  showCharacter(christinaAguilera);
  document
    .querySelector("#dialog-close")
    .addEventListener("click", closeDialogWindow);
}

// essential functions

function showCharacter(character) {
  document.querySelector("#characters").insertAdjacentHTML(
    "beforeend",
    /*html*/ `
            <article class="grid-item">
                <img src="${character.image}">
                <h2>${character.name}</h2>
                <p>Age: ${character.age}</p>
                <p>Gender: ${character.gender}</p>
                <p>Race: ${character}</p>
            </article>
        `
  );
  document
    .querySelector("#characters article:last-child")
    .addEventListener("click", characterClicked);
  // Character clicked function
  function characterClicked() {
    console.log(character);
    document.querySelector("#dialog-window").insertAdjacentHTML(
      "afterbegin",
      /*html*/ `
      <img src=${character.image} />
      <p>Name: ${character.name}</p>
      <p>Age: ${character.age}</p>
      <p>Gender: ${character.gender}</p>
      <p>Occupation: ${character.occupation}</p>
      <p>School grade: ${character.schoolGrade}</p>
      <p>Religion: ${character.religion}</p>
      <p>Catchphrase: ${character.catchphrase}</p>
      <p>Hair color: ${character.hairColor}</p>
      <p>Episodes: ${character.episodes}</p>
      <p>Appearances: ${character.appearances}</p>
      <p>First appearance: ${character.firstAppearance}</p>
      <p>Race: ${character.race}</p>
      <p>Voiced by: ${character.voicedBy}</p>
      <a href=${character.link} target=_blank>${character.link}</a>
      `
    );
    document.querySelector("#dialog-window").showModal();
  }
}

async function getCharacter(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

function closeDialogWindow() {
  document.querySelector("#dialog-window").showModal();
}

function getDescription(character) {}

function hideInfo(character) {}

// helper functions

function formatDate(date) {}

function calcAge(dateOfBirth) {}
