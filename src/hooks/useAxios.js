import { API } from "../services/api";

import useSWR from "swr";

export function useAxios(url) {
    const { data, error, mutate } = useSWR(url, async (url) => {
        const response = await API.get(url)

        return response.data
    });

    return {data, error, mutate}
}