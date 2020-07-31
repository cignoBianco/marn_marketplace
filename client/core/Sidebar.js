import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {makeStyles} from '@material-ui/core/styles'

export default function Sidebar() {
return (
<app-header  className="home ng-star-inserted">
    <app-header-stores  className="ng-star-inserted">
        <div  className="stores-list-cont hidden-mobile">
            <div  className="stores ng-star-inserted">
            <ul id="categories-sub-menu">
                <li  className="normal-stores ng-star-inserted">
                    <a href="/lojas/tipo/supermercados"  className="ng-star-inserted"> Supermercados </a>   
                </li>
                <li  className="normal-stores ng-star-inserted">      <a href="/restaurantes"  className="ng-star-inserted"> Restaurantes </a>   </li>
                <li  className="normal-stores ng-star-inserted">      <a href="/lojas/tipo/adidasbotao"  className="ng-star-inserted"> Adidas </a>   </li>
                <li  className="normal-stores ng-star-inserted">      <a href="/lojas/tipo/bebidas-24"  className="ng-star-inserted"> Bebidas </a>   </li>
                <li  className="normal-stores ng-star-inserted">      <a href="/lojas/tipo/farmacia"  className="ng-star-inserted"> Farmácia 24h </a>   </li>
                <li  className="view-more-stores ng-star-inserted"><a> Ver mais </a></li>
                <li  className="special-links">
                    <ul>
                        <li routerlinkactive="active"><a routerlink="/prime" href="/prime"><i  className="iconf-mustache2"></i> RappiPrime </a></li>
                        <li><a rel="nofollow" target="_blank" href="https://soyrappi.com/?utm_source=appuser&amp;utm_medium=applk&amp;utm_campaign=rt"><i  className="iconf-quick-icon"></i> Entregador </a></li>
                        <li><a rel="nofollow" target="_blank" href="https://jobs.rappi.com"><i  className="iconf-quick-icon"></i> Trabalhe conosco </a>
                        </li>
                    </ul>
                </li>
            </ul>
            </div>
        </div>
    </app-header-stores>
</app-header>
)
}