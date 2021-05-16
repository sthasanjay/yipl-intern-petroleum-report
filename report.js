const fetchData = async () => {
  const URL =
    "https://raw.githubusercontent.com/younginnovations/internship-challenges/master/programming/petroleum-report/data.json?fbclid=IwAR0QsyTXqvK4HUM4UnCyHIHMjoxeFr9OeuJFinZweYl2HernbxHQTIla8Oc";
  try {
    const response = await fetch(URL);
    const data = await response.json();

    const petrolData = filterProduct(data, "Petrol");
    const dieselData = filterProduct(data, "Diesel");
    const keroseneData = filterProduct(data, "Kerosene");
    const fuelData = filterProduct(data, "Aviation Turbine Fuel");
    const lightData = filterProduct(data, "Light Diesel Oil");
    const furanceData = filterProduct(data, "Furnace Oil");
    const lpgData = filterProduct(data, "LPG in MT");
    const mtoData = filterProduct(data, "Mineral Turpentine Oil");

    const finalData = [
      ...petrolData,
      ...dieselData,
      ...keroseneData,
      ...fuelData,
      ...lightData,
      ...furanceData,
      ...lpgData,
      ...mtoData,
    ];

    let output = document.getElementById("allpost");
    finalData.forEach((element) => {
      output.innerHTML += `<tr >
         <td class = "one"> ${element.year}</td>
         <td class = "one"> ${element.petroleum_product}</td>
         <td class = "one"> ${element.sale}</td>
         <td class = "one"> ${element.country}</td> 
         </tr>
         `;
    });

    // Average Calculation
    const averageArr = [];

    const petrolData2008 = filterDataForAverage(petrolData, "2008");
    const petrolData2009 = filterDataForAverage(petrolData, "2009");
    const petrolData2010 = filterDataForAverage(petrolData, "2010");
    const petrolData2011 = filterDataForAverage(petrolData, "2011");

    const dieselData2007 = filterDataForAverage(dieselData, "2007");
    const dieselData2008 = filterDataForAverage(dieselData, "2008");
    const dieselData2011 = filterDataForAverage(dieselData, "2011");
    const dieselData2012 = filterDataForAverage(dieselData, "2012");
    const dieselData2013 = filterDataForAverage(dieselData, "2013");
    const dieselData2014 = filterDataForAverage(dieselData, "2014");

    const keroseneData2008 = filterDataForAverage(keroseneData, "2008");
    const keroseneData2009 = filterDataForAverage(keroseneData, "2009");

    const aft2008 = filterDataForAverage(fuelData, "2008");
    const aft2009 = filterDataForAverage(fuelData, "2009");

    const ldo2008 = filterDataForAverage(lightData, "2008");
    const ldo2009 = filterDataForAverage(lightData, "2009");

    const ldo2010 = filterDataForAverage(lightData, "2010");
    const ldo2011 = filterDataForAverage(lightData, "2011");

    const furanceData2007 = filterDataForAverage(furanceData, "2007");
    const furanceData2008 = filterDataForAverage(furanceData, "2008");

    const lpgData2008 = filterDataForAverage(lpgData, "2008");
    const lpgData2009 = filterDataForAverage(lpgData, "2009");

    const mtoData2008 = filterDataForAverage(mtoData, "2008");
    const mtoData2009 = filterDataForAverage(mtoData, "2009");

    let petrolSale2008 = 0;
    let petrolSale2009 = 0;
    let petrolSale2010 = 0;
    let petrolSale2011 = 0;

    let dieselSale2007 = 0;
    let dieselSale2008 = 0;
    let dieselSale2011 = 0;
    let dieselSale2012 = 0;
    let dieselSale2013 = 0;
    let dieselSale2014 = 0;

    let keroseneSale2008 = 0;
    let keroseneSale2009 = 0;

    let aftSale2008 = 0;
    let aftSale2009 = 0;

    let ldoSale2008 = 0;
    let ldoSale2009 = 0;
    let ldoSale2010 = 0;
    let ldoSale2011 = 0;

    let lpgSale2008 = 0;
    let lpgSale2009 = 0;

    let furanceSale2007 = 0;
    let furanceSale2008 = 0;

    let mtoSale2008 = 0;
    let mtoSale2009 = 0;

    petrolData2008.forEach((value) => {
      petrolSale2008 += value.sale;
    });

    petrolData2009.forEach((value) => {
      petrolSale2009 += value.sale;
    });

    petrolData2010.forEach((value) => {
      petrolSale2010 += value.sale;
    });
    petrolData2011.forEach((value) => {
      petrolSale2011 += value.sale;
    });

    // diesel data
    dieselData2007.forEach((val) => {
      dieselSale2007 += val.sale;
    });
    dieselData2008.forEach((val) => {
      dieselSale2008 += val.sale;
    });

    dieselData2011.forEach((val) => {
      dieselSale2011 += val.sale;
    });
    dieselData2012.forEach((val) => {
      dieselSale2012 += val.sale;
    });
    dieselData2013.forEach((val) => {
      dieselSale2013 += val.sale;
    });
    dieselData2014.forEach((val) => {
      dieselSale2014 += val.sale;
    });

    // kerosen data
    keroseneData2008.forEach((val) => {
      keroseneSale2008 += val.sale;
    });

    keroseneData2009.forEach((val) => {
      keroseneSale2009 += val.sale;
    });

    // avt
    aft2008.forEach((val) => {
      aftSale2008 += val.sale;
    });

    aft2009.forEach((val) => {
      aftSale2009 += val.sale;
    });

    ldo2008.forEach((val) => {
      ldoSale2008 += val.sale;
    });
    ldo2009.forEach((val) => {
      ldoSale2009 += val.sale;
    });

    ldo2010.forEach((val) => {
      ldoSale2010 += val.sale;
    });
    ldo2011.forEach((val) => {
      ldoSale2011 += val.sale;
    });

    furanceData2007.forEach((val) => {
      furanceSale2007 += val.sale;
    });

    furanceData2008.forEach((val) => {
      furanceSale2008 += val.sale;
    });

    lpgData2008.forEach((value) => {
      lpgSale2008 += value.sale;
    });

    lpgData2009.forEach((value) => {
      lpgSale2009 += value.sale;
    });

    mtoData2008.forEach((value) => {
      mtoSale2008 += value.sale;
    });
    mtoData2009.forEach((value) => {
      mtoSale2009 += value.sale;
    });

    const avgLpg2008_9 = calculateAverage(lpgSale2008, lpgSale2009);
    const avgFuranc2007_8 = calculateAverage(furanceSale2007, furanceSale2008);
    const avgMTO2008_9 = calculateAverage(mtoSale2008, mtoSale2009);
    const avgAft2008_9 = calculateAverage(aftSale2008, aftSale2009);
    const avgPetrolData2008_9 = calculateAverage(
      petrolSale2008,
      petrolSale2009
    );
    const avgPetrolData2010_11 = calculateAverage(
      petrolSale2010,
      petrolSale2011
    );
    const avgDieselData2007_8 = calculateAverage(
      dieselSale2007,
      dieselSale2008
    );
    const avgDieselData2011_12 = calculateAverage(
      dieselSale2011,
      dieselSale2012
    );
    const avgDieselData2013_14 = calculateAverage(
      dieselSale2013,
      dieselSale2014
    );
    const avgKersoneneData2008_9 = calculateAverage(
      keroseneSale2008,
      keroseneSale2009
    );
    const avgLdo2008_9 = calculateAverage(ldoSale2008, ldoSale2009);
    const avgLdo2010_11 = calculateAverage(ldoSale2010, ldoSale2011);

    averageArr.push(
      {
        product: "Petrol",
        year: "2008-2009",
        average: avgPetrolData2008_9,
      },
      {
        product: "Petrol",
        year: "2010-2011",
        average: avgPetrolData2010_11,
      },
      {
        product: "Diesel",
        year: "2007-2008",
        average: avgDieselData2007_8,
      },

      {
        product: "Diesel",
        year: "2011-2012",
        average: avgDieselData2011_12,
      },
      {
        product: "Diesel",
        year: "2013-2014",
        average: avgDieselData2013_14,
      },
      {
        product: "Kerosene",
        year: "2008-2009",
        average: avgKersoneneData2008_9,
      },
      {
        product: "Aviation Turbine Fuel",
        year: "2008-2009",
        average: avgAft2008_9,
      },
      {
        product: "Light Diesel Oil",
        year: "2008-2009",
        average: avgLdo2008_9,
      },
      {
        product: "Light Diesel Oil",
        year: "2010-2011",
        average: avgLdo2010_11,
      },
      {
        product: "Furnace Oil",
        year: "2007-2008",
        average: avgFuranc2007_8,
      },
      {
        product: "LPG in MT",
        year: "2008-2009",
        average: avgLpg2008_9,
      },

      {
        product: "Mineral Turpentine Oil",
        year: "2008-2009",
        average: avgMTO2008_9,
      }
    );

    let averageOutput = document.getElementById("average");
    averageArr.forEach((element) => {
      averageOutput.innerHTML += `<tr >
        <td class = "one"> ${element.product}</td>
        <td class = "one"> ${element.year}</td>
        <td class = "one"> ${element.average}</td>
       
        </tr>
        `;
    });

    // least calculation
    const leastArr = [];
    const nonZeroPetrolData = filterZeroData(petrolData);
    const leastPetrolSale = findLeastSale(nonZeroPetrolData);

    const nonZeroDieselData = filterZeroData(dieselData);
    const leastDieselSale = findLeastSale(nonZeroDieselData);

    const nonZeroKeroseneData = filterZeroData(keroseneData);
    const leastKeroseneSale = findLeastSale(nonZeroKeroseneData);

    const nonZeroFuelData = filterZeroData(fuelData);
    const leastFuelSale = findLeastSale(nonZeroFuelData);

    const nonZeroLightData = filterZeroData(lightData);
    const leastLightSale = findLeastSale(nonZeroLightData);

    const nonZeroFurnanceData = filterZeroData(furanceData);
    const leastFurnanceSale = findLeastSale(nonZeroFurnanceData);

    const nonZeroLPGData = filterZeroData(lpgData);
    const leastLPGSale = findLeastSale(nonZeroLPGData);

    const nonZeroMTOData = filterZeroData(mtoData);
    const leastMTOSale = findLeastSale(nonZeroMTOData);
    leastArr.push(
      leastPetrolSale,
      leastDieselSale,
      leastKeroseneSale,
      leastFuelSale,
      leastLightSale,
      leastFurnanceSale,
      leastLPGSale,
      leastMTOSale
    );

    let leastOutput = document.getElementById("least");
    leastArr.forEach((element) => {
      leastOutput.innerHTML += `<tr >
      <td class = "one"> ${element.petroleum_product}</td>
      <td class = "one"> ${element.year}</td>
      <td class = "one"> ${element.sale}</td>
     
      </tr>
      `;
    });
  } catch (error) {
    console.log(error);
  }
};

fetchData();

// common
const calculateAverage = (num1, num2) => {
  return Math.ceil((num1 + num2) / 2);
};

const filterProduct = (data, product) => {
  return data.filter((val) => val.petroleum_product === product);
};

const filterDataForAverage = (data, year) => {
  return data.filter((val) => val.year === year);
};

const filterZeroData = (data) => {
  return data.filter((val) => val.sale !== 0);
};

const findLeastSale = (data) => {
  return data.reduce(function (prev, curr) {
    return prev.sale < curr.sale ? prev : curr;
  });
};
