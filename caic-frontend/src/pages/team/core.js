import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './team.css';
import defBack from '../../images/defBack.png';
import Title from '../../components/title/title';
import { Link } from 'react-router-dom';

import ProfileCard from '../../components/profilecard/profilecard';
import { API_BASE } from '../../constants';

export const Core = () => {
	const [team, setTeam] = useState({ members: [] });
	useEffect(() => {
		axios.get(`${API_BASE}/core`).then((response) => {
			console.log('sending request');
			setTeam(response.data);
		});
	}, []);
	return (
		<div className='team-main'>
			<Title title='CORE TEAM' image={defBack} />
			{team.head ? (
				<div className='cards'>
					<ProfileCard
						width={'210px'}
						designation={team.head.designation}
						name={team.head.name}
						image={team.head.image}
						email={team.head.email}
						instagram={team.head.instagram}
						linkedin={team.head.linkedin}
					/>
				</div>
			) : (
				''
			)}
			<Link to='/ugconvenor'>UG Convenors</Link>
			<Link to='/pgconvenor'>PG Convenors</Link>
			<Link to='/clubocs'>Technical Club Overall Co-ordinator</Link>
		</div>
	);
};
