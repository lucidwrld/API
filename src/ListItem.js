import Cell from "./Cell"
const ListItem = ({item}) => {
  return (
    <table>
     <tr>
      <td className="id">
        <li>
           {Object.entries(item).map(([key,value]) => {
              return (
                 <Cell key={key}
                    cellData={JSON.stringify(value)}
                 />
              )
           })}
    </li>
    </td>
    
     </tr>
    </table>
  )
}

export default ListItem