"use strict";
window.addEventListener("load", initApp);

//InitApp
async function initApp() {
  //import data from online json file.
  const characters = await getData(
    "https://cederdorff.github.io/dat-js/05-data/southpark.json"
  );
  //sort data by name.
  characters.sort((obj1, obj2) => {
    let fobj1 = obj1.name.toLowerCase();
    let fobj2 = obj2.name.toLowerCase();

    if (fobj1 < fobj2) {
      return -1;
    }
    if (fobj1 > fobj2) {
      return 1;
    }
    return 0;
  });

  characters.forEach(showCharacter);
}

//Essential Functions
function showCharacter(character) {
  document.querySelector("#characters").insertAdjacentHTML(
    "beforeend",
    /*html*/ `
            <article class="grid-item">
                <img src="${character.image}">
                <h2>${character.name}</h2>
                <p>Age: ${character.age}</p>
                <p>Gender: ${character.gender}</p>
            </article>
        `
  );
  document
    .querySelector("#characters article:last-child")
    .addEventListener("click", characterClicked);
  // Character clicked function
  function characterClicked() {
    console.log(character);
    document.querySelector("#dialog-content").innerHTML = "";
    document.querySelector("#dialog-content").insertAdjacentHTML(
      "afterbegin",
      /*html*/ `
      <img src=${character.image} />
      <h1>${character.name}</h1>
      <p>${character.name}'s first appearance is in the episode ${character.firstAppearance}. They are a ${character.gender} character, who is ${character.age} years old. The character is voiced by ${character.voicedBy}</p>
      <ul>Age: ${character.age}</ul>
      <ul>Gender: ${character.gender}</ul>
      <ul>Occupation: ${character.occupation}</ul>
      <ul>School grade: ${character.schoolGrade}</ul>
      <ul>Religion: ${character.religion}</ul>
      <ul>Catchphrase: ${character.catchphrase}</ul>
      <ul>Hair color: ${character.hairColor}</ul>
      <ul>First appearance: ${character.firstAppearance}</ul>
      <ul>Race: ${character.race}</ul>
      <ul>Voiced by: ${character.voicedBy}</ul>
      `
    );
    document.querySelector("#dialog-window").showModal();
  }
}

async function getData(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}
