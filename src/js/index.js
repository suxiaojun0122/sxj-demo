import '../css/normailze.css';
import "../css/index.css";
import $ from "jquery";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import  "Swiper/dist/css/swiper.min.css";
import  Swiper from "Swiper/dist/js/swiper.min.js";


 var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: '.swiper-pagination',
        spaceBetween: 30,
        effect: 'fade'
    });
