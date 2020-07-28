import React, {useState, useEffect} from 'react'
import {makeStyles} from '@material-ui/core/styles'

import logo from '../../client/public/images/br-flag.png';
import sportsImg from '../../client/public/images/sports.png';
import marketImg from "../../client/public/images/markets.png";
import pharmacyImg from "../../client/public/images/pharmacy.png";
import burgerImg from "../../client/public/images/burguer.png";
import mrsImg from "../../client/public/images/mrs.png";
import marketsImg from "../../client/public/images/markets.png";
import restaurantImg from "../../client/public/images/restaurant-1591639715.png";
import adidasImg from "../../client/public/images/adidas_botao-1585611619.png";
import liquorImg from "../../client/public/images/liquor_store-1593126769.png";
import fashionImg from "../../client/public/images/fashion.png";
import farmaciaImg from "../../client/public/images/farmacia-1591397052.png";
import amorImg from "../../client/public/images/ico-amor.png";
import tiempoImg from "../../client/public/images/ico-tiempo.png";
import calidadImg from "../../client/public/images/ico-calidad.png";
import truoraImg from "../../client/public/images/truora.png";
import appleImg from "../../client/public/fonts/apple-store_app-store-pt.svg";
import playStore from "../../client/public/images/play-store_play-store-br.png";




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
      <app-header  className="home ng-star-inserted">
       <app-header-stores  className="ng-star-inserted">
      <div  className="stores-list-cont hidden-mobile">
        <div  className="stores ng-star-inserted">
          <ul id="categories-sub-menu">
            <li  className="normal-stores ng-star-inserted">
              <a href="/lojas/tipo/supermercados"  className="ng-star-inserted"> Supermercados </a>   </li><li  className="normal-stores ng-star-inserted">      <a href="/restaurantes"  className="ng-star-inserted"> Restaurantes </a>   </li><li  className="normal-stores ng-star-inserted">      <a href="/lojas/tipo/adidasbotao"  className="ng-star-inserted"> Adidas </a>   </li><li  className="normal-stores ng-star-inserted">      <a href="/lojas/tipo/bebidas-24"  className="ng-star-inserted"> Bebidas </a>   </li><li  className="normal-stores ng-star-inserted">      <a href="/lojas/tipo/farmacia"  className="ng-star-inserted"> Farmácia 24h </a>   </li>   <li  className="view-more-stores ng-star-inserted"><a> Ver mais </a></li><li  className="special-links"><ul><li routerlinkactive="active"><a routerlink="/prime" href="/prime"><i  className="iconf-mustache2"></i> RappiPrime </a></li>   <li><a rel="nofollow" target="_blank" href="https://soyrappi.com/?utm_source=appuser&amp;utm_medium=applk&amp;utm_campaign=rt"><i  className="iconf-quick-icon"></i> Entregador </a></li><li><a rel="nofollow" target="_blank" href="https://jobs.rappi.com"><i  className="iconf-quick-icon"></i> Trabalhe conosco </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</app-header-stores>
