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
      <app-header className   ="home ng-star-inserted">
        <header id="header" className   ="header home hide-header">
          <div className   ="header-bar">
            <div className   ="header-content-left">
              <div className   ="hidden-tablet ng-star-inserted">
                <div className   ="header-menu-button">
                  <button className   ="hamburger hamburger--elastic" type="button">
                    <span className   ="hamburger-box">
                      <span className   ="hamburger-inner"></span>
                    </span>
                  </button>
                </div>
              </div>
              <div className   ="header-logo hidden-tablet">
                <a href="/" className   ="ng-star-inserted"></a>
              </div>
              <div className   ="back-header"></div>
              <div className   ="header-search ng-star-inserted">
                <app-search className   ="ng-star-inserted">
                  <div className   ="search">
                    <app-search-bar _nghost-ng-web-c30>
                      <form _ngcontent-ng-web-c30 className   ="search-bar" noValidate>
                        <button _ngcontent-ng-web-c30 className   ="search-button" type="submit">
                          <i _ngcontent-ng-web-c30 className   ="iconf-search"></i>
                        </button>
                        <app-input-debounce input>
                          <input className   ="search-input ng-untouched ng-pristine ng-valid" maxLength="125" type="text" placeholder="Поиск по товарам" /></app-input-debounce>
                        </form>
                      </app-search-bar>
                    </div>
                  </app-search>
                </div>
              </div>
              <div className   ="header-content-center hidden-tablet">
                <div className   ="header-logo-mobile logo-whitout-home">
                  <a href="/" className   ="ng-star-inserted">
                    <i className   ="iconf-Logo-3x"></i></a>
                  </div>
                </div>
                <div className   ="header-content-right not-logged">
                  <div className   ="header-address-section">
                    <div className   ="header-location-section">
                      <div className   ="header-country hidden-mobile ng-star-inserted">
                        <app-country>
                          <div className   ="cont-country hidden-mobile">
                            <div className   ="active-country ng-star-inserted">
                              <img src="images/ar-flag.png" alt="Brasil flag"/>
                              <p className   ="f-caption-1 hidden-mobile">Санкт-Петербург</p>
                              <i className   ="iconf-keyboard_arrow_down f-headline hidden-mobile"></i>
                            </div>
                            <div className   ="location-select-cnt ng-star-inserted" style={{"height": "300px"}}>
                              <ul className   ="country-select">
                                <li className   ="ng-star-inserted">
                                  <a href="https://www.rappi.com.co">
                                    <img src="images/col-flag.png" alt="Colombia flag"/>
                                    <p className   ="f-caption-1">Москва</p>
                                    <i className   ="iconf-keyboard_arrow_right ng-star-inserted"></i>
                                  </a>
                                </li>
                                <li className   ="active ng-star-inserted">
                                  <a href="https://www.rappi.com.br">
                                    <img src="images/ar-flag.png" alt="Brasil flag"/>
                                    <p className   ="f-caption-1">Томск</p>
                                    <i className   ="iconf-keyboard_arrow_right ng-star-inserted"></i>
                                  </a>
                                </li>
                                <li className   ="ng-star-inserted"><a href="https://www.rappi.com.ar">
                                  <img src="images/ar-flag.png" alt="Argentina flag"/>
                                  <p className   ="f-caption-1">Argentina</p>
                                  <i className   ="iconf-keyboard_arrow_right ng-star-inserted"></i>
                                </a>
                              </li>
                              <li className   ="ng-star-inserted">
                                <a href="https://www.rappi.com.mx">
                                  <img src="images/mx-flag.png" alt="Mexico flag"/><p className   ="f-caption-1">Новосибирск</p>
                                  <i className   ="iconf-keyboard_arrow_right ng-star-inserted"></i>
                                </a>
                              </li>
                              <li className   ="ng-star-inserted">
                                <a href="https://www.rappi.cl">
                                  <img src="images/cl-flag.png" alt="Chile flag"/>
                                  <p className   ="f-caption-1">Красноярск</p>
                                  <i className   ="iconf-keyboard_arrow_right ng-star-inserted"></i>
                                </a>
                              </li>
                              <li className   ="ng-star-inserted">
                                <a href="https://www.rappi.com.uy">
                                  <img src="images/uy-flag.png" alt="Uruguay flag"/>
                                  <p className   ="f-caption-1">Казань</p>
                                  <i className   ="iconf-keyboard_arrow_right ng-star-inserted"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                       </app-country>
                      </div>
                      <div className   ="separator hidden-mobile"></div>
                      <div className   ="header-address ng-star-inserted"><app-address-select>
                        <div className   ="address-select">
                          <i className   ="iconf-pointer hidden-tablet"></i>
                          <div className   ="address-subtitle visible-tablet"></div>
                          <div className   ="ng-star-inserted">
                            <div className   ="address"><p>Адрес доставки</p>
                              <i className   ="iconf-keyboard_arrow_down hidden-mobile"></i>
                            </div>
                          </div>
                        </div>
                      </app-address-select>
                    </div>
                  </div>
                </div>
                <div className   ="basket-header ng-star-inserted">
                  <app-basket-side-bar _nghost-ng-web-c13>
                    <div _ngcontent-ng-web-c13 className   ="view-basket show-coupon">
                      <div _ngcontent-ng-web-c13 className   ="options-container">
                        <app-tooltip _ngcontent-ng-web-c13 className   ="hidden-mobile" tooltipdirection="bottom-left" _nghost-ng-web-c33>
                          <div _ngcontent-ng-web-c33 className   ="generic-tooltip ">
                            <div _ngcontent-ng-web-c33 className   ="input-content ng-star-inserted">
                              <button _ngcontent-ng-web-c13 className   ="coupon-icon">
                                <i _ngcontent-ng-web-c13 className   ="iconf-ico-cupon2"></i>
                              </button>
                            </div>
                            <div _ngcontent-ng-web-c33 className   ="tooltip-content tooltip-bottom-left ng-star-inserted">
                              <h4 _ngcontent-ng-web-c33 className   ="title"></h4>
                              <p _ngcontent-ng-web-c33 className   ="content ng-star-inserted"> Colocar cupom </p>
                            </div>
                          </div>
                        </app-tooltip><app-basket-tooltip _ngcontent-ng-web-c13 className   ="hidden-mobile" _nghost-ng-web-c34><div _ngcontent-ng-web-c34 className   ="basket-tooltip-wrapper">
                          <app-tooltip _ngcontent-ng-web-c34 tooltipdirection="bottom-left" _nghost-ng-web-c33><div _ngcontent-ng-web-c33 className   ="generic-tooltip ">
                            <div _ngcontent-ng-web-c33 className   ="input-content ng-star-inserted">
                              <button _ngcontent-ng-web-c34 className   ="basket-icon">
                                <i _ngcontent-ng-web-c34 className   ="iconf-basket"></i>
                              </button>
                            </div>
                          </div>
                        </app-tooltip>
                      </div>
                    </app-basket-tooltip>
                  </div>
                </div>
                <div _ngcontent-ng-web-c13 className   ="basket-container">
                  <div _ngcontent-ng-web-c13 className   ="global-overlay-popup"></div>
                  <div _ngcontent-ng-web-c13 className   ="basket-box">
                    <div _ngcontent-ng-web-c13 className   ="basket-head">
                      <div _ngcontent-ng-web-c13 className   ="basket-head-title">
                        <h5 _ngcontent-ng-web-c13>Entregar para:</h5>
                        <div _ngcontent-ng-web-c13 className   ="address-container">
                          <button _ngcontent-ng-web-c13 className   ="primary-button-transparent ng-star-inserted"> Digite o endereço </button>
                        </div>
                      </div>
                      <i _ngcontent-ng-web-c13 className   ="iconf-modal-close close-basket f-body"></i>
                    </div>
                  <div _ngcontent-ng-web-c13 className   ="basket-body">
                    <app-coupon-available-detail _ngcontent-ng-web-c13 _nghost-ng-web-c37 className   ="ng-star-inserted"></app-coupon-available-detail>
                    <div _ngcontent-ng-web-c13 className   ="content-basket-empty f-title ng-star-inserted">
                      <div _ngcontent-ng-web-c13>
                        <i _ngcontent-ng-web-c13 className   ="iconf-basket"></i>
                        <p _ngcontent-ng-web-c13>
                          <strong _ngcontent-ng-web-c13 className   ="f-body">Sua cesta esta vazia</strong>
                        </p>
                        <p _ngcontent-ng-web-c13 className   ="f-caption-1">Retorne as nossas lojas e adicione produtos a sua cesta.</p>
                      </div>
                    </div>
                    <div _ngcontent-ng-web-c13 className   ="cont-products-basket">
                      <ul _ngcontent-ng-web-c13 className   ="order-by-store">
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </app-basket-side-bar>
          </div>
          <div className   ="separator-mobile visible-mobile"></div>
          <div className   ="header-user-dropdown ng-star-inserted">
            <app-user-drop-down _nghost-ng-web-c14>
              <div _ngcontent-ng-web-c14 className   ="dropdown-user">
                <button _ngcontent-ng-web-c14 className   ="dropdown-anonymous primary-button-filled ng-star-inserted"> Войти </button>
                <app-drop-down-list _ngcontent-ng-web-c14></app-drop-down-list>
              </div>
            </app-user-drop-down>
          </div>
        </div>
      </div>
    </header>
    <app-header-stores className   ="ng-star-inserted">
      <div className   ="stores-list-cont hidden-mobile">
        <div className   ="stores ng-star-inserted">
          <ul id="categories-sub-menu">
            <li className   ="normal-stores ng-star-inserted">
              <a href="/lojas/tipo/supermercados" className   ="ng-star-inserted"> Supermercados </a>   </li><li className   ="normal-stores ng-star-inserted">      <a href="/restaurantes" className   ="ng-star-inserted"> Restaurantes </a>   </li><li className   ="normal-stores ng-star-inserted">      <a href="/lojas/tipo/adidasbotao" className   ="ng-star-inserted"> Adidas </a>   </li><li className   ="normal-stores ng-star-inserted">      <a href="/lojas/tipo/bebidas-24" className   ="ng-star-inserted"> Bebidas </a>   </li><li className   ="normal-stores ng-star-inserted">      <a href="/lojas/tipo/farmacia" className   ="ng-star-inserted"> Farmácia 24h </a>   </li>   <li className   ="view-more-stores ng-star-inserted"><a> Ver mais </a></li><li className   ="special-links"><ul><li routerlinkactive="active"><a routerlink="/prime" href="/prime"><i className   ="iconf-mustache2"></i> RappiPrime </a></li>   <li><a rel="nofollow" target="_blank" href="https://soyrappi.com/?utm_source=appuser&amp;utm_medium=applk&amp;utm_campaign=rt"><i className   ="iconf-quick-icon"></i> Entregador </a></li><li><a rel="nofollow" target="_blank" href="https://jobs.rappi.com"><i className   ="iconf-quick-icon"></i> Trabalhe conosco </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</app-header-stores>
