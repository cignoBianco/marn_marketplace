import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import {list} from './api-shop.js'
import {Link} from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  root: theme.mixins.gutters({
    maxWidth: 600,
    margin: 'auto',
    padding: theme.spacing(3),
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(3)
  }),
  title: {
    margin: `${theme.spacing(3)}px 0 ${theme.spacing(2)}px`,
    color: theme.palette.protectedTitle,
    textAlign: 'center',
    fontSize: '1.2em'
  },
  avatar:{
    width: 100,
    height: 100
  },
  subheading: {
    color: theme.palette.text.secondary
  },
  shopTitle: {
    fontSize: '1.2em',
    marginBottom: '5px'
  },
  details: {
    padding: '24px'
  }
}))
export default function Shops(){
  const classes = useStyles()
  const [shops, setShops] = useState([])

  useEffect(() => {
    const abortController = new AbortController()
    const signal = abortController.signal
    list(signal).then((data) => {
      if (data.error) {
        console.log(data.error)
      } else {
        setShops(data)
      }
    })
    return function cleanup(){
      abortController.abort()
    }

  }, [])

    return (
    <div>

<app-by-stores-home _nghost-ng-web-c48="" class="ng-star-inserted">
   <div _ngcontent-ng-web-c48="" class="by-stores-container pt-75">
      <div _ngcontent-ng-web-c48="" class="generic-restaurant-categories ng-star-inserted  pt-50">
         <app-generic-categories _ngcontent-ng-web-c48="">
            <div class="categories">
               <ul id="categories-sub-menu">
                  <li class="title-order-categories ng-star-inserted">
                     <p>Organizar por</p>
                  </li>
                  <li routerlinkactive="active" class="ng-star-inserted active"><a href="/restaurantes"> Todos </a></li>
                  <span class="ng-star-inserted">
                     <li><a href="/restaurantes/category/pizza" class="ng-star-inserted"> Pizza </a></li>
                  </span>
                  <span class="ng-star-inserted">
                     <li><a href="/restaurantes/category/burgers" class="ng-star-inserted"> Burgers </a></li>
                  </span>
                  <span class="ng-star-inserted">
                     <li><a href="/restaurantes/category/japonesa" class="ng-star-inserted"> Japonesa </a></li>
                  </span>
                  <span class="ng-star-inserted">
                     <li><a href="/restaurantes/category/saudavel" class="ng-star-inserted"> Saudável </a></li>
                  </span>
                  <span class="ng-star-inserted">
                     <li><a href="/restaurantes/category/arabe" class="ng-star-inserted"> Árabe </a></li>
                  </span>
                  <span class="ng-star-inserted">
                     <li><a href="/restaurantes/category/brasileira" class="ng-star-inserted"> Brasileira </a></li>
                  </span>
                  <span class="ng-star-inserted">
                     <li><a href="/restaurantes/category/asiatica" class="ng-star-inserted"> Asiática </a></li>
                  </span>
                  <span class="ng-star-inserted">
                     <li><a href="/restaurantes/category/grelhado" class="ng-star-inserted"> Grelhado </a></li>
                  </span>
               </ul>
            </div>
         </app-generic-categories>
      </div>
      <div _ngcontent-ng-web-c48="" class="by-stores">
         <div _ngcontent-ng-web-c48="" class="open-stores" id="restaurantsResult">
            <div _ngcontent-ng-web-c48="" class="by-stores-breadcrumbs">
               <h1 _ngcontent-ng-web-c48=""> Restaurantes e Cafés para Você </h1>
            </div>
            <app-seo-breadcrumbs-section _ngcontent-ng-web-c48="" class="ng-star-inserted">
            </app-seo-breadcrumbs-section>
            <app-store-list _ngcontent-ng-web-c48="">
               <div class="store-list-boxes-grid">
                 
               {shops.map((shop, i) => {
                 return <Link to={"/shops/"+shop._id} key={i}>
                  <div class="store-boxes ng-star-inserted">
                     <div class="store-item-box">
                        <app-store-item _nghost-ng-web-c55="">
                           <article _ngcontent-ng-web-c55="">
                              <a _ngcontent-ng-web-c55="" class="store-item" id="store-900030623" href={"/shops/"+shop._id} key={i}> 
                                 <span _ngcontent-ng-web-c55="" class="store-background ng-star-inserted" style={{ backgroundImage: "url("+ '/api/shops/logo/'+shop._id+"?" + new Date().getTime() +")"}}></span>
                                 <span _ngcontent-ng-web-c55="" class="store-info ng-star-inserted">
                                    <div _ngcontent-ng-web-c55="" class="container-title"><span _ngcontent-ng-web-c55="" class="store-name" title="Nakamura"> {shop.name} </span></div>
                                    <span _ngcontent-ng-web-c55="" class="store-tags ng-star-inserted" title="Japonesa · Asiática"> {shop.description} </span><span _ngcontent-ng-web-c55="" class="store-filters"><span _ngcontent-ng-web-c55="" class="store-eta ng-star-inserted"><i _ngcontent-ng-web-c55="" class="iconf-clock-4"></i> 40 min </span><span _ngcontent-ng-web-c55="" class="price ng-star-inserted"><span _ngcontent-ng-web-c55="" class="separator">●</span> R$&nbsp;9,90 </span></span>
                                 </span>
                              </a>
                              <app-marketplace-component _ngcontent-ng-web-c55="" _nghost-ng-web-c57="" class="ng-star-inserted">
                                 <span _ngcontent-ng-web-c57="" class="is-marketplace">
                                    <div _ngcontent-ng-web-c57="" class="is-marketplace-content">
                                       <p _ngcontent-ng-web-c57="" class="f-caption-2">Externo</p>
                                       <i _ngcontent-ng-web-c57="" class="iconf-marketplace"></i>
                                    </div>
                                 </span>
                              </app-marketplace-component>
                           </article>
                        </app-store-item>
                     </div>
               </div></Link>})}
                  <div class="store-boxes ng-star-inserted">
                     <div class="store-item-box">
                        <app-store-item _nghost-ng-web-c55="">
                           <article _ngcontent-ng-web-c55="">
                              <a _ngcontent-ng-web-c55="" class="store-item" id="store-900139199" href="/restaurantes/diaspizza">
                                 <span _ngcontent-ng-web-c55="" class="store-background ng-star-inserted" style={{ backgroundImage: "url('https://images.rappi.com.br/restaurants_background/homehjgsio28d9e-1588702822833.jpg?d=128x80&amp;e=webp')"}}></span>
                                 <span _ngcontent-ng-web-c55="" class="store-info ng-star-inserted">
                                    <div _ngcontent-ng-web-c55="" class="container-title"><span _ngcontent-ng-web-c55="" class="store-name" title="Dias Pizza"> Dias Pizza </span></div>
                                    <span _ngcontent-ng-web-c55="" class="store-tags ng-star-inserted" title="Pizza"> Pizza </span><span _ngcontent-ng-web-c55="" class="store-filters"><span _ngcontent-ng-web-c55="" class="store-eta ng-star-inserted"><i _ngcontent-ng-web-c55="" class="iconf-clock-4"></i> 30 min </span></span>
                                    <app-global-offers _ngcontent-ng-web-c55="" class="ng-star-inserted">
                                       <div class="app-global-offers">
                                          <div class="global-offers ng-star-inserted" style={{backgroundImage: 'linear-gradient(to right, rgb(143, 58, 255), rgb(104, 22, 252))'}}>
                                             <p>ATÉ 31% OFF</p>
                                          </div>
                                          <app-modal id="global-offers" class="ng-tns-c24-11"></app-modal>
                                       </div>
                                    </app-global-offers>
                                 </span>
                              </a>
                              <app-marketplace-component _ngcontent-ng-web-c55="" _nghost-ng-web-c57="" class="ng-star-inserted">
                                 <span _ngcontent-ng-web-c57="" class="is-marketplace">
                                    <div _ngcontent-ng-web-c57="" class="is-marketplace-content">
                                       <p _ngcontent-ng-web-c57="" class="f-caption-2">Externo</p>
                                       <i _ngcontent-ng-web-c57="" class="iconf-marketplace"></i>
                                    </div>
                                 </span>
                              </app-marketplace-component>
                           </article>
                        </app-store-item>
                     </div>
                  </div>
                  <div class="store-boxes ng-star-inserted">
                     <div class="store-item-box">
                        <app-store-item _nghost-ng-web-c55="">
                           <article _ngcontent-ng-web-c55="">
                              <a _ngcontent-ng-web-c55="" class="store-item" id="store-900139144" href="/restaurantes/dias-burguer">
                                 <span _ngcontent-ng-web-c55="" class="store-background ng-star-inserted" style={{ backgroundImage: "url('https://images.rappi.com.br/restaurants_background/hometer03-1588688969359.jpg?d=128x80&amp;e=webp')"}}></span>
                                 <span _ngcontent-ng-web-c55="" class="store-info ng-star-inserted">
                                    <div _ngcontent-ng-web-c55="" class="container-title"><span _ngcontent-ng-web-c55="" class="store-name" title="Dias Burgers"> Dias Burgers </span></div>
                                    <span _ngcontent-ng-web-c55="" class="store-tags ng-star-inserted" title="Burgers · Grelhado"> Burgers ,  Grelhado </span><span _ngcontent-ng-web-c55="" class="store-filters"><span _ngcontent-ng-web-c55="" class="store-eta ng-star-inserted"><i _ngcontent-ng-web-c55="" class="iconf-clock-4"></i> 30 min </span></span>
                                    <app-global-offers _ngcontent-ng-web-c55="" class="ng-star-inserted">
                                       <div class="app-global-offers">
                                          <div class="global-offers ng-star-inserted" style={{backgroundImage: 'linear-gradient(to right, rgb(143, 58, 255), rgb(104, 22, 252))'}}>
                                             <p>ATÉ 14% OFF</p>
                                          </div>
                                          <app-modal id="global-offers" class="ng-tns-c24-12"></app-modal>
                                       </div>
                                    </app-global-offers>
                                 </span>
                              </a>
                              <app-marketplace-component _ngcontent-ng-web-c55="" _nghost-ng-web-c57="" class="ng-star-inserted">
                                 <span _ngcontent-ng-web-c57="" class="is-marketplace">
                                    <div _ngcontent-ng-web-c57="" class="is-marketplace-content">
                                       <p _ngcontent-ng-web-c57="" class="f-caption-2">Externo</p>
                                       <i _ngcontent-ng-web-c57="" class="iconf-marketplace"></i>
                                    </div>
                                 </span>
                              </app-marketplace-component>
                           </article>
                        </app-store-item>
                     </div>
                  </div>
                  <div class="store-boxes ng-star-inserted">
                     <div class="store-item-box">
                        <app-store-item _nghost-ng-web-c55="">
                           <article _ngcontent-ng-web-c55="">
                              <a _ngcontent-ng-web-c55="" class="store-item" id="store-900119168" href="/restaurantes/kyara-sushi">
                                 <span _ngcontent-ng-web-c55="" class="store-background ng-star-inserted" style={{ backgroundImage: "url('https://images.rappi.com.br/restaurants_background/dsad45125-1577729170191.jpg?d=128x80&amp;e=webp')"}}></span>
                                 <span _ngcontent-ng-web-c55="" class="store-info ng-star-inserted">
                                    <div _ngcontent-ng-web-c55="" class="container-title"><span _ngcontent-ng-web-c55="" class="store-name" title="Kyara Sushi"> Kyara Sushi </span></div>
                                    <span _ngcontent-ng-web-c55="" class="store-tags ng-star-inserted" title="Japonesa"> Japonesa </span><span _ngcontent-ng-web-c55="" class="store-filters"><span _ngcontent-ng-web-c55="" class="store-eta ng-star-inserted"><i _ngcontent-ng-web-c55="" class="iconf-clock-4"></i> 30 min </span><span _ngcontent-ng-web-c55="" class="price ng-star-inserted"><span _ngcontent-ng-web-c55="" class="separator">●</span> R$&nbsp;5,00 </span></span>
                                 </span>
                              </a>
                              <app-marketplace-component _ngcontent-ng-web-c55="" _nghost-ng-web-c57="" class="ng-star-inserted">
                                 <span _ngcontent-ng-web-c57="" class="is-marketplace">
                                    <div _ngcontent-ng-web-c57="" class="is-marketplace-content">
                                       <p _ngcontent-ng-web-c57="" class="f-caption-2">Externo</p>
                                       <i _ngcontent-ng-web-c57="" class="iconf-marketplace"></i>
                                    </div>
                                 </span>
                              </app-marketplace-component>
                           </article>
                        </app-store-item>
                     </div>
                  </div>
                  <div class="store-boxes ng-star-inserted">
                     <div class="store-item-box">
                        <app-store-item _nghost-ng-web-c55="">
                           <article _ngcontent-ng-web-c55="">
                              <a _ngcontent-ng-web-c55="" class="store-item" id="store-900065438" href="/restaurantes/mestres-do-sushi">
                                 <span _ngcontent-ng-web-c55="" class="store-background ng-star-inserted" style={{backgroundImage: "url('https://images.rappi.com.br/restaurants_background/900030623-1551975847.jpg?d=128x80&amp;e=webp')"}}></span>
                                 <span _ngcontent-ng-web-c55="" class="store-info ng-star-inserted">
                                    <div _ngcontent-ng-web-c55="" class="container-title"><span _ngcontent-ng-web-c55="" class="store-name" title="Mestres do Sushi"> Mestres do Sushi </span></div>
                                    <span _ngcontent-ng-web-c55="" class="store-tags ng-star-inserted" title="Japonesa · Asiática"> Japonesa ,  Asiática </span><span _ngcontent-ng-web-c55="" class="store-filters"><span _ngcontent-ng-web-c55="" class="store-eta ng-star-inserted"><i _ngcontent-ng-web-c55="" class="iconf-clock-4"></i> 30 min </span><span _ngcontent-ng-web-c55="" class="price ng-star-inserted"><span _ngcontent-ng-web-c55="" class="separator">●</span> R$&nbsp;10,90 </span></span>
                                 </span>
                              </a>
                              <app-marketplace-component _ngcontent-ng-web-c55="" _nghost-ng-web-c57="" class="ng-star-inserted">
                                 <span _ngcontent-ng-web-c57="" class="is-marketplace">
                                    <div _ngcontent-ng-web-c57="" class="is-marketplace-content">
                                       <p _ngcontent-ng-web-c57="" class="f-caption-2">Externo</p>
                                       <i _ngcontent-ng-web-c57="" class="iconf-marketplace"></i>
                                    </div>
                                 </span>
                              </app-marketplace-component>
                           </article>
                        </app-store-item>
                     </div>
                  </div>
                  <div class="store-boxes ng-star-inserted">
                     <div class="store-item-box">
                        <app-store-item _nghost-ng-web-c55="">
                           <article _ngcontent-ng-web-c55="">
                              <a _ngcontent-ng-web-c55="" class="store-item" id="store-900140033" href="/restaurantes/pizza-vip---centro">
                                 <span _ngcontent-ng-web-c55="" class="store-background ng-star-inserted" style={{ backgroundImage: "url('https://images.rappi.com.br/restaurants_background/home1hsvdgh2-1589206251341.jpg?d=128x80&amp;e=webp')"}}></span>
                                 <span _ngcontent-ng-web-c55="" class="store-info ng-star-inserted">
                                    <div _ngcontent-ng-web-c55="" class="container-title"><span _ngcontent-ng-web-c55="" class="store-name" title="Pizza Vip "> Pizza Vip  </span></div>
                                    <span _ngcontent-ng-web-c55="" class="store-tags ng-star-inserted" title="Pizza"> Pizza </span><span _ngcontent-ng-web-c55="" class="store-filters"><span _ngcontent-ng-web-c55="" class="store-eta ng-star-inserted"><i _ngcontent-ng-web-c55="" class="iconf-clock-4"></i> 31 min </span><span _ngcontent-ng-web-c55="" class="price ng-star-inserted"><span _ngcontent-ng-web-c55="" class="separator">●</span> R$&nbsp;13,20 </span></span>
                                 </span>
                              </a>
                           </article>
                        </app-store-item>
                     </div>
                  </div>
               </div>
            </app-store-list>
         </div>
         <div _ngcontent-ng-web-c48="" class="load-more-button ng-star-inserted"><button _ngcontent-ng-web-c48="" class="button-loading-search primary-button-filled ng-star-inserted"> Ver mais </button></div>
      </div>
   </div>
   <app-stores-content _ngcontent-ng-web-c48="" class="ng-star-inserted">
      <div class="store-content">
         <div class="store-content-wrapper hidden">
            <h2>Peça comida em domicílio na Rappi, delivery em tempo recorde!</h2>
            <p>Se você estiver morrendo de fome e não quiser sair de casa pra nada, estiver com preguiça de cozinhar ou estiver com muito trabalho no escritório ou maratonando uma série no Netflix, por que não pede sua comida preferida pela Rappi? </p>
            <p>Temos uma infinidade de restaurantes que farão seu estômago roncar. Simplesmente peça o que mais te apetecer e nós entregaremos o seu pedido para sua casa ou escritório.</p>
            <h2>Que tipo de restaurantes online posso encontrar na Rappi? Desde comidas rápidas até alternativas saudáveis.</h2>
            <p>O que mais te apetece? A lista de restaurantes e tipos de comidas que oferecemos é interminável, desde hambúrgueres, comida chinesa, asinhas de frango, pizza, sushi, frango assado até os melhores pratos caseiros brasileiros.</p>
            <p>Além disso, se estiver em uma dieta também contamos com muitos restaurantes de comida saudável.</p>
            <p>Estes são alguns dos pratos que você encontra no nosso site ou no aplicativo que você pode facilmente fazer o download na <a target="_blank" href="https://itunes.apple.com/co/app/rappi/id984044296?mt=8">App Store</a> ou <a target="_blank" href="https://play.google.com/store/apps/details?id=com.grability.rappi">Google Play.</a></p>
            <h3>Entrega em domicílio próximo a minha localização</h3>
            <p>Quando for fazer um pedido no site ou app, Rappi te mostrará automaticamente os melhores restaurantes mais próximos da sua casa. Dessa forma, você pode ter certeza que RappiEntregadores estará na sua casa com sua comida favorita em um piscar de olhos. Atualmente a Rappi atende as seguintes cidades do Brasil:</p>
            <ul>
               <li><a href="grande-sao-paulo">Grande São Paulo</a></li>
               <li><a href="rio-de-janeiro">Rio de Janeiro</a></li>
               <li><a href="belo-horizonte">Belo Horizonte</a></li>
               <li><a href="curitiba">Curitiba</a></li>
               <li><a href="fortaleza">Fortaleza</a></li>
               <li><a href="recife">Recife</a></li>
               <li><a href="campinas">Campinas</a></li>
               <li><a href="florianopolis">Florianópolis</a></li>
               <li><a href="ribeirao-preto">Ribeirão Preto</a></li>
               <li><a href="goiania">Goiânia</a></li>
               <li><a href="sao-jose-do-rio-preto">São José do Rio Preto</a></li>
               <li><a href="natal">Natal</a></li>
               <li><a href="sorocaba">Sorocaba</a></li>
               <li><a href="blumenau">Blumenau</a></li>
               <li><a href="anapolis">Anápolis</a></li>
               <li><a href="barueri">Barueri</a></li>
               <li><a href="taubate">Taubaté</a></li>
               <li><a href="ananindeua">Ananindeua</a></li>
               <li><a href="barra-mansa">Barra Mansa</a></li>
               <li><a href="barreiras">Barreiras</a></li>
               <li><a href="boa-vista">Boa Vista</a></li>
               <li><a href="campo-mourao">Campo Mourão</a></li>
               <li><a href="feira-de-santana">Feira de Santana</a></li>
               <li><a href="foz-do-iguacu">Foz do Iguaçu</a></li>
               <li><a href="hortolandia">Hortolândia</a></li>
               <li><a href="itaguai">Itaguaí</a></li>
               <li><a href="jaragua-do-sul">Jaraguá do Sul</a></li>
               <li><a href="marica">Maricá</a></li>
               <li><a href="mesquita">Mesquita</a></li>
               <li><a href="nilopolis">Nilópolis</a></li>
               <li><a href="nova-friburgo">Nova Friburgo</a></li>
               <li><a href="ourinhos">Ourinhos</a></li>
               <li><a href="paulinia">Paulínia</a></li>
               <li><a href="petropolis">Petrópolis</a></li>
               <li><a href="porto-seguro">Porto Seguro</a></li>
               <li><a href="porto-velho">Porto Velho</a></li>
               <li><a href="resende">Resende</a></li>
               <li><a href="rio-das-ostras">Rio das Ostras</a></li>
               <li><a href="santarem">Santarém</a></li>
               <li><a href="sao-joao-de-meriti">São João de Meriti</a></li>
               <li><a href="teresopolis">Teresópolis</a></li>
               <li><a href="tres-rios">Três Rios</a></li>
               <li><a href="valinhos">Valinhos</a></li>
               <li><a href="valparaiso-de-goias">Valparaíso de Goiás</a></li>
               <li><a href="vassouras">Vassouras</a></li>
               <li><a href="vinhedo">Vinhedo</a></li>
               <li><a href="vitoria-da-conquista">Vitória da Conquista</a></li>
               <li><a href="americana">Americana</a></li>
               <li><a href="atibaia">Atibaia</a></li>
               <li><a href="rio-claro">Rio Claro</a></li>
               <li><a href="santa-barbara-d-oeste">Santa Bárbara D'Oeste</a></li>
               <li><a href="franca">Franca</a></li>
               <li><a href="serra">Serra</a></li>
               <li><a href="macae">Macaé</a></li>
               <li><a href="cascavel">Cascavel</a></li>
               <li><a href="itabuna">Itabuna</a></li>
               <li><a href="pouso-alegre">Pouso Alegre</a></li>
               <li><a href="itajai">Itajaí</a></li>
               <li><a href="passo-fundo"> Passo Fundo</a></li>
               <li><a href="cotia">Cotia</a></li>
               <li><a href="vitoria">Vitória</a></li>
               <li><a href="belem">Belém</a></li>
               <li><a href="niteroi">Niterói</a></li>
               <li><a href="jundiai">Jundiaí</a></li>
               <li><a href="santos">Santos</a></li>
               <li><a href="jacarei">Jacareí</a></li>
               <li><a href="aracaju">Aracaju</a></li>
               <li><a href="manaus">Manaus</a></li>
               <li><a href="vila-velha">Vila Velha</a></li>
               <li><a href="lauro-de-freitas">Lauro de Freitas</a></li>
               <li><a href="juiz-de-fora">Juiz de Fora</a></li>
               <li><a href="londrina">Londrina</a></li>
               <li><a href="caxias-do-sul">Caxias do Sul</a></li>
               <li><a href="uberlandia">Uberlandia</a></li>
               <li><a href="campo-grande">Campo Grande</a></li>
               <li><a href="uberaba">Uberaba</a></li>
               <li><a href="cuiaba">Cuiaba</a></li>
               <li><a href="teresina">Teresina</a></li>
               <li><a href="maringa">Maringa</a></li>
               <li><a href="mogi-das-cruzes">Mogi Das Cruzes</a></li>
               <li><a href="sao-carlos">Sao Carlos</a></li>
               <li><a href="sao-goncalo">Sao Goncalo</a></li>
               <li><a href="joinville">Joinville</a></li>
               <li><a href="bauru">Bauru</a></li>
               <li><a href="volta-redonda">Volta Redonda</a></li>
               <li><a href="campina-grande">Campina Grande</a></li>
               <li><a href="novo-hamburgo">Novo Hamburgo</a></li>
               <li><a href="piracicaba">Piracicaba</a></li>
               <li><a href="sao-jose-dos-pinhais">Sao Jose Dos Pinhais</a></li>
               <li><a href="limeira">Limeira</a></li>
               <li><a href="balneario-camboriu">Balneario Camboriu</a></li>
               <li><a href="jaboatao-dos-guararapes">Jaboatao Dos Guararapes</a></li>
               <li><a href="sao-luis">Sao Luis</a></li>
               <li><a href="maua">Maua</a></li>
               <li><a href="caruaru">Caruaru</a></li>
               <li><a href="praia-grande">Praia Grande</a></li>
               <li><a href="campos-dos-goytacazes">Campos dos Goytacazes</a></li>
               <li><a href="indaiatuba">Indaiatuba</a></li>
               <li><a href="porto-velho">Porto Velho</a></li>
               <li><a href="olinda">Olinda</a></li>
               <li><a href="duque-de-caxias">Duque De Caxias</a></li>
               <li><a href="sao-vicente">Sao Vicente</a></li>
               <li><a href="diadema">Diadema</a></li>
               <li><a href="montes-claros">Montes Claros</a></li>
               <li><a href="canoas">Canoas</a></li>
               <li><a href="cabo-frio">Cabo Frio</a></li>
               <li><a href="itapema">Itapema</a></li>
               <li><a href="santo-amaro-da-imperatriz">Santo Amaro da Imperatriz</a></li>
               <li><a href="rio-grande">Rio Grande</a></li>
               <li><a href="macapa">Macapá</a></li>
               <li><a href="pocos-de-caldas">Poços de Caldas</a></li>
               <li><a href="palhoca">Palhoça</a></li>
               <li><a href="guaruja">Guarujá</a></li>
               <li><a href="mogi-guacu">Mogi Guaçu</a></li>
               <li><a href="sao-jose">Sao Jose</a></li>
               <li><a href="araraquara">Araraquara</a></li>
               <li><a href="sertaozinho">Sertãozinho</a></li>
               <li><a href="pirassununga">Pirassununga</a></li>
               <li><a href="itu">Itu</a></li>
            </ul>
            <p>Na hora que for pagar também facilitamos sua vida! Você pode fazer da maneira que achar melhor, tanto através do aplicativo com cartão de crédito quanto em dinheiro ou débito na hora da entrega.</p>
            <h3>Serviço de entrega em domicílio 24 horas</h3>
            <p>São altas horas da madrugada e  você está com fome? Não se preocupe, na Rappi você também encontra restaurantes de entrega em domicílio abertos 24 horas. Rappi listará todos os restaurantes abertos próximos da sua casa e também mostrará o tempo de entrega aproximado de cada um.</p>
            <p>Dessa forma, se estiver com muita fome, poderá comparar o tempo de entrega e pedir aquele que tiver uma entrega mais rápida.</p>
            <p>Em geral, após realizar o pedido online, a entrega costuma demorar 15 a 20 minutos, mas isso pode variar dependendo da quantidade de comida que pediu e da distância do restaurante até sua casa.</p>
            <h2>Promoções e entrega grátis</h2>
            <p>Na Rappi você também dispõe de cupons especiais para pedir comida mais barata. De vez em quando você também pode encontrar promoções e entregas gratis.</p>
            <p>Além disso, se você quiser que suas entregas sejam sempre grátis, você pode se inscrever na RappiPrime. Esse serviço é pago, mas se você for fazer vários pedidos no mês compensa muito.</p>
            <h2>Organize seu tempo livre como quiser e torne sua vida mais fácil!</h2>
            <p>Com a Rappi você pode dizer adeus às comidas congeladas! Além de ter comida em casa em tempo recorde e a qualquer hora do dia, também poderá conseguir ofertas exclusivas. Deixe-nos fazer as coisas por você para que possa desfrutar do seu tempo livre fazendo o que mais gosta.</p>
         </div>
         <div class="store-content-button-wrapper">
            <div class="store-content-size-button"><i class="iconf-keyboard_arrow_down"></i></div>
         </div>
      </div>
   </app-stores-content>
</app-by-stores-home>



      
      <Paper className={classes.root} elevation={4}>
        <Typography type="title" className={classes.title}>
          All Shops
        </Typography>
        <List dense>
          {shops.map((shop, i) => {
            return <Link to={"/shops/"+shop._id} key={i}>
              <Divider/>
              <ListItem button>
                <ListItemAvatar>
                  <Avatar className={classes.avatar}  src={'/api/shops/logo/'+shop._id+"?" + new Date().getTime()}/>
                </ListItemAvatar>
                <div className={classes.details}>
                  <Typography type="headline" component="h2" color="primary" className={classes.shopTitle}>
                    {shop.name}
                  </Typography>
                  <Typography type="subheading" component="h4" className={classes.subheading}>
                    {shop.description}
                  </Typography>
                </div>
              </ListItem>
              <Divider/>
            </Link>})}
        </List>
      </Paper>
    </div>)
}
