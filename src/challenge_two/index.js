import React, { useState } from 'react'
import TableChanllenge from './table';
import {data} from './mockdata/data';
export default function ChallengeTwo(filterdata) {
    const [state, setState] = useState('');
    const checkString = () => {

        if(state === 'VOTED'){
           filterdata = data.sort((a,b) => (a.vote < b.vote) ? 1 : -1);
        }else{
            filterdata = data.sort((a,b) => (a.date < b.date) ? 1 : -1);
        }
        return (
            <TableChanllenge
            data={filterdata}
            />
        )
    }
  return (
    <div>
        <div style={{marginBottom:'50px'}}>Challenge Two</div>
        <div>
            <button onClick={() => setState('VOTED')}>Most Upvoted</button>
            <button onClick={() => setState('RECENT')}>Most Recent</button>
        </div>
        {checkString()}
    </div>
  )
}
