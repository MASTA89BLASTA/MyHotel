import React from 'react';

export default function Header(): JSX.Element {
  return (
    <nav>
      <div className="menu_standard-navbar">
        <div className="menu_standard-navbar_section-left menu_standard-landing_page-navbar_section-left">
          <div className="menu_standard-navbar_menu">
            <a className="menu_standard-navbar_a" href="landing_page.html">
              <img src="../../img/svg/Logo_Toxin.svg" alt="Logo" />
            </a>
            <ul className="menu_standard-navbar_menu-list menu_standard-landing_page-navbar_menu-list">
              <li className="menu_standard-navbar_item menu_standard-landing_page-navbar_item standard-item_elem1 landing_page-standard-item_elem1">
                О нас
                <span className="menu_standard-navbar_item-img menu_standard-landing_page-navbar_item-img">
                  <img src="../../img/svg/expand_more.svg" alt="Expand" />
                </span>
              </li>
              <li className="menu_standard-navbar_item menu_standard-landing_page-navbar_item landing_page-standard-item_elem2">
                Услуги
                <span className="menu_standard-navbar_item-img menu_standard-landing_page-navbar_item-img">
                  <img src="../../img/svg/expand_more.svg" alt="Expand" />
                </span>
              </li>
              <li className="menu_standard-navbar_item menu_standard-landing_page-navbar_item standard-item_elem3">
                Вакансии
                <span className="menu_standard-navbar_item-img menu_standard-landing_page-navbar_item-img">
                  <img src="../../img/svg/expand_more.svg" alt="Expand" />
                </span>
              </li>
              <li className="menu_standard-navbar_item menu_standard-landing_page-navbar_item">
                Новости
                <span className="menu_standard-navbar_item-img menu_standard-landing_page-navbar_item-img">
                  <img src="../../img/svg/expand_more.svg" alt="Expand" />
                </span>
              </li>
              <li className="menu_standard-navbar_item menu_standard-landing_page-navbar_item">
                Соглашения
                <span className="menu_standard-navbar_item-img menu_standard-landing_page-navbar_item-img">
                  <img src="../../img/svg/expand_more.svg" alt="Expand" />
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="menu_standard-navbar_section-right menu_standard-landing_page-navbar_section-right">
          <div className="menu_standard-navbar_buttons menu_standard-landing_page-navbar_buttons">
            <div className="standard-navbar_buttons-wrapper standard-landing_page-navbar_buttons-wrapper">
              <button id="login" className="navbar_btn-login navbar_landing-page_btn-login">
                <a href="sign_in.html" className="navbar_btn-login_text">
                  Войти
                </a>
              </button>
              <button id="register" className="navbar_btn-register">
                <a
                  href="registration.html"
                  className="navbar_btn-register_text navbar_landing-page_btn-register_text"
                >
                  Зарегистрироваться
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
