function getCookie(name) {
      var nameEQ = name + "=";
      var ca = document.cookie.split(';');
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i].trim();
        if (c.indexOf(nameEQ) === 0) return decodeURIComponent(c.substring(nameEQ.length));
      }
      return null;
    }

    function fetchUserDetails() {
      const params = new URLSearchParams(window.location.search);
      const id = params.get('id');
      if (id) {
        const user = getCookie(`user_${id}`);
        if (user) {
          const userData = JSON.parse(user);
          const detailsDiv = document.getElementById('userDetails');
          detailsDiv.innerHTML = `
            <img id="img-uer" src="https://i.pravatar.cc/100?u=${userData.id}" alt="User Image">
            <p><strong>ID:</strong> ${userData.id}</p>
            <p><strong>Email:</strong> ${userData.email}</p>
            <p><strong>Username:</strong> ${userData.username}</p>
            <p><strong>Phone:</strong> ${userData.phone}</p>
            <p><strong>Website:</strong> <a href="http://${userData.website}" target="_blank">${userData.website}</a></p>
          `;
        } else {
          document.getElementById('userDetails').innerHTML = '<p>User not found</p>';
        }
      } else {
        document.getElementById('userDetails').innerHTML = '<p>No ID provided</p>';
      }
    }