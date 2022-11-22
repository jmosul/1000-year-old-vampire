import React from 'react';
import {useSearchParams} from 'react-router-dom';

const NewGame = (): JSX.Element => {
    const [searchParams] = useSearchParams()



    return (
        <p>
            MEW
            {searchParams.get('vampire')}
        </p>
    );
}

export default NewGame;
