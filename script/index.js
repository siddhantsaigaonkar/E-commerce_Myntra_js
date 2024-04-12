let bagItem = []
onLoad()
function onLoad() {
  displayItemsOnHomePage();
  displayBagIcons();
}
function addToBag(itemid) {
  bagItem.push(itemid)
  displayBagIcons()
}

function displayBagIcons(){
  let bagItemCountElement = document.querySelector(".bag-item-count")
  if (bagItem.length > 0) {
     bagItemCountElement.style.visibility = "visible";
    bagItemCountElement.innerText = bagItem.length
  } else {
    bagItemCountElement.style.visibility ="hidden"
  }
}

function displayItemsOnHomePage(params) {
   let itemContainerElements = document.querySelector(".items-container");
   let innerHtml = "";
   items.forEach((item) => {
     innerHtml += `
   <div class="item-container">
      <img class="item-image" src="${item.image}" alt="item image">
      <div class="rating">
          ${item.rating.stars} ⭐ | ${item.rating.count}
      </div>
      <div class="company-name">${item.company}</div>
      <div class="item-name">${item.item_name}</div>
      <div class="price">
          <span class="current-price">Rs ${item.current_price}</span>
          <span class="original-price">Rs ${item.original_price}</span>
          <span class="discount">(${item.discount_percentage}% OFF)</span>
      </div>
      <button class="btn-add-bag" onclick="addToBag(${item.id})">Add to Bag</button>
    </div>
  `;
   });
   itemContainerElements.innerHTML = innerHtml;
}
