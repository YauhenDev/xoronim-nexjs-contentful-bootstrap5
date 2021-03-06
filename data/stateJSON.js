export const state = {
	mainData : {
		nameSite			: "Ритуальная служба Москвы",
		urlSite				: "https://xoronim.moscow",
		nameCompanyFull		: "ООО «Ритуальная служба сервиса»",
		nameCompanyShort	: "Городская ритуальная служба",
		legalAdrCity		: "г. Москва",
		legalAdrStr			: "ул. Измайловский вал 30 строение 6",
		legalAdrMetro		: "Метро Семеновская",
		legalAdrPostcode	: "107023",
		phoneNumber_1		: "79645844400",
		targetKonv_1		: "",
		phoneNumber_2		: "",
		targetKonv_2		: "",
		email				: "info@xoronim.moscow",
		targetKonv_email	: ""
	},
	mainPages: [
		{	id				: 0,
			nameLink		: "Главная",
			titleLink		: "Ритуальная служба в Москве",
			seoTitle		: "Ритуальная служба в Москве — XORONIM | Официальный сайт ХОРОНИМ",
			seoDescription 	: "Ритуальная служба Москва и Московская область. Ритуальные услуги и организация похорон. Цены на похороны в Москве и ритуальные услуги.",
			pathLink		: "/",
			mainPages		: true,
		},
		{	id				: 1,
			nameLink		: "Порядок действий",
			titleLink		: "Порядок действий",
			seoTitle		: "Что делать в случае смерти человека?",
			seoDescription 	: "Мы осуществляем организацию и проведение похорон в Москве. Долгий опыт работы в данной сфере позволяет нам организовать похороны комплексно и качественно, оставив в стороне большие наценки.",
			pathLink		: "/procedure",
			mainPages		: true,
		},
		{	id				: 2,
			nameLink		: "Услуги",
			titleLink		: "Ритуальные услуги в Москве и Московской области",
			seoTitle		: "Ритуальные услуги в Москве — XORONIM.moscow",
			seoDescription 	: "Доверьте эти заботы нам. Ритуальная служба сервиса предоставляем полный спектр услуг по организации похорон, при этом выполняем работу тактично, оперативно, квалифицированно и не дорого.",
			pathLink		: "/services",
			mainPages		: true,
		},
		{	id				: 3,
			nameLink		: "Продукция",
			titleLink		: "Ритуальные принадлежности в Москве и Московской области",
			seoTitle		: "Ритуальные принадлежности в Москве — XORONIM.moscow",
			seoDescription 	: "Заказать ритуальные принадлежности",
			pathLink		: "/ritualnie_prinadlejnosti",
			mainPages		: true,
		},
		{	id				: 4,
			nameLink		: "О предприятии",
			titleLink		: "Ритуальная служба сервиса",
			seoTitle		: "Агентство ритуальных услуг в Москве — Ритуальная служба сервиса",
			seoDescription 	: "Агентство ритуальных услуг в Москве — XORONIM. Официальный сайт",
			pathLink		: "/ritualnaya-slujba-servisa",
			mainPages		: true,
		},
		{	id				: 5,
			nameLink		: "Наши сотрудники",
			titleLink		: "Наши сотрудники",
			seoTitle		: "Агенты — Ритуальной службы сервиса",
			seoDescription	: "Все наши сотрудники имеют многолетний опыт работы и являются профессионалами. Каждый год проходят курсы повешения квалификации.",
			pathLink		: "/ritualnye-agenty",
			mainPages		: true,
		}
	],
	indexHeader: {
		h1	: "Ритуальные услуги в Москве<br />и Московской области",
		p	: "Берём на себя всю организацию и даём возможность<br />достойно попрощаться.",
		indexHeaderBlock: [
			{
				block : "Приезд консультанта в течении часа <strong>круглосуточно</strong>"
			},
			{
				block : "Более <strong>8 000</strong> проведенных похорон"
			},
			{
				block : "Работа по <strong>договору</strong>"
			}
		]
	},
	indexTrouble: {
		h2			: "Что делать, если случилась беда?",
		indexTroubleBlock:	[
			{	h	: "01",
				txt	: "Обратитесь к<br />похоронному бюро"
			},
			{	h	: "02",
				txt	: "Получите консультацию<br />по вашей ситуации"
			},
			{	h	: "03",
				txt	: "Вызовите агента<br />и оформите договор"
			},
			{	h	: "04",
				txt	: "Проведите<br />похороны"
			}
		]
	},
	indexPrice: {
		h2		:"Стоимость услуг ритуальной службы XORONIM"
	},
	indexDetails: {
		h2		: "Порядок действий в случае смерти человека",
		p		: "Смерть близкого человека иногда наступает внезапно. Несмотря на большое горе, родным, так или иначе, предстоит заняться похоронами. Для правильной организации погребения необходимо учитывать большое количество нюансов и выполнять ряд формальных действий, которые обязательны в случае смерти человека.",
		p2		: "Мы осуществляем организацию и проведение похорон в Москве. Долгий опыт работы в данной сфере позволяет нам организовать похороны комплексно и качественно, оставив в стороне большие наценки."
	},
	indexServices: {
		h2		: "Ритуальные услуги"
	},
	indexQuestions: {
		h2		: "Остались вопросы?",
		p		: "Если у вас произошла трагедия и вы не знаете как организовать похороны и куда обращаться позвоните нам в ХОРОНИМ или вызовите ритуального агента и мы всё сделаем за вас."
	},
	indexShowroom: {
		h2		: "Выставочный зал",
		p		: "Вы можете посмотреть наш зал с широким ассортиментом<br /> включая принадлежности собственного производства",
		indexShowroomPhoto:	[
			{	img	: "001.jpg" },
			{	img	: "002.jpg" },
			{	img	: "003.jpg" },
			{	img	: "004.jpg" }
		]
	},
	indexAbout: {
		h2				: "О нас",
		indexAboutTxt	:	[
			{	p	: "Наша компания занимается ритуальными услугами более 10 лет, число наших клиентов достигает более 8000." },
			{	p	: "Вы можете быть уверены в качественной организации ритуальных услуг, мы берём на себя абсолютно всю ответственность." },
			{	p	: "В перечень наших услуг включены такие мероприятия, как: доставка тела в морг, предоставление места на кладбище, церемония прощания, поминальный обед и др." },
			{	p	: "Важно! Остерегайтесь мошенников, которые часто пользуются тяжелой ситуацией, перед выбором центра ритуальных услуг узнайте всю нужную информацию." }
		]
	},
	pagePrice:	[
		{
			namePrice		: "Социальные похороны",
			pathLink		: "/services/prices/socialnye-pokhorony",
		},
		{
			namePrice		: "Стандартные похороны",
			pathLink		: "/services/prices/standartnye-pokhorony",
		},
		{
			namePrice		: "Премиум похороны",
			pathLink		: "/services/prices/premium-pokhorony",
		},
		{
			namePrice		: "Элитные похороны",
			pathLink		: "/services/prices/elitnye-pokhorony",
		},
	],
	pageInfo:	[
		{
			namePrice		: "О предприятии",
			pathLink		: "/ritualnaya-slujba-servisa",
		},
		{
			namePrice		: "Наши сотрудники",
			pathLink		: "/ritualnye-agenty",
		},
		{
			namePrice		: "Партнеры",
			pathLink		: "/partners",
		},
		{
			namePrice		: "Список учреждений",
			pathLink		: "/spisok-uchrejdeniy-moskvy",
		},
	],
	pagePrivacy:	{
		nameLink		: "Политика в отношении обработки персональных данных",
		titleLink		: "Ритуальная служба сервиса - Политика в отношении обработки персональных данных",
		seoTitle		: "Политика в отношении обработки персональных данных ООО Ритуальная служба сервиса",
		seoDescription 	: "Политика в отношении обработки персональных данных ООО Ритуальная служба сервиса",
		pathLink		: "/privacy-policy",
	}
}