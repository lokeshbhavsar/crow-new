import Link from 'next/link';
import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { useWeb3Modal } from '@web3modal/wagmi/react';

function HeaderTwo() {
  const [menu, setMenu] = useState(false);
  const [show, setShow] = useState(false);
  const router = useRouter();
  const [scrollTop, setScrollTop] = useState(0);
  const { open } = useWeb3Modal();

  //........... animation.....
  // =================== Change image path start ================== //
  const changeImage = useCallback((themeMode = 'dark') => {
    const icon = document.querySelector('#btnSwitch img');

    if (themeMode === 'dark') {
      icon.src = 'images/icon/sun.svg';
      var images = document.querySelectorAll('img.dark');

      for (var i = 0; i < images.length; i++) {
        var oldSrc = images[i].src;
        oldSrc = oldSrc.replace('-dark.', '.');
        var oldIndex = oldSrc.lastIndexOf('.');
        var baseName = oldSrc.slice(0, oldIndex);
        var extension = oldSrc.slice(oldIndex);
        var newSrc = baseName + '-dark' + extension;
        images[i].src = newSrc;
      }
    } else {
      icon.src = 'images/icon/moon.svg';
      var images = document.querySelectorAll('img.dark');

      for (var i = 0; i < images.length; i++) {
        var oldSrc = images[i].src;
        var newSrc = oldSrc.replace('-dark.', '.');
        images[i].src = newSrc;
      }
    }
  }, []);

  // =================== Change image path end ================== //

  const updateThemeColor = useCallback(
    (themeMode = 'dark') => {
      const colorSwitcher = document.getElementById('btnSwitch');

      document.documentElement.setAttribute('data-bs-theme', themeMode);
      localStorage.setItem('theme', themeMode);

      if (themeMode === 'dark') {
        colorSwitcher.classList.add('dark-switcher');
      } else {
        colorSwitcher.classList.remove('dark-switcher');
      }

      changeImage(themeMode);
    },
    [changeImage],
  );

  const toggleTheme = () => {
    const theme = localStorage.getItem('theme');

    if (theme && theme === 'dark') {
      updateThemeColor('dark');
    } else {
      updateThemeColor('dark');
    }
  };
  // =================== light and dark start ================== //

  function switchThemeByUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    const theme = urlParams.get('theme');

    if (theme) {
      localStorage.setItem('theme', 'dark');
    }
  }

  // =================== light and dark end ================== //

  useEffect(() => {
    switchThemeByUrl();
    const theme = localStorage.getItem('theme');
    updateThemeColor(localStorage.getItem('theme'));
  }, [router.query.theme, updateThemeColor]);

  // ........header Sticky..................
  useEffect(() => {
    window.addEventListener('scroll', isSticky);
    router.events.on('routeChangeStart', removeActive);

    return () => {
      window.removeEventListener('scroll', isSticky);
      router.events.off('routeChangeStart', removeActive);
    };
  });
  useEffect(() => {
    setScrollTop(window.scrollY);
  }, [scrollTop]);

  let prevScrollpos = window.pageYOffset;

  window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;

    if (prevScrollpos > currentScrollPos) {
      document.getElementById('navbar').style.top = '0';
    } else {
      document.getElementById('navbar').style.top = '-300px';
    }
    prevScrollpos = currentScrollPos;
  };

  const isSticky = (e) => {
    const header = document.querySelector('.header-section');

    if (header) {
      const scrollTop = window.scrollY;
      scrollTop >= 250
        ? header.classList.add('header-fixed', 'fadeInUp')
        : header.classList.remove('header-fixed', 'fadeInUp');
    }
  };

  function closeAllMenus() {
    let elements = document.querySelectorAll('.menu-item-has-children.open');
    elements.forEach((item) => {
      item.classList.remove('open');
      item.querySelector('.submenu').style.display = 'none';
    });
  }

  // ...........main menu...............
  const toggleMenu = () => {
    setMenu(!menu);
    closeAllMenus();
  };

  //............submenu...............
  function removeActive() {}

  function toggleActive(event) {
    event.preventDefault();
    const mediaQuery = window.matchMedia('(max-width: 991px)');

    if (mediaQuery.matches) {
      // submenu open
      event.currentTarget.parentElement.classList.toggle('open');
      const submenu = event.currentTarget.nextElementSibling;
      if (!submenu.style.display || submenu.style.display === 'none') {
        submenu.style.display = 'block';
      } else {
        submenu.style.display = 'none';
      }
    }
  }

  // ..............modal....................
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const substr = (str, n) => {
    return str.length > n ? str.substr(0, n - 1) : str;
  };

  return (
    <>
      {/*   */}

      <div
        className="lightdark-switch"
        onClick={toggleTheme}
        style={{ display: 'none' }}
      >
        <span className="switch-btn" id="btnSwitch">
          <Image
            src="images/icon/moon.svg"
            alt="light-dark-switchbtn"
            className="swtich-icon"
            width={20}
            height={20}
          />
        </span>
      </div>

      <header
        className="header-section header-section--style3"
        id="navbar"
        onScroll={isSticky}
      >
        <div className="container p- text-center warning-wrapper text-black">
          <span>
            <img
              src="images/banner/home1/alert-img.png"
              alt="alert-img"
              className="alert-img"
            />
          </span>
          <span className="logo mx-auto warning-bg ">
            <b className="text-white">PHISHING WARNING:</b> Please make sure
            you&apos;re visiting
            <b className="text-white"> https://crowboys.finance</b> - check the
            URL carefully.
          </span>
        </div>

        <div className="header-bottom">
          <div className="container-fluid">
            <div className="header-wrapper">
              <div className="logo d-flex justify-left">
                <Link href="/" className="px-3">
                  {/* <img src="/images/logo/logo.jpg" alt="logo" width={150} h /> */}
                </Link>

                {/* <Link href="/">
                  <img
                    src="/images/logo/logo-text.png"
                    className="d-none d-md-block"
                    alt="logo"
                  />
                </Link> */}

                <div className="menu-area px-3">
                  <ul
                    id="menu"
                    className={`menu menu--style2 ${menu ? 'active' : ''}`}
                  >
                    <li className="megamenu menu-item">
                      <Link href="/trade">Trade</Link>
                    </li>

                    <li className="menu-item-has-children">
                      <Link href="/services" onClick={toggleActive}>
                        Services
                      </Link>
                      <ul className="submenu">
                        <li>
                          <Link href="/services">Services</Link>
                        </li>
                        <li>
                          <Link href="/service-details">Services Details</Link>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <Link scroll={false} href="/#0" onClick={toggleActive}>
                        About
                      </Link>
                      <ul className="submenu">
                        <li>
                          <Link href="/about">About Us</Link>
                        </li>
                        <li>
                          <Link href="/price">Price</Link>
                        </li>
                        <li>
                          <Link href="/team">Team</Link>
                        </li>
                        <li>
                          <Link href="/team-2">Team 2</Link>
                        </li>
                        <li>
                          <Link href="/team-details">Team Details</Link>
                        </li>
                      </ul>
                    </li>

                    <li className="menu-item-has-children">
                      <Link scroll={false} href="/#0" onClick={toggleActive}>
                        Pages
                      </Link>
                      <ul className="submenu">
                        <li>
                          <Link href="blogs">Blogs</Link>
                        </li>
                        <li>
                          <Link href="blog-sidebar">Blog - Side Bar</Link>
                        </li>
                        <li>
                          <Link href="blog-details">Blog Details</Link>
                        </li>
                        <li>
                          <Link href="signup">Sign Up</Link>
                        </li>
                        <li>
                          <Link href="signup-2">Sign Up 2</Link>
                        </li>
                        <li>
                          <Link href="signin">Sign In</Link>
                        </li>
                        <li>
                          <Link href="signin-2">Sign In 2</Link>
                        </li>
                        <li>
                          <Link href="forgot-pass">Reset Password</Link>
                        </li>
                        <li>
                          <Link href="forgot-pass-2">Reset Password 2</Link>
                        </li>
                        <li>
                          <Link href="404">404 Error</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link href="contact">Contact Us</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="header-content d-flex align-items-center">
                <div className="header-action">
                  <div className="menu-area">
                    <div className="header-btn">
                      <button
                        onClick={() => open()}
                        className="trk-btn trk-btn--outline22 text-white"
                      >
                        Connect <i className="fa-solid fa-wallet"></i>
                      </button>
                    </div>

                    {/* <!-- toggle icons --> */}
                    <div
                      className={
                        menu
                          ? 'header-bar d-lg-none header-bar--style2 active'
                          : 'header-bar d-lg-none header-bar--style2'
                      }
                      onClick={() => toggleMenu()}
                    >
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default HeaderTwo;
