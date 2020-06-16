import React, { useState } from 'react'
import Table from '../components/common/Table'
import Form from '../components/common/Form'

const data = [
    
]

function StarshipsPage() {
    const [starships, setStarships] = useState(data);
    console.log(starships);
    
    if (starships[0]) {
        const columns = Object.keys(data[0])

        const handleAddStarship = (starshipData) => {
            const data = [...starships, starshipData];
            setStarships(data)
        }

        const handleDeleteStarship = (starshipId) => {
            const data = starships.filter(starship => starship.id !== starshipId)
            setStarships(data)
        }

        const getInitialStarshipsData = () => {
            return columns.reduce((cols, columnName) => {
                cols[columnName] = "";
                return cols;
            }, {})
        }

        return (
            <div className="container margin-top">
                <h2>Starships</h2>
                <Table
                    data={starships}
                    columns={columns}
                    tableDescriptor="Starships"
                    onDeleteRecord={handleDeleteStarship}
                />
                <Form
                    initialData={getInitialStarshipsData()}
                    columns={columns}
                    onAddData={handleAddStarship}
                />
            </div>
        )
    } else {
        return (
            <div className="container margin-top">
                <div className="alert alert-warning" role="alert">
                    There are no data for Starships
                </div>
            </div>
        )
    }
}

export default StarshipsPage;