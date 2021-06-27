

var animacionNum = document.querySelector('.numero');

document.querySelector('input').addEventListener('click', function () {
  anime({
    targets: animacionNum,
    innerHTML: [0, 200],
    easing: 'linear',
    round: 1,
    duration: 900,
    update: function(){
      let numerito = (Math.floor(Math.random() * 120)) + 1;
      animacionNum.innerHTML = numerito;
      console.log(numerito)
    }
     

  });
});


function getNumeroWinner(animacionNum) {

}