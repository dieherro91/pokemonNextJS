import type {
	Control,
	UseFormRegister,
	UseFormGetValues,
	UseFormSetValue,
	FieldErrorsImpl,
} from "react-hook-form";

export interface ServicesLinesInterface {
	control: Control<OfferClient>;
	register: UseFormRegister<OfferClient>;
	getValues: UseFormGetValues<OfferClient>;
	setValue: UseFormSetValue<OfferClient>;
	errors: FieldErrorsImpl<OfferClient>;
}
export interface ServicesLinesGroupsInterface extends ServicesLinesInterface {
	indexServiceLine: number;
}
export interface ServicesLinesGroupsServicesInterface
	extends ServicesLinesGroupsInterface {
	indexServiceLineGroup: number;
}

export interface OfferClient {
	id?: string;
	company_id?: string;
	campaign_client_id?: string;
	business_executive_id?: string;
	consecutive?: number;
	method_of_payment?: string;
	addressed_to?: string;
	position?: string;
	motor_ship?: string;
	dues?: number;
	advance?: number;
	start_date?: string;
	finish_date?: string;
	email?: string;
	description?: string;
	coin?: string;
	state?: number;
	createdAt?: string;
	updatedAt?: string;
	deletedAt?: string;
	company?: Company;
	businessExecutive?: BusinessExecutive;
	campaignsClient?: CampaignsClient;
	commercial_offers_services_lines: CommercialOffersServicesLine[];
	commercial_offers_aerial?: string;
	commercial_offers_commodity?: CommercialOffersCommodity;
	commercial_offers_emails?: CommercialOffersEmail[];
	commercial_offers_other_information?: CommercialOffersOtherInformation;
}

export interface BusinessExecutive {
	id?: string;
	external_id?: string;
	user_id?: string;
	city_id?: string;
	first_name?: string;
	second_name?: string;
	first_lastname?: string;
	second_lastname?: string;
	email?: string;
	phone?: string;
	cellphone?: string;
	address?: string;
	state?: number;
	city?: string;
}

export interface CampaignsClient {
	id?: string;
	client_id?: string;
	sub_campaign_id?: string;
	business_executive_id?: string;
	sale_stage_id?: string;
	interest_level?: string;
	contacted?: number;
	service_catalog?: number;
	contact_form?: string;
	sales_target?: number;
	date_finish?: string;
	lost?: number;
	state?: number;
	client?: Client;
	salesStage?: SalesStage;
}

export interface Client {
	id?: string;
	type_identity_id?: string;
	country_id?: string;
	department_id?: string;
	city_id?: string;
	company_id?: string;
	intermediary_id?: string;
	source_id?: string;
	type_client?: number;
	number_identification?: string;
	business_name?: string;
	type_person?: string;
	full_name?: string;
	names?: string;
	surnames?: string;
	geographic_sector?: string;
	type_taxpayer?: string;
	large_taxpayer?: string;
	self_retainer?: string;
	publicly_exposed_person?: string;
	foreign?: string;
	acronym?: string;
	industry?: string;
	phone?: string;
	address?: string;
	email?: string;
	ciiu_major?: string;
	ciiu_secundary?: string;
	web_url?: string;
	social_media_url?: string;
	source?: string;
	intermediary?: string;
	other?: string;
	state?: number;
	created_by_id?: string;
	modified_by_id?: string;
	city?: string;
}

export interface SalesStage {
	id?: string;
	name?: string;
	description?: string;
	percentage?: number;
	state?: number;
}

export interface CommercialOffersCommodity {
	id?: string;
	commercial_offer_id?: string;
	product?: string;
	weight?: string;
	quantity?: number;
	dimensions?: string;
	volume?: string;
	burden?: string;
	measurement_unit?: string;
	weight_unit?: string;
	quantity_unit?: string;
	imo?: number;
	state?: number;
}

export interface CommercialOffersEmail {
	id?: string;
	commercial_offer_id?: string;
	email?: string;
	state?: number;
}

export interface CommercialOffersOtherInformation {
	id?: string;
	commercial_offer_id?: string;
	incoterm_id?: string;
	discharge_rate?: string;
	insurance?: string;
	inspection?: string;
	additional_remarks?: string;
	losses?: string;
	incoterm?: string;
	state?: number;
}

