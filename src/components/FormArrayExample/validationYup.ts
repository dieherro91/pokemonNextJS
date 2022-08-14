import * as yup from "yup";
import {
    BusinessExecutive,
	CampaignsClient,
	Client,
	CommercialOffersCommodity,
	CommercialOffersEmail,
	CommercialOffersOtherInformation,
	CommercialOffersService,
	CommercialOffersServicesDetail,
	CommercialOffersServicesGroup,
	CommercialOffersServicesLine,
	Company,
	Line,
	OfferClient,
    SalesStage,
} from "./interfaces";

// export const schemaFirsLevel: yup.SchemaOf<exampleInterface> = yup.object({
// 	email: yup.string().email("Email No valido").required("Campo requerido"),
// 	// id:yup.string().min(1).defined(),
// 	// company: yup.array().of(yup.object({
// 	//     id:yup.string().defined(),
// 	//     name:yup.string().defined()
// 	// })).optional()
// });
const schemaLine: yup.SchemaOf<Line> = yup.object({
	id: yup.string().optional().nullable(),
	external_id: yup.string().optional().nullable(),
	group_id: yup.string().optional().nullable(),
	name: yup.string().optional().nullable(),
	state: yup.number().optional().nullable(),
	created_by_id: yup.string().optional().nullable(),
	modified_by_id: yup.string().optional().nullable(),
	line_id: yup.string().optional().nullable(),
});

//
const schemaOffersServicesDetail: yup.SchemaOf<CommercialOffersServicesDetail> =
	yup.object({
		id: yup.string().optional().nullable(),
		commercial_offer_service_id: yup.string().optional().nullable(),
		type: yup.string().optional().nullable(),
		source: yup.string().optional().nullable(),
		destiny: yup.string().optional().nullable(),
		icoterm: yup.string().optional().nullable(),
		rate: yup.string().optional().nullable(),
		fcl: yup.string().optional().nullable(),
		freight: yup.string().optional().nullable(),
		roro: yup.string().optional().nullable(),
		minimal: yup.string().optional().nullable(),
		via: yup.string().optional().nullable(),
		coin: yup.string().optional().nullable(),
		tt: yup.string().optional().nullable(),
		frequency: yup.string().optional().nullable(),
		validity: yup.string().optional().nullable(),
		state: yup.number().optional().nullable(),
	});

const schemaCommercialOffersGroupService: yup.SchemaOf<CommercialOffersService> =
	yup.object({
		id: yup.string().optional().nullable(),
		commercial_offer_id: yup.string().optional().nullable(),
		commercial_offer_service_group_id: yup.string().optional().nullable(),
		service_id: yup.string().optional().nullable(),
		rate: yup.string().optional().nullable(),
		unit: yup.string().optional().nullable(),
		coin: yup.string().optional().nullable(),
		observation: yup.string().optional().nullable(),
		description: yup.string().optional().nullable(),
		minimal: yup.number().optional().nullable(),
		maximum: yup.number().optional().nullable(),
		state: yup.number().optional().nullable(),
		service: schemaLine.optional().nullable(),
		commercial_offers_services_detail: schemaOffersServicesDetail.optional().nullable(),
	});

const schemaCommercialOffersServicesGroup: yup.SchemaOf<CommercialOffersServicesGroup> =
	yup.object({
		id: yup.string().optional().nullable(),
		commercial_offer_id: yup.string().optional().nullable(),
		commercial_offer_service_line_id: yup.string().optional().nullable(),
		group_id: yup.string().optional().nullable(),
		state: yup.number().optional().nullable(),
		group: schemaLine.optional().nullable(),
		commercial_offers_services: yup
			.array()
			.of(schemaCommercialOffersGroupService.defined()),
	});
const schemaCommercialOffersServicesLine: yup.SchemaOf<CommercialOffersServicesLine> =
	yup.object({
		id: yup.string().optional().nullable(),
		commercial_offer_id: yup.string().optional().nullable(),
		line_id: yup.string().optional().nullable(),
		state: yup.number().optional().nullable(),
		line: schemaLine.optional().nullable(),
		commercial_offers_services_groups: yup
			.array()
			.of(schemaCommercialOffersServicesGroup.defined()),
	});
