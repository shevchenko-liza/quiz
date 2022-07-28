const Buttons = document.querySelectorAll(".tab-item");
const Tabs = document.querySelectorAll(".tab");
const meaning = document.querySelector(".meaning");
const items = document.querySelector(".items");


Buttons.forEach(function(item) {
    item.addEventListener("click", function(event) {
        const id = event.target.dataset.tab
        const tab = document.getElementById(id);


        Buttons.forEach(function(item) {
            item.classList.remove('active');
        });
        Tabs.forEach(function(item) {
            item.classList.remove('active');

        });
        event.target.classList.add('active');
        event.target.classList.add('active');
    });

});


meaning.addEventListener("click", function(event) {
    const target = event.target.closest('.meaning')
    if (target) {
        return
    };

});


let button = document.createElement('button');
button.innerHTML = '<div> tab 4 </div>';
items.appendChild(button);