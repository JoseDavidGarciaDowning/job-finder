import { IonContent, IonPage,  } from '@ionic/react';
import React from 'react';
import { useLocation } from 'react-router';
import { ApplicantService } from '../services/location';
import { useQuery } from '@tanstack/react-query';
import { FullScreenLoading } from '../../pages/FullScreenLoading';
import JobCard from '../../components/ui/JobCard';
import NoResultsFounds from './NoResultsFounds';


// interface Props {
//    category: string;
//    subCategory: string;
//    salaryRange: { lower: number; upper: number };
//    jobType: string;
//    scheduleType: string;
// }
const SearchResults: React.FC = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
  
    const categoryId = queryParams.get('categoryId');
    const skillId = queryParams.get('skillId');
    const salaryMin = queryParams.get('salaryMin');
    const salaryMax = queryParams.get('salaryMax');
    const workplaceType = queryParams.get('workplaceType');
    const workSchedule = queryParams.get('workSchedule');
    const regionId = queryParams.get('regionId');

    const {
        data: offerSearchResults,
        isLoading,
        error,
        isError,
      } = useQuery({
        queryKey: ["offer", categoryId, skillId, salaryMin, salaryMax, workplaceType, workSchedule],
        queryFn: () => ApplicantService.getOffersByFilter(categoryId!, skillId!, Number(salaryMin!), Number(salaryMax!), workplaceType!, workSchedule!, regionId!),
        staleTime: 2000,
      });

      console.log(offerSearchResults);

    return (
        <IonPage>
           
            <IonContent fullscreen>
              <div className="flex flex-col safe-area-top safe-area-bottom  h-screen bg-[#F9F9F9] min-h-screen overflow-auto ">
                {isLoading && <FullScreenLoading />}
                {isError && <div className="text-red-500 font-semibold">{JSON.stringify(error)}</div>}
                {offerSearchResults &&
                    offerSearchResults.map((offer) => (
                    <JobCard
                        key={offer.offer.id}
                        offer={offer.offer}
                        buttonActionName="Aplicar"
                    />
                    ))}
                 {offerSearchResults?.length === 0 && <NoResultsFounds />}
          
     

              </div>
            </IonContent>
        </IonPage>
    );
};

export default SearchResults;