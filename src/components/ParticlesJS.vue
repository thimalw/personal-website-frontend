<template>
	<div id="particles-js"></div>
</template>

<script>
export default {
	name: "ParticlesJS",

	mounted() {
		require("particles.js");
		this.$nextTick(() => {
			this.initParticlesJS();
		});
	},

	methods: {
		initParticlesJS() {
			/* eslint-disable */
			particlesJS("particles-js", {
				particles: {
					number: {
						value: 80,
						density: {
							enable: true,
							value_area: 800
						}
					},
					color: {
						value: "#ffffff"
					},
					shape: {
						type: "circle",
						stroke: {
							width: 0,
							color: "#000000"
						},
						polygon: {
							nb_sides: 3
						},
						image: {
							src: "img/github.svg",
							width: 100,
							height: 100
						}
					},
					opacity: {
						value: 0.5,
						random: false,
						anim: {
							enable: false,
							speed: 1,
							opacity_min: 0.1,
							sync: false
						}
					},
					size: {
						value: 0,
						random: true,
						anim: {
							enable: false,
							speed: 143.73766657733808,
							size_min: 0.1,
							sync: false
						}
					},
					line_linked: {
						enable: false,
						distance: 150,
						color: "#ffffff",
						opacity: 0.4,
						width: 1
					},
					move: {
						enable: true,
						speed: 1,
						direction: "none",
						random: false,
						straight: false,
						out_mode: "bounce",
						bounce: false,
						attract: {
							enable: false,
							rotateX: 600,
							rotateY: 1200
						}
					}
				},
				interactivity: {
					detect_on: "window",
					events: {
						onhover: {
							enable: true,
							mode: "bubble"
						},
						onclick: {
							enable: false,
							mode: "push"
						},
						resize: true
					},
					modes: {
						grab: {
							distance: 400,
							line_linked: {
								opacity: 1
							}
						},
						bubble: {
							distance: 400,
							size: 2,
							duration: 2,
							opacity: 0.5,
							speed: 3
						},
						repulse: {
							distance: 200,
							duration: 0.4
						},
						push: {
							particles_nb: 4
						},
						remove: {
							particles_nb: 2
						}
					}
				},
				retina_detect: true
			});
		}
	}
};
</script>

<style lang="css">
#particles-js {
	width: 100%;
	height: 100vh;
	position: fixed;
	pointer-events: none !important;
	z-index: 450;
}
</style>
