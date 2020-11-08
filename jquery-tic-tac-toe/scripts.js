(function(win, doc){
  'use strict';

  let turn = 0;
  const slots = $("td");
  const board = [
    [slots[0], slots[1], slots[2]],
    [slots[3], slots[4], slots[5]],
    [slots[6], slots[7], slots[8]]
  ];

  $("body").on("click", "td", play);

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
      return showWinner('.horizontal.top');
    }
    if ((board[1][0].innerText == board[1][1].innerText 
      && board[1][0].innerText == board[1][2].innerText) 
      && board[1][0].innerText) 
    {
      return showWinner('.horizontal.middle');
    }
    if ((board[2][0].innerText == board[2][1].innerText 
      && board[2][0].innerText == board[2][2].innerText) 
      && board[2][0].innerText) 
    {
      return showWinner('.horizontal.bottom');
    }
    
    if ((board[0][0].innerText == board[1][0].innerText 
      && board[0][0].innerText == board[2][0].innerText) 
      && board[0][0].innerText) 
    {
      return showWinner('.vertical.left');
    }
    if ((board[0][1].innerText == board[1][1].innerText 
      && board[0][1].innerText == board[2][1].innerText) 
      && board[0][1].innerText) 
    {
      return showWinner('.vertical.middle');
    }
    if ((board[0][2].innerText == board[1][2].innerText 
      && board[0][2].innerText == board[2][2].innerText) 
      && board[0][2].innerText) 
    {
      return showWinner('.vertical.right');
    }

    if ((board[0][0].innerText == board[1][1].innerText
      && board[0][0].innerText == board[2][2].innerText)
      && board[0][0].innerText) 
    {
      return showWinner('.diagonal.LT-RB')
    }
    if ((board[0][2].innerText == board[1][1].innerText
      && board[0][2].innerText == board[2][0].innerText)
      && board[0][2].innerText) 
    {
      return showWinner('.diagonal.RT-LB')
    }
    if ( board[0][0].innerText && board[0][1].innerText && board[0][2].innerText 
      && board[1][0].innerText && board[1][1].innerText && board[1][2].innerText
      && board[2][0].innerText && board[2][1].innerText && board[2][2].innerText) 
    {
      return showWinner();
    }
  }

  function showWinner(classId) {
    $("body").off("click", "td", play);
    let time = 500;
    let mensagem;

    if (classId) {
      $(classId)[0].classList.remove('hidden');
    
      const player = (turn % 2 == 0 ? 'O' : 'X');
      mensagem = `
        <div class="end">
          <h1 align="center">'${player}' é o vencedor.</h1>
          <a href="index.html" class="play-again">Jogar novamente<a/>
        </div>
      `;
      time = 1500;
    } else {
      mensagem = `
        <div class="end">
          <h1 align="center">Empate.</h1>
          <a href="index.html" class="play-again">Jogar novamente<a/>
        </div>
      `;
    }
    setTimeout(() => {$('body')[0].innerHTML = mensagem;}, time);
  }

})();