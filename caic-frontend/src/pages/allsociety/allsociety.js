import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './allsociety.css';
import clubshome from '../../images/clubshome.png';
import Title from '../../components/title/title';
import { EnterCard } from '../../components/entercard/entercard';

import socsData from '../../societies.json';

export const Allsociety = () => {
	  const [depsocs, setDepsocs] = useState([]);
	  useEffect(() => {
	    axios.get("https://caic.iitd.ac.in/api/getdepsocs/").then((response) => {
	      console.log("sending request")
	      setDepsocs(response.data);
	    });
	  }, []);
	return (
		<div className='container-fluid rem-padding'>
			<Title title='SOCIETIES' image={clubshome} />
			<div className='h-events clubs-page'>
				<div className='clubs-page'>
					<h2 className='e-head h2 mt-4'>DEPARTMENTAL SOCIETIES</h2>
					<div className='row e-home clubs-card-g all-all'>
						{Object.entries(depsocs).map((society, index) => {
							return (
								<EnterCard
									key={index}
									type='society'
									link={society.info.link}
									name={society.info.name}
									logo={society.info.image}
									info={society.info.about}
								/>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};
