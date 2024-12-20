import {ActivationModel, defaultActivationModel} from "../model/activation";

export const activations = [
		{
			"name" 	: "Héroes del brillo",
			"slug" 	: "heroes_del_brillo",
			"title" : "Héroes del brillo",
			"categories" : ["urban_actions", "social_lab"],
			"img_big" : "/img/activations/heroes/k.png",
			"img_small" : "/img/activations/heroes/k.png",
			"tagline" : "Identidad &nbsp; fineart at street",
			"data" : 
				[{
					"img_first" : "",
					"pre_title" : "",
					"title" : "Heroes del brillo",
					"data" : "There are 3000 shoe shiners who go out into the streets of La Paz and El Alto suburbs each day in search of clients. They are from all ages and in recent years have become a social phenomenon in the Bolivian capital.<br/>What characterizes this urban tribe is the use of ski masks so they will not be recognized by those around them. They confront the discrimination they face through these masks; in their neighbourhoods no one knows that they work as shoe shiners, at school they hide this fact, and even their own families believe they have a different job when they head down to the center of the city from El Alto.<br/>The mask is their strongest identity, what makes them invisible while at the same time unites them. This collective anonymity makes them tougher when facing the rest of society and is their resistance against the exclusion they suffer because they carry out this work.<br/>For three years I have been collaborating with sixty shoe shiners associated with the NGO \"Hormigón Armado\". We planned together the scenes during a series of graphic novels workshops, incorporating the local elements of the urbanity of El Alto and producing photographic sessions with them as co-authors of a street photobook to fight against their social discrimination.",
					"img_last" : "",

				}],
			"link": "https://www.federicoestol.com/shineheroes",
			"gallery": [
				{
					"title" : "",
					"desc" : "",
					"img" : "",
				}
			],
		},
		{
			"name" 	: "Workshop `Artesanía de la memoria`",
			"slug" 	: "fifv_2024_workshop",
			"title" : "Workshop `Artesanía de la memoria`",
			"categories" : ["urban_actions", "social_lab"],
			"img_big" : "/img/activations/fifv/k.jpg",
			"img_small" : "/img/activations/fifv/k.jpg",
			"tagline" : "",
			"data" : 
				[{
					"img_first" : "",
					"pre_title" : "",
					"title" : "El laboratorio",
					"data" : "Workshop dictado en contexto del <b>Festival Internacional de Fotografía de Valparaíso 2024</b> donde se dictó un taller de creación con una activación comunitaria, donde fotógrafas/os y productores/as visuales generarón una creación colaborativa con vecinos y vecinas de una comunidad porteña.<br/>En este intercambio horizontal durante los días de realización del FIFV, se produjo una obra conjunta entre las/los habitantes locales y los artistas. La acción artística colaborativa intentó dar respuesta a la temática central de la decimoquinta edición del festival “¿Cuándo una fotografía pierde la memoria?”, considerando la memoria como un relato que nunca está concluido y donde los momentos del recordar son siempre mutables dependiendo de las personas y el territorio.<br/> El evento de cierre del festival se realizó en la sede del barrio donde se produjo el workshop, con una activación callejera empapelando 2 cuadras del barrio desde la sede comunal hasta la plaza central donde se realizó un evento/muestra con cocina pública, músicxs locales en vivo y la exposición de las fotos producidas.",
					"img_last" : "",

				}],
			"link": "https://fifv.cl/2024/procesos-creativos/workshops/federico-estol/"
		},
		{
			"name" 	: "San José Foto",
			"slug" 	: "san_jose_festival_internacional_fotografia",
			"title" : "San José Foto",
			"categories" : ["events", "social_lab"],
			"img_big" : "/img/activations/san_jose_foto/k.jpg",
			"img_small" : "/img/activations/san_jose_foto/k.jpg",
			"tagline" : "Festival Internacional de Fotografía",
			"data" : 
				[
					{
						"img_first" : "",
						"pre_title" : "",
						"title" : "El festival",
						"data" : "SAN JOSÉ FOTO es un festival internacional de fotografía organizado y financiado por la Intendencia de San José. Su objetivo principal es llevar la fotografía al interior del Uruguay y acercarla a la ciudadanía , apostando por la utilización de formatos y espacios no convencionales como fachadas de edificios públicos y privados, vinculando al público con las imágenes. Una relación aún más evidente en la ciudad de San José que ha sabido mantener su arquitectura singular conjugada con la apacible vida de los pueblos.",
						"img_last" : "",

					},
					{
						"img_first" : "",
						"pre_title" : "",
						"title" : "Breve historia",
						"data" : "Más de 2000 personas visitaron las exhibiciones al aire libre en la pasada edición en 2023 y asistieron 30 invitados de distintas partes del mundo. Las exposiciones son acompañadas de conferencias en el Espacio Cultural San José, proyecciones en la plaza principal, feria de portafolios, espacios de reflexión y debate, workshops, acciones educativas y una completa feria de fotolibros.<br/>Todas las actividades desarrolladas en un contexto de armonía caracterizado por la hospitalidad de los habitantes de una de las ciudades más importantes del Uruguay.",
						"img_last" : "",
					}
				],
			"link": "https://sanjosefoto.uy/"
		},
	];


export function getActivations() {
	const _activations : ActivationModel[] = activations.map(
		(activationJson) => {
			const activation:ActivationModel = {
				...defaultActivationModel,
				...activationJson,
				
			}
			return activation; 
		});  	
	return _activations;
}