</app-header>   
<div id="app-container" className   ="app-container home header-active with-search-bar"><div className   ="total-width">      
<span className   ="app-span-container ng-star-inserted"><app-page-not-found>   
    <div className   ="ng-star-inserted">   </div></app-page-not-found>
    <router-outlet></router-outlet>
    <div className   ="ng-star-inserted"><app-banner><div className   ="banner-container"><div className   ="banner guest-banner">         <img alt className   ="img-1 ng-star-inserted" src="images/sports.png"/><img alt className   ="img-2 ng-star-inserted" src="images/pharmacy.png"/>
  <img alt className   ="img-3 ng-star-inserted" src="images/burguer.png"/>
  <img alt className   ="img-4 ng-star-inserted" src="images/mrs.png"/>      <div className   ="title">   <h1 className   ="bold ng-star-inserted" style={{"font-size": "40px"}}>Marketplace что-то такое    </h1></div></div>   
    
    <div className   ="location-container ng-star-inserted"><div className   ="location-input border-input"><i className   ="iconf-pointer-secondary-fill pointer"></i><app-search-autocomplete className   ="input"><input id="autocomplete-address-input" type="text" placeholder="Введите свой адрес" className   ="ng-untouched ng-pristine ng-valid pac-target-input" autoComplete="off" /><span className   ="no-search-results-content"></span></app-search-autocomplete>   </div><button className   ="primary-button-filled"> Искать </button></div>
    <img alt className   ="img-5 ng-star-inserted" src="images/fashion.png"/><img alt className   ="img-6 ng-star-inserted" src="images/markets.png"/></div></app-banner>
    
    <div className   ="home-container"><app-cpgs-container _nghost-ng-web-c43><div _ngcontent-ng-web-c43 className   ="cpgs-container"><h4 _ngcontent-ng-web-c43 className   ="subtitle"> Выберите подходящую категорию </h4><h2 _ngcontent-ng-web-c43 className   ="title"> Категории </h2><ul _ngcontent-ng-web-c43 className   ="cpgs-grid">
      
      <li _ngcontent-ng-web-c43 className   ="store-item ng-star-inserted">
        <app-cpg-card _ngcontent-ng-web-c43 _nghost-ng-web-c29>
          <a _ngcontent-ng-web-c29 className   ="cpg-card ng-star-inserted" title="Supermercados" href="/lojas/tipo/supermercados">
            <div _ngcontent-ng-web-c29 className   ="cpg-img-container" style={{"background-color": "rgb(238, 244, 198)"}}>
              <img _ngcontent-ng-web-c29 src="images/markets.png"/>
            </div>
            <h4 _ngcontent-ng-web-c29 className   ="cpg-title"> Супермаркеты </h4>
          </a>
        </app-cpg-card>
      </li>
      
      <li _ngcontent-ng-web-c43 className   ="store-item ng-star-inserted"><app-cpg-card _ngcontent-ng-web-c43 _nghost-ng-web-c29>         <a _ngcontent-ng-web-c29 className   ="cpg-card ng-star-inserted" title="Restaurantes" href="/restaurantes"><div _ngcontent-ng-web-c29 className   ="cpg-img-container" style={{"background-color": "rgb(255, 131, 86)"}}><img _ngcontent-ng-web-c29 src="images/restaurant-1591639715.png"/></div><h4 _ngcontent-ng-web-c29 className   ="cpg-title"> Рестораны </h4></a>      </app-cpg-card></li>         
      
      <li _ngcontent-ng-web-c43 className   ="store-item ng-star-inserted"><app-cpg-card _ngcontent-ng-web-c43 _nghost-ng-web-c29>         <a _ngcontent-ng-web-c29 className   ="cpg-card ng-star-inserted" title="Adidas" href="/lojas/tipo/adidasbotao"><div _ngcontent-ng-web-c29 className   ="cpg-img-container" style={{"background-color": "rgb(255, 255, 255)"}}><img _ngcontent-ng-web-c29 src="images/adidas_botao-1585611619.png"/></div><h4 _ngcontent-ng-web-c29 className   ="cpg-title"> Спорт </h4></a>      </app-cpg-card></li>
      
               <li _ngcontent-ng-web-c43 className   ="store-item ng-star-inserted"><app-cpg-card _ngcontent-ng-web-c43 _nghost-ng-web-c29>         <a _ngcontent-ng-web-c29 className   ="cpg-card ng-star-inserted" title="Bebidas" href="/lojas/tipo/bebidas-24"><div _ngcontent-ng-web-c29 className   ="cpg-img-container" style={{"background-color": "rgb(251, 233, 201)"}}><img _ngcontent-ng-web-c29 src="images/liquor_store-1593126769.png"/></div><h4 _ngcontent-ng-web-c29 className   ="cpg-title"> Напитки </h4></a>      </app-cpg-card></li>         
      
      <li _ngcontent-ng-web-c43 className   ="store-item ng-star-inserted"><app-cpg-card _ngcontent-ng-web-c43 _nghost-ng-web-c29>         <a _ngcontent-ng-web-c29 className   ="cpg-card ng-star-inserted" title="Farmácia 24h" href="/lojas/tipo/farmacia"><div _ngcontent-ng-web-c29 className   ="cpg-img-container" style={{"background-color": "rgb(155, 222, 231)"}}><img _ngcontent-ng-web-c29 src="images/farmacia-1591397052.png"/></div><h4 _ngcontent-ng-web-c29 className   ="cpg-title"> Аптеки </h4></a>      </app-cpg-card></li>
      
      <app-cpg-card _ngcontent-ng-web-c43 _nghost-ng-web-c29 className   ="ng-star-inserted">
        <a _ngcontent-ng-web-c29 className   ="cpg-card ng-star-inserted" title="Ver mais">
          <div _ngcontent-ng-web-c29 className   ="cpg-icon-container">
            <i _ngcontent-ng-web-c29 className   ="iconf-more-stores"></i>
          </div>
          <h4 _ngcontent-ng-web-c29 className   ="cpg-title"> Больше </h4>
        </a>
      </app-cpg-card>
    </ul>
  </div>

  </app-cpgs-container>
    <div className   ="with-margin">
      <app-items _nghost-ng-web-c44>
        <div _ngcontent-ng-web-c44 className   ="items">
          <div _ngcontent-ng-web-c44 className   ="item ng-star-inserted">
            <div _ngcontent-ng-web-c44 className   ="img">
              <i _ngcontent-ng-web-c44 className   ="iconf-clock-4"></i>
            </div>
            <div _ngcontent-ng-web-c44 className   ="description">
              <h2 _ngcontent-ng-web-c44 className   ="title">Экономь время</h2>
              <h4 _ngcontent-ng-web-c44 className   ="text">Доставка до дома меньше чем за час</h4>
            </div>
          </div>

          <div _ngcontent-ng-web-c44 className   ="item ng-star-inserted">
            <div _ngcontent-ng-web-c44 className   ="img">
              <i _ngcontent-ng-web-c44 className   ="iconf-heart3x"></i>
            </div>
            <div _ngcontent-ng-web-c44 className   ="description">
              <h2 _ngcontent-ng-web-c44 className   ="title">В надежных руках</h2><h4 _ngcontent-ng-web-c44 className   ="text">Только проверенные организации</h4>
            </div>
          </div>
          
          <div _ngcontent-ng-web-c44 className   ="item ng-star-inserted">
            <div _ngcontent-ng-web-c44 className   ="img">
              <i _ngcontent-ng-web-c44 className   ="iconf-quality3x"></i>
            </div>
            <div _ngcontent-ng-web-c44 className   ="description">
              <h2 _ngcontent-ng-web-c44 className   ="title">100% качество</h2>
              <h4 _ngcontent-ng-web-c44 className   ="text">Если ваш товар пришел в плохом состоянии, вы не будете платить за негоы!</h4></div></div></div></app-items></div>
        </div>
        <div className   ="home-container with-margin">
          <h2 _ngcontent-ng-web-c48 className   ="title"> Другие города </h2>
        <div _ngcontent-ng-web-c48 className   ="badge-row">
          <a _ngcontent-ng-web-c48 className   ="badge ng-star-inserted" href="/grande-sao-paulo"> Архангельск </a>
          <a _ngcontent-ng-web-c48 className   ="badge ng-star-inserted" href="/rio-de-janeiro"> Брянск </a>
          <a _ngcontent-ng-web-c48 className   ="badge ng-star-inserted" href="/belo-horizonte"> Волгоград </a>
          <a _ngcontent-ng-web-c48 className   ="badge ng-star-inserted" href="/curitiba"> Галицин </a>
          <a _ngcontent-ng-web-c48 className   ="badge ng-star-inserted" href="/fortaleza"> Дальнегорск </a>
          <a _ngcontent-ng-web-c48 className   ="badge ng-star-inserted" href="/recife"> Екатеринбург </a>
          <a _ngcontent-ng-web-c48 className   ="badge ng-star-inserted" href="/campinas"> Зеленогорск </a>
          <a _ngcontent-ng-web-c48 className   ="badge ng-star-inserted" href="/florianopolis"> Иркутск </a>
          <a _ngcontent-ng-web-c48 className   ="badge ng-star-inserted" href="/ribeirao-preto"> Красноярск </a>
          <a _ngcontent-ng-web-c48 className   ="badge ng-star-inserted" href="/ribeirao-preto"> Казань </a>
          <a _ngcontent-ng-web-c48 className   ="badge ng-star-inserted" href="/goiania"> Москва </a>
          <a _ngcontent-ng-web-c48 className   ="badge ng-star-inserted" href="/sao-jose-do-rio-preto"> Норильск </a>
          <a _ngcontent-ng-web-c48 className   ="badge ng-star-inserted" href="/natal"> Омск </a>
          <a _ngcontent-ng-web-c48 className   ="badge ng-star-inserted" href="/sorocaba"> Петропавловск </a>
          <a _ngcontent-ng-web-c48 className   ="badge ng-star-inserted" href="/blumenau"> Ростов </a>
          <a _ngcontent-ng-web-c48 className   ="badge ng-star-inserted" href="/anapolis"> Смоленск </a>
          <a _ngcontent-ng-web-c48 className   ="badge ng-star-inserted" href="/valinhos"> Тюмень </a>
          <a _ngcontent-ng-web-c48 className   ="badge ng-star-inserted" href="/itu"> Уфа </a>
        </div>
      </div>
    </div>
  


