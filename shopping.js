let items = [];

function addItem() {
    let input = document.getElementById('AddItem').value.trim();
    if (input === '') return;

    items.push({ name: input, purchased: false });
    document.getElementById('AddItem').value = "";
    displayItems();
}

function displayItems() {
    const list = document.getElementById("itemlist");
    list.innerHTML = "";

    items.forEach((item, index) => {
        let li = document.createElement("li");
        li.textContent = item.name;

        if (item.purchased) {
            li.classList.add("purchased");
        }

        li.addEventListener('click', () => {
            items[index].purchased = !items[index].purchased;
            displayItems();
        });

        list.appendChild(li);
    });
}

function markAllPurchased() {
    items.forEach(item => item.purchased = true);
    displayItems();
}

function clearList() {
    items = [];
    displayItems();
}


// let items = [];
// function addItem(){
//     let input = document.getElementById('AddItem').value;
//     items.push(input);
//     displayItems();
//     document.getElementById('AddItem').value = ""
    
//     // let list = document.getElementById('itemlist')
// }
// function displayItems(){
//     document.getElementById("itemlist").textContent = items.join(",");
// }
// console.log(items)
// let add = document.getElementById('add')
// add.addEventListener('click', function(e){
//     let additem = prompt("Add an item here")
//     console.log(additem)
// }) 

