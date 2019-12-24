(function () {
    checkLoginStatus();

    function checkLoginStatus() {
        var elementID = 'navbar-right';
    var notSignedInHTML =
        `<li class="download-nav-item">
    <div style="margin-top: 8px">
      <div data-react-class="AuthLauncher"
        data-react-props="{&quot;type&quot;:&quot;signup&quot;,&quot;force&quot;:false}">
        <div data-reactid=".0">
          <a href="https://dockwa.com/#" type="button" data-reactid=".0.0">Sign Up</a>
        </div>
      </div>
    </div>
  </li>
  <li class="nav-item">
    <div style="margin-top: 13px">
      <div data-react-class="AuthLauncher" data-react-props="{&quot;type&quot;:&quot;login&quot;}">
        <div data-reactid=".1"><a href="https://dockwa.com/#" type="button" data-reactid=".1.0">Log In</a>
        </div>
      </div>
    </div>
  </li>`;
    var signedInHTML =
        `<li class="dropdown"><a aria-expanded="false" class="dropdown-toggle" data-toggle="dropdown" href="#"
        role="button">Account&nbsp;<span class="caret"></span></a>
      <ul class="dropdown-menu" role="menu">
        <li><a href="#">Account</a></li>
        <li class="divider" role="separator"></li>
        <li><a href="#">Change Password</a></li>
        <li class="divider" role="separator"></li>
        <li><a href="#" id="logout-button">Logout</a></li>
      </ul>
    </li>`;

    var rightBarHolder = document.getElementById(elementID);
    if (localStorage.getItem('currentEmail')) {
        rightBarHolder.innerHTML = signedInHTML;
        setListenerToLogoutButton();
    }
    else {
        rightBarHolder.innerHTML = notSignedInHTML;
    }
    }

    function setListenerToLogoutButton() {
        var elementID = 'logout-button'
        var logoutButton = document.getElementById(elementID);
        logoutButton.addEventListener('click', logout);
    }

    function logout() {
        localStorage.removeItem('currentEmail');
        location.reload();
    }
})();