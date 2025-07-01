export type OfferDuration = "1_mes" | "2_meses" | "2_semanas" | "3_a_5_meses";
export type WorkplaceType = "presencial" | "hibrido" | "remoto";


export type WorkSchedule =
    | "tiempo_completo" // Full-time
    | "medio_tiempo"    // Part-time
    | "por_horas"       // Hourly
    | "flexible"        // Flexible schedule
    | "jornada_rotativa" // Rotating shift
    | "turno_nocturno";  // Night shift
    
// export interface Offers {
//     id:               string;
//     companyId:        string;
//     companyName:      string;
//     title:            string;
//     salary:           string;
//     description:      string;
//     responsibilities: string;
//     requirements:     string;
//     workplaceType:    string;
//     offerDuration:    string;
//     ubication:        Ubication;
//     publishDate:      Date;
// }



/////////


export interface OfferSearchResults {
    offer:        Offer;
    offer_skills: OfferSkills;
}

export interface Offer {
    id:               string;
    companyId:        string;
    companyName:      string;
    title:            string;
    salary:           string;
    description:      string;
    responsibilities: string;
    requirements:     string;
    workplaceType:    string;
    workSchedule:     string;
    offerDuration:    string;
    ubication:        Ubication;
    publishDate:      Date;
}

export interface Ubication {
    countryId:   string;
    countryName: string;
    regionId:    string;
    regionName:  string;
}

export interface OfferSkills {
    id:      string;
    offerId: string;
    skillId: string;
}



