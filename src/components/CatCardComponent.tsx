import React from "react";
import { useNavigate } from "react-router";
import { CardButton, CardContainer, CardImage } from "./styles";

interface CatCardComponentProps {
    id: string;
    url: string;
}

const CatCardComponent: React.FC<CatCardComponentProps> = ({ id, url }) => {
    const navigate = useNavigate();

    return (
        <CardContainer>
            <CardImage src={url} alt="Square Card" />
            <CardButton onClick={() => navigate(`/details/${id}`)}>
                View Details
            </CardButton>
        </CardContainer>
    );
};

export default CatCardComponent;
