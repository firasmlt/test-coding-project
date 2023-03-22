import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import MainAPI from "../api";
import { CardImage } from "./styles";

type Props = {};

const CardDetails = (props: Props) => {
    const [catInfo, setCatInfo] = useState({
        url: "",
        breed: "",
        name: "",
        origin: "",
    });
    const catId = useParams().id || "";

    const getCatInfo = async () => {
        try {
            const { data } = await MainAPI.getOneCatById(catId);
            setCatInfo({
                url: data.url,
                breed: data.breeds[0].id,
                name: data.breeds[0].name,
                origin: data.breeds[0].origin,
            });
        } catch (err) {
            alert("problem fetching the data");
        }
    };

    useEffect(() => {
        getCatInfo();
    }, []);

    return (
        <>
            <CardImage src={catInfo.url} alt="loading..." />
            <p>breed: {catInfo.breed}</p>
            <p>name: {catInfo.name}</p>
            <p>origin: {catInfo.origin}</p>
        </>
    );
};

export default CardDetails;
