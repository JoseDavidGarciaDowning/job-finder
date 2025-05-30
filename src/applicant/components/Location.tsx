import React, { useEffect } from "react";

import CountryInput from "./ContryInput";
import RegionInputSuggestions from "./RegionInputSuggestions";

const COUNTRY_URL = `https://qp5wg7p4-3000.use2.devtunnels.ms/api/location/countries`;
const CITY_URL = `https://qp5wg7p4-3000.use2.devtunnels.ms/api/location/autocomplete`;
const COUNTRY_ID_URL = `https://qp5wg7p4-3000.use2.devtunnels.ms/api/location/countrycode`;

const Location: React.FC = () => {
  const [isCountrySelected, setIsCountrySelected] = React.useState(false);
  const [countryId, setCountryId] = React.useState<string | null>(null);

  const [countryCode, setCountryCode] = React.useState<string | null>(null);

  // console.log({
  //   countryId,
  //   countryCode,
  // });

  const onNewCountryState = (newState: boolean) => {
    setIsCountrySelected(newState);
  };

  const onNewCountryId = (newId: string) => {
    setCountryId(newId);
  };

  useEffect(() => {
    const fetchData = async () => {
      if (countryId) {
        try {
          const response = await fetch(`${COUNTRY_ID_URL}/${countryId}`);
          const data = await response.text();
          console.log({ countryCode: data });

          setCountryCode(data); // Asumiendo que el país tiene un campo country_code
        } catch (error) {
          console.error("Error al obtener country code del pais", error);
        }
      }
    };

    fetchData();
  }, [countryId]);

  return (
    <>
      <CountryInput
        url={COUNTRY_URL}
        onNewSelectedState={onNewCountryState}
        onNewCountryID={onNewCountryId}
      />

      {isCountrySelected && (
        <RegionInputSuggestions url={CITY_URL + `/${countryCode}`} />
      )}
    </>
  );
};

export default Location;
