import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import logo from './../assets/images/logo.png'
import callIcon from './../assets/images/icons/call.png'
import vkIcon from './../assets/images/icons/vk.png'
import insIcon from './../assets/images/icons/inst.png'
import okIcon from './../assets/images/icons/OK.png'
import fbIcon from './../assets/images/icons/fb.png'

const useStyles = makeStyles(theme => ({
    footerContainer: {
        height: 439,
        background: 'rgba(237, 237, 237, 0.5)',
        maxWidth: '100%',
        padding: '40px 7em',
        display: 'grid',
        gridTemplateColumns: '1fr 1.5fr 1fr 0.5fr 2fr',
        gridGap: 35,
    },
    h3: {
        fontWeight: 'bold',
        fontSize: 24,
        textTransform: 'uppercase',
        marginBottom: 20,
    },
    a: {
        color: theme.palette.secondary.text,
        fontWeight: 'normal',
        fontSize: 15
    },
    links: {
        display: 'grid',
        marginLeft: 11,
        gridGap: 35,
        gridTemplateRows: 'auto auto auto',
        gridTemplateRows: 'min-content min-content min-content'
    },
    logo: {
        width: 206,
        height: 48,
        maxWidth: '-webkit-fill-available',
        height: 'auto'
    },
    mediaIcon: {
        width: 36,
        height: 36,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    },
    li: {
        marginBottom: 20
    }
}))

export default function Footer() {
    const classes = useStyles()
    return (
        <div className={classes.footerContainer}>
            <div className={classes.gridCol}>
                <h3 className={classes.h3}>Категории</h3>
                <nav>
                    <ul>
                        <li className={classes.li}>
                            <a href="#" className={classes.a}>
                                Доставка пиццы
                            </a>
                        </li>
                        <li className={classes.li}>
                            <a href="#" className={classes.a}>
                                Доставка суши
                            </a>
                        </li>
                        <li className={classes.li}>
                            <a href="#" className={classes.a}>
                                Доставка бургеров
                            </a>
                        </li>
                        <li className={classes.li}>
                            <a href="#" className={classes.a}>
                                Доставка воков
                            </a>
                        </li>
                        <li className={classes.li}>
                            <a href="#" className={classes.a}>
                                Доставка пирогов
                            </a>
                        </li>
                        <li className={classes.li}>
                            <a href="#" className={classes.a}>
                                Доставка цветов
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className={classes.gridCol}>
                <h3 className={classes.h3}>Компаниям</h3>
                <nav>
                    <ul>
                        <li className={classes.li}>
                            <a href="#" className={classes.a}>
                                Подключиться
                            </a>
                        </li>
                        <li className={classes.li}>
                            <a href="#" className={classes.a}>
                                Возможности платформы
                            </a>
                        </li>
                        <li className={classes.li}>
                            <a href="#" className={classes.a}>
                                Тарифы
                            </a>
                        </li>
                        <li className={classes.li}>
                            <a href="#" className={classes.a}>
                                Правила размещения информации на портале
                            </a>
                        </li>
                        <li className={classes.li}>
                            <a href="#" className={classes.a}>
                                Пользовательское соглашение
                            </a>
                        </li>
                        <li className={classes.li}>
                            <a href="#" className={classes.a}>
                                Политика конфиденциальности
                            </a>
                        </li>
                        <li className={classes.li}>
                            <a href="#" className={classes.a}>
                                Политика в отношении обработки персональных данных
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className={classes.gridCol}>
                <h3 className={classes.h3}>Клиентам</h3>
                <nav>
                    <ul>
                        <li className={classes.li}>
                            <a href="#" className={classes.a}>
                                Вопросы и ответы
                            </a>
                        </li>
                        <li className={classes.li}>
                            <a href="#" className={classes.a}>
                                Доставка и оплата
                            </a>
                        </li>
                        <li className={classes.li}>
                            <a href="#" className={classes.a}>
                                Оферта
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className={classes.gridCol}>
                <h3 className={classes.h3}>Инфо</h3>
                <nav>
                    <ul>
                        <li className={classes.li}>
                            <a href="#" className={classes.a}>
                                Курьерам
                            </a>
                        </li>
                        <li className={classes.li}>
                            <a href="#" className={classes.a}>
                                О нас
                            </a>
                        </li>
                        <li className={classes.li}>
                            <a href="#" className={classes.a}>
                                Правообладателям
                            </a>
                        </li>
                        <li className={classes.li}>
                            <a href="#" className={classes.a}>
                                Контакты
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className={classes.links}>
                <img src={logo} alt="marketa" className={classes.logo}/>
                <div style={{display:'grid', gridTemplateColumns: '1fr 4fr'}}>
                    <a href="tel:+79528089476">
                        <div style={{background: `url(${callIcon})`, width: 44.58, height: 48}}></div>
                    </a>
                    <p style={{fontSize: 15, lineHeight: '2em'}}>
                        CALL-ЦЕНТР с 11:00 до 23:00<br/> 8 800 7000 524
                    </p>
                </div>
                <div style={{display:"grid", gridTemplateColumns: '1fr 1fr 1fr 1fr', maxWidth: 190}}>
                    <a href="vk.com">
                        <div className={classes.mediaIcon} style={{backgroundImage: `url(${vkIcon})`}}></div>
                    </a>
                    <a href="instagram.com">
                        <div className={classes.mediaIcon} style={{backgroundImage: `url(${insIcon})`}}></div>
                    </a>
                    <a href="ok.ru">
                        <div className={classes.mediaIcon} style={{backgroundImage: `url(${okIcon})`}}></div>
                    </a>
                    <a href="facebook.com">
                        <div className={classes.mediaIcon} style={{backgroundImage: `url(${fbIcon})`}}></div>
                    </a>
                </div>
            </div>
        </div>
    )
}