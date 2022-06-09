import React, { useEffect, useState } from 'react'
import ContainerText from './container_text';
import {data} from './mockdata/data';
export default function ChallengeOne(dataClick) {
    const [state, setState] = useState(0);
    const checkDay = () => {
        dataClick = data.find((x) => (x.id === state))
        return (
            <ContainerText
                data={dataClick}
            />
        )
    }
    return (
        <div>
            <div style={{marginBottom:'50px'}}>Challenge One</div>
            <div>
                <button
                    onClick={() => setState(0)}
                    disabled={(state === 0) ? true : false}
                > Reset</button>

                <button
                    onClick={() => setState(state - 1)}
                    disabled={(state === 0) ? true : false}
                > Prev</button>

                <button
                    onClick={() => setState(state + 1)}
                    disabled={(state === data.length - 1) ? true : false}
                > Next</button>

                {checkDay()}
            </div>
        </div>
    )
}
