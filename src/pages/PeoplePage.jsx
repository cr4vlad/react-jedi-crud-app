import React, { useState } from 'react'
import Table from '../components/common/Table'
import Form from '../components/common/Form'

const data = [
    {first: 'Mark', last: 'Otto', handle: '@motto', id: '1'},
    {first: 'Carl', last: 'Reno', handle: '@ceno', id: '2'},
    {first: 'Steve', last: 'Smith', handle: '@ssteve', id: '3'}
]

function PeoplePage() {
    const [people, setPeople] = useState(data);
    console.log(people);

    if (people[0]) {
        const columns = Object.keys(data[0])

        const handleAddPerson = (personData) => {
            const data = [...people, personData];
            setPeople(data)
        }

        const handleDeletePerson = (personId) => {
            const data = people.filter(person => person.id !== personId)
            setPeople(data)
        }

        const getInitialPeopleData = () => {
            return columns.reduce((cols, columnName) => {
                cols[columnName] = "";
                return cols;
            }, {})
        }

        return (
            <div className="container margin-top">
                <h2>People</h2>
                <Table
                    data={people}
                    columns={columns}
                    tableDescriptor="People"
                    onDeleteRecord={handleDeletePerson}
                />
                <Form
                    initialData={getInitialPeopleData()}
                    columns={columns}
                    onAddData={handleAddPerson}
                />
            </div>
        )
    } else {
        return (
            <div className="container margin-top">
                <div className="alert alert-warning" role="alert">
                    There are no data for People
                </div>
            </div>
        )
    }
}

export default PeoplePage;