export interface CommercialOffersServicesLine {
	id?: string;
	commercial_offer_id?: string;
	line_id?: string;
	state?: number;
	line?: Line;
	commercial_offers_services_groups: CommercialOffersServicesGroup[];
}

export interface CommercialOffersServicesGroup {
	id?: string;
	commercial_offer_id?: string;
	commercial_offer_service_line_id?: string;
	group_id?: string;
	state?: number;
	group?: Line;
	commercial_offers_services: CommercialOffersService[];
}

export interface CommercialOffersService {
	id?: string;
	commercial_offer_id?: string;
	commercial_offer_service_group_id?: string;
	service_id?: string;
	rate?: number | string;
	unit?: string;
	coin?: string;
	observation?: string;
	description?: string;
	minimal?: number | string;
	maximum?: number | string;
	state?: number;
	service?: Line;
	commercial_offers_services_detail?: CommercialOffersServicesDetail | string;
}

export interface CommercialOffersServicesDetail {
	id?: string;
	commercial_offer_service_id?: string;
	type?: string;
	source?: string;
	destiny?: string;
	icoterm?: string;
	rate?: string;
	fcl?: string;
	freight?: string;
	roro?: string;
	minimal?: string;
	via?: string;
	coin?: string;
	tt?: string;
	frequency?: string;
	validity?: string;
	state?: number;
}

export interface Line {
	id?: string;
	external_id?: string;
	group_id?: string;
	name?: string;
	state?: number;
	created_by_id?: string;
	modified_by_id?: string;
	line_id?: string;
}

export interface Company {
	id?: string;
	nit?: string;
	business_name?: string;
	logo?: string;
	state?: number;
}