</app-header>   
<div id="app-container"  className="app-container home header-active with-search-bar"><div  className="total-width">      
<span  className="app-span-container ng-star-inserted"><app-page-not-found>   
    <div  className="ng-star-inserted">   </div></app-page-not-found>
    <router-outlet></router-outlet>
    <div  className="ng-star-inserted"><app-banner><div  className="banner-container"><div  className="banner guest-banner">         
    <img  className="img-1 ng-star-inserted" src={sportsImg}/>
    <img  className="img-2 ng-star-inserted" src={pharmacyImg}/>
  <img  className="img-3 ng-star-inserted" src={burgerImg}/>
  <img  className="img-4 ng-star-inserted" src={mrsImg}/>      
  <div  className="title">   <h1  className="bold ng-star-inserted" style={{"font-size": "40px"}}>Marketplace что-то такое    </h1></div></div>   
    
    <div  className="location-container ng-star-inserted"><div  className="location-input border-input"><i  className="iconf-pointer-secondary-fill pointer"></i><app-search-autocomplete  className="input"><input id="autocomplete-address-input" type="text" placeholder="Введите свой адрес"  className="ng-untouched ng-pristine ng-valid pac-target-input" autoComplete="off" /><span  className="no-search-results-content"></span></app-search-autocomplete>   </div><button  className="primary-button-filled"> Искать </button></div>
    <img  className="img-5 ng-star-inserted" src={fashionImg}/>
    <img  className="img-6 ng-star-inserted" src={marketImg}/></div></app-banner>
    
    <div  className="home-container"><app-cpgs-container _nghost-ng-web-c43><div  _ngcontent-ng-web-c43="true"  className="cpgs-container"><h4  _ngcontent-ng-web-c43="true"  className="subtitle"> Выберите подходящую категорию </h4><h2  _ngcontent-ng-web-c43="true"  className="title"> Категории </h2><ul  _ngcontent-ng-web-c43="true"  className="cpgs-grid">
      
      <li  _ngcontent-ng-web-c43="true"  className="store-item ng-star-inserted">
        <app-cpg-card  _ngcontent-ng-web-c43="true" _nghost-ng-web-c29>
          <a  _ngcontent-ng-web-c29="true"  className="cpg-card ng-star-inserted" title="Supermercados" href="/lojas/tipo/supermercados">
            <div  _ngcontent-ng-web-c29="true"  className="cpg-img-container" style={{"background-color": "rgb(238, 244, 198)"}}>
              <img  _ngcontent-ng-web-c29="true" src={marketsImg}/>
            </div>
            <h4  _ngcontent-ng-web-c29="true"  className="cpg-title"> Супермаркеты </h4>
          </a>
        </app-cpg-card>
      </li>
      
      <li  _ngcontent-ng-web-c43="true"  className="store-item ng-star-inserted"><app-cpg-card  _ngcontent-ng-web-c43="true" _nghost-ng-web-c29>         <a  _ngcontent-ng-web-c29="true"  className="cpg-card ng-star-inserted" title="Restaurantes" href="/restaurantes"><div  _ngcontent-ng-web-c29="true"  className="cpg-img-container" style={{"background-color": "rgb(255, 131, 86)"}}>
        <img  _ngcontent-ng-web-c29="true" src={restaurantImg}/></div><h4  _ngcontent-ng-web-c29="true"  className="cpg-title"> Рестораны </h4></a>      </app-cpg-card></li>         
      
      <li  _ngcontent-ng-web-c43="true"  className="store-item ng-star-inserted"><app-cpg-card  _ngcontent-ng-web-c43="true" _nghost-ng-web-c29>         <a  _ngcontent-ng-web-c29="true"  className="cpg-card ng-star-inserted" title="Adidas" href="/lojas/tipo/adidasbotao"><div  _ngcontent-ng-web-c29="true"  className="cpg-img-container" style={{"background-color": "rgb(255, 255, 255)"}}>
        <img  _ngcontent-ng-web-c29="true" src={adidasImg}/></div><h4  _ngcontent-ng-web-c29="true"  className="cpg-title"> Спорт </h4></a>      </app-cpg-card></li>
      
               <li  _ngcontent-ng-web-c43="true"  className="store-item ng-star-inserted"><app-cpg-card  _ngcontent-ng-web-c43="true" _nghost-ng-web-c29>         <a  _ngcontent-ng-web-c29="true"  className="cpg-card ng-star-inserted" title="Bebidas" href="/lojas/tipo/bebidas-24"><div  _ngcontent-ng-web-c29="true"  className="cpg-img-container" style={{"background-color": "rgb(251, 233, 201)"}}>
                 <img  _ngcontent-ng-web-c29="true" src={liquorImg}/></div><h4  _ngcontent-ng-web-c29="true"  className="cpg-title"> Напитки </h4></a>      </app-cpg-card></li>         
      
      <li  _ngcontent-ng-web-c43="true"  className="store-item ng-star-inserted"><app-cpg-card  _ngcontent-ng-web-c43="true" _nghost-ng-web-c29>         <a  _ngcontent-ng-web-c29="true"  className="cpg-card ng-star-inserted" title="Farmácia 24h" href="/lojas/tipo/farmacia"><div  _ngcontent-ng-web-c29="true"  className="cpg-img-container" style={{"background-color": "rgb(155, 222, 231)"}}>
        <img  _ngcontent-ng-web-c29="true" src={farmaciaImg}/></div><h4  _ngcontent-ng-web-c29="true"  className="cpg-title"> Аптеки </h4></a>      </app-cpg-card></li>
      
      <app-cpg-card  _ngcontent-ng-web-c43="true" _nghost-ng-web-c29  className="ng-star-inserted">
        <a  _ngcontent-ng-web-c29="true"  className="cpg-card ng-star-inserted" title="Ver mais">
          <div  _ngcontent-ng-web-c29="true"  className="cpg-icon-container">
            <i  _ngcontent-ng-web-c29="true"  className="iconf-more-stores"></i>
          </div>
          <h4  _ngcontent-ng-web-c29="true"  className="cpg-title"> Больше </h4>
        </a>
      </app-cpg-card>
    </ul>
  </div>

  </app-cpgs-container>
    <div  className="with-margin">
      <app-items _nghost-ng-web-c44>
        <div  _ngcontent-ng-web-c44="true"  className="items">
          <div  _ngcontent-ng-web-c44="true"  className="item ng-star-inserted">
            <div  _ngcontent-ng-web-c44="true"  className="img">
              <i  _ngcontent-ng-web-c44="true"  className="iconf-clock-4"></i>
            </div>
            <div  _ngcontent-ng-web-c44="true"  className="description">
              <h2  _ngcontent-ng-web-c44="true"  className="title">Экономь время</h2>
              <h4  _ngcontent-ng-web-c44="true"  className="text">Доставка до дома меньше чем за час</h4>
            </div>
          </div>

          <div  _ngcontent-ng-web-c44="true"  className="item ng-star-inserted">
            <div  _ngcontent-ng-web-c44="true"  className="img">
              <i  _ngcontent-ng-web-c44="true"  className="iconf-heart3x"></i>
            </div>
            <div  _ngcontent-ng-web-c44="true"  className="description">
              <h2  _ngcontent-ng-web-c44="true"  className="title">В надежных руках</h2><h4  _ngcontent-ng-web-c44="true"  className="text">Только проверенные организации</h4>
            </div>
          </div>
          
          <div  _ngcontent-ng-web-c44="true"  className="item ng-star-inserted">
            <div  _ngcontent-ng-web-c44="true"  className="img">
              <i  _ngcontent-ng-web-c44="true"  className="iconf-quality3x"></i>
            </div>
            <div  _ngcontent-ng-web-c44="true"  className="description">
              <h2  _ngcontent-ng-web-c44="true"  className="title">100% качество</h2>
              <h4  _ngcontent-ng-web-c44="true"  className="text">Если ваш товар пришел в плохом состоянии, вы не будете платить за негоы!</h4></div></div></div></app-items></div>
        </div>
        <div  className="home-container with-margin">
          <h2 _ngcontent-ng-web-c48="true"  className="title"> Другие города </h2>
        <div _ngcontent-ng-web-c48="true"  className="badge-row">
          <a _ngcontent-ng-web-c48="true"  className="badge ng-star-inserted" href="/grande-sao-paulo"> Архангельск </a>
          <a _ngcontent-ng-web-c48="true"  className="badge ng-star-inserted" href="/rio-de-janeiro"> Брянск </a>
          <a _ngcontent-ng-web-c48="true"  className="badge ng-star-inserted" href="/belo-horizonte"> Волгоград </a>
          <a _ngcontent-ng-web-c48="true"  className="badge ng-star-inserted" href="/curitiba"> Галицин </a>
          <a _ngcontent-ng-web-c48="true"  className="badge ng-star-inserted" href="/fortaleza"> Дальнегорск </a>
          <a _ngcontent-ng-web-c48="true"  className="badge ng-star-inserted" href="/recife"> Екатеринбург </a>
          <a _ngcontent-ng-web-c48="true"  className="badge ng-star-inserted" href="/campinas"> Зеленогорск </a>
          <a _ngcontent-ng-web-c48="true"  className="badge ng-star-inserted" href="/florianopolis"> Иркутск </a>
          <a _ngcontent-ng-web-c48="true"  className="badge ng-star-inserted" href="/ribeirao-preto"> Красноярск </a>
          <a _ngcontent-ng-web-c48="true"  className="badge ng-star-inserted" href="/ribeirao-preto"> Казань </a>
          <a _ngcontent-ng-web-c48="true"  className="badge ng-star-inserted" href="/goiania"> Москва </a>
          <a _ngcontent-ng-web-c48="true"  className="badge ng-star-inserted" href="/sao-jose-do-rio-preto"> Норильск </a>
          <a _ngcontent-ng-web-c48="true"  className="badge ng-star-inserted" href="/natal"> Омск </a>
          <a _ngcontent-ng-web-c48="true"  className="badge ng-star-inserted" href="/sorocaba"> Петропавловск </a>
          <a _ngcontent-ng-web-c48="true"  className="badge ng-star-inserted" href="/blumenau"> Ростов </a>
          <a _ngcontent-ng-web-c48="true"  className="badge ng-star-inserted" href="/anapolis"> Смоленск </a>
          <a _ngcontent-ng-web-c48="true"  className="badge ng-star-inserted" href="/valinhos"> Тюмень </a>
          <a _ngcontent-ng-web-c48="true"  className="badge ng-star-inserted" href="/itu"> Уфа </a>
        </div>
      </div>
    </div>
  


