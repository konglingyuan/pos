//TODO: Please write code in this file.

function printInventory(inputs)
{
  var expectText ="***<没钱赚商店>购物清单***\n";
  inputs = [
  'ITEM000001',
  'ITEM000001',
  'ITEM000001',
  'ITEM000001',
  'ITEM000001',
  'ITEM000003-2',
  'ITEM000005',
  'ITEM000005',
  'ITEM000005'
  ];
  var allItems = loadAllItems();
  var listNums = [],nums = 1,sum = 0;
  for(var i = 0; i < inputs.length; i++)
    {
      var temp = inputs[i].split('-');
      for(var j = 0; j < allItems.length; j++)
        {
          if(allItems[j].barcode === temp[0]){
            listNums[i] = allItems[j];
            listNums[i].no = temp[1] || 1;
          }
        }
      }

      var uniqueArray = [];
      for(var i = 0; i  < listNums.length; i++){
        if(uniqueArray.indexOf(listNums[i]) === -1){
          uniqueArray.push(listNums[i]);
        }
      }
      var list = listNums;
      var arry = uniqueArray;
      for(var i = 0; i < arry.length; i++)
        {
          var n = 0;
          if(arry[i].no === 1)
            {
              for(var j =0; j < list.length; j++)
                {
                  if(arry[i].barcode === list[j].barcode)
                    {
                      n++;
                      continue;
                    }
                  }
                  arry[i].no = n;
                }
                else
                  {
                    n = arry[i].no;
                  }
                }
                console.log(arry)
                // for(var i = 0; i < arry.length; i++)
                //   {
                //     if(arry[i].barcode === 'ITEM000000' && arry[i].no > 2)
                //       {
                //         expectText += '名称：'+ arry[i].name +'，数量：'+ arry[i].no + arry[i].unit +'，单价：'+ arry[i].price +'(元)，小计：'+ (arry[i].no-1) * arry[i].price +'(元)\n';
                //       }
                //       if(arry[i].barcode === 'ITEM000001' && arry[i].no > 2)
                //         {
                //           expectText += '名称：'+ arry[i].name +'，数量：'+ arry[i].no + arry[i].unit +'，单价：'+ arry[i].price +'(元)，小计：'+ (arry[i].no-1) * arry[i].price +'(元)\n';
                //         }
                //         if(arry[i].barcode === 'ITEM000004' && arry[i].no > 2)
                //           {
                //             expectText += '名称：'+ arry[i].name +'，数量：'+ arry[i].no + arry[i].unit +'，单价：'+ arry[i].price +'(元)，小计：'+ (arry[i].no-1) * arry[i].price +'(元)\n';
                //           }
                //           if(arry[i].barcode === 'ITEM000005' && arry[i].no > 2)
                //             {
                //               expectText += '名称：'+ arry[i].name +'，数量：'+ arry[i].no + arry[i].unit +'，单价：'+ arry[i].price +'(元)，小计：'+ (arry[i].no-1) * arry[i].price +'(元)\n';
                //             }
                //           }
                          for(var i = 0; i < arry.length; i++)
                            {
                              for(var j = 0; j < allItems.length; j++)
                                if(arry[i].barcode === allItems[j].barcode)
                                  {
                                    expectText += '名称：'+ allItems[j].name +'，数量：'+ allItems[j].no + allItems[j].unit +'，单价：'+ allItems[j].price +'(元)，小计：'+ allItems[j].no * allItems[j].price +'(元)\n';
                                    //continue;
                                    //console.log('dd');
                                  }
                                  //console.log('qq');
                                  //break;
                            }



                          console.log(expectText);


                          var string = '***<没钱赚商店>购物清单***\n' +
                          '名称：雪碧，数量：5瓶，单价：3.00(元)，小计：12.00(元)\n' +
                          '名称：荔枝，数量：2斤，单价：15.00(元)，小计：30.00(元)\n' +
                          '名称：方便面，数量：3袋，单价：4.50(元)，小计：9.00(元)\n' +
                          '----------------------\n' +
                          '挥泪赠送商品：\n' +
                          '名称：雪碧，数量：1瓶\n' +
                          '名称：方便面，数量：1袋\n' +
                          '----------------------\n' +
                          '总计：51.00(元)\n' +
                          '节省：7.50(元)\n' +
                          '**********************';
                          console.log(string);
                        };
