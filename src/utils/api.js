import axios from "axios";

const BASE_URL = "https://www.googleapis.com/customsearch/v1";

const params = {
    key: 'AIzaSyD_I7JO_ZLbG7OCZUfrNmuZhba5hVgvOEQ',
    cx: '50d58a47b5d1d4b16',
};

export const fetchDataFromApi = async (payload) => {
    const { data } = await axios.get(BASE_URL, {
        params: { ...params, ...payload },
    });
    return data;
};
