let count = 0;

const counterContainer = document.getElementById("countContainer");

counterContainer.innerText = count;

const addButton = document.getElementById("add");
const removeButton = document.getElementById("remove");

addButton.addEventListener("click", () => {
  count++;

  rerender(count);
});

removeButton.addEventListener("click", () => {
  count--;

  rerender(count);
});


function rerender(newCount) {
    if(newCount < 0){
        alert("counter below 0")
         counterContainer.innerText = 0;

         return
    }

  counterContainer.innerText = newCount;
}
