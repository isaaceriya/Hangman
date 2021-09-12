export function showNotification(setter) {
  setter(true);
  setTimeout(() => {
    setter(false);
  }, 2000);
}

export function timerValue(){
  return 1;
}

export function checkWin(correct, wrong, word) {
  let status = 'win';


  // Check for the win
  word.split('').forEach(letter => {
    if(!correct.includes(letter)){
      status = '';
    }
  });
  // Check for a loss

  if(wrong.length === 7) status = 'lose';

  return status
}

