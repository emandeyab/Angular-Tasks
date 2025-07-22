    function setCookie(name, value, days) {
      var expires = "";
      if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
      }
      document.cookie = name + "=" + encodeURIComponent(value) + expires + "; path=/";
    }

    function getCookie(name) {
      var nameEQ = name + "=";
      var ca = document.cookie.split(';');
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i].trim();
        if (c.indexOf(nameEQ) === 0) return decodeURIComponent(c.substring(nameEQ.length));
      }
      return null;
    }

    function fetchUsers() {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {
          const tbody = document.querySelector('#userTable tbody');
          tbody.innerHTML = '';
          users.forEach(user => {
            const row = document.createElement('tr');
            row.innerHTML = `
              <td><img src="https://i.pravatar.cc/50?u=${user.id}" alt="User Image"></td>
              <td>${user.id}</td>
              <td>${user.email}</td>
              <td>${user.username}</td>
              <td>${user.phone}</td>
              <td><a href="http://${user.website}" target="_blank">${user.website}</a></td>
              <td class="actions">
                <button onclick="deleteUser(${user.id})">Delete</button>
                <button onclick="viewUser(${user.id})">View</button>
              </td>
            `;
            tbody.appendChild(row);
            setCookie(`user_${user.id}`, JSON.stringify(user), 7); 
          });
        })
        .catch(error => console.error('Error fetching users:', error));
    }

    function searchUser() {
      const id = document.getElementById('searchInput').value;
      if (id) {
        const user = getCookie(`user_${id}`);
        if (user) {
          const tbody = document.querySelector('#userTable tbody');
          tbody.innerHTML = '';
          const userData = JSON.parse(user);
          const row = document.createElement('tr');
          row.innerHTML = `
            <td><img src="https://i.pravatar.cc/50?u=${userData.id}" alt="User Image"></td>
            <td>${userData.id}</td>
            <td>${userData.email}</td>
            <td>${userData.username}</td>
            <td>${userData.phone}</td>
            <td><a href="http://${userData.website}" target="_blank">${userData.website}</a></td>
            <td class="actions">
              <button onclick="deleteUser(${userData.id})">Delete</button>
              <button onclick="viewUser(${userData.id})">View</button>
            </td>
          `;
          tbody.appendChild(row);
        } else {
          alert('User not found');
        }
      }
    }

    function deleteUser(id) {
      if (confirm('Are you sure you want to delete this user?')) {
        document.cookie = `user_${id}=; Max-Age=0; path=/`;
        const row = document.querySelector(`#userTable tbody tr:nth-child(${id})`);
        if (row) row.remove();
        refreshTableFromCookies();
      }
    }

    function refreshTableFromCookies() {
      const tbody = document.querySelector('#userTable tbody');
      tbody.innerHTML = '';
      for (let i = 1; i <= 10; i++) { 
        const user = getCookie(`user_${i}`);
        if (user) {
          const userData = JSON.parse(user);
          const row = document.createElement('tr');
          row.innerHTML = `
            <td><img src="https://i.pravatar.cc/50?u=${userData.id}" alt="User Image"></td>
            <td>${userData.id}</td>
            <td>${userData.email}</td>
            <td>${userData.username}</td>
            <td>${userData.phone}</td>
            <td><a href="http://${userData.website}" target="_blank">${userData.website}</a></td>
            <td class="actions">
              <button onclick="deleteUser(${userData.id})">Delete</button>
              <button onclick="viewUser(${userData.id})">View</button>
            </td>
          `;
          tbody.appendChild(row);
        }
      }
    }

    function viewUser(id) {
      const user = getCookie(`user_${id}`);
      if (user) {
        window.location.href = `userdetails.html?id=${id}`;
      } else {
        alert('User not found');
      }
    }