</span>   
  <app-product-modal _nghost-ng-web-c4 className   ="ng-star-inserted">
    <app-modal _ngcontent-ng-web-c4 id="market-product-modal" className   ="ng-tns-c26-1">
    </app-modal></app-product-modal>
  </div>
  <app-footer className   ="ng-star-inserted">
    <footer className   ="footer" id="footer">
      <div className   ="container">
        <div className   ="head-footer" id="head-footer">
          <div>
            <div className   ="cont-img">
              <img alt src="images/ico-tiempo.png"/>
            </div>
            <div className   ="cont-text">
              <span>Экономь время</span><p>Доставка до дома меньше чем за час</p></div></div><div><div className   ="cont-img"><img alt src="images/ico-amor.png"/></div><div className   ="cont-text"><span>В надежных руках</span><p>Um shopper seleciona seus produtos com amor</p></div></div><div><div className   ="cont-img"><img alt src="images/ico-calidad.png"/></div><div className   ="cont-text"><span>Qualidade 100%</span><p>Caso o seu produto chegue em mal estado, você não pagará por ele!</p></div></div></div></div>   <div className   ="footer-cont"><div className   ="container info-footer" id="info-footer"><div><h6>Categorias</h6><ul className   ="list-footer">      <li className   ="ng-star-inserted">      <a href="/lojas/tipo/supermercados" className   ="ng-star-inserted"><span>Supermercados</span></a>   </li>   <li className   ="ng-star-inserted">      <a href="/restaurantes" className   ="ng-star-inserted"><span>Restaurantes</span></a>   </li>   <li className   ="ng-star-inserted">      <a href="/lojas/tipo/adidasbotao" className   ="ng-star-inserted"><span>Adidas</span></a>   </li>   <li className   ="ng-star-inserted">      <a href="/lojas/tipo/bebidas-24" className   ="ng-star-inserted"><span>Bebidas</span></a>   </li>   <li className   ="ng-star-inserted">      <a href="/lojas/tipo/farmacia" className   ="ng-star-inserted"><span>Farmácia 24h</span></a>   </li>   <li className   ="ng-star-inserted">      <a href="/lojas/tipo/express-big" className   ="ng-star-inserted"><span>Express</span></a>   </li>   <li className   ="ng-star-inserted">      <a href="/lojas/tipo/nespresso-button" className   ="ng-star-inserted"><span>Nespresso </span></a>   </li>   <li className   ="ng-star-inserted">      <a href="/lojas/techguru" className   ="ng-star-inserted"><span>Sos iphone</span></a>   
  </li>   <li className   ="ng-star-inserted">         <a href="/mall" className   ="ng-star-inserted"><span>Lojas</span></a>      </li>   <li className   ="ng-star-inserted">      <a href="/lojas/tipo/carrefourbotao" className   ="ng-star-inserted"><span>Carrefour</span></a>   </li>   <li className   ="ng-star-inserted">      <a href="/parafuzo" className   ="ng-star-inserted"><span>Limpeza</span></a>   </li>   <li className   ="ng-star-inserted">      <a href="/lojas/tipo/petzbotao" className   ="ng-star-inserted"><span>Petz</span></a>   </li>   <li className   ="ng-star-inserted">      <a href="/getninjas" className   ="ng-star-inserted"><span>Serviços</span></a>   </li>   <li className   ="ng-star-inserted">      <a href="/lojas/tipo/natal-2018" className   ="ng-star-inserted"><span>Lojas</span></a>   </li></ul></div><div className   ="center-content"><h6>Informação de interesse</h6><ul className   ="list-footer footer-links">      <li className   ="ng-star-inserted"><a rel="nofollow" target="_blank" href="https://legal.rappi.com/brazil/termos-e-condicoes-de-uso-da-plataforma-rappi/"><span> Termos e Condições </span></a></li>   <li className   ="ng-star-inserted"><a rel="nofollow" target="_blank" href="https://soyrappi.com/?utm_source=appuser&amp;utm_medium=applk&amp;utm_campaign=rt"><span> Quero ser Rappi Entregador </span></a></li>   <li className   ="ng-star-inserted"><a rel="nofollow" target="_blank" href="https://www.rappi.com/jobs/"><span> Trabalhe conosco </span></a></li>   <li className   ="ng-star-inserted"><a rel="nofollow" target="_blank" href="https://www.rappi.com.br/blog/como-funciona-a-rappi/"><span> Como funciona a Rappi </span></a></li>   <li className   ="ng-star-inserted"><a rel="nofollow" target="_blank" href="https://surveys.rappi.com/inbound"><span> Registre seu restaurante </span></a></li>   <li className   ="ng-star-inserted"><a rel="nofollow" target="_blank" href="https://surveys.rappi.com/inbound"><span> Venda com a Rappi </span></a></li>   <li className   ="ng-star-inserted"><a rel="nofollow" target="_blank" href="https://surveys.rappi.com/inbound"><span> Seja Parceiro </span></a></li>   <li className   ="ng-star-inserted"><a rel="nofollow" target="_blank" href="https://one.rappi.com/"><span> Faça sua marca crescer - RappiOne </span></a></li>   <li className   ="ng-star-inserted"><a rel="nofollow" target="_blank" href="https://www.rappi.com.br/blog/compras-supermercado-online/"><span> Como fazer compras de supermercados </span></a></li>   <li className   ="ng-star-inserted"><a rel="nofollow" target="_blank" href="https://legal.rappi.com/brazil/aviso-de-privacidade-e-politicas-de-uso-das-informacao-utilizadas-pela-rappi/"><span> Política de processamento de dados pessoais </span></a></li>   <li className   ="ng-star-inserted"><a rel="nofollow" target="_blank" href="https://partners.rappi.com/"><span> Portal Restaurantes Parceiros </span></a></li></ul></div><div className   ="app-links"><h6>Baixe o aplicativo</h6><div className   ="cont-apps"><a rel="nofollow" target="_blank" href="https://itunes.apple.com/co/app/rappi/id984044296?mt=8"><img alt="play-store-img" className   ="ios-img" src="fonts/apple-store_app-store-pt.svg"/></a><a rel="nofollow" target="_blank" href="https://play.google.com/store/apps/details?id=com.grability.rappi"><img alt="play-store-img" className   ="android-img" src="images/play-store_play-store-br.png"/></a></div><h6 className   ="follow">Redes sociais</h6><ul className   ="redes"><li><a className   ="facebook" rel="nofollow" target="_blank" href="https://www.facebook.com/RappiBrasil/"><i className   ="iconf-facebook"></i></a></li><li><a className   ="twitter" rel="nofollow" target="_blank" href="https://twitter.com/rappibrasil?lang=es"><i className   ="iconf-twitter"></i></a></li><li><a className   ="instagram" rel="nofollow" target="_blank" href="https://www.instagram.com/rappibrasil/?hl=es"><i className   ="iconf-instagram"></i></a></li></ul><div className   ="partners-info"><a rel="nofollow" target="_blank" href="https://www.truora.com/?utm_source=rappi&amp;utm_medium=home_link&amp;utm_campaign=bottom_image"><img alt="truora-img" className   ="truora-img" src="images/truora.png"/></a>   </div></div></div><div className   ="footer-cont"><div className   ="firm-footer" id="firm-footer"><p> © 2020 DoDoma    <span className   ="ng-star-inserted"> - DoDoma SPB INTERMEDIAÇÃO DE NEGÓCIOS LTDA., CNPJ 26.900.161/0001-25,  Rua Dr Renato Paes de Barro, 33, Itaim Bibi, São Paulo/SP, Brasil. </span></p></div></div></div></footer></app-footer></div>
  
      <app-order-status-resume className   ="home ng-star-inserted">            </app-order-status-resume></app-container><script async src="js/js.js"></script><script src="js/api.js"></script><script src="js/runtime.c6ae727bd39fd1bf6b0f.js" defer></script><script src="js/polyfills-es5.66f25889e6ec334a8f0e.js" noModule defer>
      </script><script src="js/polyfills.93e277369afc6b115767.js" defer></script><script src="js/scripts.d3ce5f863e8906b6cfa9.js" defer></script><script src="js/vendor.0b684f0c2981f44b60fb.js" defer></script>
      <script src="js/main.695629c62b9e6030ffb7.js" defer></script>
      <img src="DFPAudiencePixel%3Bord%3D6893749857115.318%3Bdc_seg%3D638494743" width="1" height="1" border="0"/>
    </div>
    
        
    )
}
