(function(win, doc){
  'use strict';

  let turn = 0;

  const slots = $("td");

  const board = [
    [slots[0], slots[1], slots[2]],
    [slots[3], slots[4], slots[5]],
    [slots[6], slots[7], slots[8]]
  ];

  slots.click(play);

  function play() {

    if (this.innerText) return;

    if (turn % 2 == 0) this.innerText = 'O';
    else this.innerText = 'X';

    checkWinner();

    turn++;
  }

  function checkWinner () {

    if ((board[0][0].innerText == board[0][1].innerText 
      && board[0][0].innerText == board[0][2].innerText) 
      && board[0][0].innerText) 
    {
      showWinner('.horizontal.top');
    }
    if ((board[1][0].innerText == board[1][1].innerText 
      && board[1][0].innerText == board[1][2].innerText) 
      && board[1][0].innerText) 
    {
      showWinner('.horizontal.middle');
    }
    if ((board[2][0].innerText == board[2][1].innerText 
      && board[2][0].innerText == board[2][2].innerText) 
      && board[2][0].innerText) 
    {
      showWinner('.horizontal.bottom');
    }
    
    if ((board[0][0].innerText == board[1][0].innerText 
      && board[0][0].innerText == board[2][0].innerText) 
      && board[0][0].innerText) 
    {
      showWinner('.vertical.left');
    }
    if ((board[0][1].innerText == board[1][1].innerText 
      && board[0][1].innerText == board[2][1].innerText) 
      && board[0][1].innerText) 
    {
      showWinner('.vertical.middle');
    }
    if ((board[0][2].innerText == board[1][2].innerText 
      && board[0][2].innerText == board[2][2].innerText) 
      && board[0][2].innerText) 
    {
      showWinner('.vertical.right');
    }

    if ((board[0][0].innerText == board[1][1].innerText
      && board[0][0].innerText == board[2][2].innerText)
      && board[0][0].innerText) 
    {
      showWinner('.diagonal.LT-RB')
    }
    if ((board[0][2].innerText == board[1][1].innerText
      && board[0][2].innerText == board[2][0].innerText)
      && board[0][2].innerText) 
    {
      showWinner('.diagonal.RT-LB')
    }
  }

  function showWinner(classId) {
    $(classId)[0].classList.remove('hidden');
    
    const player = (turn % 2 == 0 ? 'O' : 'X');

    setTimeout(() => {
      $('body')[0].innerHTML = `<h1> '${player}' é o vencedor.`;
    }, 1500);
  }

})(window, document);