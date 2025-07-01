
import { useQuery } from "@tanstack/react-query";
import { Category } from "../../interfaces/category.interface";
import { ApplicantService } from "../services/location";




export function useCategoriesQuery(categoryInput: string) {
  return useQuery<Category[]>({
    queryKey: ["categoryValue", categoryInput],
    queryFn: async () => {
      return await ApplicantService.getCategories(categoryInput);
    },
    staleTime: 2000,
    enabled: false,
    retry: false,
    placeholderData: undefined,
  });
}
