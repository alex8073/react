import React from 'react';
import classes from './AboutUs.module.css';

const AboutUs = () => {
    return (
        <div>
            <div className={classes.about_us}>
                <div className={classes.about_us_inner_wrapper}>
                    <h1 className={classes.about_us_caption}>О нас</h1>
                    <p className={classes.about_us_description}>Компания Senticode была основана в 2018 году группой разработчиков. Мы занимаемся разработкой ПО на заказ и собственными продуктами. Специализируемся на кроссплатформенной разработке под .net, в том числе десктопных приложений под Windows, серверных приложений под Windows и Linux и мобильных приложений на Xamarin.
Дополнительно компания владеет экспертизой в области машинного обучения и стриминга медиа данных.
</p>
                </div>
            </div >

            {/* <div className={classes.row}>
                <div className={classes.features}>
                    <div className={classes.icon}>
                        <img src="./img/wpf-logo2.svg" alt="WPF" />
                    </div>
                    <p>
                        Разработка интерактивных<br /> настольных приложений для Windows.
                    </p>
                </div>
                <div className={classes.features}>
                    <div className={classes.icon}>
                        <img src="./img/xamarin-logo2.svg" alt="xamarin" />
                    </div>
                    <p>
                        Кроссплатформенная разработка<br /> мобильных приложений (iOS, Android).
                    </p>
                </div>
                <div className={classes.features}>

                    <div className={classes.icon}>
                        <img src="./img/asp-net-core-logo3.svg" alt="asp-net-core" />
                    </div>
                    <p>
                        Разработка веб-приложений:<br /> от небольших сайтов до крупных порталов.
                    </p>
                </div >
            </div > */}
        </div >

    )
}

export default AboutUs;