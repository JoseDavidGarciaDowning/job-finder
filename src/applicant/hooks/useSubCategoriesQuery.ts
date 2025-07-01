import { useQuery } from "@tanstack/react-query";
import { Category } from "../../interfaces/category.interface";
import { ApplicantService } from "../services/location";



export function useSubCategoriesQuery(categoryId: string, subCategoryInput: string) {
  return useQuery<Category[]>({
    queryKey: ["subCategoryValue", subCategoryInput],
    queryFn: async () => {
      return await ApplicantService.getSubCategories(categoryId, subCategoryInput);
    },
    staleTime: 2000,
    enabled: false,
    retry: false,
    placeholderData: undefined,
  });
}