const MemberRow = ({ member }) => (
    <tr className="border-b border-gray-700">
      <td className="py-2 px-4">{member.name}</td>
      <td className="py-2 px-4">{member.rank}</td>
      <td className="py-2 px-4">
        <span className={`px-2 py-1 rounded ${member.status === 'Online' ? 'bg-green-600' : 'bg-red-600'}`}>
          {member.status}
        </span>
      </td>
      <td className="py-2 px-4">{member.lastSeen}</td>
      <td className="py-2 px-4">{member.leader ? 'Yes' : 'No'}</td>
      <td className="py-2 px-4">${member.salary}</td>
      <td className="py-2 px-4">{member.duty ? 'On Duty' : 'Off Duty'}</td>
    </tr>
  );

export default MemberRow;