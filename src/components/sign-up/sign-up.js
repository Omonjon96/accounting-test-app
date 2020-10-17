import React from 'react';
// import { Link } from 'react-router-dom';

import './sign-up.css';

const SignUp = () => {
    return (
        <div className="sign-up">
            <div className="wrapper">
                <div className="description">
                    <div className="title">
                        <span className="logo">
                            <svg width="72" height="72" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 17.5C0 7.83502 7.83502 0 17.5 0C27.165 0 35 7.83502 35 17.5C35 27.165 27.165 35 17.5 35C7.83502 35 0 27.165 0 17.5ZM12.602 8.8096C10.8101 9.12998 9.36841 10.4562 8.91391 12.1997C8.75 12.8293 8.73882 13.1981 8.75745 18.082C8.76862 22.5674 8.77235 22.6717 8.84686 23.0182C9.26037 24.8846 10.5866 26.2145 12.4716 26.6541C12.7175 26.71 13.0304 26.7212 15.0459 26.7324C17.1321 26.7473 17.3482 26.7435 17.404 26.6877C17.4599 26.6318 17.4636 25.9128 17.4636 17.7617C17.4636 11.7191 17.4525 8.87293 17.4264 8.82078C17.3891 8.75372 17.3258 8.74999 15.1427 8.75372C13.3695 8.75744 12.8367 8.76862 12.602 8.8096ZM19.2518 17.7505C19.2518 12.8256 19.263 8.78726 19.2779 8.77608C19.2891 8.76118 20.0342 8.75 20.9282 8.75C22.2247 8.75 22.627 8.76118 22.8878 8.80589C24.8324 9.14117 26.3114 10.6052 26.6802 12.5462C26.7324 12.8181 26.7398 13.4551 26.7398 17.7281C26.7398 22.293 26.7452 22.8299 26.6013 23.3233C26.5765 23.4085 26.5471 23.4924 26.5126 23.5956C26.4492 23.7781 26.3263 24.0725 26.2332 24.2475C25.5067 25.6148 24.173 26.5349 22.6605 26.7063C22.3029 26.7435 19.412 26.7584 19.3114 26.7212C19.2556 26.6988 19.2518 25.8755 19.2518 17.7505Z" fill="#2979FF"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M23.2566 16.8899C23.8378 17.0427 24.3146 17.486 24.5083 18.0523C24.6313 18.4024 24.6275 18.9165 24.5046 19.2369C24.2774 19.8255 23.8303 20.239 23.2566 20.3918C22.3253 20.6339 21.3343 20.0714 21.0624 19.1475C20.9804 18.8644 20.9841 18.3875 21.0773 18.097C21.3567 17.1842 22.3253 16.6478 23.2566 16.8899Z" fill="#2979FF"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M15.9735 25.2981V17.7505V10.2029L14.5318 10.2066C12.9373 10.2103 12.7101 10.2327 12.2183 10.4301C11.2385 10.8213 10.5121 11.6893 10.2886 12.7361C10.2103 13.105 10.2103 22.3737 10.2923 22.7499C10.5419 23.9532 11.4323 24.8771 12.6318 25.1863C12.9112 25.2571 13.0602 25.2646 14.4573 25.2795L15.9735 25.2981ZM12.1401 12.8703C12.3301 12.7026 12.6877 12.5238 12.9224 12.4791C13.8612 12.2928 14.7702 12.9336 14.9304 13.891C15.0682 14.6957 14.5802 15.4817 13.7718 15.7537C13.5743 15.8208 13.47 15.8319 13.1757 15.8208C12.8516 15.8096 12.7883 15.7947 12.5387 15.6717C12.1773 15.4929 11.9128 15.2284 11.7377 14.8671C11.6185 14.6286 11.5999 14.5504 11.585 14.2561C11.5552 13.6898 11.7489 13.2093 12.1401 12.8703Z" fill="#2979FF"/>
                            </svg>
                        </span>
                        <span className="logo-title">
                            Moliya studiyasi
                        </span>
                    </div>
                    <div className="text">
                        <span className="text-quote">
                            “
                        </span>
                        <p className="text-info">
                            I always observe the people who pass by when I ride an escalator. 
                            I'll never see most of them again, so I imagine a lot of things about their lives... 
                            about the day ahead of them.
                        </p>
                    </div>
                    <div className="author">
                        <h6 className="author-name">
                            Hideo Kojima
                        </h6>
                    </div>
                </div>
                <div className="sign-up-form">
                    <a href="#" className="go-back">
                        <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.86251 2.225L8.37918 0.75L0.137512 9L8.38751 17.25L9.86251 15.775L3.08751 9L9.86251 2.225Z" fill="#8692A6"/>
                        </svg>
                        Orqaga
                    </a>
                    <div className="title">
                        <h3 className="title-text">
                            Moliya studiyasiga qo’shiling!
                        </h3>
                    </div>
                    <div className="subtitle">
                        <h5 className="subtitle-text">
                            Eng sara buxagalteriya kompaniyasi
                        </h5>
                    </div>
                    <div className="sign-in-google">
                        <a className="sign-in-google-button" href="#">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21.8055 10.0415H21V10H12V14H17.6515C16.827 16.3285 14.6115 18 12 18C8.6865 18 6 15.3135 6 12C6 8.6865 8.6865 6 12 6C13.5295 6 14.921 6.577 15.9805 7.5195L18.809 4.691C17.023 3.0265 14.634 2 12 2C6.4775 2 2 6.4775 2 12C2 17.5225 6.4775 22 12 22C17.5225 22 22 17.5225 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z" fill="#FFC107"/>
                                <path d="M3.15298 7.3455L6.43848 9.755C7.32748 7.554 9.48048 6 12 6C13.5295 6 14.921 6.577 15.9805 7.5195L18.809 4.691C17.023 3.0265 14.634 2 12 2C8.15898 2 4.82798 4.1685 3.15298 7.3455Z" fill="#FF3D00"/>
                                <path d="M12 22C14.583 22 16.93 21.0115 18.7045 19.404L15.6095 16.785C14.5718 17.5742 13.3037 18.001 12 18C9.399 18 7.1905 16.3415 6.3585 14.027L3.0975 16.5395C4.7525 19.778 8.1135 22 12 22Z" fill="#4CAF50"/>
                                <path d="M21.8055 10.0415H21V10H12V14H17.6515C17.2571 15.1082 16.5467 16.0766 15.608 16.7855L15.6095 16.7845L18.7045 19.4035C18.4855 19.6025 22 17 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z" fill="#1976D2"/>
                            </svg>
                            Google  bilan registratsiya qilish
                        </a>
                    </div>
                    <div className="line">
                        <span className="line__left-divider"></span>
                        <span className="line__text">Or</span>
                        <span className="line__right-divider"></span>
                    </div>
                    <form className="form">
                        <label for="email" className="form__label">Elektron pochta manzili</label>
                        <input type="text" id="email" name="email" placeholder="Elektron pochta manzilini yozing,"/>
                    
                    
                        <label for="password" className="form__label">Parol tanlang</label>
                        <input type="text" id="password" name="password" placeholder="Parolni kiriting."/>

                        <div id="progressbar">
                            <div></div>
                        </div>
                        <p className="progressbar__text">Not bad but you know you can do it better</p>
                        

                        <ul className="custom-checkbox">
                            <li>
                                <input className="styled-checkbox" id="styled-checkbox-1" type="checkbox" value="value1"/>
                                <label for="styled-checkbox-1">I agree to <a href="#">terms & conditions</a></label>
                            </li>

                            <li>
                                <input className="styled-checkbox" id="styled-checkbox-2" type="checkbox" value="value2" checked/>
                                <label for="styled-checkbox-2">I’d like being informed about latest news and tips</label>
                            </li>
                        </ul>
                        
                        <input type="submit" value="Registratsiya qilish"/>
                        <div className="account-info">
                            Do you already have an account? <a href="#">Log in</a> 
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
};


export default SignUp;