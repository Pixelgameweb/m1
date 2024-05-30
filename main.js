document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("addBtn").addEventListener('click', (event) => {
        event.preventDefault();
        const name = document.getElementById("nameInput").value;
        const price = document.getElementById("priceInput").value;
        const category = document.getElementById("selectCategory").options[document.getElementById("selectCategory").selectedIndex].text;
        addExpense(name, category, price);
        document.getElementById("nameInput").value = '';
        document.getElementById("priceInput").value = '';
        // legend()
    });
});
function deleteExpense(element) {
    element.closest('.purcashes__item').remove();
}
function addExpense(name, category, price) {
    const table = document.getElementById('table');
    const td = document.createElement('tr');
    td.classList.add('purcashes__item', 'purcashes__row');
    td.innerHTML = `
      <td class="purcashes__td">${name}</td>
      <td class="purcashes__td">${category}</td>
      <td class="purcashes__td" id = "price">${price}</td>
      <td class="purcashes__td"> <i class="purcashes__item-del fa-solid fa-trash" onclick="deleteExpense(this)">❌</i> </td>`
    table.appendChild(td);
    const price_el = document.getElementById("price")
    if (category.textContent = "Продукты") {
        price_el.classList.add("product");
        const prod = document.getElementById('Legend-price-product');
        const prodPrice = document.querySelector(".product");
        prod.textContent = prodPrice.textContent
        console.log(prod.textContent);
        console.log(prodPrice.textContent);
        price_el.classList.remove("product")
    } if (category.textContent = "Фастфуд") {
        price_el.classList.add("fastfood");
        const fast = document.getElementById('Legend-price-fastfood');
        const fastPrice = document.querySelector(".fastfood");
        fast.textContent = fastPrice.textContent;
        console.log(fast.textContent);
        console.log(fastPrice.textContent);
        price_el.classList.remove("fastfood");
    } if (category.textContent = "Спорт") {
        price_el.classList.add("sport");
        const sport = document.getElementById('Legend-price-sport');
        const sportPrice = document.querySelector(".sport");
        sport.textContent = sportPrice.textContent;
        console.log(sport.textContent);
        console.log(sportPrice.textContent);
        price_el.classList.remove("sport");
    } if (category.textContent = "Напитки") {
        price_el.classList.add("drinks");
        const drink = document.getElementById('Legend-price-drinks');
        const drinkPrice = document.querySelector(".drinks");
        drink.textContent = drinkPrice.textContent;
        console.log(drink.textContent);
        console.log(drinkPrice.textContent);
        price_el.classList.remove("drinks");
    } if (category.textContent = "Бытовые") {
        price_el.classList.add("hhold");
        const HHold = document.getElementById('Legend-price-Household');
        const HHoldPrice = document.querySelector(".hhold");
        HHold.textContent = HHoldPrice.textContent;
        console.log(HHold.textContent);
        console.log(HHoldPrice.textContent);
        price_el.classList.remove("hhold");
    } if (category.textContent = "Электроннки") {
        price_el.classList.add("elec");
        const elec = document.getElementById('Legend-price-Electronic');
        const elecPrice = document.querySelector(".elec");
        elec.textContent = elecPrice.textContent;
        console.log(elec.textContent);
        console.log(elecPrice.textContent);
        price_el.classList.remove("elec");
    } if (category.textContent = "Автомобили") {
        price_el.classList.add("Auto");
        const auto = document.getElementById('Legend-price-Auto');
        const autoPrice = document.querySelector(".auto");
        auto.textContent = autoPrice.textContent;
        console.log(auto.textContent);
        console.log(autoPrice.textContent);
        price_el.classList.remove("Auto");
    } if (category.textContent = "Растения") {
        price_el.classList.add("plnts")
        const plnts = document.getElementById('Legend-price-Plants');
        const plntsPrice = document.querySelector(".plnts");
        plnts.textContent = plntsPrice.textContent;
        console.log(plnts.textContent);
        console.log(plntsPrice.textContent);
        price_el.classList.remove("plnts")
    } if (category.textContent = "Удобрения") {
        price_el.classList.add("fert")
        const fert = document.getElementById('Legend-price-Fertilizers');
        const fertPrice = document.querySelector(".fert");
        fert.textContent = fertPrice.textContent;
        console.log(fert.textContent);
        console.log(fertPrice.textContent);
        price_el.classList.remove("fert")
    } else {
        console.log("Не работает, пиши снова дурачок")
    }

}

// function legend() {

//     const fast = document.getElementById('Legend-price-fastfood');
//     const sport = document.getElementById('Legend-price-sport');
//     const drink = document.getElementById('Legend-price-drinks');
//     const HHold = document.getElementById('Legend-price-Household');
//     const elec = document.getElementById('Legend-price-Electronic');
//     const auto = document.getElementById('Legend-price-Auto');
//     const plnts = document.getElementById('Legend-price-Plants');
//     const fert = document.getElementById('Legend-price-Fertilizers');


// }