</span>   
  <app-product-modal _nghost-ng-web-c4  className="ng-star-inserted">
    <app-modal _ngcontent-ng-web-c4 id="market-product-modal"  className="ng-tns-c26-1">
    </app-modal></app-product-modal>
  </div>
  <app-footer  className="ng-star-inserted">
    <footer  className="footer" id="footer">
      <div  className="container">
        <div  className="head-footer" id="head-footer">
          <div>
            <div  className="cont-img">
              <img src={tiempoImg}/>
            </div>
            <div  className="cont-text">
              <span>Экономь время</span><p>Доставка до дома меньше чем за час</p></div></div><div><div  className="cont-img">
                <img src={amorImg}/></div><div  className="cont-text"><span>В надежных руках</span><p>Um shopper seleciona seus produtos com amor</p></div></div><div><div  className="cont-img">
                  <img src={calidadImg}/></div><div  className="cont-text"><span>Qualidade 100%</span><p>Caso o seu produto chegue em mal estado, você não pagará por ele!</p></div></div></div></div>   <div  className="footer-cont"><div  className="container info-footer" id="info-footer"><div><h6>Categorias</h6><ul  className="list-footer">      <li  className="ng-star-inserted">      <a href="/lojas/tipo/supermercados"  className="ng-star-inserted"><span>Supermercados</span></a>   </li>   <li  className="ng-star-inserted">      <a href="/restaurantes"  className="ng-star-inserted"><span>Restaurantes</span></a>   </li>   <li  className="ng-star-inserted">      <a href="/lojas/tipo/adidasbotao"  className="ng-star-inserted"><span>Adidas</span></a>   </li>   <li  className="ng-star-inserted">      <a href="/lojas/tipo/bebidas-24"  className="ng-star-inserted"><span>Bebidas</span></a>   </li>   <li  className="ng-star-inserted">      <a href="/lojas/tipo/farmacia"  className="ng-star-inserted"><span>Farmácia 24h</span></a>   </li>   <li  className="ng-star-inserted">      <a href="/lojas/tipo/express-big"  className="ng-star-inserted"><span>Express</span></a>   </li>   <li  className="ng-star-inserted">      <a href="/lojas/tipo/nespresso-button"  className="ng-star-inserted"><span>Nespresso </span></a>   </li>   <li  className="ng-star-inserted">      <a href="/lojas/techguru"  className="ng-star-inserted"><span>Sos iphone</span></a>   
  </li>   <li  className="ng-star-inserted">         <a href="/mall"  className="ng-star-inserted"><span>Lojas</span></a>      </li>   <li  className="ng-star-inserted">      <a href="/lojas/tipo/carrefourbotao"  className="ng-star-inserted"><span>Carrefour</span></a>   </li>   <li  className="ng-star-inserted">      <a href="/parafuzo"  className="ng-star-inserted"><span>Limpeza</span></a>   </li>   <li  className="ng-star-inserted">      <a href="/lojas/tipo/petzbotao"  className="ng-star-inserted"><span>Petz</span></a>   </li>   <li  className="ng-star-inserted">      <a href="/getninjas"  className="ng-star-inserted"><span>Serviços</span></a>   </li>   <li  className="ng-star-inserted">      <a href="/lojas/tipo/natal-2018"  className="ng-star-inserted"><span>Lojas</span></a>   </li></ul></div><div  className="center-content"><h6>Informação de interesse</h6><ul  className="list-footer footer-links">      <li  className="ng-star-inserted"><a rel="nofollow" target="_blank" href="https://legal.rappi.com/brazil/termos-e-condicoes-de-uso-da-plataforma-rappi/"><span> Termos e Condições </span></a></li>   <li  className="ng-star-inserted"><a rel="nofollow" target="_blank" href="https://soyrappi.com/?utm_source=appuser&amp;utm_medium=applk&amp;utm_campaign=rt"><span> Quero ser Rappi Entregador </span></a></li>   <li  className="ng-star-inserted"><a rel="nofollow" target="_blank" href="https://www.rappi.com/jobs/"><span> Trabalhe conosco </span></a></li>   <li  className="ng-star-inserted"><a rel="nofollow" target="_blank" href="https://www.rappi.com.br/blog/como-funciona-a-rappi/"><span> Como funciona a Rappi </span></a></li>   <li  className="ng-star-inserted"><a rel="nofollow" target="_blank" href="https://surveys.rappi.com/inbound"><span> Registre seu restaurante </span></a></li>   <li  className="ng-star-inserted"><a rel="nofollow" target="_blank" href="https://surveys.rappi.com/inbound"><span> Venda com a Rappi </span></a></li>   <li  className="ng-star-inserted"><a rel="nofollow" target="_blank" href="https://surveys.rappi.com/inbound"><span> Seja Parceiro </span></a></li>   <li  className="ng-star-inserted"><a rel="nofollow" target="_blank" href="https://one.rappi.com/"><span> Faça sua marca crescer - RappiOne </span></a></li>   <li  className="ng-star-inserted"><a rel="nofollow" target="_blank" href="https://www.rappi.com.br/blog/compras-supermercado-online/"><span> Como fazer compras de supermercados </span></a></li>   <li  className="ng-star-inserted"><a rel="nofollow" target="_blank" href="https://legal.rappi.com/brazil/aviso-de-privacidade-e-politicas-de-uso-das-informacao-utilizadas-pela-rappi/"><span> Política de processamento de dados pessoais </span></a></li>   <li  className="ng-star-inserted"><a rel="nofollow" target="_blank" href="https://partners.rappi.com/"><span> Portal Restaurantes Parceiros </span></a></li></ul></div><div  className="app-links"><h6>Baixe o aplicativo</h6><div  className="cont-apps"><a rel="nofollow" target="_blank" href="https://itunes.apple.com/co/app/rappi/id984044296?mt=8">
    <img  className="ios-img" src={appleImg}/></a><a rel="nofollow" target="_blank" href="https://play.google.com/store/apps/details?id=com.grability.rappi">
    <img className="android-img" src={playStore}/></a></div><h6  className="follow">Redes sociais</h6><ul  className="redes"><li><a  className="facebook" rel="nofollow" target="_blank" href="https://www.facebook.com/RappiBrasil/"><i  className="iconf-facebook"></i></a></li><li><a  className="twitter" rel="nofollow" target="_blank" href="https://twitter.com/rappibrasil?lang=es"><i  className="iconf-twitter"></i></a></li><li><a  className="instagram" rel="nofollow" target="_blank" href="https://www.instagram.com/rappibrasil/?hl=es"><i  className="iconf-instagram"></i></a></li></ul><div  className="partners-info"><a rel="nofollow" target="_blank" href="https://www.truora.com/?utm_source=rappi&amp;utm_medium=home_link&amp;utm_campaign=bottom_image">
      <img className="truora-img" src={truoraImg}/></a>   
      </div></div></div><div  className="footer-cont"><div  className="firm-footer" id="firm-footer"><p> © 2020 DoDoma    <span  className="ng-star-inserted"> - DoDoma SPB INTERMEDIAÇÃO DE NEGÓCIOS LTDA., CNPJ 26.900.161/0001-25,  Rua Dr Renato Paes de Barro, 33, Itaim Bibi, São Paulo/SP, Brasil. </span></p></div></div></div></footer></app-footer></div>
  
      <app-order-status-resume  className="home ng-star-inserted">            </app-order-status-resume></app-container>
      <script async src="js/js.js"></script><script src="js/api.js"></script><script src="js/runtime.c6ae727bd39fd1bf6b0f.js" defer></script><script src="js/polyfills-es5.66f25889e6ec334a8f0e.js" noModule defer>
      </script><script src="js/polyfills.93e277369afc6b115767.js" defer></script>
      <script src="js/scripts.d3ce5f863e8906b6cfa9.js" defer></script><script src="js/vendor.0b684f0c2981f44b60fb.js" defer></script>
      <script src="js/main.695629c62b9e6030ffb7.js" defer></script>
      <img src="DFPAudiencePixel%3Bord%3D6893749857115.318%3Bdc_seg%3D638494743" width="1" height="1" border="0"/>
    </div>
    
        
    )
}
