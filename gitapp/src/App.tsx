import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';
import { useState } from 'react'
import './App.css'
import Repository from './assets/types/Repository';
import axios from 'axios';
// import RepodataTable from './assets/components/RepodataTable';
import { ColDef, ICellRendererParams } from 'ag-grid-community';

function App() {
  const [keyword, setKeyword] = useState('');
  const [repodata, setRepodata] = useState<Repository[]>([]);
  const handleClick = () => {
      axios.get<{ items: Repository[]}> (`https://api.github.com/search/repositories?q=${keyword}`)
      .then(response => setRepodata(response.data.items))
      .catch(err => console.error(err))
  }

  const [columnDefs] = useState<ColDef[]>([
    {field: 'id', sortable:true, filter:true},
    {field: 'full_name', sortable:true, filter:true},
    {field: 'html_url', sortable:true, filter:true},
    {
      headerName:'Actions',
      field: 'full_name',
      cellRenderer: (params: ICellRendererParams) => (
        <button
        onClick={() => alert(params.value)}>
          Press me
        </button>
      ),
    },
  ]);

  return (
    <>
      <input 
        value={keyword}
        onChange={e => setKeyword(e.target.value)}
        />
        <button onClick={handleClick}>Fetch</button> 
        <div className='ag-theme=material' style={{height: 500, width:850}}>

          <AgGridReact
           rowData={repodata}
           columnDefs={columnDefs}
           pagination={true}
           paginationPageSize={8} />
        </div> 
    
        {/* <RepodataTable repodata={repodata}/> */}

    </>
  )
}

export default App


        {/* {repodata.length===0 ? (
          <p>No data available</p>
        ) : (
          <table>
            <tbody>
              {repodata.map(repo => (
                <tr key={repo.id}>
                  <td>{repo.full_name}</td>
                  <td>
                    <a href={repo.html_url}>{repo.html_url}</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )} */}