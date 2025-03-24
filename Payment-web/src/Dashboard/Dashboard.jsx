import React from 'react'
import Logo from '../assets/dashboard/images/logo/logo.svg'
import Bot from '../assets/dashboard/images/item/bot.png' 
import User1 from '../assets/dashboard/images/avatar/user-1.png'
import User2 from '../assets/dashboard/images/avatar/user-2.png'
import User3 from '../assets/dashboard/images/avatar/user-3.png'
import User4 from '../assets/dashboard/images/avatar/user-4.png'
import { Link } from 'react-router-dom'



const Dashboard = () => {
  return (
    <div>
          <div id="wrapper">
        {/* <!-- #page --> */}
        <div id="page" className="">
            {/* <!-- layout-wrap --> */}
            <div className="layout-wrap loader-off">
                {/* <!-- preload --> */}
                <div id="preload" className="preload-container">
                    <div className="preloading">
                        <span></span>
                    </div>
                </div>
                {/* <!-- /preload --> */}
                {/* <!-- section-menu-left --> */}
                <div className="section-menu-left">
                    <div className="box-logo">
                        <a href="index-2.html" id="site-logo-inner">
                            <img className="" id="logo_header" alt="" src={Logo} data-light="images/logo/logo.svg" data-dark="images/logo/logo-dark.svg"  />
                        </a>
                        <div className="button-show-hide">
                            <i className="icon-back"></i>
                        </div>
                    </div>
                    <div className="section-menu-left-wrap">
                        <div className="center">
                            <div className="center-item">
                                <div className="center-heading f14-regular text-Gray menu-heading mb-12">Navigation</div>
                            </div>
                            <div className="center-item">
                                <ul className="">
                                    <li className="menu-item has-children active">
                                        <a href="javascript:void(0);" className="menu-item-button active">
                                            <div className="icon">
                                                <i className="icon-category"></i>
                                            </div>
                                            <div className="text">Dashboard</div>
                                        </a>
                                        <ul className="sub-menu" style={{display:'block'}}>
                                            <li className="sub-menu-item active">
                                                <a href="index-2.html" className="">
                                                    <div className="text">Default</div>
                                                </a>
                                            </li>
                                            <li className="sub-menu-item">
                                                <a href="dashboard-boxed.html" className="">
                                                    <div className="text">Boxed</div>
                                                </a>
                                            </li>
                                            <li className="sub-menu-item">
                                                <a href="dashboard-icon-hover.html" className="">
                                                    <div className="text">Icon Menu</div>
                                                </a>
                                            </li>
                                            <li className="sub-menu-item">
                                                <a href="dashboard-icon-default.html" className="">
                                                    <div className="text">Icon & Text</div>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="menu-item has-children">
                                        <a href="javascript:void(0);" className="menu-item-button">
                                            <div className="icon">
                                                <i className="icon-wallet1"></i>
                                            </div>
                                            <div className="text">My Wallet</div>
                                        </a>
                                        <ul className="sub-menu">
                                            <li className="sub-menu-item">
                                                <a href="my-wallet.html" className="">
                                                    <div className="text">My Wallet</div>
                                                </a>
                                            </li>
                                            <li className="sub-menu-item">
                                                <a href="account.html" className="">
                                                    <div className="text">Account</div>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="menu-item">
                                        <Link to='/edithome'
                                         className="menu-item-button">
                                            <div className="icon">
                                                <svg className="" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M6.1428 8.50146V14.2182" stroke="#A4A4A9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                    <path d="M10.0317 5.76562V14.2179" stroke="#A4A4A9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                    <path d="M13.8572 11.522V14.2178" stroke="#A4A4A9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.9047 1.6665H6.0952C3.37297 1.6665 1.66663 3.59324 1.66663 6.3208V13.6789C1.66663 16.4064 3.36504 18.3332 6.0952 18.3332H13.9047C16.6349 18.3332 18.3333 16.4064 18.3333 13.6789V6.3208C18.3333 3.59324 16.6349 1.6665 13.9047 1.6665Z" stroke="#A4A4A9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                </svg>
                                            </div>
                                            <div className="text">Home Page</div>
                                     
                                        </Link>
                                    </li>
                                    <li className="menu-item">
                                          <Link to='/editabout'
                                     href="crypto.html" className="menu-item-button">
                                            <div className="icon">
                                                <i className="icon-dash1"></i>
                                            </div>
                                            <div className="text">About Page</div>
                               
                                        </Link>
                                    </li>
                                    <li className="menu-item">
                                        <Link to='/editfeature'                         
                                 href="exchange.html" className="menu-item-button">
                                            <div className="icon">
                                                <i className="icon-arrow-swap"></i>
                                            </div>
                                            <div className="text">Feature Page</div>
                                   
                                        </Link>

                                    </li>
                                    <li className="menu-item">
                                        <Link to='/editpricing'
                                    href="settings.html" className="menu-item-button">
                                            <div className="icon">
                                                <i className="icon-setting1"></i>
                                            </div>
                                            <div className="text">Pricing Page</div>
                                      
                                        </Link>
                                    </li>
                                    <li className="menu-item">
                                        <Link to='/editcontact'
                                 href="component.html" className="menu-item-button">
                                            <div className="icon">
                                                <i className="icon-search-normal1"></i>
                                            </div>
                                            <div className="text">Contact Page</div>
                                       
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="bottom">
                            <div className="image">
                                <img src={Bot} alt="" />
                            </div>
                            <div className="content">
                                <p className="f12-regular text-White">For more features</p>
                                <p className="f12-bold text-White">Upgrade to Pro</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- /section-menu-left --> */}
                {/* <!-- section-content-right --> */}
                <div className="section-content-right">
                    {/* <!-- header-dashboard --> */}
                    <div className="header-dashboard">
                        <div className="wrap">
                            <div className="header-left">
                                <div className="button-show-hide">
                                    <i className="icon-menu"></i>
                                </div>
                                <h6>Dashboard</h6>
                                <form className="form-search flex-grow">
                                    <fieldset className="name">
                                        <input type="text" placeholder="Type to search …" className="show-search style-1" name="name" tabindex="2" value="" aria-required="true" required="" />
                                    </fieldset>
                                    <div className="button-submit">
                                        <button className="" type="submit"><i className="icon-search-normal1"></i></button>
                                    </div>
                                </form>
                            </div>
                            <div className="header-grid">
                                <div className="header-btn">
                                    <div className="popup-wrap message type-header">
                                        <div className="dropdown">
                                            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                                                <span className="header-item">
                                                    <i className="icon-sms"></i>
                                                </span>
                                            </button>
                                            <ul className="dropdown-menu dropdown-menu-end has-content" aria-labelledby="dropdownMenuButton1" >
                                                <li>
                                                    <h6>Message</h6>
                                                </li>
                                                <li>
                                                    <div className="message-item w-full wg-user active">
                                                        <div className="image">
                                                            <img src={User1} alt="" />
                                                        </div>
                                                        <div className="flex-grow">
                                                            <div className="flex items-center justify-between">
                                                                <a href="#" className="body-title name">Cameron Williamson</a>
                                                                <div className="time">10:13 PM</div>
                                                            </div>
                                                            <div className="text-tiny desc">Hello?</div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="message-item w-full wg-user active">
                                                        <div className="image">
                                                            <img src={User2} alt="" />
                                                        </div>
                                                        <div className="flex-grow">
                                                            <div className="flex items-center justify-between">
                                                                <a href="#" className="body-title name">Ralph Edwards</a>
                                                                <div className="time">10:13 PM</div>
                                                            </div>
                                                            <div className="text-tiny desc">Are you there?  interested i this...</div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="message-item w-full wg-user active">
                                                        <div className="image">
                                                            <img src={User3} alt="" />
                                                        </div>
                                                        <div className="flex-grow">
                                                            <div className="flex items-center justify-between">
                                                                <a href="#" className="body-title name">Eleanor Pena</a>
                                                                <div className="time">10:13 PM</div>
                                                            </div>
                                                            <div className="text-tiny desc">Interested in this loads?</div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="message-item w-full wg-user active">
                                                        <div className="image">
                                                            <img src={User4} alt="" />
                                                        </div>
                                                        <div className="flex-grow">
                                                            <div className="flex items-center justify-between">
                                                                <a href="#" className="body-title name">Jane Cooper</a>
                                                                <div className="time">10:13 PM</div>
                                                            </div>
                                                            <div className="text-tiny desc">Okay...Do we have a deal?</div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <a href="message.html" className="tf-button style-1 f12-bold w-100">
                                                        View All
                                                        <i className="icon icon-send"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="popup-wrap noti type-header">
                                        <div className="dropdown">
                                            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                <span className="header-item">
                                                    <i className="icon-notification1"></i>
                                                </span>
                                            </button>
                                            <ul className="dropdown-menu dropdown-menu-end has-content" aria-labelledby="dropdownMenuButton2" >
                                                <li>
                                                    <h6>Notifications</h6>
                                                </li>
                                                <li>
                                                    <div className="notifications-item item-1">
                                                        <div className="image">
                                                            <i className="icon-setting-5"></i>
                                                        </div>
                                                        <div>
                                                            <div className="body-title-2">Discount available</div>
                                                            <div className="text-tiny">Morbi sapien massa, ultricies at rhoncus at, ullamcorper nec diam</div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="notifications-item item-2">
                                                        <div className="image">
                                                            <i className="icon-person"></i>
                                                        </div>
                                                        <div>
                                                            <div className="body-title-2">Account has been verified</div>
                                                            <div className="text-tiny">Mauris libero ex, iaculis vitae rhoncus et</div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="notifications-item item-3">
                                                        <div className="image">
                                                            <i className="icon-message-text1"></i>
                                                        </div>
                                                        <div>
                                                            <div className="body-title-2">Order shipped successfully</div>
                                                            <div className="text-tiny">Integer aliquam eros nec sollicitudin sollicitudin</div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="notifications-item item-4">
                                                        <div className="image">
                                                            <i className="icon-sms-tracking"></i>
                                                        </div>
                                                        <div>
                                                            <div className="body-title-2">Order pending: <span>ID 305830</span></div>
                                                            <div className="text-tiny">Ultricies at rhoncus at ullamcorper</div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <a href="notifications.html" className="tf-button style-1 f12-bold w-100">
                                                        View All
                                                        <i className="icon icon-send"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="line1"></div>
                                <div className="popup-wrap user type-header">
                                    <div className="dropdown">
                                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton3" data-bs-toggle="dropdown" aria-expanded="false">
                                            <span className="header-user wg-user">
                                                <span className="image">
                                                    <img src={User1} alt="" />
                                                </span>
                                                <span className="content flex flex-column">
                                                    <span className="label-02 text-Black name">Jonathan</span>
                                                    <span className="f14-regular text-Gray">Admin</span>
                                                </span>
                                            </span>
                                        </button>
                                        <ul className="dropdown-menu dropdown-menu-end has-content" aria-labelledby="dropdownMenuButton3" >
                                            <li>
                                                <a href="account.html" className="user-item">
                                                    <div className="body-title-2">Account</div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="user-item">
                                                    <div className="body-title-2">Inbox</div>
                                                    <div className="number">27</div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="transaction.html" className="user-item">
                                                    <div className="body-title-2">Transaction</div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="settings.html" className="user-item">
                                                    <div className="body-title-2">Setting</div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="crypto.html" className="user-item">
                                                    <div className="body-title-2">Crypto</div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="sign-in.html" className="user-item">
                                                    <div className="body-title-2">Log out</div>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- /header-dashboard --> */}
                    {/* <!-- main-content --> */}
                    <div className="main-content">
                        {/* <!-- main-content-wrap --> */}
                        <div className="main-content-inner">
                            {/* <!-- main-content-wrap --> */}
                            <div className="main-content-wrap">
                                <div className="tf-container">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="flex gap24 mb-32 flex-md-row flex-column">
                                                <div className="w-100">
                                                    <div className="wg-card style-1 bg-Primary mb-25">
                                                        <div className="icon">
                                                            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <rect width="48" height="48" rx="16" fill="white"/>
                                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M30.873 21.9846C31.1968 19.8232 29.55 18.661 27.2999 17.8856L28.03 14.957L26.2481 14.5135L25.5366 17.3648C25.0781 17.2497 24.6078 17.1425 24.1383 17.0355L24.1083 17.0286L24.825 14.1588L23.0431 13.7144L22.313 16.6419L22.2351 16.6241L22.235 16.6241C21.8741 16.5416 21.519 16.4604 21.1746 16.3738L21.1766 16.3645L18.7183 15.751L18.2439 17.6546C18.2439 17.6546 19.5669 17.9577 19.5391 17.9763C20.2609 18.1568 20.3909 18.6342 20.3692 19.0137L19.5381 22.3496C19.5876 22.362 19.6515 22.3806 19.7237 22.4084L19.535 22.362L18.3697 27.0354C18.281 27.254 18.0573 27.583 17.552 27.4582C17.5705 27.484 16.2568 27.1354 16.2568 27.1354L15.372 29.1752L17.6922 29.7537C17.9413 29.8162 18.1877 29.8805 18.4316 29.9442L18.4316 29.9442L18.4321 29.9443C18.61 29.9907 18.7864 30.0368 18.9616 30.0816L18.2243 33.0432L20.0052 33.4866L20.7353 30.558C21.222 30.689 21.6943 30.8106 22.1563 30.9261L21.4283 33.8424L23.2102 34.2858L23.9475 31.3304C26.9875 31.9058 29.2726 31.6738 30.2347 28.9246C31.0102 26.7116 30.1966 25.434 28.5972 24.6018C29.7624 24.3337 30.6389 23.5675 30.873 21.9846ZM26.7998 27.6954C26.2956 29.7264 23.1169 28.8867 21.6619 28.5024C21.5308 28.4678 21.4137 28.4369 21.3138 28.4121L22.2934 24.4883C22.4153 24.5188 22.5642 24.5523 22.733 24.5902C24.2379 24.9283 27.3181 25.6202 26.7998 27.6954ZM23.0352 22.7688C24.2476 23.0925 26.8912 23.7983 27.3515 21.9526C27.8223 20.0649 25.2523 19.4963 23.997 19.2186C23.8555 19.1873 23.7307 19.1597 23.6288 19.1343L22.742 22.692C22.826 22.7129 22.9246 22.7393 23.0352 22.7688Z" fill="#161326"/>
                                                            </svg>
                                                        </div>
                                                        <div className="content">
                                                            <div>
                                                                <h6 className="counter text-White">
                                                                    $<span className="number" data-speed="2000" data-to="34" data-inviewport="yes">34</span>,57
                                                                </h6>
                                                                <div className="f12-medium text-White">+4% <span className="text-White">(30 days)</span></div>
                                                            </div>
                                                            <div className="chart-small">
                                                                <div id="small-chart-1"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="wg-card">
                                                        <div className="icon">
                                                            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <rect width="36" height="36" rx="12" fill="#C0FAA0"/>
                                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M25.7143 15.4492L25.7143 15.4492V14.962C25.7143 14.9417 25.7041 14.9214 25.694 14.9011C25.6838 14.8808 25.6737 14.8605 25.6737 14.8402C25.5519 14.2718 25.2271 13.8658 24.6586 13.6627C24.4556 13.6221 24.212 13.5815 24.009 13.5815H13.7774C13.6556 13.5815 13.615 13.6221 13.5744 13.7439C13.4729 14.0688 13.3613 14.3936 13.2496 14.7184C13.138 15.0432 13.0263 15.368 12.9248 15.6928C12.9248 15.7096 12.9178 15.7265 12.9097 15.7462C12.8981 15.774 12.8842 15.8077 12.8842 15.8552H22.3444C22.3444 15.9028 22.3304 15.9364 22.3189 15.9643C22.3107 15.984 22.3038 16.0008 22.3038 16.0176C22.0804 16.7281 21.847 17.4387 21.6135 18.1492C21.3801 18.8597 21.1466 19.5703 20.9233 20.2808C20.8827 20.4026 20.8015 20.4432 20.6797 20.4432H11.585C11.4631 20.4432 11.3819 20.4432 11.3413 20.6056C11.1789 21.174 10.9759 21.783 10.7729 22.3515C10.7323 22.4327 10.6917 22.5545 10.6511 22.6763H10.8541C11.9609 22.6763 13.0722 22.6718 14.1864 22.6673C16.424 22.6583 18.6737 22.6492 20.9233 22.6763C22.4256 22.7169 23.806 21.377 24.1308 20.362C24.6586 18.6973 25.1865 17.0733 25.7143 15.4492ZM10.2857 19.1033V19.1846C10.3263 19.1846 10.4075 19.1846 10.4481 19.1439H15.7263C15.8887 19.1439 15.9293 19.1033 15.9699 18.9815L16.5789 17.1545C16.5789 17.1342 16.5891 17.1037 16.5992 17.0733C16.6094 17.0428 16.6195 17.0124 16.6195 16.9921H16.4977H11.1383C11.0571 16.9921 11.0165 17.0327 10.9759 17.1139C10.915 17.2763 10.8643 17.4387 10.8135 17.6011C10.7628 17.7635 10.712 17.9259 10.6511 18.0883C10.5293 18.4537 10.4075 18.7785 10.2857 19.1033Z" fill="#161326"/>
                                                            </svg>
                                                        </div>
                                                        <div className="content">
                                                            <div>
                                                                <h6 className="counter">
                                                                    $<span className="number" data-speed="2000" data-to="54" data-inviewport="yes">54</span>,57
                                                                </h6>
                                                                <div className="f12-medium">+4% <span className="text-Gray">(30 days)</span></div>
                                                            </div>
                                                            <div className="chart-small">
                                                                <div id="small-chart-2"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="w-100">
                                                    <div className="wg-card mb-25">
                                                        <div className="icon">
                                                            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <rect width="36" height="36" rx="12" fill="#161326"/>
                                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M17.6072 11.1829C17.5928 11.298 17.5737 11.413 17.5545 11.5281C17.5161 11.7582 17.4778 11.9883 17.4778 12.2184C17.3915 13.2971 17.6935 14.2463 18.1681 15.1955C18.3755 15.6334 18.5891 16.0714 18.8031 16.5101C19.3903 17.714 19.9805 18.924 20.4548 20.1573C20.6274 20.5887 20.7569 21.0633 20.8432 21.4948C20.9653 22.187 20.5879 22.6871 20.2187 23.1763L20.1528 23.2638C19.6351 23.9973 19.031 24.6444 18.3407 25.2053C18.3191 25.2197 18.2975 25.2353 18.276 25.2509C18.1681 25.3288 18.0602 25.4067 17.9524 25.3348C17.8469 25.2644 17.8847 25.1368 17.9256 24.9985C17.9349 24.9671 17.9444 24.9352 17.9524 24.9033C18.125 24.3856 18.2544 23.8247 18.3407 23.2638C18.5027 22.3321 18.1323 21.5145 17.765 20.7039L17.6935 20.5456C17.4634 20.0566 17.2285 19.5676 16.9936 19.0786C16.5238 18.1007 16.054 17.1227 15.6225 16.1447C15.3636 15.5838 15.2342 15.0229 15.1047 14.4189C14.9322 13.5991 15.2773 12.9088 15.7951 12.2616C16.2265 11.7007 16.7011 11.1829 17.262 10.7946C17.2727 10.784 17.2833 10.7727 17.2941 10.7613L17.2941 10.7613C17.3709 10.6797 17.4559 10.5895 17.6072 10.6652C17.6297 10.7776 17.617 10.8782 17.6059 10.9672C17.5956 11.049 17.5865 11.1209 17.6072 11.1829ZM24.9852 21.1928C24.8902 21.2244 24.8649 21.3025 24.8411 21.376C24.8325 21.4026 24.8241 21.4287 24.8126 21.4516C24.338 22.4009 23.6476 23.1343 22.871 23.7815C22.8279 23.8247 22.7416 23.911 22.6121 23.8678C22.5464 23.6376 22.631 23.4324 22.7132 23.2333L22.7132 23.2332C22.7388 23.1711 22.7642 23.1096 22.7847 23.048C23.1299 22.0988 23.0004 21.1928 22.569 20.2867C21.9649 19.0786 21.3609 17.8274 20.8432 16.5762C20.6706 16.1447 20.5411 15.7564 20.4548 15.2818C20.2823 14.5052 20.6706 13.9011 21.1452 13.3402C21.4472 12.9951 21.7492 12.693 22.1375 12.4342C22.1622 12.4218 22.1868 12.4025 22.2115 12.3831C22.2731 12.3347 22.3348 12.2862 22.3964 12.3479C22.4601 12.3797 22.4533 12.4587 22.4453 12.5499C22.4425 12.5822 22.4395 12.6161 22.4395 12.6499V12.6499C22.3533 13.3402 22.267 14.0306 22.4395 14.6777C22.5309 15.104 22.7296 15.4872 22.9297 15.873L22.9297 15.873L22.9297 15.873C23.0131 16.034 23.0968 16.1953 23.173 16.3604C23.324 16.684 23.4804 17.0049 23.6368 17.3258C24.1061 18.2885 24.5753 19.2512 24.8989 20.2867C24.9354 20.378 24.9487 20.4771 24.9618 20.5741C24.9796 20.7062 24.9968 20.8344 25.0714 20.9339C24.9852 21.0202 24.9852 21.1065 24.9852 21.1928ZM13.2495 23.3501C13.2063 23.5226 13.1632 23.6952 13.2063 23.8678C13.2495 23.8678 13.3358 23.8678 13.3789 23.7815C14.1987 23.1343 14.889 22.3577 15.3636 21.4085C15.4931 21.1065 15.4931 20.8045 15.4068 20.5024C15.2342 19.9415 15.0616 19.3806 14.8027 18.8629C14.6791 18.5949 14.5554 18.3245 14.4311 18.0528C14.0352 17.187 13.6332 16.3082 13.2063 15.4544C12.9043 14.8503 12.818 14.2894 12.818 13.6422C12.818 13.4637 12.8402 13.2851 12.8631 13.1004C12.8956 12.8388 12.9296 12.565 12.9043 12.2616C12.214 12.693 11.6962 13.2539 11.2648 13.9011C10.9627 14.3757 10.8333 14.8935 11.0059 15.4544C11.0591 15.6141 11.1051 15.7665 11.1497 15.9146C11.2136 16.1266 11.2749 16.3298 11.3511 16.533C11.8257 17.7411 12.4297 18.9492 13.0337 20.1141C13.5515 21.1928 13.6809 22.2283 13.2495 23.3501Z" fill="white"/>
                                                            </svg>
                                                        </div>
                                                        <div className="content">
                                                            <div>
                                                                <h6 className="counter">
                                                                    $<span className="number" data-speed="2000" data-to="14" data-inviewport="yes">14</span>,47
                                                                </h6>
                                                                <div className="f12-medium">+4% <span className="text-Gray">(30 days)</span></div>
                                                            </div>
                                                            <div className="chart-small">
                                                                <div id="small-chart-3"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="wg-card style-1 bg-YellowGreen">
                                                        <div className="icon">
                                                            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <rect width="48" height="48" rx="16" fill="#161326"/>
                                                                <path d="M29.3372 33.5406C37.0283 26.9062 32.5076 14.8117 16.7143 14.4595C16.8904 25.1449 15.4227 33.3644 26.1668 33.3644C29.5133 28.2566 27.0474 23.2074 21.5873 18.217C26.9887 20.3306 31.5682 26.7888 29.3372 33.5406Z" fill="white"/>
                                                                </svg>
                                                        </div>
                                                        <div className="content">
                                                            <div>
                                                                <h6 className="counter">
                                                                    $<span className="number" data-speed="2000" data-to="34" data-inviewport="yes">34</span>,57
                                                                </h6>
                                                                <div className="f12-medium">+4% <span className="text-Gray">(30 days)</span></div>
                                                            </div>
                                                            <div className="chart-small">
                                                                <div id="small-chart-4"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="wg-box style-1 bg-Gainsboro shadow-none widget-tabs mb-32">
                                                <div>
                                                    <div className="title mb-16">
                                                        <div className="label-01">Market Overview</div>
                                                        <ul className="widget-menu-tab">
                                                            <li className="item-title f12-medium">
                                                                <span className="inner">Week</span>
                                                            </li>
                                                            <li className="item-title f12-medium active">
                                                                <span className="inner">Month</span>
                                                            </li>
                                                            <li className="item-title f12-medium">
                                                                <span className="inner">Year</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="flex justify-between">
                                                        <div className="flex gap16 items-center flex-wrap">
                                                            <div className="block-legend">
                                                                <div className="dot bg-Orchid"></div>
                                                                <div className="f12-medium"> <span className="text-Gray">Buy</span> <span className="f12-bold">$8,420.50</span></div>
                                                            </div>
                                                            <div className="block-legend">
                                                                <div className="dot bg-Primary"></div>
                                                                <div className="f12-medium"> <span className="text-Gray">Sell</span> <span className="f12-bold">$8,420.50</span></div>
                                                            </div>
                                                        </div>
                                                        <a href="#" className="tf-button style-default gap8 f14-bold text-Orchid">
                                                            <i className="icon icon-receive-square"></i>
                                                            Get Report
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="widget-content-tab">
                                                    <div className="widget-content-inner">
                                                        <div id="candlestick-1" className="candlestick-chart"></div>
                                                    </div>
                                                    <div className="widget-content-inner active">
                                                        <div id="candlestick-4" className="candlestick-chart"></div>
                                                    </div>
                                                    <div className="widget-content-inner">
                                                        <div id="candlestick-5" className="candlestick-chart"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="wg-box style-1 bg-Primary shadow-none mb-32">
                                                <div>
                                                    <div className="title mb-10">
                                                        <div className="label-01 text-White">Crypto Statistics</div>
                                                        <div className="dropdown default">
                                                            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                               <span className="icon-more text-White"></span>
                                                            </button>
                                                            <ul className="dropdown-menu dropdown-menu-end">
                                                                <li>  
                                                                    <a href="javascript:void(0);">This Week</a>
                                                                </li>
                                                                <li>  
                                                                    <a href="javascript:void(0);">This Day</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="flex gap16 items-center">
                                                        <div className="tf-cart-checkbox style-1">
                                                            <div className="tf-checkbox-wrapp">
                                                                <input className="" type="checkbox" checked="" />
                                                                <div>
                                                                    <i className="icon-check"></i>
                                                                </div>
                                                            </div>
                                                            <div className="f12-medium text-Gray">
                                                                BTC
                                                            </div>
                                                        </div>
                                                        <div className="tf-cart-checkbox style-1">
                                                            <div className="tf-checkbox-wrapp">
                                                                <input className="" type="checkbox" />
                                                                <div>
                                                                    <i className="icon-check"></i>
                                                                </div>
                                                            </div>
                                                            <div className="f12-medium text-Gray">
                                                                XRP
                                                            </div>
                                                        </div>
                                                        <div className="tf-cart-checkbox style-1">
                                                            <div className="tf-checkbox-wrapp">
                                                                <input className="" type="checkbox" checked="" />
                                                                <div>
                                                                    <i className="icon-check"></i>
                                                                </div>
                                                            </div>
                                                            <div className="f12-medium text-Gray">
                                                                ETH
                                                            </div>
                                                        </div>
                                                        <div className="tf-cart-checkbox style-1">
                                                            <div className="tf-checkbox-wrapp">
                                                                <input className="" type="checkbox" />
                                                                <div>
                                                                    <i className="icon-check"></i>
                                                                </div>
                                                            </div>
                                                            <div className="f12-medium text-Gray">
                                                                ZEC
                                                            </div>
                                                        </div>
                                                        <div className="tf-cart-checkbox style-1">
                                                            <div className="tf-checkbox-wrapp">
                                                                <input className="" type="checkbox" />
                                                                <div>
                                                                    <i className="icon-check"></i>
                                                                </div>
                                                            </div>
                                                            <div className="f12-medium text-Gray">
                                                                LTC
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div id="line-chart-twoline" className="line-chart-twoline"></div>
                                            </div>
                                            <div className="flex gap24 mb-32 flex-md-row flex-column">
                                                <div className="wg-box gap16">
                                                    <div>
                                                        <div className="title mb-12">
                                                            <div className="label-01">Sell Order</div>
                                                            <div className="dropdown default">
                                                                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                   <span className="icon-more"></span>
                                                                </button>
                                                                <ul className="dropdown-menu dropdown-menu-end">
                                                                    <li>  
                                                                        <a href="javascript:void(0);">This Week</a>
                                                                    </li>
                                                                    <li>  
                                                                        <a href="javascript:void(0);">This Day</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <select className="image-select center w-100">
                                                            <option selected data-thumbnail="images/item/dashcoin.svg">Dash Coin</option>
                                                            <option data-thumbnail="images/item/bitcoin.svg">Bit Coin</option>
                                                        </select>
                                                    </div>
                                                    <table className="tab-sell-order">
                                                        <thead>
                                                            <tr>
                                                                <th className="f14-regular text-Gray">Price</th>
                                                                <th className="f14-regular text-Gray">Amount</th>
                                                                <th className="f14-regular text-Gray">Total</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td className="f14-regular">98.36</td>
                                                                <td className="f14-regular">0.25</td>
                                                                <td className="f14-regular">$147.00</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="f14-regular">98.36</td>
                                                                <td className="f14-regular">0.25</td>
                                                                <td className="f14-regular">$147.00</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="f14-regular">98.36</td>
                                                                <td className="f14-regular">0.25</td>
                                                                <td className="f14-regular">$147.00</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="f14-regular">98.36</td>
                                                                <td className="f14-regular">0.25</td>
                                                                <td className="f14-regular">$147.00</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="f14-regular">98.36</td>
                                                                <td className="f14-regular">0.25</td>
                                                                <td className="f14-regular">$147.00</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    <a href="#" className="tf-button f12-bold w-100">
                                                        View All
                                                        <i className="icon icon-send"></i>
                                                    </a>
                                                </div>
                                                <div className="wg-box gap16 bg-YellowGreen">
                                                    <div>
                                                        <div className="title mb-12">
                                                            <div className="label-01">Buy Order</div>
                                                            <div className="dropdown default">
                                                                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                   <span className="icon-more"></span>
                                                                </button>
                                                                <ul className="dropdown-menu dropdown-menu-end">
                                                                    <li>  
                                                                        <a href="javascript:void(0);">This Week</a>
                                                                    </li>
                                                                    <li>  
                                                                        <a href="javascript:void(0);">This Day</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <select className="image-select center w-100">
                                                            <option selected data-thumbnail="images/item/dashcoin.svg">Dash Coin</option>
                                                            <option data-thumbnail="images/item/bitcoin.svg">Bit Coin</option>
                                                        </select>
                                                    </div>
                                                    <table className="tab-sell-order">
                                                        <thead>
                                                            <tr>
                                                                <th className="f14-regular">Price</th>
                                                                <th className="f14-regular">Amount</th>
                                                                <th className="f14-regular">Total</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td className="f14-regular">98.36</td>
                                                                <td className="f14-regular">0.25</td>
                                                                <td className="f14-regular">$147.00</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="f14-regular">98.36</td>
                                                                <td className="f14-regular">0.25</td>
                                                                <td className="f14-regular">$147.00</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="f14-regular">98.36</td>
                                                                <td className="f14-regular">0.25</td>
                                                                <td className="f14-regular">$147.00</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="f14-regular">98.36</td>
                                                                <td className="f14-regular">0.25</td>
                                                                <td className="f14-regular">$147.00</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="f14-regular">98.36</td>
                                                                <td className="f14-regular">0.25</td>
                                                                <td className="f14-regular">$147.00</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    <a href="#" className="tf-button style-1 f12-bold w-100">
                                                        View All
                                                        <i className="icon icon-send"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- /main-content-wrap --> */}
                        </div>
                        {/* <!-- /main-content-wrap --> */}
                        
                    </div>
                    {/* <!-- /main-content --> */}
                </div>
                {/* <!-- /section-content-right --> */}
            </div>
            {/* <!-- /layout-wrap --> */}
        </div>
        {/* <!-- /#page --> */}
    </div>
    </div>
  )
}

export default Dashboard
