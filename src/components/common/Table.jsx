import React from 'react';

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function Table({columns, data, tableDescriptor, onDeleteRecord}) {
    return (
        <table className="table table-striped table-dark">
            <thead>
            <tr>
                <th scope="col">{tableDescriptor}</th>
                {columns.map(columnTitle => (
                    <th key={columnTitle} scope="col">{capitalizeFirstLetter(columnTitle)}</th>
                ))}
            </tr>
            </thead>
            <tbody>
            {data.map((item, index) => (
                <tr key={item.id}>
                    <th scope="row">{++index}</th>
                    {columns.map(columnTitle => (
                        <td key={item[columnTitle]+columnTitle}>{item[columnTitle]}</td>
                    ))}
                    <td><button type="button" class="btn btn-danger float-right" onClick={() => onDeleteRecord(item.id)}>Delete</button></td>
                </tr>
            ))}
            </tbody>
        </table>
    )
}

export default Table;
