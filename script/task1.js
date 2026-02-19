let shopitems = [
    { id: 1, name: "ვაშლი", price: 2, category: "ხილი" },
    { id: 2, name: "პური", price: 1.5, category: "ცომეული" },
    { id: 3, name: "კოლა", price: 4, category: "სასმელი" },
];


let totalPriceWithLoop = 0;

for (let item of shopitems) {
    totalPriceWithLoop += item.price;
}

console.log("Total with loop:", totalPriceWithLoop);

const totalPriceWithReduce = shopitems.reduce(
    (acc, item) => acc + item.price,
    0
);

console.log("Total with reduce:", totalPriceWithReduce);



const ul = document.getElementById("item-list");

const appendnewitem = (itemName) => {
    const li = document.createElement("div");
    li.textContent = itemName;
    ul.appendChild(div);
};

const renderItems = (array = shopitems) => {
    ul.innerHTML = "";
    for (let item of array) {
        appendnewitem(item.name);
    }
};

renderItems();

const addNewItem = () => {
    const box = document.createElement("div")

    const tag = document.createElement("p")
    tag.className = ("tag3")
    tag.textContent = item.category;

    const innerDiv = document.createElement('div')

    const tittle = document.createElement("h2")
    tittle.textContent = (item.name)

    const price = document.createElement("h3")
    price.textContent = ("$" + item.price)
}


// const addnewitem = () => {
//     const input = document.getElementById("inp1");
//     const newitem = input.value.trim();

//     if (newitem === "") {
//         alert("ინფუთი ცარიელია");
//         return;
//     }

//     const newObject = {
//         id: shopitems.length + 1,
//         name: newitem,
//         price: 0,
//         category: "უცნობი"
//     };

//     shopitems.push(newObject);
//     renderItems();

//     input.value = "";
// };



const deleteLastItem = () => {
    shopitems.pop();
    renderItems();
};



const addNewItemAtStart = () => {
    const input = document.getElementById("inp1");
    const newitem = input.value.trim();

    if (newitem === "") {
        alert("ინფუთი ცარიელია");
        return;
    }

    const newObject = {
        id: shopitems.length + 1,
        name: newitem,
        price: 0,
        category: "უცნობი"
    };

    shopitems.unshift(newObject);
    renderItems();

    input.value = "";
};



const deleteFirstItem = () => {
    shopitems.shift();
    renderItems();
};



const serchitem = () => {
    const serchInput = document.getElementById("serch-input");
    const serchValue = serchInput.value.toLowerCase();

    const filteredItem = shopitems.filter((item) =>
        item.name.toLowerCase().includes(serchValue)
    );

    renderItems(filteredItem);
};
