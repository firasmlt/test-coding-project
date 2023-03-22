import axios from "axios";

const MainAPI = {
    getAllBreeds: function () {
        return axios.get(`https://api.thecatapi.com/v1/breeds`);
    },
    getCatsByBreedId: function (breedId: string) {
        return axios.get(
            `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`
        );
    },
    getOneCatById: function (id: string) {
        return axios.get(`https://api.thecatapi.com/v1/images/${id}`);
    },
};

export default MainAPI;
