
const ListItem2 = ({item}) => {
 return (
   <table>
    <tr>
     <td className="id"><li>
    {JSON.stringify(item.userId)}
   </li></td>
   <td className="name">
   <li>
    {JSON.stringify(item.id)}
   </li>
   </td>

   <td className="username">
   <li>
    {JSON.stringify(item.title)}
   </li>
   </td>

   <td className="email">
   <li>
    {JSON.stringify(item.body)}
   </li>
   </td>

    </tr>
   </table>
 )
}

export default ListItem2