function Header() {
    return (
        <header className="portal__header">
            <div className="portal__header-left">
                <img src="/images/adaptive-mark.png" className="portal__header-logo" alt="logo"/>
                <div className="portal__header-title">AdaptiveCash</div>
                <div className="portal__header-subtitle">Портал</div>
            </div>
            <div className="portal__header-search">
                <svg className="portal__header-search__icon" width="13" height="13" viewBox="0 0 73 73" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M49.3239 49.3782L67.4195 67.4196M56.9888 30.9119C56.9888 45.3137 45.3136 56.9888 30.9119 56.9888C16.51 56.9888 4.83501 45.3137 4.83501 30.9119C4.83501 16.51 16.51 4.83502 30.9119 4.83502C45.3136 4.83502 56.9888 16.51 56.9888 30.9119Z" stroke="#8b9cb0" stroke-width="9.67" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <input type="text" className="portal__header-search__input" placeholder="Пошук документів, підписантів, задач…"/>
            </div>
            <div className="portal__header-right">
                <button className="portal__btn">
                    <svg width="10" height="10" viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.33499 37.7588H71.1825M37.7588 4.33502V71.1826" stroke="#fff" stroke-width="8.67" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    Створити документ
                </button>
                <div className="portal__language">
                    УКР
                    <svg width="14ну э" height="7" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.221951 0.277697C-0.0739837 0.585124 -0.0739837 1.08294 0.221951 1.38959L6.49653 7.89115C7.08915 8.50601 8.05056 8.50601 8.64318 7.89115L14.964 1.3425C15.2569 1.03821 15.2607 0.546614 14.9716 0.238397C14.6765 -0.0761078 14.1901 -0.0799199 13.8903 0.229869L8.10671 6.22349C7.81002 6.53092 7.32969 6.53092 7.033 6.22349L1.2949 0.277697C0.998969 -0.0297387 0.518645 -0.0297387 0.221951 0.277697Z" fill="#5c7089"/>
                    </svg>
                </div>
            </div>
        </header>
    )
}

export default Header