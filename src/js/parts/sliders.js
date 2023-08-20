import { Swiper, Manipulation, EffectCreative, Navigation, Controller } from "swiper";


const serviceSlider = document.querySelector('#services .swiper');
if (serviceSlider) {
    const services = document.querySelector('#services');
    const slides = serviceSlider.querySelectorAll('.swiper-slide');
    const prev = services.querySelector('.prev');
    const next = services.querySelector('.next');

    if (slides.length)
        new Swiper(serviceSlider, {
            modules: [
                Navigation
            ],
            speed: 1000,
            loop: true,
            navigation: {
                prevEl: prev,
                nextEl: next
            },
            breakpoints: {
                300: {
                    slidesPerView: 1,
                    centeredSlides: false,
                },
                769: {
                    slidesPerView: 2,
                    centeredSlides: true,
                }
            }
        })
}

const heroSlider = document.querySelector('.hero__images .swiper');
const heroSliderSmall = document.querySelector('.hero__images-slider .swiper');
if (heroSlider) {
    const imageSlides = heroSlider.querySelectorAll('.swiper-slide');
    const speed = 1000;
    const interleaveOffset = 0.5;

    let imageSlider = null;
    if (imageSlides.length)
        imageSlider = new Swiper(heroSlider, {
            modules: [
                Manipulation, EffectCreative
            ],
            slidesPerView: 1,
            loop: true,
            speed: speed,

            effect: "creative",
            creativeEffect: {
                prev: {
                    translate: ["-100%", 0, 200],
                    scale: 1.15,
                },
                next: {
                    translate: ["100%", 0, 200],
                    scale: 1.15,
                },
            },
        })

    const heroSmall = document.querySelector('.hero__images-slider');
    const smallSlides = heroSliderSmall.querySelectorAll('.swiper-slide');
    const prev = heroSmall.querySelector('.prev');
    const next = heroSmall.querySelector('.next');

    let smallSlider = null;
    if (smallSlides.length)
        smallSlider = new Swiper(heroSliderSmall, {
            modules: [
                Manipulation, Navigation, Controller, EffectCreative
            ],
            loop: true,
            slidesPerView: 1,
            speed: speed,

            navigation: {
                prevEl: prev,
                nextEl: next
            },
            controller: { control: imageSlider },

            effect: "creative",
            creativeEffect: {
                prev: {
                    translate: [0, "100%", 0],
                },
                next: {
                    translate: [0, "100%", 0],
                },
            },
        })

}