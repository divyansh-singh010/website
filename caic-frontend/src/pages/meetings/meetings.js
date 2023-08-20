import React from 'react';
import './meetings.css';
import defBack from '../../images/defBack.png';
// import tableData from './table.json';
import Title from '../../components/title/title';
import MeetingTable from './meetingTable';
import { API_BASE } from '../../constants';

let request = new XMLHttpRequest();
request.open('GET', `${API_BASE}/minutes/`, false);
request.send();
// console.log(request);
let tableData = JSON.parse(request.responseText);

export const Meetings = () => {
	return (
		<React.Fragment>
			<Title title='MEETINGS' image={defBack} />;<p className='meet-title-2'> Minutes of Meetings</p>
			<table className='table meetings-table'>
				<thead className='meetings-head'>
					<tr className='meeting-head-row'>
						<th scope='col'>Date</th>
						<th scope='col'>Type</th>
						<th scope='col'>Title</th>
						<th scope='col'></th>
					</tr>
				</thead>
				<MeetingTable data={tableData} />
			</table>
		</React.Fragment>
	);
};
