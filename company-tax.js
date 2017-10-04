var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

function calculateSalesTax(salesData, taxRates) {
  var results = {}
  for (var j = 0; j < salesData.length; j++){

    var companyName = salesData[j]["name"]
    var companyProvince = salesData[j]["province"]
    var companySales = salesData[j]["sales"]
    
    var totalSales = 0
    for (var i = 0; i < companySales.length; i++) {
      
      totalSales += companySales[i]
      }

    var provintionalTaxRate = taxRates[companyProvince]

    var totalTaxes = totalSales * provintionalTaxRate

    if (results[companyName] !== undefined) {
      results[companyName]["totalSales"] += totalSales;
      results[companyName]["totalTaxes"] += totalTaxes;
    } else {
      results[companyName]= {
       totalSales : totalSales,
       totalTaxes : totalTaxes
      }
    }

  }
  console.log(results)
}



var results = calculateSalesTax(companySalesData, salesTaxRates);