const schemaCompany: yup.SchemaOf<Company> = yup.object({
	id: yup.string().optional().nullable(),
	nit: yup.string().optional().nullable(),
	business_name: yup.string().optional().nullable(),
	logo: yup.string().optional().nullable(),
	state: yup.number().optional().nullable(),
});

const schemaBusinessExecutive: yup.SchemaOf<BusinessExecutive> = yup.object({
    id: yup.string().optional().nullable(),
	external_id: yup.string().optional().nullable(),
	user_id: yup.string().optional().nullable(),
	city_id: yup.string().optional().nullable(),
	first_name: yup.string().optional().nullable(),
	second_name: yup.string().optional().nullable(),
	first_lastname: yup.string().optional().nullable(),
	second_lastname: yup.string().optional().nullable(),
	email: yup.string().optional().nullable(),
	phone: yup.string().optional().nullable(),
	cellphone: yup.string().optional().nullable(),
	address: yup.string().optional().nullable(),
	state: yup.number().optional().nullable(),
	city: yup.string().optional().nullable(),
});
const schemaClient: yup.SchemaOf<Client> = yup.object({
    id: yup.string().optional().nullable(),
	type_identity_id: yup.string().optional().nullable(),
	country_id: yup.string().optional().nullable(),
	department_id: yup.string().optional().nullable(),
	city_id: yup.string().optional().nullable(),
	company_id: yup.string().optional().nullable(),
	intermediary_id: yup.string().optional().nullable(),
	source_id: yup.string().optional().nullable(),
	type_client: yup.number().optional().nullable(),
	number_identification: yup.string().optional().nullable(),
	business_name: yup.string().optional().nullable(),
	type_person: yup.string().optional().nullable(),
	full_name: yup.string().optional().nullable(),
	names: yup.string().optional().nullable(),
	surnames: yup.string().optional().nullable(),
	geographic_sector: yup.string().optional().nullable(),
	type_taxpayer: yup.string().optional().nullable(),
	large_taxpayer: yup.string().optional().nullable(),
	self_retainer: yup.string().optional().nullable(),
	publicly_exposed_person: yup.string().optional().nullable(),
	foreign: yup.string().optional().nullable(),
	acronym: yup.string().optional().nullable(),
	industry: yup.string().optional().nullable(),
	phone: yup.string().optional().nullable(),
	address: yup.string().optional().nullable(),
	email: yup.string().optional().nullable(),
	ciiu_major: yup.string().optional().nullable(),
	ciiu_secundary: yup.string().optional().nullable(),
	web_url: yup.string().optional().nullable(),
	social_media_url: yup.string().optional().nullable(),
	source: yup.string().optional().nullable(),
	intermediary: yup.string().optional().nullable(),
	other: yup.string().optional().nullable(),
	state: yup.number().optional().nullable(),
	created_by_id: yup.string().optional().nullable(),
	modified_by_id: yup.string().optional().nullable(),
	city: yup.string().optional().nullable(),
});
const schemaSalesStage: yup.SchemaOf<SalesStage> = yup.object({
    id: yup.string().optional().nullable(),
	name: yup.string().optional().nullable(),
	description: yup.string().optional().nullable(),
	percentage: yup.number().optional().nullable(),
	state: yup.number().optional().nullable(),
});
/*
export interface CommercialOffersOtherInformation {
	id: yup.string().optional().nullable(),
	commercial_offer_id: yup.string().optional().nullable(),
	incoterm_id: yup.string().optional().nullable(),
	discharge_rate: yup.string().optional().nullable(),
	insurance: yup.string().optional().nullable(),
	inspection: yup.string().optional().nullable(),
	additional_remarks: yup.string().optional().nullable(),
	losses: yup.string().optional().nullable(),
	incoterm: yup.string().optional().nullable(),
	state?: number;
}
*/
const schemaCommercialOffersOtherInformation: yup.SchemaOf<CommercialOffersOtherInformation> = yup.object({
    id: yup.string().optional().nullable(),
	commercial_offer_id: yup.string().optional().nullable(),
	incoterm_id: yup.string().optional().nullable(),
	discharge_rate: yup.string().optional().nullable(),
	insurance: yup.string().optional().nullable(),
	inspection: yup.string().optional().nullable(),
	additional_remarks: yup.string().optional().nullable(),
	losses: yup.string().optional().nullable(),
	incoterm: yup.string().optional().nullable(),
	state: yup.number().optional().nullable(),
});
const schemaCommercialOffersEmail: yup.SchemaOf<CommercialOffersEmail> = yup.object({
    id: yup.string().optional().nullable(),
	commercial_offer_id: yup.string().optional().nullable(),
	email: yup.string().optional().nullable(),
	state: yup.number().optional().nullable(),
});
const schemaCommercialOffersCommodity: yup.SchemaOf<CommercialOffersCommodity> = yup.object({
    id: yup.string().optional().nullable(),
	commercial_offer_id: yup.string().optional().nullable(),
	product: yup.string().optional().nullable(),
	weight: yup.string().optional().nullable(),
	quantity: yup.number().optional().nullable(),
	dimensions: yup.string().optional().nullable(),
	volume: yup.string().optional().nullable(),
	burden: yup.string().optional().nullable(),
	measurement_unit: yup.string().optional().nullable(),
	weight_unit: yup.string().optional().nullable(),
	quantity_unit: yup.string().optional().nullable(),
	imo: yup.number().optional().nullable(),
	state: yup.number().optional().nullable(),
});
const schemaCampaignsClient: yup.SchemaOf<CampaignsClient> = yup.object({
    id: yup.string().optional().nullable(),
	client_id: yup.string().optional().nullable(),
	sub_campaign_id: yup.string().optional().nullable(),
	business_executive_id: yup.string().optional().nullable(),
	sale_stage_id: yup.string().optional().nullable(),
	interest_level: yup.string().optional().nullable(),
	contacted: yup.number().optional().nullable(),
	service_catalog: yup.number().optional().nullable(),
	contact_form: yup.string().optional().nullable(),
	sales_target: yup.number().optional().nullable(),
	date_finish: yup.string().optional().nullable(),
	lost: yup.number().optional().nullable(),
	state: yup.number().optional().nullable(),
	client: schemaClient.optional().nullable(),
	salesStage: schemaSalesStage.optional().nullable(),
});


