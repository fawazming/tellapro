
// Universal Layout Application Script
document.addEventListener('DOMContentLoaded', function () {
    // Show loader while applying layout
    const loader = document.getElementById('loader');
    loader.style.display = 'flex';

    // Create header template
    const headerTemplate = `      
    <div id="page">
        <!-- Header Section Start -->
        <div class="header-section header-fluid sticky-header section">
            <div class="header-inner">
                <div class="container position-relative">
                    <div class="row justify-content-between align-items-center">

                        <!-- Header Logo Start -->
                        <div class="col-xl-3 col-auto">
                            <div class="header-logo">
                                <a href="index.html">
                                    <img class="dark-logo" src="https://abdulwaheedtella.com/images/logo-dark.png"
                                        alt="Learts Logo">
                                    <img class="light-logo" src="https://abdulwaheedtella.com/images/logo-light.png"
                                        alt="Learts Logo">
                                </a>
                            </div>
                        </div>
                        <!-- Header Logo End -->

                        <!-- Header Main Menu Start -->
                        <div class="col d-none d-xl-block position-static">
                            <nav class="site-main-menu">
                                <ul>
                                    <li class=" position-static">
                                        <a href="#"><span class="menu-text">Home</span></a>
                                    </li>
                                    <li class=" position-static">
                                        <a href="#"><span class="menu-text">About Me</span></a>
                                    </li>
                                    <li class=" position-static">
                                        <a href="#"><span class="menu-text">Publications</span></a>
                                    </li>
                                    <li class=" position-static">
                                        <a href="#"><span class="menu-text">Services</span></a>
                                    </li>
                                    <li class=" position-static">
                                        <a href="#"><span class="menu-text">Blog</span></a>
                                    </li>
                                    <li class=" position-static">
                                        <a href="#"><span class="menu-text">Contact</span></a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <!-- Header Main Menu End -->

                        <!-- Header Right Start -->
                        <div class="col-xl-3 col-auto">
                            <div class="header-right">
                                <div class="inner">

                                    <!-- Header Mobile Menu Toggle Start -->
                                    <div class="header-mobile-menu-toggle d-xl-none ml-sm-2">
                                        <button class="toggle">
                                            <i class="icon-top"></i>
                                            <i class="icon-middle"></i>
                                            <i class="icon-bottom"></i>
                                        </button>
                                    </div>
                                    <!-- Header Mobile Menu Toggle End -->
                                </div>
                            </div>
                        </div>
                        <!-- Header Right End -->

                    </div>
                </div>
            </div>
        </div>
        <!-- Header Section End -->
            `;

    // Create footer template
    const footerTemplate = `
               
        <div class="footer-section section">
            <div class="container">

                <!-- Footer Top Widgets Start -->
                <div class="row">

                    <!-- Footer Widget Start -->
                    <div class="col-xl-6 col-md-5 col-12 max-mb-50">
                        <div class="footer-widget">
                            <h4 class="footer-widget-title">Contact Me</h4>
                            <div class="footer-widget-content">
                                <div class="content">
                                    <li>Experience <span>:</span> <strong>5+ years</strong></li>
                                    <li>Freelance <span>:</span> <strong>Available</strong></li>
                                    <li>Skype <span>:</span> <strong>tellaabdulwaheed01_1</strong></li>
                                    <li>Language <span>:</span> <strong>English</strong></li>
                                    <li>Email:  <span><a href="mailto:abdulwaheedtella@gmail.com">abdulwaheedtella@gmail.com </a></span></li>
                                </div>
                                <div class="footer-social-inline">
                                    <!-- <a href="#"><i class="fab fa-facebook-square"></i></a> -->
                                    <a href="#"><i class="fab fa-twitter"></i></a>
                                    <!-- <a href="#"><i class="fab fa-instagram"></i></a> -->
                                    <a href="https://ng.linkedin.com/in/abdulwaheedtella"><i
                                            class="fab fa-linkedin"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Footer Widget End -->

                    <!-- Footer Widget Start -->
                    <div class="col-xl-3 col-md-4 col-sm-7 col-12 max-mb-50">
                        <div class="footer-widget">
                            <h4 class="footer-widget-title">Explore</h4>
                            <div class="footer-widget-content">
                                <ul class="column-2">
                                    <li><a href="#">Start here</a></li>
                                    <li><a href="#">Success story</a></li>
                                    <li><a href="#">Blog</a></li>
                                    <li><a href="#">Courses</a></li>
                                    <li><a href="#">About us</a></li>
                                    <li><a href="#">Contact us</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <!-- Footer Widget End -->

                    <!-- Footer Widget Start -->
                    <div class="col-xl-3 col-md-3 col-sm-5 col-12 max-mb-50">
                        <div class="footer-widget">
                            <h4 class="footer-widget-title">Information</h4>
                            <div class="footer-widget-content">
                                <ul>
                                    <li><a href="#">Membership</a></li>
                                    <li><a href="#">Purchase guide</a></li>
                                    <li><a href="#">Privacy policy</a></li>
                                    <li><a href="#">Terms of service</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <!-- Footer Widget End -->

                </div>
                <!-- Footer Top Widgets End -->

                <!-- Footer Copyright Start 
                <div class="row max-mt-20">
                    <div class="col">
                        <p class="copyright">� 2023 Maxcoach. <a href="https://hasthemes.com/">All Rights Reserved</a>
                        </p>
                    </div>
                </div> Footer Copyright End -->

            </div>
        </div>

        <!-- Scroll Top Start -->
        <a href="#" class="scroll-top" id="scroll-top">
            <i class="arrow-top fal fa-long-arrow-up"></i>
            <i class="arrow-bottom fal fa-long-arrow-up"></i>
        </a>
        <!-- Scroll Top End -->
    </div>

    <div id="site-main-mobile-menu" class="site-main-mobile-menu">
        <div class="site-main-mobile-menu-inner">
            <div class="mobile-menu-header">
                <div class="mobile-menu-logo">
                    <a href="index.html"><img src="https://abdulwaheedtella.com/images/logo-dark.png" alt=""></a>
                </div>
                <div class="mobile-menu-close">
                    <button class="toggle">
                        <i class="icon-top"></i>
                        <i class="icon-bottom"></i>
                    </button>
                </div>
            </div>
            <div class="mobile-menu-content">
                <nav class="site-mobile-menu">
                    <ul>
                        <li class=" position-static">
                            <a href="#"><span class="menu-text">Home</span></a>
                        </li>
                        <li class=" position-static">
                            <a href="#"><span class="menu-text">About Me</span></a>
                        </li>
                        <li class=" position-static">
                            <a href="#"><span class="menu-text">Publications</span></a>
                        </li>
                        <li class=" position-static">
                            <a href="#"><span class="menu-text">Services</span></a>
                        </li>
                        <li class=" position-static">
                            <a href="#"><span class="menu-text">Blog</span></a>
                        </li>
                        <li class=" position-static">
                            <a href="#"><span class="menu-text">Contact</span></a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
            `;

    // Apply header and footer to the document
    const container = document.getElementById('content-container');
    const currentContent = container.innerHTML;
    container.innerHTML = headerTemplate + currentContent + footerTemplate;

    // Hide loader after a small delay (to ensure smooth transition)
    setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
        }, 300);
    }, 500);

});

// Make this script exportable for inclusion in other pages
// if (typeof module !== 'undefined' && module.exports) {
//     module.exports = function applyLayout() {
//         const event = new Event('DOMContentLoaded');
//         document.dispatchEvent(event);
//     };
// }
