function checkCashRegister(price, cash, cid) {
    const currencyUnit = [
      ["PENNY", 0.01],
      ["NICKEL", 0.05],
      ["DIME", 0.1],
      ["QUARTER", 0.25],
      ["ONE", 1],
      ["FIVE", 5],
      ["TEN", 10],
      ["TWENTY", 20],
      ["ONE HUNDRED", 100]
    ];
  
    let changeDue = cash - price;
    let totalCashInDrawer = cid.reduce((sum, [_, amount]) => sum + amount, 0).toFixed(2);
  
    if (Number(totalCashInDrawer) < changeDue) {
      return { status: "INSUFFICIENT_FUNDS", change: [] };
    }
  
    if (Number(totalCashInDrawer) === changeDue) {
      return { status: "CLOSED", change: cid };
    }
  
    let change = [];
    for (let i = currencyUnit.length - 1; i >= 0; i--) {
      let [unit, value] = currencyUnit[i];
      let amountInDrawer = cid[i][1];
      if (changeDue >= value && amountInDrawer > 0) {
        let amountToGive = 0;
        while (changeDue >= value && amountInDrawer > 0) {
          changeDue -= value;
          changeDue = changeDue.toFixed(2); // Avoid precision errors
          amountInDrawer -= value;
          amountToGive += value;
        }
        if (amountToGive > 0) {
          change.push([unit, amountToGive]);
        }
      }
    }
  
    if (changeDue > 0) {
      return { status: "INSUFFICIENT_FUNDS", change: [] };
    }
  
    return { status: "OPEN", change };
  }
  
  
  console.log(
    checkCashRegister(19.5, 20, [
      ["PENNY", 1.01],
      ["NICKEL", 2.05],
      ["DIME", 3.1],
      ["QUARTER", 4.25],
      ["ONE", 90],
      ["FIVE", 55],
      ["TEN", 20],
      ["TWENTY", 60],
      ["ONE HUNDRED", 100]
    ])
  );
  
  