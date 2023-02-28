const markAll = document.getElementById('markAll');
const unRead = document.getElementsByClassName('unread');
const notifContainers = document.getElementsByClassName('notif_container');
const number = document.getElementById('number');
number.innerHTML = notifContainers.length;

markAll.addEventListener("click", function() {
  for (let i = 0; i <= unRead.length; i++){
  unRead[i].style.display = "none";
  notifContainers[i].style.backgroundColor = "white";
  number.innerHTML = 0;
  } 
});

for (let i = 0; i < notifContainers.length; i++) {
  notifContainers[i].addEventListener("click", function handler() {
    notifContainers[i].style.backgroundColor = "white";
    unRead[i].style.display = "none";
    const currentNumber = parseInt(number.innerHTML);
  if (currentNumber > 0) {
    number.innerHTML = currentNumber - 1;
  }
    notifContainers[i].removeEventListener("click", handler);
  });
}

