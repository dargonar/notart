import {ServiceModel, defaultServiceModel} from "../model/service";

// De la idea a la publicación: La representación visual y narrativa de valores, tradiciones, mitos, aspiraciones y diversidad de una comunidad, capturando la esencia de su cultura y sus historias únicas a través de la fotografía colaborativa.

export const services = [
		{
			"name" 	: "urban_actions",
			"slug" 	: "urban_actions",
			"title" : "Urban actions",
			"action" : "Featured actions",
			"category" : "",
			"img_big" : "/img/services/urban_actions/k.jpg",
			"img_small" : "/img/services/urban_actions/k.jpg",
			"tagline" : "Activamos espacios públicos con narrativas visuales de impacto y formatos expositivos innovadores para conectar con la ciudadanía",
			"skill_title" : "What we do?",
			"skill_description" : "<ul><li>Gigantografías a nivel de calle</li><li>Galerías a cielo abierto</li><li>Acciones performáticas</li><li>Activaciones y Pop-Ups</li><li>Publicaciones</li></ul>",
			"extra_html" : ""
		},
		{
			"name" 	: "social_lab",
			"slug" 	: "social_lab",
			"title" : "Social Lab",
			"action" : "Nuestra propuesta",
			"category" : "",
			"img_big" : "/img/services/social_lab/k.png",
			"img_small" : "",
			"tagline" : "Diseño y producción de experiencias fotográficas promoviendo narrativas visuales comunitarias para reflexionar sobre temáticas sociales y ambientales que fomenten el pensamiento crítico de la ciudadanía ",
			"skill_title" : "skill_title",
			"skill_description" : "skill_description",
			"extra_hml" : "<h2 class=\"display-4 display-title anim-2 decor\">Workshops</h2><p class=\"anim-2\">Experiencias para desarrollar la propia perspectiva, aprender a construir una historia, definir quién es el público objetivo y difundir el trabajo.</p><h2 class=\"display-4 display-title anim-2 decor\"></h2><p class=\"anim-2\"></p>"
		},
		{
			"name" 	: "visual_engagement",
			"slug" 	: "visual_engagement",
			"action" : "Nuestro expertise",
			"title" : "Visual engagement",
			"category" : "",
			"img_big" : "/img/services/visual_engagement/k.jpg",
			"img_small" : "/img/services/visual_engagement/k.jpg",
			"tagline" : "Producimos eventos culturales y campañas focalizadas en temáticas socio ambientales",
			"skill_title" : "NotArt ha colaborado con instituciones públicas y privadas para organizar y ejecutar eventos culturales en diferentes formatos y ubicaciones",
			"skill_description" : "Activaciones y Pop-Ups<br/>Producción general, curaduría y planificación interpretativa<br/>Arte público y producción de exposiciones<br/>Generación de concursos y convocatorias<br/>Fundraising<br/>Experiencias inmersivas, realidad virtual y multimedia",
			"extra_hml" : ""
		}
	];

export function getServices() {
	const _services : ServiceModel[] = services.map(
		(serviceJson) => {
			const service:ServiceModel = {
				...defaultServiceModel,
				...serviceJson,
			}
			return service; 

		});  	
	return _services;
}