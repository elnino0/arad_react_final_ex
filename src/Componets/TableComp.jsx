

function TableComp({ data, columns, render }){
    console.log("Table")

    const headers = columns.map((column, index) => {
        return (
          <th key={`headCell-${index}`} className="!z-0">
            {column.title}
          </th>
        );
      });
    
      const rows = !data?.length ? (
        <tr>
          <td colSpan={columns.length} className="text-center">
            No data
          </td>
        </tr>
      ) : (
        data?.map((row, index) => {
          return (
            <tr key={`row-${index}`}>
              {columns.map((column, index2) => {
                const value = render(column, row)
                return <td key={`cell-${index2}`}>{value}</td>;
              })}
            </tr>
          );
        })
      );
    

    return (    <div className="overflow-x-auto">
        <table className="table w-full">
          <thead className="bg-slate-400 text-black">
            <tr>{headers}</tr>
          </thead>
            <tbody>{rows}</tbody>
        </table>
      </div>)
}

export default TableComp