export const defaultValuesOffer: OfferClient = {
	id: "QfP-VYkmLri_PrqZ-S-tGPewR9OxGrT6",
	company_id: "nAYPmdkKFCllNPTdX38X5Dwf7UH6Avun",
	campaign_client_id: "Xe8SajNzwWa4yrzbJgKV6opoaXXdsM78",
	business_executive_id: "xQg8l-s0oYmpTN264WVHukWTSy9S9aUy",
	consecutive: 152,
	method_of_payment: "Crédito",
	addressed_to: "SEBASTIAN",
	position: '',
	motor_ship: "12",
	dues: 15,
	advance: 20,
	start_date: "2022-07-28",
	finish_date: "2022-08-31",
	email: "CRISTIAN.TORRES@THEAPESCOMPANY.COM",
	description: "Observaciones. dfdfdff",
	coin: "",
	state: 1,
	createdAt: "2022-07-28T20:28:39.000Z",
	updatedAt: "2022-08-14T02:04:23.000Z",
	deletedAt: '',
	company: {
		id: "nAYPmdkKFCllNPTdX38X5Dwf7UH6Avun",
		nit: "0",
		business_name: "TRADING GROUP",
		logo: "https://www.tradinggroup.com.co/wp-content/uploads/2018/07/cropped-Logo-web-Trading-Group-02.png",
		state: 1,
	},
	businessExecutive: {
		id: "xQg8l-s0oYmpTN264WVHukWTSy9S9aUy",
		external_id: "00",
		user_id: "BCvG6dBVJl-63dW5yOPyNqC2v-Whep01",
		city_id: '',
		first_name: "Carlos",
		second_name: "Jose",
		first_lastname: "Perez ",
		second_lastname: "Soto",
		email: "diego.acosta@outlook.com",
		phone: "323513222",
		cellphone: '',
		address: '',
		state: 1,
		city: '',
	},
	campaignsClient: {
		id: "Xe8SajNzwWa4yrzbJgKV6opoaXXdsM78",
		client_id: "PyHiOwIb6XxRYDmU8soC0KBdwodFzSqO",
		sub_campaign_id: "mMB_AyG-jv5BKxqjIGyTA47A2MrOdtLi",
		business_executive_id: "f7Y_rgXcZe_C5JUSwWv4ctKGYtaM8vTU",
		sale_stage_id: "FE5QrdA-fG7y6n7kUiBIGCuJZb8L26sz",
		interest_level: "Caliente",
		contacted: 1,
		service_catalog: 1,
		contact_form: '',
		sales_target: 1000,
		date_finish: '',
		lost: 0,
		state: 1,
		client: {
			id: "PyHiOwIb6XxRYDmU8soC0KBdwodFzSqO",
			type_identity_id: "p2z64GVrB86Gb9O0dPYel_V_OPdtgJTT",
			country_id: '',
			department_id: '',
			city_id: '',
			company_id: '',
			intermediary_id: '',
			source_id: '',
			type_client: 1,
			number_identification: "800021308-5",
			business_name: "DRUMMOND LTD",
			type_person: "JURÍDICO",
			full_name: '',
			names: '',
			surnames: '',
			geographic_sector: '',
			type_taxpayer: '',
			large_taxpayer: '',
			self_retainer: '',
			publicly_exposed_person: '',
			foreign: '',
			acronym: '',
			industry: '',
			phone: "1000 URBAN CENT",
			address: '',
			email: "DRUMMOND@GMAIL.COM",
			ciiu_major: '',
			ciiu_secundary: '',
			web_url: '',
			social_media_url: '',
			source: '',
			intermediary: '',
			other: '',
			state: 1,
			created_by_id: '',
			modified_by_id: "wtrvBVW96iHDxCLD-6ezyLsLoZ0yovF3",
			city: '',
		},
		salesStage: {
			id: "FE5QrdA-fG7y6n7kUiBIGCuJZb8L26sz",
			name: "etapa 6",
			description: "desc...",
			percentage: 100,
			state: 1,
		},
	},
	commercial_offers_services_lines: [
		{
			id: "1-bLdqL4QBdobfqYK42v42PrT3uucmyE",
			commercial_offer_id: "QfP-VYkmLri_PrqZ-S-tGPewR9OxGrT6",
			line_id: "w0dFglkUyNEjJQFcoU3pQ9GuXiOALbb8",
			state: 1,
			line: {
				id: "w0dFglkUyNEjJQFcoU3pQ9GuXiOALbb8",
				external_id: '',
				name: "aduana",
				state: 1,
				created_by_id: '',
				modified_by_id: '',
			},
			commercial_offers_services_groups: [
				{
					id: "tEvQh-GsAOVqoqfhp4hoEo3Lg7MuuhIv",
					commercial_offer_id: '',
					commercial_offer_service_line_id: "1-bLdqL4QBdobfqYK42v42PrT3uucmyE",
					group_id: "zTEW9IhxCXPBU7l5vpio4emjaZXirZu3",
					state: 1,
					group: {
						id: "zTEW9IhxCXPBU7l5vpio4emjaZXirZu3",
						external_id: '',
						line_id: "w0dFglkUyNEjJQFcoU3pQ9GuXiOALbb8",
						name: "POR CONTENEDOR",
						state: 1,
						created_by_id: '',
						modified_by_id: '',
					},
					commercial_offers_services: [
						{
							id: "lKFvzQgZUQ6DhX1hkaXGo_eTfSLJqNBz",
							commercial_offer_id: '',
							commercial_offer_service_group_id:
								"tEvQh-GsAOVqoqfhp4hoEo3Lg7MuuhIv",
							service_id: "fkftN5DjBYqMn8qe_gn65Kr7UDSd0eKi",
							rate: 500000,
							unit: "EMBARQUE",
							coin: "USD",
							observation: '',
							description: "Descripciones",
							minimal: 400000,
							maximum: 600000,
							state: 2,
							service: {
								id: "fkftN5DjBYqMn8qe_gn65Kr7UDSd0eKi",
								external_id: '',
								group_id: "zTEW9IhxCXPBU7l5vpio4emjaZXirZu3",
								name: "FCL EXPO",
								state: 1,
								created_by_id: '',
								modified_by_id: '',
							},
							commercial_offers_services_detail: '',
						},
						{
							id: "W1WS8ZS3ISc83OCjBarJkv9BLL5F9UBb",
							commercial_offer_id: '',
							commercial_offer_service_group_id:
								"tEvQh-GsAOVqoqfhp4hoEo3Lg7MuuhIv",
							service_id: "fkftN5DjBYqMn8qe_gn65Kr7UDSd0eKi",
							rate: 1,
							unit: "TONELADA",
							coin: "USD",
							observation: '',
							description: "Aduana por contenedor.",
							minimal: '',
							maximum: '',
							state: 1,
							service: {
								id: "fkftN5DjBYqMn8qe_gn65Kr7UDSd0eKi",
								external_id: '',
								group_id: "zTEW9IhxCXPBU7l5vpio4emjaZXirZu3",
								name: "FCL EXPO",
								state: 1,
								created_by_id: '',
								modified_by_id: '',
							},
							commercial_offers_services_detail: '',
						},
					],
				},
			],
		},
		{
			id: "Ds0bEUP0VTU6dETeDaSPuZOa6vOmtPgs",
			commercial_offer_id: "QfP-VYkmLri_PrqZ-S-tGPewR9OxGrT6",
			line_id: "t4JjgNVmIdGICYnBsknIYBOfvwCqOBDx",
			state: 1,
			line: {
				id: "t4JjgNVmIdGICYnBsknIYBOfvwCqOBDx",
				external_id: '',
				name: "logistica",
				state: 1,
				created_by_id: '',
				modified_by_id: '',
			},
			commercial_offers_services_groups: [
				{
					id: "FqMoK0fKaCp3i97eDNkt4NnJ9PJez8sw",
					commercial_offer_id: '',
					commercial_offer_service_line_id: "Ds0bEUP0VTU6dETeDaSPuZOa6vOmtPgs",
					group_id: "Oqvru98Bc3MTT7VglkkfZqa_NJ6t8gWj",
					state: 1,
					group: {
						id: "Oqvru98Bc3MTT7VglkkfZqa_NJ6t8gWj",
						external_id: '',
						line_id: "t4JjgNVmIdGICYnBsknIYBOfvwCqOBDx",
						name: "HUMECTACIÓN",
						state: 1,
						created_by_id: '',
						modified_by_id: '',
					},
					commercial_offers_services: [
						{
							id: "9DBaFPWsXMu2adrVzJiUcsCWqNllCIaA",
							commercial_offer_id: '',
							commercial_offer_service_group_id:
								"FqMoK0fKaCp3i97eDNkt4NnJ9PJez8sw",
							service_id: "jcSuLUGlbPcuRqaGzs9Ws4f4pS6p2gRE",
							rate: '',
							unit: "TONELADA",
							coin: "USD",
							observation: '',
							description: "Descripcion del servicio",
							minimal: '',
							maximum: '',
							state: 1,
							service: {
								id: "jcSuLUGlbPcuRqaGzs9Ws4f4pS6p2gRE",
								external_id: '',
								group_id: "Oqvru98Bc3MTT7VglkkfZqa_NJ6t8gWj",
								name: "HUMECTACIÓN ",
								state: 1,
								created_by_id: '',
								modified_by_id: '',
							},
							commercial_offers_services_detail: '',
						},
					],
				},
			],
		},
		{
			id: "sGCDVF-OKJR1YyZ32xOBEzphWCEdXj48",
			commercial_offer_id: "QfP-VYkmLri_PrqZ-S-tGPewR9OxGrT6",
			line_id: "IMYV73P9kHIpay4SMS1OU19JYqm14mTE",
			state: 1,
			line: {
				id: "IMYV73P9kHIpay4SMS1OU19JYqm14mTE",
				external_id: '',
				name: "agente de carga",
				state: 1,
				created_by_id: '',
				modified_by_id: '',
			},
			commercial_offers_services_groups: [
				{
					id: "R_0WcE7Vbc45PBZFsDjWGGHinWxI-5P4",
					commercial_offer_id: '',
					commercial_offer_service_line_id: "sGCDVF-OKJR1YyZ32xOBEzphWCEdXj48",
					group_id: "-eWDjU0u99qWqH4H3cUHBkAfv41a3hEb",
					state: 1,
					group: {
						id: "-eWDjU0u99qWqH4H3cUHBkAfv41a3hEb",
						external_id: '',
						line_id: "IMYV73P9kHIpay4SMS1OU19JYqm14mTE",
						name: "FLETE INTERNACIONAL",
						state: 1,
						created_by_id: '',
						modified_by_id: '',
					},
					commercial_offers_services: [
						{
							id: "gciCcdx3iUPtWRJUFFDHsSDGJUaIIF5S",
							commercial_offer_id: '',
							commercial_offer_service_group_id:
								"R_0WcE7Vbc45PBZFsDjWGGHinWxI-5P4",
							service_id: "C5qgxGafpA4rPmJgrdqHhrjR7UXjhWBa",
							rate: '',
							unit: '',
							coin: '',
							observation: '',
							description: '',
							minimal: '',
							maximum: '',
							state: 1,
							service: {
								id: "C5qgxGafpA4rPmJgrdqHhrjR7UXjhWBa",
								external_id: '',
								group_id: "-eWDjU0u99qWqH4H3cUHBkAfv41a3hEb",
								name: "FLETE AÉREO ",
								state: 1,
								created_by_id: '',
								modified_by_id: '',
							},
							commercial_offers_services_detail: '',
						},
					],
				},
				{
					id: "sip3-4JKKoBLs7rFzBWL-yuNoxZfR8vN",
					commercial_offer_id: '',
					commercial_offer_service_line_id: "sGCDVF-OKJR1YyZ32xOBEzphWCEdXj48",
					group_id: "-eWDjU0u99qWqH4H3cUHBkAfv41a3hEb",
					state: 1,
					group: {
						id: "-eWDjU0u99qWqH4H3cUHBkAfv41a3hEb",
						external_id: '',
						line_id: "IMYV73P9kHIpay4SMS1OU19JYqm14mTE",
						name: "FLETE INTERNACIONAL",
						state: 1,
						created_by_id: '',
						modified_by_id: '',
					},
					commercial_offers_services: [
						{
							id: "yK3dBcWMo8zMErRnvdlzOVDGt5mP3H82",
							commercial_offer_id: '',
							commercial_offer_service_group_id:
								"sip3-4JKKoBLs7rFzBWL-yuNoxZfR8vN",
							service_id: "k1wIuyRTwwAB-AaTRg5UdMCag85DbReC",
							rate: 1231310,
							unit: "PORCENTAJE",
							coin: "COP",
							observation: '',
							description: "asddasdassdsd",
							minimal: 12323,
							maximum: 1232310,
							state: 1,
							service: {
								id: "k1wIuyRTwwAB-AaTRg5UdMCag85DbReC",
								external_id: '',
								group_id: "-eWDjU0u99qWqH4H3cUHBkAfv41a3hEb",
								name: "SED (INGRESO PROPIO)",
								state: 1,
								created_by_id: '',
								modified_by_id: '',
							},
							commercial_offers_services_detail: '',
						},
					],
				},
				{
					id: "xDF9tA0SQ5mJUEoYK_LBSRdWcI4zG3JX",
					commercial_offer_id: '',
					commercial_offer_service_line_id: "sGCDVF-OKJR1YyZ32xOBEzphWCEdXj48",
					group_id: "-eWDjU0u99qWqH4H3cUHBkAfv41a3hEb",
					state: 1,
					group: {
						id: "-eWDjU0u99qWqH4H3cUHBkAfv41a3hEb",
						external_id: '',
						line_id: "IMYV73P9kHIpay4SMS1OU19JYqm14mTE",
						name: "FLETE INTERNACIONAL",
						state: 1,
						created_by_id: '',
						modified_by_id: '',
					},
					commercial_offers_services: [
						{
							id: "cSTDGuoquLmA1pbhHFi77hwzJOH-CM-c",
							commercial_offer_id: '',
							commercial_offer_service_group_id:
								"xDF9tA0SQ5mJUEoYK_LBSRdWcI4zG3JX",
							service_id: "4DkMLSnJ1QEuU4f7YYGIH4p9mhT7FKHD",
							rate: '',
							unit: '',
							coin: '',
							observation: '',
							description: '',
							minimal: '',
							maximum: '',
							state: 1,
							service: {
								id: "4DkMLSnJ1QEuU4f7YYGIH4p9mhT7FKHD",
								external_id: '',
								group_id: "-eWDjU0u99qWqH4H3cUHBkAfv41a3hEb",
								name: "FLETE MARÍTIMO ",
								state: 1,
								created_by_id: '',
								modified_by_id: '',
							},
							commercial_offers_services_detail: '',
						},
					],
				},
			],
		},
		{
			id: "Wb5viCNy2_CIMXrqedDy63WdP6hb9QDh",
			commercial_offer_id: "QfP-VYkmLri_PrqZ-S-tGPewR9OxGrT6",
			line_id: "IMYV73P9kHIpay4SMS1OU19JYqm14mTE",
			state: 0,
			line: {
				id: "IMYV73P9kHIpay4SMS1OU19JYqm14mTE",
				external_id: '',
				name: "agente de carga",
				state: 1,
				created_by_id: '',
				modified_by_id: '',
			},
			commercial_offers_services_groups: [
				{
					id: "VzORPAsxUHK5k6g3-zuKwBRNkTRTbX32",
					commercial_offer_id: '',
					commercial_offer_service_line_id: "Wb5viCNy2_CIMXrqedDy63WdP6hb9QDh",
					group_id: "-eWDjU0u99qWqH4H3cUHBkAfv41a3hEb",
					state: 1,
					group: {
						id: "-eWDjU0u99qWqH4H3cUHBkAfv41a3hEb",
						external_id: '',
						line_id: "IMYV73P9kHIpay4SMS1OU19JYqm14mTE",
						name: "FLETE INTERNACIONAL",
						state: 1,
						created_by_id: '',
						modified_by_id: '',
					},
					commercial_offers_services: [
						{
							id: "ZgBSBr4jSMAKbi38_-ZepyYINSaSVCPK",
							commercial_offer_id: '',
							commercial_offer_service_group_id:
								"VzORPAsxUHK5k6g3-zuKwBRNkTRTbX32",
							service_id: "4DkMLSnJ1QEuU4f7YYGIH4p9mhT7FKHD",
							rate: '',
							unit: '',
							coin: '',
							observation: '',
							description: '',
							minimal: '',
							maximum: '',
							state: 0,
							service: {
								id: "4DkMLSnJ1QEuU4f7YYGIH4p9mhT7FKHD",
								external_id: '',
								group_id: "-eWDjU0u99qWqH4H3cUHBkAfv41a3hEb",
								name: "FLETE MARÍTIMO ",
								state: 1,
								created_by_id: '',
								modified_by_id: '',
							},
							commercial_offers_services_detail: {
								id: "vFjrsGnQc2QcC5Jr1_7TWq6feW3Hjtvh",
								commercial_offer_service_id: "ZgBSBr4jSMAKbi38_-ZepyYINSaSVCPK",
								type: "FCL",
								source: '',
								destiny: '',
								icoterm: "FOB",
								rate: '',
								fcl: '',
								freight: '',
								roro: '',
								minimal: '',
								via: '',
								coin: '',
								tt: '',
								frequency: '',
								validity: '',
								state: 1,
							},
						},
					],
				},
			],
		},
	],
	commercial_offers_aerial: '',
	commercial_offers_commodity: {
		id: "f_rBBwahndlk_B09oEVLslwjUQ-OER5h",
		commercial_offer_id: "QfP-VYkmLri_PrqZ-S-tGPewR9OxGrT6",
		product: "HARINA DE MAIZ",
		weight: '',
		quantity: 1000,
		dimensions: '',
		volume: '',
		burden: "Carga General",
		measurement_unit: "Toneladas",
		weight_unit: '',
		quantity_unit: '',
		imo: 0,
		state: 1,
	},
	commercial_offers_emails: [
		{
			id: "TDDMgnlgIPuSUatuzHR7QmJw7v0OSkLF",
			commercial_offer_id: "QfP-VYkmLri_PrqZ-S-tGPewR9OxGrT6",
			email: '',
			state: 1,
		},
	],
	commercial_offers_other_information: {
		id: "YN0IpC7fPOpTEhYv3yCVpZRuvnChAjCa",
		commercial_offer_id: "QfP-VYkmLri_PrqZ-S-tGPewR9OxGrT6",
		incoterm_id: '',
		discharge_rate: "RATADFFSF",
		insurance: "FDFDFDFDF",
		inspection: "DFDFDFSFSD",
		additional_remarks: "DFDFASDFASF",
		losses: "0",
		incoterm: '',
		state: 1,
	},
};
