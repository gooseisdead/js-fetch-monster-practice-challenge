const monsterContainer = document.querySelector("#monster-container")

function renderOneMonster(monster) {
    const monsterDiv = document.createElement("div")
    monsterDiv.className = "monster"
    monsterDiv.dataset.number = monster.number
    
    monsterContainer.append(monsterDiv)
}



function renderAllMonsters(manifestMonsterData) {
    manifestMonsterData.forEach(renderOneMonster)
}

    fetch("http://localhost:3000/monsters")
    .then(response => response.json())
    .then(data => manifestMonsterData(data))

function manifestMonsterData(data) {
  data.forEach(renderOneMonster)
}



//   function renderPlayer(player) {
//     const playerDiv = document.createElement("div")
//     const deletePlayerButton = document.createElement("BUTTON")
//     deletePlayerButton.innerHTML = "DELETE"
//     playerDiv.className = "player"
//     playerDiv.dataset.number = player.number
//     playerDiv.innerHTML = `
//       <h3>${player.name} (<em>${player.nickname}</em>)</h3>
//       <img src="${player.photo}" alt="${player.name}">
//       <p class="likes">${player.likes} likes</p>
//       <button class="like-button">❤️</button>
//       `
    
//     const likeButton = playerDiv.querySelector("button.like-button")
//     likeButton.addEventListener("click", function(event) {
//       const likes = playerDiv.querySelector("p.likes")
//       const totalLikes = parseInt(likes.textContent)
//       likes.textContent = totalLikes + 1 + " likes"
//     })
  
//     playerDiv.append(deletePlayerButton)
//     playerContainer.append(playerDiv)
    
//   }
  
  