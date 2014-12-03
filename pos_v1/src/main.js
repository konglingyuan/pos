function printInventory(inputs) {
  var cartItems = getCartItems(inputs);   //得到所有购买的商品函数\
  var inventoryText = getInventoryText(cartItems);   //输出订单信息函数
  console.log(inventoryText);
};

//得到所购买所有商品的函数
function getCartItems(inputs) {
  var cartItems = [];
  var items = loadAllItems();   //得到所有商品信息\
  var counts = 1;
  var item
  for(var i = 0; i < inputs.length; i++) {
    var inputsArray = inputs[i].split("-");   //以-拆分 统计数量
    var barcode = inputsArray[0];
    if(inputsArray[1]) {
      counts = parseFloat(inputsArray[1]);
    }
    var cartItem = findCartItem(cartItems, barcode);
    if(cartItem) {
      cartItem.counts += counts;
    } else {
      item = findItem(items, barcode);
      cartItems.push({item:item, counts:counts});
    }
  }
  //console.log(cartItems);
  //console.log("\n")
  for(var k in cartItems) {
    //console.log(k);
    //console.log(cartItems[k].item.name);
    //console.log(cartItems[k].counts);
  }
  return cartItems;
};

function findItem(items, barcode) {
  var item;
  for(var i = 0; i < items.length; i++) {
    if(items[i].barcode === barcode) {
      item = items[i];
      break;
    }
  }
  return item;
};

function findCartItem(cartItems, barcode) {
  var cartItem;
  for(var i = 0; i < cartItems.length; i++) {
    if(cartItems[i].item.barcode === barcode) {
      cartItem = cartItems[i];
      break;
    }
  }
  return cartItem;
};

function getInventoryText(cartItems) {
  var inventoryText = "";
  var cartItemsText = getCartItemsText(cartItems);
  var promotionText = getPromotionText(cartItems);
  var summanyText = getSummanyText();
  inventoryText += '***<没钱赚商店>购物清单***\n' +
                    cartItemsText +
                    '----------------------\n' +
                    '挥泪赠送商品：\n' +
                    promotionText +
                    '----------------------\n' +
                    summanyText +
                    '**********************';
  return inventoryText;
};

function getCartItemsText(cartItems) {
  var cartItemsText = "";
  for(var i = 0; i < cartItems.length; i++) {
      cartItemsText += "---" + cartItems[i].item.name + "---" + cartItems[i].counts;
      continue;
  }

  return cartItemsText;
};

function getPromotionText(cartItems) {
  var promotionText;
  for(var i = 0; i < cartItems.length; i++) {
  //  promotionText = '名称：'+ cartItems[i].item.name +'，数量：1' + cartItems[i].item.unit +'\n';
  }
  return promotionText;
};

function getSummanyText() {

};
