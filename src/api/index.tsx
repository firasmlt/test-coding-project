import axios from "axios";

const MainAPI = {
    getAllBreeds: function () {
        return axios.get(`https://api.thecatapi.com/v1/breeds`);
    },
    getCatsByBreedId: function (breedId: string, pageNumber: number) {
        console.log(pageNumber);
        return axios.get(
            `https://api.thecatapi.com/v1/images/search?limit=10&page=${pageNumber}&breed_ids=${breedId}`
        );
    },
    // createCampaign: function (data: any, token: string) {
    //     return axios.post(`${process.env.REACT_APP_API_URL}/campaigns/`, data, {
    //         headers: {
    //             authorization: `Bearer ${token}`,
    //         },
    //     });
    // },
    // updateCampaign: function (
    //     updateInfo: any,
    //     campaignId: string,
    //     token: string
    // ) {
    //     return axios.patch(
    //         `${process.env.REACT_APP_API_URL}/campaigns/${campaignId}`,
    //         updateInfo,
    //         {
    //             headers: {
    //                 authorization: `Bearer ${token}`,
    //             },
    //         }
    //     );
    // },

    // uploadCampaignPhoto: function (campaignPhotoData: FormData, token: string) {
    //     return axios.post(
    //         `${process.env.REACT_APP_API_URL}/campaigns/upload-campaign-photo`,
    //         campaignPhotoData,
    //         {
    //             headers: {
    //                 "Content-Type": "multipart/form-data",
    //                 authorization: `Bearer ${token}`,
    //             },
    //         }
    //     );
    // },
};

export default MainAPI;
