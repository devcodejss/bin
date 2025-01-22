// Configuración de partículas para el fondo
particlesJS('particles-js', {
    "particles": {
        "number": {
            "value": 150,
            "density": {
                "enable": true,
                "value_area": 500
            }
        },
        "color": {
            "value": "4400ff"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "4400ff"
            }
        },
        "opacity": {
            "value": 0.5,
            "random": true,
            "anim": {
                "enable": true,
                "speed": 1,
                "opacity_min": 0.1
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "enable": true,
                "speed": 40,
                "size_min": 0.1
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "4400ff",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 6,
            "direction": "center", // Las partículas se acercan al cursor
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": true, // Activar atracción hacia el cursor
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "window",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "attract" // Cambié a "attract" para que las partículas se acerquen al cursor
            },
            "onclick": {
                "enable": true,
                "mode": "push" // Explosión de partículas al hacer clic
            }
        },
        "modes": {
            "grab": {
                "distance": 400,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 8 // Número de partículas en la explosión (reducido)
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});
