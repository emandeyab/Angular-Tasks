var students = [];

    function Table() {
      var tableBody = document.getElementById("tableBody");
      tableBody.innerHTML = ""; 
      students.forEach(student => {
        var row = document.createElement("tr");
        row.innerHTML = `
          <td>${student.id}</td>
          <td>${student.name}</td>
          <td>${student.age}</td>
          <td><button onclick="deleteStudent('${student.id}')">Delete</button></td>
        `;
        tableBody.appendChild(row);
      });
    }

    function task2() {
      var name = document.getElementById("name").value.trim();
      var id = document.getElementById("id").value.trim();
      var age = document.getElementById("age").value.trim();
      var message = document.getElementById("message");

      if (!name || !id || !age) {
        alert("All fields are required!");
        return;
      }

    
      if (students.some(student => student.id === id)) {
        message.style.display = "block";
        message.textContent = "ID already exists!";
        return;
      }


      students.push({ id, name, age });
      message.style.display = "none";

      document.getElementById("name").value = "";
      document.getElementById("id").value = "";
      document.getElementById("age").value = "";

      Table();
    }

    function deleteStudent(id) {
      students = students.filter(student => student.id !== id);
      Table(); 
    }