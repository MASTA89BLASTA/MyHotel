import React from 'react';

export default function Footer(): JSX.Element {
  return (
    <div className="footer-block footer-bg">
      <div className="footer-block_box">
        <div className="footer-block_flex">
          <div className="footer-block_logo">
            <div className="footer-block_container-logo">
              <div className="footer_block_text">
                <img src='../../img/svg/Logo_Toxin.svg' className='menu_logo-gradient footer_logo-gradient' />

                <span className="block_text">
                  Бронирование номеров в лучшем отеле 2019 года по версии ассоциации «Отельные
                  взгляды»
                </span>
              </div>
            </div>
          </div>
          <div className="footer-menu_block">
            <div className="footer-menu_block-wrapper">
              <div className="footer-block_menu-item">
                <div className="footer-block_nav">
                  <div className="footer-block_navigation">
                    <h3 className="footer-block_title">Навигация</h3>
                    <div className="footer-block_content">
                      <ul className="footer-menu">
                        <li className="footer-menu_item">О нас</li>
                        <li className="footer-menu_item">Новости</li>
                        <li className="footer-menu_item">Служба поддержки</li>
                        <li className="footer-menu_item">Услуги</li>
                        {/* <!-- Добавьте элементы списка здесь --> */}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="footer-block_menu-item">
                <div className="footer-block_nav">
                  <div className="footer-block_about">
                    <h3 className="footer-block_title">О нас</h3>
                    <div className="footer-block_content">
                      <ul className="footer-menu">
                        <li className="footer-menu_item">О сервисе</li>
                        <li className="footer-menu_item">Наша команда</li>
                        <li className="footer-menu_item">Вакансии</li>
                        <li className="footer-menu_item">Инвесторы</li>
                        {/* <!-- Добавьте элементы списка здесь --> */}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="footer-block_menu-item">
                <div className="footer-block_nav">
                  <div className="footer-block_support">
                    <h3 className="footer-block_title">Служба поддержки</h3>
                    <div className="footer-block_content">
                      <ul className="footer-menu">
                        <li className="footer-menu_item">Соглашения</li>
                        <li className="footer-menu_item">Сообщества</li>
                        <li className="footer-menu_item">Связь с нами</li>
                        {/* <!-- Добавьте элементы списка здесь --> */}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="footer-block_menu-item_email">
                <div className="footer-block_nav">
                  <div className="footer-block-subscribe">
                    <h3 className="footer-block_title">Подписка</h3>
                    <div className="footer-block_content">
                      <p>
                        <span className="footer-block_content-text">
                          Получайте специальные предложения и новости сервиса
                        </span>
                      </p>
                    </div>
                    <div className="footer-block_form-email">
                      <form className="footer_contact-email" action="" method="POST">
                        {/* <!-- +date_dropdown("form_elements_input-wrapper", "email_input email_input-suscription", "email", "email", "Your email address", "email_input-btn_subscription","submit", "arrow_forward.svg") --> */}
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-block_social">
          <div className="footer-block_box-social">
            <div className="footer-block_flex-wrapper">
              <div className="footer-block_copyright">
                <span className="footer_copyright">
                  Copyright © 2018 Toxin отель. Все права защищены.
                </span>
              </div>
              <div className="footer-block_social-icons">
                <ul className="footer_social-icons">
                  <li className="social-icons social_tw">
                    <a href="#">
                      <img src="../img/svg/twitter.svg" />
                    </a>
                  </li>
                  <li className="social-icons social_fb">
                    <a href="#">
                      <img src="../img/svg/facebook.svg" />
                    </a>
                  </li>
                  <li className="social-icons social_inst">
                    <a href="#">
                      <img src="../img/svg/instagram.svg" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
