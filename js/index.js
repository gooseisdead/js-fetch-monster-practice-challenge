
function renderMonster(monster) {
  const monsterContainer = document.querySelector("#monster-container")
  const monsterDiv = document.createElement("div")
  monsterDiv.className = "monster"
  monsterDiv.dataset.number = monster.number
  monsterDiv.innerHTML = `
    <h3>${monster.name}</h3>
    <p>${monster.age}</p>
    <p>${monster.description}</p>
    `
    monsterContainer.append(monsterDiv)
}

function renderAllMonsters(monsterData) {
    monsterData.forEach(renderMonster)
}



function initialize () {
    fetch("http://localhost:3000/monsters/?_limit=50&_page=1")
    .then(response => response.json())
    .then(monsterData => {
        renderAllMonsters(monsterData)
    })
  }
  
  initialize ()

  
  
  
  
  