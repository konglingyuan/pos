

function printInventory(inputs) {

  var cartItems = getCartItems(inputs);   //得到所有购买的商品函数

  var inventoryText = getInventoryText(cartItems);   //输出订单函数

  console.log(inventoryText);
};

function getCartItems(inputs) {

  var cartItems = [];

  var items = loadAllItems();

  for(var i = 0; i < inputs.length; i++) {
    var inputsArray = inputs[i].split("-");
    var barcode = inputsArray[0];
    var counts = 1;
    if(inputsArray[1]) {
      counts = parseFloat(inputsArray[1]);
    }

    //var item = findItem(items, barcode);    //匹配商品

    var cartItem = findCartItem(cartItems, barcode);

    if(cartItem) {
      cartItems.counts += counts;
    } else {
      var item = findItem(items, barcode);
      cartItems.push({item:item, counts:counts});
    }
  }
  console.log(cartItems);
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
    if(cartItems[i].barcode === barcode) {
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

  var cartItemsText;
  for(var i = 0; i < cartItems.length; i++) {

    cartItemsText = '名称：'+ cartItems[i].name +'，数量：'+ cartItems[i].counts + cartItems[i].unit +'，' +
    '单价：'+ cartItems[i].price +'(元)，小计：'+ cartItems[i].price * cartItems[i].counts +'(元)\n';

  }


  //console.log(cartItemsText);
  return cartItemsText;
};

function getPromotionText(cartItems) {
  var promotionText;

  for(var i = 0; i < cartItems.length; i++) {
    promotionText = '名称：'+ cartItems[i].item.name +'，数量：1' + cartItems[i].item.unit +'\n';
  }

  return promotionText;
};

function getSummanyText() {

};
