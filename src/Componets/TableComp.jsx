

function TableComp({ data, columns, render }){
    console.log("Table")

    const headers = columns.map((column, index) => {
        return (
          <th key={`headCell-${index}`} class="px-2 py-3">
            {column.title}
          </th>
        );
      });
    
      const rows = !data?.length ? (
        <tr>
          <td colSpan={columns.length} class="px-2 py-4">
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
    

    return (    <div class="relative overflow-x-auto">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>{headers}</tr>
          </thead>
            <tbody>{rows}</tbody>
        </table>
      </div>)
}

export default TableComp