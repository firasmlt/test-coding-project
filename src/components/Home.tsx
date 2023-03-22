import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import MainAPI from "../api";
import CatCardComponent from "./CatCardComponent";
import SelectBreadComponent from "./SelectBreadComponent";
import { CatsContainer, FilterContainer } from "./styles";

type Props = {};

interface Cat {
    url: string;
    id: string;
}

const Home = (props: Props) => {
    const [cats, setCats] = useState<Cat[]>([]);
    const [selectedBreed, setSelectedBreed] = useState<string | null>(null);
    const [allImagesLoaded, setAllImagesLoaded] = useState(false);

    const fetchCats = async () => {
        const { data } = await MainAPI.getCatsByBreedId(selectedBreed || "");

        const newCats = data.filter(
            (cat: any) => !cats.some((c) => c.url === cat.url)
        );

        if (newCats.length === 0) {
            setAllImagesLoaded(true);
        } else {
            setCats((prevCats) => [...prevCats, ...newCats]);
        }
    };

    const getCats = async () => {
        try {
            if (selectedBreed) {
                await fetchCats();
            } else {
                setCats([]);
            }
        } catch (err) {
            alert("problem fetching");
        }
    };

    const loadMoreCats = async () => {
        try {
            if (selectedBreed) {
                await fetchCats();
            } else {
                setCats([]);
            }
        } catch (err) {
            alert("problem fetching");
        }
    };

    useEffect(() => {
        setCats([]);
        setAllImagesLoaded(false);
        getCats();
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
                    <CatCardComponent key={cat.id} id={cat.id} url={cat.url} />
                ))}
            </CatsContainer>
            {selectedBreed && !allImagesLoaded && (
                <Button style={{ margin: 10 }} onClick={loadMoreCats}>
                    load more
                </Button>
            )}
        </>
    );
};

export default Home;
