import {baseApi} from "../base-api.ts";
import {CourseItemType} from "./study.type.ts";

export const studyService = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      getStudyItems: builder.query<CourseItemType[], void>({
        query: () => {
          return{
            url: 'courses.json'
          }
        }
      })
    }
  },
})

export const { useGetStudyItemsQuery } = studyService
