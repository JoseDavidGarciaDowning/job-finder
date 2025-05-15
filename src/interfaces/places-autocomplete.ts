export interface PlacesAutoComplete {
    description:           string;
    matched_substrings:    MatchedSubstring[];
    place_id:              string;
    reference:             string;
    structured_formatting: StructuredFormatting;
    terms:                 Term[];
    types:                 Type[];
}

export interface MatchedSubstring {
    length: number;
    offset: number;
}

export interface StructuredFormatting {
    main_text:                    string;
    main_text_matched_substrings: MatchedSubstring[];
}

export interface Term {
    offset: number;
    value:  string;
}

export enum Type {
    Country = "country",
    Geocode = "geocode",
    Political = "political",
}
