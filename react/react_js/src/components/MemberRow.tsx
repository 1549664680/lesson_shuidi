import * as React from 'react';
import { MemberEntity } from '../model';
interface Props{
  key:number
  member:MemberEntity
}
const MemberRow: React.StatelessComponent<{key:number;member:MemberEntity}> = (props:Props) => {
  return (
    <tr>
      <th key={props.key}><img src={props.member.avatar_url} alt=""/></th>
      <th key={props.key}>{props.member.id}</th>
      <th key={props.key}>{props.member.login}</th>
    </tr>
  )
}
export default MemberRow;