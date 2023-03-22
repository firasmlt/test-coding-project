import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import MainAPI from "../api";
import { CardContainer, CardImage } from "./styles";
import Button from "react-bootstrap/Button";

type Props = {};

const CardDetails = (props: Props) => {
    const navigate = useNavigate();
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
            <Button
                style={{ margin: 10 }}
                onClick={() => {
                    navigate("/");
                }}
            >
                Back
            </Button>
            <br></br>
            <CardContainer>
                <CardImage src={catInfo.url} alt="loading..." />
                <br></br>
                <p>breed: {catInfo.breed}</p>
                <p>name: {catInfo.name}</p>
                <p>origin: {catInfo.origin}</p>
            </CardContainer>
        </>
    );
};

export default CardDetails;
