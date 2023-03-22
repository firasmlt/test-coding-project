import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import MainAPI from "../api";
import SelectBreadComponent from "./SelectBreadComponent";
import { CatsContainer, FilterContainer } from "./styles";

type Props = {};

interface Cat {
    url: string;
    id: string;
}

const Home = (props: Props) => {
    const [cats, setCats] = useState<Cat[]>([]);
    const [pageNumber, setPageNumber] = useState(0);
    const [selectedBreed, setSelectedBreed] = useState<string | null>(null);

    const getCats = async () => {
        try {
            if (selectedBreed) {
                const { data } = await MainAPI.getCatsByBreedId(
                    selectedBreed,
                    pageNumber
                );
                setPageNumber(pageNumber + 1);
                setCats([...data]);
            } else {
                setCats([]);
            }
        } catch (err) {
            console.log(err);
        }
    };
    const loadMoreCats = async () => {
        try {
            if (selectedBreed) {
                const { data } = await MainAPI.getCatsByBreedId(
                    selectedBreed,
                    pageNumber
                );
                setPageNumber(pageNumber + 1);
                setCats((prev) => [...prev, ...data]);
            } else {
                setCats([]);
            }
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        setPageNumber(0);
        getCats();
        console.log(cats);
    }, [selectedBreed]);

    return (
        <>
            <FilterContainer>
                <h2>Choose a cat breed: </h2>
                <SelectBreadComponent
                    selectedBreed={selectedBreed}
                    setSelectedBreed={setSelectedBreed}
                />
            </FilterContainer>
            <CatsContainer>
                {cats.map((cat) => (
                    <h1>{cat.url}</h1>
                ))}
            </CatsContainer>
            <Button style={{ margin: 10 }} onClick={loadMoreCats}>
                load more
            </Button>
        </>
    );
};

export default Home;
