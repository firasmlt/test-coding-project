import { useEffect, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import MainAPI from "../api";

interface Props {
    setSelectedBreed: any;
    selectedBreed: string | null;
}
interface Breed {
    name: string;
    id: string;
}

function SelectBreadComponent({ setSelectedBreed, selectedBreed }: Props) {
    const [breeds, setBreeds] = useState<Breed[]>([]);

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedBreed(event.target.value);
        localStorage.setItem("selectedBreed", event.target.value);
    };

    const getBreeds = async () => {
        try {
            const { data } = await MainAPI.getAllBreeds();

            setBreeds([...data]);
        } catch (err) {
            alert("error fetching breeds");
        }
    };
    useEffect(() => {
        getBreeds();
        if (localStorage.getItem("selectedBreed")) {
            setSelectedBreed(localStorage.getItem("selectedBreed"));
        }
    }, []);
    return (
        // <Dropdown>
        //     <Dropdown.Toggle variant="success" id="dropdown-basic">
        //         choose a breed
        //     </Dropdown.Toggle>

        //     <Dropdown.Menu>
        //         {breeds.map((breed: any, i: number) => {
        //             return (
        //                 <Dropdown.Item
        //                     key={breed.id}
        //                     href={`#/action-${i + 1}`}
        //                 >
        //                     {breed.name}
        //                 </Dropdown.Item>
        //             );
        //         })}
        //     </Dropdown.Menu>
        // </Dropdown>

        <div>
            <select value={selectedBreed || ""} onChange={handleChange}>
                <option value="">Select an option</option>
                {breeds.map((breed) => (
                    <option key={breed.id} value={breed.id}>
                        {breed.name}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default SelectBreadComponent;
