let form = document.getElementById("chessKnight")
let knightBtn = document.getElementById("button")
let result = document.getElementById("result")
knightBtn.addEventListener("click", showPossibleMoves)


function showPossibleMoves() {
  let cell = form.value
  // convert letter to number
  let x = parseInt(cell.substring(0,1).charCodeAt() - 64)
  let y = parseInt(cell.substring(1,2))
  
  let knightMoves = [
    {x:2, y:-1},{x:2, y:1},{x:1, y:-2},{x:1, y:2},
    {x:-2, y:-1},{x:-2, y:1},{x:-1, y:-2},{x:-1, y:2}
  ]
  
  let possibleMoves = []
    for (let m of knightMoves) {
        let charcode = x + m.x 
        
            let row = String.fromCharCode(charcode + 64)
        
        
        let column = y + m.y
        if (column>=1&&column<=8&&charcode>=1&&charcode<=8) {
            
            possibleMoves.push(row + "" + column)
        }
  }
  console.log('Possible Coordinates:', possibleMoves);
  result.innerHTML = possibleMoves.toString()
}