import React, { useState } from 'react'
import Table from '../components/common/Table'
import Form from '../components/common/Form'

const data = [
    {name: 'Tatooine', climate: 'arid', terrain: 'desert', diameter: '10465', population: '200000', id: '1'},
    {name: 'New Tatooine', climate: 'arid', terrain: 'desert', diameter: '20700', population: '50000', id: '2'},
]

function PlanetsPage() {
    const [planets, setPlanets] = useState(data);
    console.log(planets);

    if (planets[0]) {
        const columns = Object.keys(data[0])

        const handleAddPlanet = (planetData) => {
            const data = [...planets, planetData];
            setPlanets(data)
        }

        const handleDeletePlanet = (planetId) => {
            const data = planets.filter(planet => planet.id !== planetId)
            setPlanets(data)
        }

        const getInitialPlanetsData = () => {
            return columns.reduce((cols, columnName) => {
                cols[columnName] = "";
                return cols;
            }, {})
        }

        return (
            <div className="container margin-top">
                <h2>Planets</h2>
                <Table
                    data={planets}
                    columns={columns}
                    tableDescriptor="Planets"
                    onDeleteRecord={handleDeletePlanet}
                />
                <Form
                    initialData={getInitialPlanetsData()}
                    columns={columns}
                    onAddData={handleAddPlanet}
                />
            </div>
        )
    } else {
        return (
            <div className="container margin-top">
                <div className="alert alert-warning" role="alert">
                    There are no data for Planets
                </div>
            </div>
        )
    }
}

export default PlanetsPage;