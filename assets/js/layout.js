// Universal Layout Application Script
document.addEventListener('DOMContentLoaded', function () {
    // Show loader while applying Layout

    const path = window.location.pathname;
    if (path === '/' || path === '/index.html') {
        fetchBlogs();
    }
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
                    <div class="col-xl-2 col-auto">
                        <div class="header-logo">
                            <a href="index.html">
                                <img class="dark-logo" src="https://fawazming.github.io/tella/images/logo-dark.png"
                                    alt="Learts Logo">
                                <img class="light-logo" src="https://fawazming.github.io/tella/images/logo-light.png"
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
                                    <a href="index.html"><span class="menu-text">Home</span></a>
                                </li>
                                <li class=" position-static">
                                    <a href="biography.html"><span class="menu-text">About Me</span></a>
                                </li>
                                <li class=" position-static">
                                    <a href="publication.html"><span class="menu-text">Publications</span></a>
                                </li>
                    <li class=" position-static">
                        <a href="portfolio.html"><span class="menu-text">Portfolio</span></a>
                    </li>
                    <li class=" position-static">
                        <a href="research.html"><span class="menu-text">Research</span></a>
                    </li>
                                <!-- <li class=" position-static">
                                        <a href="#"><span class="menu-text">Services</span></a>
                                    </li> -->
                                <li class=" position-static">
                                    <a href="index.html#blog"><span class="menu-text">Blog</span></a>
                                </li>
                                <li class=" position-static">
                                    <a href="#contact"><span class="menu-text">Contact</span></a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <!-- Header Main Menu End -->

                    <!-- Header Right Start -->
                    <div class="col-xl-2 col-auto">
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

    <div class="footer-section section" id="contact">
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
                                <li>Email: <span><a href="mailto:abdulwaheedtella@gmail.com">abdulwaheedtella@gmail.com
                                        </a></span></li>
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
                                <!-- <li><a href="#"><img src="https://cdn.prod.website-files.com/60252f4fc7403c719ecadc82/60252f4fc7403c481fcade21_ResearchGate_newgreen.svg" alt="ResearchGate"></a></li> -->
                                <li><a href="https://youtube.com/@geo-asquare?si=UTsFvpfSalCMGBOa">Youtube Channel</a>
                                </li>
                                <li><a href="index.html#blog">Blog</a></li>
                                
                    <li>
                        <a href="portfolio.html">Portfolio</a>
                    </li>
                    <li>
                        <a href="research.html">Research</a>
                    </li>
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
                                <li><a href="https://orcid.org/0000-0002-4380-3343" target="_blank"><img
                                            src="https://orcid.wpengine.com/wp-content/uploads/2020/07/Asset-3.png"
                                            alt="ORCID"></a></li>
                                <li><a href="https://scholar.google.com/citations?user=VNYbr6cAAAAJ&hl=en&inst=18167123410944994753"
                                        target="_blank"><img
                                            src="https://scholar.google.com/intl/en/scholar/images/2x/scholar_logo_24dp.png"
                                            alt="Google Scholar"></a></li>
                                <li><a href="https://www.researchgate.net/profile/Abdulwaheed-Tella"
                                        target="_blank"><img
                                            src="https://upload.wikimedia.org/wikipedia/commons/a/aa/ResearchGate_Logo.png"
                                            width="300px" alt="ResearchGate"></a></li>

                            </ul>
                        </div>
                    </div>
                </div>
                <!-- Footer Widget End -->

            </div>

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
                <a href="index.html"><img src="https://fawazming.github.io/tella/images/logo-dark.png" alt=""></a>
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
                        <a href="index.html"><span class="menu-text">Home</span></a>
                    </li>
                    <li class=" position-static">
                        <a href="biography.html"><span class="menu-text">About Me</span></a>
                    </li>
                    <li class=" position-static">
                        <a href="publication.html"><span class="menu-text">Publications</span></a>
                    </li>
                    <li class=" position-static">
                        <a href="portfolio.html"><span class="menu-text">Portfolio</span></a>
                    </li>
                    <li class=" position-static">
                        <a href="research.html"><span class="menu-text">Research</span></a>
                    </li>
                    <!-- <li class=" position-static">
                            <a href="#"><span class="menu-text">Services</span></a>
                        </li> -->
                    <li class=" position-static">
                        <a href="index.html#blog"><span class="menu-text">Blog</span></a>
                    </li>
                    <li class=" position-static">
                        <a href="#contact"><span class="menu-text">Contact</span></a>
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


    /*--
    Off Canvas Function
    -----------------------------------*/
    var $body = $('body');
    $('.header-mobile-menu-toggle, .mobile-menu-close').on('click', '.toggle', function () {
        $body.toggleClass('mobile-menu-open');
    });
    $('.site-mobile-menu').on('click', '.menu-toggle', function (e) {
        e.preventDefault();
        var $this = $(this);
        if ($this.siblings('.sub-menu:visible, .mega-menu:visible').length) {
            $this.siblings('.sub-menu, .mega-menu').slideUp().parent().removeClass('open').find('.sub-menu, .mega - menu').slideUp().parent().removeClass('open');
} else {
            $this.siblings('.sub-menu, .mega-menu').slideDown().parent().addClass('open').siblings().find('.sub-menu, .mega - menu').slideUp().parent().removeClass('open');
}
    });

    // Service Slider
    var serviceSlider = new Swiper('.service-slider', {
        watchSlidesVisibility: true,
        loop: true,
        spaceBetween: 30,
        slidesPerView: 3,
        slidesPerGroup: 1,
        autoHeight: true,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
        breakpoints: {
            320: {
                slidesPerView: 1
            },
            768: {
                slidesPerView: 2
            },
            992: {
                slidesPerView: 2
            },
            1200: {
                slidesPerView: 3
            }
        }
    })
});

// Make this script exportable for inclusion in other pages
// if (typeof module !== 'undefined' && module.exports) {
// module.exports = function applyLayout() {
// const event = new Event('DOMContentLoaded');
// document.dispatchEvent(event);
// };
// }