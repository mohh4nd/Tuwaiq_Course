//console.log("Week 4 - Day 4");

//console.log("XO game project JS");

$(document).ready(function () {
  const cells = $(".cell");
  const palayerTurn = $("#turn");
  const restart = $("#playAgainBtn");
  const showTheWinner = $(".palayerStatus");

  //turn = X  OR turn = O to check the player turn
  let turn = "X";
  let countTurn = 0;

  cells.click(cellClicked);

  restart.hide();

  /*this function when you click on the
  cell it insert X or O according to turn*/

  function cellClicked() {
    //if the cell not empty show a red background color for 0.25 second
    if ($(this).text() !== "") {
      $(this).css("background-color", "red");
      setTimeout(() => {
        $(this).css("background-color", "white");
      }, 250);
    } else {
      //if statement to check the turn if X or O
      if (turn === "X") {
        $(this).text("X").css("color", "#edb03d");
        checkWinner("X");
        turn = "O";
        palayerTurn.text("O");
        return;
      }
      $(this).text("O").css("color", "#d9146c");
      checkWinner("O");
      turn = "X";
      palayerTurn.text("X");
    }
  }
  //this function to check the winner on the game
  function checkWinner(currentPlayer) {
    /* 0 1 2
       3 4 5
       6 7 8  */

    //check Horizontal 0 1 2
    if (
      $(cells[0]).text() === $(cells[1]).text() &&
      $(cells[1]).text() === $(cells[2]).text() &&
      $(cells[0]).text() !== ""
    ) {
      $(cells[0]).css("background-color", "green");
      $(cells[1]).css("background-color", "green");
      $(cells[2]).css("background-color", "green");
      playerWin(currentPlayer);
    } //check Horizontal 3 4 5
    else if (
      $(cells[3]).text() === $(cells[4]).text() &&
      $(cells[4]).text() === $(cells[5]).text() &&
      $(cells[3]).text() !== ""
    ) {
      $(cells[3]).css("background-color", "green");
      $(cells[4]).css("background-color", "green");
      $(cells[5]).css("background-color", "green");
      playerWin(currentPlayer);
    } //check Horizontal 6 7 8
    else if (
      $(cells[6]).text() === $(cells[7]).text() &&
      $(cells[7]).text() === $(cells[8]).text() &&
      $(cells[6]).text() !== ""
    ) {
      $(cells[6]).css("background-color", "green");
      $(cells[7]).css("background-color", "green");
      $(cells[8]).css("background-color", "green");
      playerWin(currentPlayer);
    } //check Vertical 0 3 6
    else if (
      $(cells[0]).text() === $(cells[3]).text() &&
      $(cells[3]).text() === $(cells[6]).text() &&
      $(cells[0]).text() !== ""
    ) {
      $(cells[0]).css("background-color", "green");
      $(cells[3]).css("background-color", "green");
      $(cells[6]).css("background-color", "green");
      playerWin(currentPlayer);
    } //check Vertical 1 4 7
    else if (
      $(cells[1]).text() === $(cells[4]).text() &&
      $(cells[4]).text() === $(cells[7]).text() &&
      $(cells[1]).text() !== ""
    ) {
      $(cells[1]).css("background-color", "green");
      $(cells[4]).css("background-color", "green");
      $(cells[7]).css("background-color", "green");
      playerWin(currentPlayer);
    } //check Vertical 2 5 8
    else if (
      $(cells[2]).text() === $(cells[5]).text() &&
      $(cells[5]).text() === $(cells[8]).text() &&
      $(cells[2]).text() !== ""
    ) {
      $(cells[2]).css("background-color", "green");
      $(cells[5]).css("background-color", "green");
      $(cells[8]).css("background-color", "green");
      playerWin(currentPlayer);
    } //check Diagonal 0 4 8
    else if (
      $(cells[0]).text() === $(cells[4]).text() &&
      $(cells[4]).text() === $(cells[8]).text() &&
      $(cells[0]).text() !== ""
    ) {
      $(cells[0]).css("background-color", "green");
      $(cells[4]).css("background-color", "green");
      $(cells[8]).css("background-color", "green");
      playerWin(currentPlayer);
    } //check Diagonal 2 4 6
    else if (
      $(cells[2]).text() === $(cells[4]).text() &&
      $(cells[4]).text() === $(cells[6]).text() &&
      $(cells[2]).text() !== ""
    ) {
      $(cells[2]).css("background-color", "green");
      $(cells[4]).css("background-color", "green");
      $(cells[6]).css("background-color", "green");
      playerWin(currentPlayer);
    } else {
      countTurn++;

      //this if condition to check if the game is draw
      if (countTurn === 9) {
        showTheWinner.text("DRAW");
        restart.show();
      }
    }
  }

  //this function display the winner in the game
  function playerWin(currentPlayer) {
    showTheWinner.text("THE WINNER IS: (" + currentPlayer + ") PLAYER");
    restart.show();
    cells.unbind("click");
  }
  //this function to reload the web page after click on the button
  restart.click(function () {
    location.reload();
  });
});
