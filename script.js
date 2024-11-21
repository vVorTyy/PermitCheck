const employees = [
  {
    id: 1,
    name: "Ahmed Mohammed Youssef Ali",
    residencyNumber: "123451111",
    nationality: "Saudi",
    duration: "01/01/2020 to 01/01/2025",
    time: "6:00am - 6:00pm",
    company: "Safari",
    location: "Cycle Bridge Main Access"
  },
  {
    id: 2,
    name: "Fahd Ahmed Mohammed Youssef",
    residencyNumber: "987651111",
    nationality: "Yemeni",
    duration: "01/03/2019 to 11/17/2024",
    time: "6:00am - 6:00pm",
    company: "Almabani",
    location: "District Operation Center"
  },
  {
    id: 3,
    name: "Sarah Youssef",
    residencyNumber: "112233445",
    nationality: "Indian",
    duration: "15/05/2021 to 15/05/2026",
    time: "6:00am - 6:00pm",
    company: "Sahara",
    location: "Cycle Bridge Link Access"
  },
  {
    id: 4,
    name: "Ahmed Saleh",
    residencyNumber: "998877665",
    nationality: "Pakistani",
    duration: "20/07/2022 to 20/07/2027",
    time: "6:00am - 6:00pm",
    company: "Freyssinet",
    location: "Cycle Bridge Vehicle Access"
  },
  {
    id: 5,
    name: "Mariam Ali",
    residencyNumber: "223344556",
    nationality: "Bangladeshi",
    duration: "01/01/2020 to 01/01/2025",
    time: "6:00am - 6:00pm",
    company: "Safari",
    location: "Cycle Bridge Link Service Access"
  },
  {
    id: 6,
    name: "Mohammad Abdullah",
    residencyNumber: "667788990",
    nationality: "Egyptian",
    duration: "10/06/2020 to 10/06/2025",
    time: "6:00am - 6:00pm",
    company: "Almabani",
    location: "District Operation Center"
  },
  {
    id: 7,
    name: "Noorhan Mustafa",
    residencyNumber: "445566778",
    nationality: "Lebanese",
    duration: "01/01/2023 to 01/01/2028",
    time: "6:00am - 6:00pm",
    company: "Sahara",
    location: "Cycle Bridge Main Access"
  },
  {
    id: 8,
    name: "Khaled Fahd",
    residencyNumber: "223344777",
    nationality: "Saudi",
    duration: "15/02/2021 to 15/02/2026",
    time: "6:00am - 6:00pm",
    company: "Freyssinet",
    location: "Cycle Bridge Vehicle Access"
  },
  {
    id: 9,
    name: "Rashed Saleh",
    residencyNumber: "334455667",
    nationality: "Yemeni",
    duration: "01/06/2020 to 01/06/2025",
    time: "6:00am - 6:00pm",
    company: "Safari",
    location: "Cycle Bridge Main Service Access"
  },
  {
    id: 10,
    name: "Aisha Said",
    residencyNumber: "556677889",
    nationality: "Indian",
    duration: "01/07/2021 to 01/07/2026",
    time: "6:00am - 6:00pm",
    company: "Almabani",
    location: "District Operation Center"
  }
];

function findEmployeeByResidencyNumber() {
  const residencyNumber = document.getElementById("residencyNumberInput").value;
  const resultContainer = document.getElementById("result");

  // Check if the residency number is valid (at least 4 digits or the full number)
  if (residencyNumber.length < 4 || isNaN(residencyNumber)) {
    resultContainer.style.display = 'block';
    resultContainer.innerHTML = '<strong style="color: red;">Please enter the full residency number or the last four digits only.</strong>';
    return;
  }

  // Get today's date
  const today = new Date();

  // Filter the data based on the user input
  const result = employees.filter(employee => {
    // Check if the input matches the full residency number or the last 4 digits
    return employee.residencyNumber === residencyNumber || employee.residencyNumber.slice(-4) === residencyNumber;
  });

  // Check if any results match
  if (result.length > 0) {
    resultContainer.style.display = 'block';
    
    // Iterate over the results and check the expiration date
    let resultsHTML = '<h3></h3><ul class="resultss">';
    result.forEach(emp => {
      // Parse the end date of the employee's residency period
      const endDate = new Date(emp.duration.split('to')[1].trim());
      
      // Check if the end date is before today
      const isExpired = endDate < today;
      
      // Add the employee data to the result
      resultsHTML += `
        <li class="${isExpired?'expired' : ''}">
          <div class="cart-header">
            <p> <strong>Entry Permit Number (${emp.id})</strong></p>
            <img src="./images/Logo sport bu no wordrs.png" alt="">
            <p><strong>Sport Boulevard</strong></p>
          </div>
          <div class="cart-content">
            <strong>${emp.name}</strong><br>
            Residency Number: ${emp.residencyNumber}<br>
            Nationality: ${emp.nationality}<br>
            Date: ${emp.duration}<br>
            Time: ${emp.time}<br>
            Company: ${emp.company}<br>
            Location: ${emp.location}<br>
            ${isExpired ? '<strong style="color: red;">Residency permit has expired!</strong>' : ''}
          </div>
        </li>
      `;
    });
    resultsHTML += '</ul>';

    resultContainer.innerHTML = resultsHTML;
  } else {
    resultContainer.style.display = 'block';
    resultContainer.innerHTML = '<strong style="color: red;">No employee found matching the given residency number.</strong>';
  }
}

