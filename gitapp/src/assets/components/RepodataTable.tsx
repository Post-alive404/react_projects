import Repository from "../types/Repository";

// interface RepodataTableProps {
//     repodata: Repository[];
//   }
  
//   const RepodataTable: React.FC<RepodataTableProps> = ({ repodata }) => {
    function RepodataTable({ repodata }: { repodata: Repository[] }) {
    return(
       <>
        {repodata.length===0 ? (
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
          )}
          </>
    );
}

export default RepodataTable;