export const schemaOfferClient: yup.SchemaOf<OfferClient> = yup.object({
	id: yup.string().optional().nullable(),
	company_id: yup.string().optional().nullable(),
	campaign_client_id: yup.string().optional().nullable(),
	business_executive_id: yup.string().optional().nullable(),
	consecutive: yup.number().optional().nullable(),
	method_of_payment: yup.string().optional().nullable(),
	addressed_to: yup.string().optional().nullable(),
	position: yup.string().optional().nullable(),
	motor_ship: yup.string().optional().nullable(),
	dues: yup.number().optional().nullable(),
	advance: yup.number().optional().nullable(),
	start_date: yup.string().optional().nullable(),
	finish_date: yup.string().optional().nullable(),
	email: yup.string().email("Email No valido").required("Campo requerido"),
	description: yup.string().optional().nullable(),
	coin: yup.string().optional().nullable(),
	state: yup.number().optional().nullable(),
	createdAt: yup.string().optional().nullable(),
	updatedAt: yup.string().optional().nullable(),
	deletedAt: yup.string().optional().nullable(),

	company: schemaCompany.optional().nullable(),
	businessExecutive: schemaBusinessExecutive.optional().nullable(),
    
    campaignsClient: schemaCampaignsClient.optional().nullable(),
	commercial_offers_services_lines: yup
		.array()
		.of(schemaCommercialOffersServicesLine.defined()),
	commercial_offers_aerial: yup.string().optional().nullable(),
	commercial_offers_commodity: schemaCommercialOffersCommodity.optional().nullable(),
	commercial_offers_emails: schemaCommercialOffersEmail.optional().nullable(),
	commercial_offers_other_information:schemaCommercialOffersOtherInformation.optional().nullable(),
});

