import DataTable from 'react-data-table-component';

const columns = [
    {
        name: 'Games Played',
        selector: row => row.GamesPlayed,
    },
    {
        name: 'Rushing Attempts',
        selector: row => row.RushingAttempts,
    },
    {
        name: 'Rushing Yards',
        selector: row => row.Yards,
    },
    {
        name: 'Rushing Touchdowns',
        selector: row => row.TDs,
    }
]

const data = [
    {id: 1, GamesPlayed: 13, RushingAttempts: 114, Yards: 521, TDs: 8}
]

function Table() {
    return(
        <DataTable
        columns={columns}
        data={data}/>
    )
}

export default Table;