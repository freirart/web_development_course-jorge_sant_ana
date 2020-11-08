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
    if ($(this).text()) return;

    if (turn % 2 === 0) $(this).text('O');
    else $(this).text('X');

    checkWinner();
    turn++;
  }

  function checkWinner () {
    if (($(board[0][0]).text() === $(board[0][1]).text() 
      && $(board[0][0]).text() === $(board[0][2]).text()) 
      && $(board[0][0]).text()) 
    {
      return showWinner('.horizontal.top');
    }
    if (($(board[1][0]).text() === $(board[1][1]).text() 
      && $(board[1][0]).text() === $(board[1][2]).text()) 
      && $(board[1][0]).text()) 
    {
      return showWinner('.horizontal.middle');
    }
    if (($(board[2][0]).text() === $(board[2][1]).text() 
      && $(board[2][0]).text() === $(board[2][2]).text()) 
      && $(board[2][0]).text()) 
    {
      return showWinner('.horizontal.bottom');
    }
    
    if (($(board[0][0]).text() === $(board[1][0]).text() 
      && $(board[0][0]).text() === $(board[2][0]).text()) 
      && $(board[0][0]).text()) 
    {
      return showWinner('.vertical.left');
    }
    if (($(board[0][1]).text() === $(board[1][1]).text() 
      && $(board[0][1]).text() === $(board[2][1]).text()) 
      && $(board[0][1]).text()) 
    {
      return showWinner('.vertical.middle');
    }
    if (($(board[0][2]).text() === $(board[1][2]).text() 
      && $(board[0][2]).text() === $(board[2][2]).text()) 
      && $(board[0][2]).text()) 
    {
      return showWinner('.vertical.right');
    }

    if (($(board[0][0]).text() === $(board[1][1]).text()
      && $(board[0][0]).text() === $(board[2][2]).text())
      && $(board[0][0]).text()) 
    {
      return showWinner('.diagonal.LT-RB')
    }
    if (($(board[0][2]).text() === $(board[1][1]).text()
      && $(board[0][2]).text() === $(board[2][0]).text())
      && $(board[0][2]).text()) 
    {
      return showWinner('.diagonal.RT-LB')
    }
    if ( $(board[0][0]).text() && $(board[0][1]).text() && $(board[0][2]).text() 
      && $(board[1][0]).text() && $(board[1][1]).text() && $(board[1][2]).text()
      && $(board[2][0]).text() && $(board[2][1]).text() && $(board[2][2]).text()) 
    {
      return showWinner();
    }
  }

  function showWinner(classId) {
    $("body").off("click", "td", play);
    let time = 500;
    let mensagem;

    if (classId) {
      $(classId).removeClass('hidden');
    
      const player = (turn % 2 === 0 ? 'O' : 'X');
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
    setTimeout(() => {$('body').html(mensagem)}, time);
  }

})();