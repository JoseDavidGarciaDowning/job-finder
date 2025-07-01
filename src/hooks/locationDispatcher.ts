import { useFilterLocationStore } from "../stores/filter-location/filter.store";
import { useLocationStore } from "../stores/location/location.store";
import { useOfferStore } from "../stores/offer/offer.store";

type Dispatcher = {
  setCountryName: (value: string) => void;
  setCountryId: (value: string) => void;
  setRegionName: (value: string) => void;
  setRegionId: (value: string) => void;
};

type Role = "applicant" | "company" | "jobOffer" | "filterSearch";

export const useRoleDispatcher = (role: Role): Dispatcher => {

  const setApplicantCountryName = useLocationStore(
    (s) => s.setApplicantCountryName
  );
  const setApplicantCountryId = useLocationStore(
    (s) => s.setApplicantCountryId
  );
  const setApplicantRegionName = useLocationStore(
    (s) => s.setApplicantRegionName
  );
  const setApplicantRegionId = useLocationStore((s) => s.setApplicantRegionId);

  const setCompanyCountryName = useLocationStore(
    (s) => s.setCompanyCountryName
  );
  const setCompanyCountryId = useLocationStore((s) => s.setCompanyCountryId);
  const setCompanyRegionName = useLocationStore((s) => s.setCompanyRegionName);
  const setCompanyRegionId = useLocationStore((s) => s.setCompanyRegionId);

  const setJobOfferCountryName = useOfferStore(
    (s) => s.setCountryName
  );
  const setJobOfferCountryId = useOfferStore((s) => s.setCountryId);
  const setJobOfferRegionName = useOfferStore(
    (s) => s.setRegionName
  );
  const setJobOfferRegionId = useOfferStore((s) => s.setRegionId);

  const setFilterSearchRegionId = useFilterLocationStore((s) => s.setRegionId);
  const setFilterSearchRegionName = useFilterLocationStore((s) => s.setRegionName);
  const setFilterSearchCountryId = useFilterLocationStore((s) => s.setCountryId);
  const setFilterSearchCountryName = useFilterLocationStore((s) => s.setCountryName);

  // ✅ Ahora sí, selección por rol sin hooks condicionales
  switch (role) {
    case "applicant":
      return {
        setCountryName: setApplicantCountryName,
        setCountryId: setApplicantCountryId,
        setRegionName: setApplicantRegionName,
        setRegionId: setApplicantRegionId,
      };
    case "company":
      return {
        setCountryName: setCompanyCountryName,
        setCountryId: setCompanyCountryId,
        setRegionName: setCompanyRegionName,
        setRegionId: setCompanyRegionId,
      };
    case "jobOffer":
      return {
        setCountryName: setJobOfferCountryName,
        setCountryId: setJobOfferCountryId,
        setRegionName: setJobOfferRegionName,
        setRegionId: setJobOfferRegionId,
      };
    case "filterSearch":
      return {
        setRegionId: setFilterSearchRegionId,
        setCountryId: setFilterSearchCountryId,
        setRegionName: setFilterSearchRegionName,
        setCountryName: setFilterSearchCountryName,
      };
    default:
      throw new Error(`Rol "${role}" no está configurado`);
  }
};
