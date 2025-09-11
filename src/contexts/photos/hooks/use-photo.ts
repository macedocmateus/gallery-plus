import { useQuery } from "@tanstack/react-query";
import { fetcher } from "../../../helpers/api";
import type { Photo } from "../models/photo";


interface PhotoDetailResponse extends Photo {
    nextPhotoId?: string
    previousPhotoId?: string
}

export default function usePhoto(id?: string) {
    const {data, isLoading} = useQuery<PhotoDetailResponse>({
        queryKey: ["photo", id],
        queryFn: () => fetcher(`/photos/${id}`),
        enabled: !!id // Essa expressão !! verifica se existe o valor e e ainda o converte para booleano
    })

    return {
        photo: data,
        nextPhotoId: data?.nextPhotoId,
        previousPhotoId: data?.previousPhotoId,
        isLoadingPhoto: isLoading,
    }
}
