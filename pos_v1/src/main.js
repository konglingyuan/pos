function printInventory(tags){
  var cartItems = getCartItems(tags);
  var inventoryText = getInventoryText(cartItems);
  console.log(inventoryText);
}

function getCartItems(tags){
  var cartItems = [];

  _.forEach(tags, function(tag){
    var tagsArray = tag.split('-');
    var barcode = tagsArray[0];
    var count = 1;

    if(tagsArray[1]){
      count = parseFloat(tagsArray[1]);
    }
    var cartItem = findCartItems(barcode,cartItems);

    if(cartItem){
      cartItem.count += count;
    }else{
      var item = findItems(barcode,loadAllItems());
      cartItems.push({ item: item , count: count });
    }

  });
  return cartItems;
}

function findItems(barcode,loadAllItems){
  var cartItem;

  _.forEach(loadAllItems, function(loadAllItem) {
    if(barcode === loadAllItem.barcode){
      cartItem = loadAllItem;
    }
  });
  return cartItem;
}

function findCartItems(barcode,cartItems){
  var item;
  _.forEach(cartItems, function(cartItem){
    if(cartItem.item.barcode === barcode){
      item = cartItem;
    }
  });
  return item;
}

function getInventoryText(cartItems){
  var inventoryText = getCartItemsText(cartItems);
  return inventoryText;
}

function promotionsCart(goldCart,cartItems){
  var cartItem = cartItems.item;

  var promotion = getPromotions();
  var promotionBarcode = promotion.barcodes;

  for(var j = 0; j < promotionBarcode.length; j++){
    if (promotionBarcode[j] === cartItem.barcode && promotion.type === 'BUY_TWO_GET_ONE_FREE'){
      goldCart.push({name : cartItem.name,
        number : parseInt(cartItems.count/3),
        unit : cartItem.unit});
        return parseInt(cartItems.count/3);
      }
    }
  }


  function getPromotions() {
    var promotions = loadPromotions();
    var promotion;
    for(var i = 0; i < promotions.length; i++) {
      promotion = promotions[i];
    }
    return promotion;
  }

  function getCartItemsText(cartItems) {
    var subtatol = 0;
    var promotionPrice = 0;
    var goldCart = [];
    cartItemText = '***<没钱赚商店>购物清单***\n';

    _.forEach(cartItems, function(cartItem){
      var cartCount = cartItem.count;
      var cartPrice = cartItem.item.price;
      var cartUnit = cartItem.item.unit;
      var promotinsCount = promotionsCart(goldCart,cartItem);

      if (promotinsCount > 0) {
        cartItemText += '名称：' + cartItem.item.name +
        '，数量：' + cartCount + cartUnit +
        '，单价：' + cartPrice.toFixed(2) +
        '(元)，小计：'+ ((cartCount - promotinsCount) * cartPrice).toFixed(2) +
        '(元)\n';

        subtatol += ((cartCount - promotinsCount) * cartPrice);
        promotionPrice += promotinsCount * (cartPrice);
      } else {
        cartItemText += '名称：' + cartItem.item.name +
        '，数量：' + cartCount + cartUnit +
        '，单价：' + cartPrice.toFixed(2) +
        '(元)，小计：'+ (cartCount * cartPrice).toFixed(2) +
        '(元)\n';

        subtatol += cartCount * cartPrice;
      }
    });

    cartItemText += '----------------------\n' +
    '挥泪赠送商品：\n';

    _.forEach(goldCart, function(goldCarts) {
      cartItemText += '名称：'+goldCarts.name +
      '，数量：'+goldCarts.number+ goldCarts.unit +
      '\n';
    });

    cartItemText += '----------------------\n' +
    '总计：' + subtatol.toFixed(2) +
    '(元)\n' +
    '节省：' + promotionPrice.toFixed(2) +
    '(元)\n' +
    '**********************';

    return cartItemText;
  }
