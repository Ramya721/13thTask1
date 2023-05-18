document.getElementById('myForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var address = document.getElementById('address').value;
    var pincode = document.getElementById('pincode').value;
    var gender = document.getElementById('gender').value;
    var food = [];
    var foodCheckboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    for (var i = 0; i < foodCheckboxes.length; i++) {
      food.push(foodCheckboxes[i].value);
    }
    var state = document.getElementById('state').value;
    var country = document.getElementById('country').value;
    
    // Create new row in the table
    var table = document.getElementById('dataTable').getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.rows.length);
    
    // Insert cells in the new row
    var cells = [];
    for (var i = 0; i < 8; i++) {
      cells.push(newRow.insertCell(i));
    }
    
    // Set cell values
    cells[0].innerHTML = firstName;
    cells[1].innerHTML = lastName;
    cells[2].innerHTML = address;
    cells[3].innerHTML = pincode;
    cells[4].innerHTML = gender;
    cells[5].innerHTML = food.join(', ');
    cells[6].innerHTML = state;
    cells[7].innerHTML = country;
    
    // Clear form fields
    document.getElementById('myForm').reset();
  });
  