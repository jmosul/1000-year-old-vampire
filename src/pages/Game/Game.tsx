import React, {useContext, useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {GameContext, GameContextInterface, GameProvider} from '../../context/GameContext';
import {DataStore} from 'aws-amplify';
import {Vampire, VampireName} from '../../models';

const Game = (): JSX.Element => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const {gameId} = useParams();

    const {
        updateVampire,
        addCharacter,
        addMark,
        addName,
        addResource,
        addSkill,
    } = useContext<GameContextInterface>(GameContext);

    useEffect(() => {

        const fetchData = async () => {
            try {
                const vampire = await DataStore.query(Vampire, gameId as string);

                if (vampire) {
                    updateVampire(vampire);

                    for await (const character of vampire.Characters) {
                        addCharacter(character);
                    }

                    for await (const mark of vampire.Marks) {
                        addMark(mark);
                    }

                    for await (const name of vampire.Names) {
                        addName(name);
                    }

                    for await (const resource of vampire.Resources) {
                        addResource(resource);
                    }

                    for await (const skill of vampire.Skills) {
                        addSkill(skill);
                    }
                }

                setIsLoading(false);
            } catch (error) {
                console.log('Error retrieving posts', error);
            }
        };

        fetchData();
    }, []);

    return (
        <GameProvider>
            <p>{gameId}</p>
        </GameProvider>
    );
};

export default Game;
