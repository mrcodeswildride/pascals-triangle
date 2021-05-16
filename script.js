let number = document.getElementById(`number`)
let generateButton = document.getElementById(`generateButton`)
let box = document.getElementById(`box`)

generateButton.addEventListener(`click`, generate)

number.addEventListener(`keydown`, keyPressed)
number.focus()

function generate() {
  let numberValue = number.value.trim()

  if (numberValue < 0 || numberValue > 15) {
    box.innerHTML = `Nth row must be between 0 and 15.`
  } else {
    let rows = [[1]]

    for (let i = 1; i <= numberValue; i++) {
      rows[i] = [1]

      for (let j = 1; j < i; j++) {
        rows[i].push(rows[i - 1][j - 1] + rows[i - 1][j])
      }

      rows[i].push(1)
    }

    box.innerHTML = ``

    for (let i = 0; i <= numberValue; i++) {
      for (let j = 0; j < rows[i].length; j++) {
        let left = (numberValue - i) / 2 + j

        let square = document.createElement(`div`)
        square.classList.add(`square`)
        square.style.left = `${left * 50}px`
        square.style.top = `${i * 50}px`
        square.innerHTML = rows[i][j]

        box.appendChild(square)
      }
    }
  }
}

function keyPressed(event) {
  if (event.keyCode == 13) {
    generate()
  }
}
