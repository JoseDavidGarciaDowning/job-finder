import React from "react";

import CountryInput from "../applicant/components/ContryInput";
import RegionInputSuggestions from "../applicant/components/RegionInputSuggestions";

import { useCountryCode } from "../hooks/useCountryCode";
import { useRoleDispatcher } from "../hooks/locationDispatcher";
import { API_BASE_URL } from "../config/config";

const COUNTRY_URL = `${API_BASE_URL}/api/location/countries`;
const CITY_URL = `${API_BASE_URL}/api/location/autocomplete`;
const COUNTRY_ID_URL = `${API_BASE_URL}/api/location/countrycode`;
type Role = "applicant" | "company" | "jobOffer" | "filterSearch";
interface Props {
  role: Role;
  countryInputStyles?: string;
  regionInputStyles?: string;
}

const Location: React.FC<Props> = ({ role, countryInputStyles, regionInputStyles }) => {
  const { setCountryName, setCountryId, setRegionName, setRegionId } =
    useRoleDispatcher(role);

  const [isCountrySelected, setIsCountrySelected] = React.useState(false);
  const [countryId, setIdCountry] = React.useState<string | null>(null);

  const countryCode = useCountryCode(countryId, COUNTRY_ID_URL);

  const onNewCountryState = (newState: boolean) => {
    setIsCountrySelected(newState);
  };

  const onNewCountryId = (newId: string) => {
    setIdCountry(newId);
  };

  return (
    <>
      <CountryInput
        url={COUNTRY_URL}
        onNewSelectedState={onNewCountryState}
        onNewCountryID={onNewCountryId}
        setCountryIdStore={setCountryId}
        setCountryName={setCountryName}
        styles={countryInputStyles}
      />

      {isCountrySelected && (
        <RegionInputSuggestions
          url={CITY_URL + `/${countryCode}`}
          setRegionId={setRegionId}
          setRegionName={setRegionName}
          styles={regionInputStyles}
        />
      )}
    </>
  );
};

export default Location;
