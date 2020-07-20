import React, {useState, useEffect} from 'react'
import {makeStyles} from '@material-ui/core/styles'


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
  }
}))


export default function Html() {
    return (
        <div>
  <app-container ng-version="8.2.14">
      <app-header class="home ng-star-inserted">
        <header id="header" class="header home hide-header">
          <div class="header-bar">
            <div class="header-content-left">
              <div class="hidden-tablet ng-star-inserted">
                <div class="header-menu-button">
                  <button class="hamburger hamburger--elastic" type="button">
                    <span class="hamburger-box">
                      <span class="hamburger-inner"></span>
                    </span>
                  </button>
                </div>
              </div>
              <div class="header-logo hidden-tablet">
                <a href="/" class="ng-star-inserted"></a>
              </div>
              <div class="back-header"></div>
              <div class="header-search ng-star-inserted">
                <app-search class="ng-star-inserted">
                  <div class="search">
                    <app-search-bar _nghost-ng-web-c30>
                      <form _ngcontent-ng-web-c30 class="search-bar" novalidate>
                        <button _ngcontent-ng-web-c30 class="search-button" type="submit">
                          <i _ngcontent-ng-web-c30 class="iconf-search"></i>
                        </button>
                        <app-input-debounce input>
                          <input class="search-input ng-untouched ng-pristine ng-valid" maxlength="125" type="text" placeholder="Поиск по товарам" /></app-input-debounce>
                        </form>
                      </app-search-bar>
                    </div>
                  </app-search>
                </div>
              </div>
              <div class="header-content-center hidden-tablet">
                <div class="header-logo-mobile logo-whitout-home">
                  <a href="/" class="ng-star-inserted">
                    <i class="iconf-Logo-3x"></i></a>
                  </div>
                </div>
                <div class="header-content-right not-logged">
                  <div class="header-address-section">
                    <div class="header-location-section">
                      <div class="header-country hidden-mobile ng-star-inserted">
                        <app-country>
                          <div class="cont-country hidden-mobile">
                            <div class="active-country ng-star-inserted">
                              <img src="images/ar-flag.png" alt="Brasil flag"/>
                              <p class="f-caption-1 hidden-mobile">Санкт-Петербург</p>
                              <i class="iconf-keyboard_arrow_down f-headline hidden-mobile"></i>
                            </div>
                            <div class="location-select-cnt ng-star-inserted" style="height: 300px;">
                              <ul class="country-select">
                                <li class="ng-star-inserted">
                                  <a href="https://www.rappi.com.co">
                                    <img src="images/col-flag.png" alt="Colombia flag"/>
                                    <p class="f-caption-1">Москва</p>
                                    <i class="iconf-keyboard_arrow_right ng-star-inserted"></i>
                                  </a>
                                </li>
                                <li class="active ng-star-inserted">
                                  <a href="https://www.rappi.com.br">
                                    <img src="images/ar-flag.png" alt="Brasil flag"/>
                                    <p class="f-caption-1">Томск</p>
                                    <i class="iconf-keyboard_arrow_right ng-star-inserted"></i>
                                  </a>
                                </li>
                                <li class="ng-star-inserted"><a href="https://www.rappi.com.ar">
                                  <img src="images/ar-flag.png" alt="Argentina flag"/>
                                  <p class="f-caption-1">Argentina</p>
                                  <i class="iconf-keyboard_arrow_right ng-star-inserted"></i>
                                </a>
                              </li>
                              <li class="ng-star-inserted">
                                <a href="https://www.rappi.com.mx">
                                  <img src="images/mx-flag.png" alt="Mexico flag"/><p class="f-caption-1">Новосибирск</p>
                                  <i class="iconf-keyboard_arrow_right ng-star-inserted"></i>
                                </a>
                              </li>
                              <li class="ng-star-inserted">
                                <a href="https://www.rappi.cl">
                                  <img src="images/cl-flag.png" alt="Chile flag"/>
                                  <p class="f-caption-1">Красноярск</p>
                                  <i class="iconf-keyboard_arrow_right ng-star-inserted"></i>
                                </a>
                              </li>
                              <li class="ng-star-inserted">
                                <a href="https://www.rappi.com.uy">
                                  <img src="images/uy-flag.png" alt="Uruguay flag"/>
                                  <p class="f-caption-1">Казань</p>
                                  <i class="iconf-keyboard_arrow_right ng-star-inserted"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                       </app-country>
                      </div>
                      <div class="separator hidden-mobile"></div>
                      <div class="header-address ng-star-inserted"><app-address-select>
                        <div class="address-select">
                          <i class="iconf-pointer hidden-tablet"></i>
                          <div class="address-subtitle visible-tablet"></div>
                          <div class="ng-star-inserted">
                            <div class="address"><p>Адрес доставки</p>
                              <i class="iconf-keyboard_arrow_down hidden-mobile"></i>
                            </div>
                          </div>
                        </div>
                      </app-address-select>
                    </div>
                  </div>
                </div>
                <div class="basket-header ng-star-inserted">
                  <app-basket-side-bar _nghost-ng-web-c13>
                    <div _ngcontent-ng-web-c13 class="view-basket show-coupon">
                      <div _ngcontent-ng-web-c13 class="options-container">
                        <app-tooltip _ngcontent-ng-web-c13 class="hidden-mobile" tooltipdirection="bottom-left" _nghost-ng-web-c33>
                          <div _ngcontent-ng-web-c33 class="generic-tooltip ">
                            <div _ngcontent-ng-web-c33 class="input-content ng-star-inserted">
                              <button _ngcontent-ng-web-c13 class="coupon-icon">
                                <i _ngcontent-ng-web-c13 class="iconf-ico-cupon2"></i>
                              </button>
                            </div>
                            <div _ngcontent-ng-web-c33 class="tooltip-content tooltip-bottom-left ng-star-inserted">
                              <h4 _ngcontent-ng-web-c33 class="title"></h4>
                              <p _ngcontent-ng-web-c33 class="content ng-star-inserted"> Colocar cupom </p>
                            </div>
                          </div>
                        </app-tooltip><app-basket-tooltip _ngcontent-ng-web-c13 class="hidden-mobile" _nghost-ng-web-c34><div _ngcontent-ng-web-c34 class="basket-tooltip-wrapper">
                          <app-tooltip _ngcontent-ng-web-c34 tooltipdirection="bottom-left" _nghost-ng-web-c33><div _ngcontent-ng-web-c33 class="generic-tooltip ">
                            <div _ngcontent-ng-web-c33 class="input-content ng-star-inserted">
                              <button _ngcontent-ng-web-c34 class="basket-icon">
                                <i _ngcontent-ng-web-c34 class="iconf-basket"></i>
                              </button>
                            </div>
                          </div>
                        </app-tooltip>
                      </div>
                    </app-basket-tooltip>
                  </div>
                </div>
                <div _ngcontent-ng-web-c13 class="basket-container">
                  <div _ngcontent-ng-web-c13 class="global-overlay-popup"></div>
                  <div _ngcontent-ng-web-c13 class="basket-box">
                    <div _ngcontent-ng-web-c13 class="basket-head">
                      <div _ngcontent-ng-web-c13 class="basket-head-title">
                        <h5 _ngcontent-ng-web-c13>Entregar para:</h5>
                        <div _ngcontent-ng-web-c13 class="address-container">
                          <button _ngcontent-ng-web-c13 class="primary-button-transparent ng-star-inserted"> Digite o endereço </button>
                        </div>
                      </div>
                      <i _ngcontent-ng-web-c13 class="iconf-modal-close close-basket f-body"></i>
                    </div>
                  <div _ngcontent-ng-web-c13 class="basket-body">
                    <app-coupon-available-detail _ngcontent-ng-web-c13 _nghost-ng-web-c37 class="ng-star-inserted"></app-coupon-available-detail>
                    <div _ngcontent-ng-web-c13 class="content-basket-empty f-title ng-star-inserted">
                      <div _ngcontent-ng-web-c13>
                        <i _ngcontent-ng-web-c13 class="iconf-basket"></i>
                        <p _ngcontent-ng-web-c13>
                          <strong _ngcontent-ng-web-c13 class="f-body">Sua cesta esta vazia</strong>
                        </p>
                        <p _ngcontent-ng-web-c13 class="f-caption-1">Retorne as nossas lojas e adicione produtos a sua cesta.</p>
                      </div>
                    </div>
                    <div _ngcontent-ng-web-c13 class="cont-products-basket">
                      <ul _ngcontent-ng-web-c13 class="order-by-store">
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </app-basket-side-bar>
          </div>
          <div class="separator-mobile visible-mobile"></div>
          <div class="header-user-dropdown ng-star-inserted">
            <app-user-drop-down _nghost-ng-web-c14>
              <div _ngcontent-ng-web-c14 class="dropdown-user">
                <button _ngcontent-ng-web-c14 class="dropdown-anonymous primary-button-filled ng-star-inserted"> Войти </button>
                <app-drop-down-list _ngcontent-ng-web-c14></app-drop-down-list>
              </div>
            </app-user-drop-down>
          </div>
        </div>
      </div>
    </header>
    <app-header-stores class="ng-star-inserted">
      <div class="stores-list-cont hidden-mobile">
        <div class="stores ng-star-inserted">
          <ul id="categories-sub-menu">
            <li class="normal-stores ng-star-inserted">
              <a href="/lojas/tipo/supermercados" class="ng-star-inserted"> Supermercados </a>   </li><li class="normal-stores ng-star-inserted">      <a href="/restaurantes" class="ng-star-inserted"> Restaurantes </a>   </li><li class="normal-stores ng-star-inserted">      <a href="/lojas/tipo/adidasbotao" class="ng-star-inserted"> Adidas </a>   </li><li class="normal-stores ng-star-inserted">      <a href="/lojas/tipo/bebidas-24" class="ng-star-inserted"> Bebidas </a>   </li><li class="normal-stores ng-star-inserted">      <a href="/lojas/tipo/farmacia" class="ng-star-inserted"> Farmácia 24h </a>   </li>   <li class="view-more-stores ng-star-inserted"><a> Ver mais </a></li><li class="special-links"><ul><li routerlinkactive="active"><a routerlink="/prime" href="/prime"><i class="iconf-mustache2"></i> RappiPrime </a></li>   <li><a rel="nofollow" target="_blank" href="https://soyrappi.com/?utm_source=appuser&amp;utm_medium=applk&amp;utm_campaign=rt"><i class="iconf-quick-icon"></i> Entregador </a></li><li><a rel="nofollow" target="_blank" href="https://jobs.rappi.com"><i class="iconf-quick-icon"></i> Trabalhe conosco </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</app-header-stores>
</app-header>   
<div id="app-container" class="app-container home header-active with-search-bar"><div class="total-width">      
<span class="app-span-container ng-star-inserted"><app-page-not-found>   
    <div class="ng-star-inserted">   </div></app-page-not-found>
    <router-outlet></router-outlet>
    <div class="ng-star-inserted"><app-banner><div class="banner-container"><div class="banner guest-banner">         <img alt class="img-1 ng-star-inserted" src="images/sports.png"/><img alt class="img-2 ng-star-inserted" src="images/pharmacy.png"/>
  <img alt class="img-3 ng-star-inserted" src="images/burguer.png"/>
  <img alt class="img-4 ng-star-inserted" src="images/mrs.png"/>      <div class="title">   <h1 class="bold ng-star-inserted" style="font-size: 40px;">Marketplace что-то такое    </h1></div></div>   
    
    <div class="location-container ng-star-inserted"><div class="location-input border-input"><i class="iconf-pointer-secondary-fill pointer"></i><app-search-autocomplete class="input"><input id="autocomplete-address-input" type="text" placeholder="Введите свой адрес" class="ng-untouched ng-pristine ng-valid pac-target-input" autocomplete="off" /><span class="no-search-results-content"></span></app-search-autocomplete>   </div><button class="primary-button-filled"> Искать </button></div>
    <img alt class="img-5 ng-star-inserted" src="images/fashion.png"/><img alt class="img-6 ng-star-inserted" src="images/markets.png"/></div></app-banner>
    
    <div class="home-container"><app-cpgs-container _nghost-ng-web-c43><div _ngcontent-ng-web-c43 class="cpgs-container"><h4 _ngcontent-ng-web-c43 class="subtitle"> Выберите подходящую категорию </h4><h2 _ngcontent-ng-web-c43 class="title"> Категории </h2><ul _ngcontent-ng-web-c43 class="cpgs-grid">
      
      <li _ngcontent-ng-web-c43 class="store-item ng-star-inserted">
        <app-cpg-card _ngcontent-ng-web-c43 _nghost-ng-web-c29>
          <a _ngcontent-ng-web-c29 class="cpg-card ng-star-inserted" title="Supermercados" href="/lojas/tipo/supermercados">
            <div _ngcontent-ng-web-c29 class="cpg-img-container" style="background-color: rgb(238, 244, 198);">
              <img _ngcontent-ng-web-c29 src="images/markets.png"/>
            </div>
            <h4 _ngcontent-ng-web-c29 class="cpg-title"> Супермаркеты </h4>
          </a>
        </app-cpg-card>
      </li>
      
      <li _ngcontent-ng-web-c43 class="store-item ng-star-inserted"><app-cpg-card _ngcontent-ng-web-c43 _nghost-ng-web-c29>         <a _ngcontent-ng-web-c29 class="cpg-card ng-star-inserted" title="Restaurantes" href="/restaurantes"><div _ngcontent-ng-web-c29 class="cpg-img-container" style="background-color: rgb(255, 131, 86);"><img _ngcontent-ng-web-c29 src="images/restaurant-1591639715.png"/></div><h4 _ngcontent-ng-web-c29 class="cpg-title"> Рестораны </h4></a>      </app-cpg-card></li>         
      
      <li _ngcontent-ng-web-c43 class="store-item ng-star-inserted"><app-cpg-card _ngcontent-ng-web-c43 _nghost-ng-web-c29>         <a _ngcontent-ng-web-c29 class="cpg-card ng-star-inserted" title="Adidas" href="/lojas/tipo/adidasbotao"><div _ngcontent-ng-web-c29 class="cpg-img-container" style="background-color: rgb(255, 255, 255);"><img _ngcontent-ng-web-c29 src="images/adidas_botao-1585611619.png"/></div><h4 _ngcontent-ng-web-c29 class="cpg-title"> Спорт </h4></a>      </app-cpg-card></li>
      
               <li _ngcontent-ng-web-c43 class="store-item ng-star-inserted"><app-cpg-card _ngcontent-ng-web-c43 _nghost-ng-web-c29>         <a _ngcontent-ng-web-c29 class="cpg-card ng-star-inserted" title="Bebidas" href="/lojas/tipo/bebidas-24"><div _ngcontent-ng-web-c29 class="cpg-img-container" style="background-color: rgb(251, 233, 201);"><img _ngcontent-ng-web-c29 src="images/liquor_store-1593126769.png"/></div><h4 _ngcontent-ng-web-c29 class="cpg-title"> Напитки </h4></a>      </app-cpg-card></li>         
      
      <li _ngcontent-ng-web-c43 class="store-item ng-star-inserted"><app-cpg-card _ngcontent-ng-web-c43 _nghost-ng-web-c29>         <a _ngcontent-ng-web-c29 class="cpg-card ng-star-inserted" title="Farmácia 24h" href="/lojas/tipo/farmacia"><div _ngcontent-ng-web-c29 class="cpg-img-container" style="background-color: rgb(155, 222, 231);"><img _ngcontent-ng-web-c29 src="images/farmacia-1591397052.png"/></div><h4 _ngcontent-ng-web-c29 class="cpg-title"> Аптеки </h4></a>      </app-cpg-card></li>
      
      <app-cpg-card _ngcontent-ng-web-c43 _nghost-ng-web-c29 class="ng-star-inserted">
        <a _ngcontent-ng-web-c29 class="cpg-card ng-star-inserted" title="Ver mais">
          <div _ngcontent-ng-web-c29 class="cpg-icon-container">
            <i _ngcontent-ng-web-c29 class="iconf-more-stores"></i>
          </div>
          <h4 _ngcontent-ng-web-c29 class="cpg-title"> Больше </h4>
        </a>
      </app-cpg-card>
    </ul>
  </div>

  </app-cpgs-container>
    <div class="with-margin">
      <app-items _nghost-ng-web-c44>
        <div _ngcontent-ng-web-c44 class="items">
          <div _ngcontent-ng-web-c44 class="item ng-star-inserted">
            <div _ngcontent-ng-web-c44 class="img">
              <i _ngcontent-ng-web-c44 class="iconf-clock-4"></i>
            </div>
            <div _ngcontent-ng-web-c44 class="description">
              <h2 _ngcontent-ng-web-c44 class="title">Экономь время</h2>
              <h4 _ngcontent-ng-web-c44 class="text">Доставка до дома меньше чем за час</h4>
            </div>
          </div>

          <div _ngcontent-ng-web-c44 class="item ng-star-inserted">
            <div _ngcontent-ng-web-c44 class="img">
              <i _ngcontent-ng-web-c44 class="iconf-heart3x"></i>
            </div>
            <div _ngcontent-ng-web-c44 class="description">
              <h2 _ngcontent-ng-web-c44 class="title">В надежных руках</h2><h4 _ngcontent-ng-web-c44 class="text">Только проверенные организации</h4>
            </div>
          </div>
          
          <div _ngcontent-ng-web-c44 class="item ng-star-inserted">
            <div _ngcontent-ng-web-c44 class="img">
              <i _ngcontent-ng-web-c44 class="iconf-quality3x"></i>
            </div>
            <div _ngcontent-ng-web-c44 class="description">
              <h2 _ngcontent-ng-web-c44 class="title">100% качество</h2>
              <h4 _ngcontent-ng-web-c44 class="text">Если ваш товар пришел в плохом состоянии, вы не будете платить за негоы!</h4></div></div></div></app-items></div>
        </div>
        <div class="home-container with-margin">
          <h2 _ngcontent-ng-web-c48 class="title"> Другие города </h2>
        <div _ngcontent-ng-web-c48 class="badge-row">
          <a _ngcontent-ng-web-c48 class="badge ng-star-inserted" href="/grande-sao-paulo"> Архангельск </a>
          <a _ngcontent-ng-web-c48 class="badge ng-star-inserted" href="/rio-de-janeiro"> Брянск </a>
          <a _ngcontent-ng-web-c48 class="badge ng-star-inserted" href="/belo-horizonte"> Волгоград </a>
          <a _ngcontent-ng-web-c48 class="badge ng-star-inserted" href="/curitiba"> Галицин </a>
          <a _ngcontent-ng-web-c48 class="badge ng-star-inserted" href="/fortaleza"> Дальнегорск </a>
          <a _ngcontent-ng-web-c48 class="badge ng-star-inserted" href="/recife"> Екатеринбург </a>
          <a _ngcontent-ng-web-c48 class="badge ng-star-inserted" href="/campinas"> Зеленогорск </a>
          <a _ngcontent-ng-web-c48 class="badge ng-star-inserted" href="/florianopolis"> Иркутск </a>
          <a _ngcontent-ng-web-c48 class="badge ng-star-inserted" href="/ribeirao-preto"> Красноярск </a>
          <a _ngcontent-ng-web-c48 class="badge ng-star-inserted" href="/ribeirao-preto"> Казань </a>
          <a _ngcontent-ng-web-c48 class="badge ng-star-inserted" href="/goiania"> Москва </a>
          <a _ngcontent-ng-web-c48 class="badge ng-star-inserted" href="/sao-jose-do-rio-preto"> Норильск </a>
          <a _ngcontent-ng-web-c48 class="badge ng-star-inserted" href="/natal"> Омск </a>
          <a _ngcontent-ng-web-c48 class="badge ng-star-inserted" href="/sorocaba"> Петропавловск </a>
          <a _ngcontent-ng-web-c48 class="badge ng-star-inserted" href="/blumenau"> Ростов </a>
          <a _ngcontent-ng-web-c48 class="badge ng-star-inserted" href="/anapolis"> Смоленск </a>
          <a _ngcontent-ng-web-c48 class="badge ng-star-inserted" href="/valinhos"> Тюмень </a>
          <a _ngcontent-ng-web-c48 class="badge ng-star-inserted" href="/itu"> Уфа </a>
        </div>
      </div>
    </div>
  


</span>   
  <app-product-modal _nghost-ng-web-c4 class="ng-star-inserted">
    <app-modal _ngcontent-ng-web-c4 id="market-product-modal" class="ng-tns-c26-1">
    </app-modal></app-product-modal>
  </div>
  <app-footer class="ng-star-inserted">
    <footer class="footer" id="footer">
      <div class="container">
        <div class="head-footer" id="head-footer">
          <div>
            <div class="cont-img">
              <img alt src="images/ico-tiempo.png"/>
            </div>
            <div class="cont-text">
              <span>Экономь время</span><p>Доставка до дома меньше чем за час</p></div></div><div><div class="cont-img"><img alt src="images/ico-amor.png"/></div><div class="cont-text"><span>В надежных руках</span><p>Um shopper seleciona seus produtos com amor</p></div></div><div><div class="cont-img"><img alt src="images/ico-calidad.png"/></div><div class="cont-text"><span>Qualidade 100%</span><p>Caso o seu produto chegue em mal estado, você não pagará por ele!</p></div></div></div></div>   <div class="footer-cont"><div class="container info-footer" id="info-footer"><div><h6>Categorias</h6><ul class="list-footer">      <li class="ng-star-inserted">      <a href="/lojas/tipo/supermercados" class="ng-star-inserted"><span>Supermercados</span></a>   </li>   <li class="ng-star-inserted">      <a href="/restaurantes" class="ng-star-inserted"><span>Restaurantes</span></a>   </li>   <li class="ng-star-inserted">      <a href="/lojas/tipo/adidasbotao" class="ng-star-inserted"><span>Adidas</span></a>   </li>   <li class="ng-star-inserted">      <a href="/lojas/tipo/bebidas-24" class="ng-star-inserted"><span>Bebidas</span></a>   </li>   <li class="ng-star-inserted">      <a href="/lojas/tipo/farmacia" class="ng-star-inserted"><span>Farmácia 24h</span></a>   </li>   <li class="ng-star-inserted">      <a href="/lojas/tipo/express-big" class="ng-star-inserted"><span>Express</span></a>   </li>   <li class="ng-star-inserted">      <a href="/lojas/tipo/nespresso-button" class="ng-star-inserted"><span>Nespresso </span></a>   </li>   <li class="ng-star-inserted">      <a href="/lojas/techguru" class="ng-star-inserted"><span>Sos iphone</span></a>   
  </li>   <li class="ng-star-inserted">         <a href="/mall" class="ng-star-inserted"><span>Lojas</span></a>      </li>   <li class="ng-star-inserted">      <a href="/lojas/tipo/carrefourbotao" class="ng-star-inserted"><span>Carrefour</span></a>   </li>   <li class="ng-star-inserted">      <a href="/parafuzo" class="ng-star-inserted"><span>Limpeza</span></a>   </li>   <li class="ng-star-inserted">      <a href="/lojas/tipo/petzbotao" class="ng-star-inserted"><span>Petz</span></a>   </li>   <li class="ng-star-inserted">      <a href="/getninjas" class="ng-star-inserted"><span>Serviços</span></a>   </li>   <li class="ng-star-inserted">      <a href="/lojas/tipo/natal-2018" class="ng-star-inserted"><span>Lojas</span></a>   </li></ul></div><div class="center-content"><h6>Informação de interesse</h6><ul class="list-footer footer-links">      <li class="ng-star-inserted"><a rel="nofollow" target="_blank" href="https://legal.rappi.com/brazil/termos-e-condicoes-de-uso-da-plataforma-rappi/"><span> Termos e Condições </span></a></li>   <li class="ng-star-inserted"><a rel="nofollow" target="_blank" href="https://soyrappi.com/?utm_source=appuser&amp;utm_medium=applk&amp;utm_campaign=rt"><span> Quero ser Rappi Entregador </span></a></li>   <li class="ng-star-inserted"><a rel="nofollow" target="_blank" href="https://www.rappi.com/jobs/"><span> Trabalhe conosco </span></a></li>   <li class="ng-star-inserted"><a rel="nofollow" target="_blank" href="https://www.rappi.com.br/blog/como-funciona-a-rappi/"><span> Como funciona a Rappi </span></a></li>   <li class="ng-star-inserted"><a rel="nofollow" target="_blank" href="https://surveys.rappi.com/inbound"><span> Registre seu restaurante </span></a></li>   <li class="ng-star-inserted"><a rel="nofollow" target="_blank" href="https://surveys.rappi.com/inbound"><span> Venda com a Rappi </span></a></li>   <li class="ng-star-inserted"><a rel="nofollow" target="_blank" href="https://surveys.rappi.com/inbound"><span> Seja Parceiro </span></a></li>   <li class="ng-star-inserted"><a rel="nofollow" target="_blank" href="https://one.rappi.com/"><span> Faça sua marca crescer - RappiOne </span></a></li>   <li class="ng-star-inserted"><a rel="nofollow" target="_blank" href="https://www.rappi.com.br/blog/compras-supermercado-online/"><span> Como fazer compras de supermercados </span></a></li>   <li class="ng-star-inserted"><a rel="nofollow" target="_blank" href="https://legal.rappi.com/brazil/aviso-de-privacidade-e-politicas-de-uso-das-informacao-utilizadas-pela-rappi/"><span> Política de processamento de dados pessoais </span></a></li>   <li class="ng-star-inserted"><a rel="nofollow" target="_blank" href="https://partners.rappi.com/"><span> Portal Restaurantes Parceiros </span></a></li></ul></div><div class="app-links"><h6>Baixe o aplicativo</h6><div class="cont-apps"><a rel="nofollow" target="_blank" href="https://itunes.apple.com/co/app/rappi/id984044296?mt=8"><img alt="play-store-img" class="ios-img" src="fonts/apple-store_app-store-pt.svg"/></a><a rel="nofollow" target="_blank" href="https://play.google.com/store/apps/details?id=com.grability.rappi"><img alt="play-store-img" class="android-img" src="images/play-store_play-store-br.png"/></a></div><h6 class="follow">Redes sociais</h6><ul class="redes"><li><a class="facebook" rel="nofollow" target="_blank" href="https://www.facebook.com/RappiBrasil/"><i class="iconf-facebook"></i></a></li><li><a class="twitter" rel="nofollow" target="_blank" href="https://twitter.com/rappibrasil?lang=es"><i class="iconf-twitter"></i></a></li><li><a class="instagram" rel="nofollow" target="_blank" href="https://www.instagram.com/rappibrasil/?hl=es"><i class="iconf-instagram"></i></a></li></ul><div class="partners-info"><a rel="nofollow" target="_blank" href="https://www.truora.com/?utm_source=rappi&amp;utm_medium=home_link&amp;utm_campaign=bottom_image"><img alt="truora-img" class="truora-img" src="images/truora.png"/></a>   </div></div></div><div class="footer-cont"><div class="firm-footer" id="firm-footer"><p> © 2020 DoDoma    <span class="ng-star-inserted"> - DoDoma SPB INTERMEDIAÇÃO DE NEGÓCIOS LTDA., CNPJ 26.900.161/0001-25,  Rua Dr Renato Paes de Barro, 33, Itaim Bibi, São Paulo/SP, Brasil. </span></p></div></div></div></footer></app-footer></div>
  
      <app-order-status-resume class="home ng-star-inserted">            </app-order-status-resume></app-container><script async src="js/js.js"></script><script src="js/api.js"></script><script src="js/runtime.c6ae727bd39fd1bf6b0f.js" defer></script><script src="js/polyfills-es5.66f25889e6ec334a8f0e.js" nomodule defer>
      </script><script src="js/polyfills.93e277369afc6b115767.js" defer></script><script src="js/scripts.d3ce5f863e8906b6cfa9.js" defer></script><script src="js/vendor.0b684f0c2981f44b60fb.js" defer></script>
      <script src="js/main.695629c62b9e6030ffb7.js" defer></script>
      <img src="DFPAudiencePixel%3Bord%3D6893749857115.318%3Bdc_seg%3D638494743" width="1" height="1" border="0"/>
    </div>
    
        
    )
}
