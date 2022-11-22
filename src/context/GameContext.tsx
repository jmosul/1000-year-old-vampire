import React, {ReactNode, useState, PropsWithChildren} from 'react';
import {Characters, Mark, Resource, Skill, Vampire, VampireName} from '../models';

export interface GameContextInterface {
    vampire?: Vampire
    updateVampire: (vampire: Vampire) => void;

    characters: Characters[],
    marks: Mark[],
    names: VampireName[],
    resources: Resource[],
    skills: Skill[],

    addCharacter: (characters: Characters) => void,
    addMark: (marks: Mark) => void,
    addName: (name: VampireName) => void,
    addResource: (resources: Resource) => void,
    addSkill: (skills: Skill) => void,
}

const defaultContext: GameContextInterface = {
    updateVampire: (vampire: Vampire) => {},
    addCharacter: (character: Characters) => {},
    addMark: (mark: Mark) => {},
    addName: (name: VampireName) => {},
    addResource: (resource: Resource) => {},
    addSkill: (skill: Skill) => {},
    characters: [],
    marks: [],
    names: [],
    resources: [],
    skills: [],
};

export const GameContext = React.createContext<GameContextInterface>(defaultContext);

export const GameProvider = ({children}: PropsWithChildren<{}>): JSX.Element => {
    const [vampire, setVampire] = useState<Vampire>();
    const [characters, setCharacters] = useState<Characters[]>([]);
    const [marks, setMarks] = useState<Mark[]>([]);
    const [names, setName] = useState<VampireName[]>([]);
    const [resources, setResources] = useState<Resource[]>([]);
    const [skills, setSkills] = useState<Skill[]>([]);

    const updateVampire = (vampire: Vampire) => setVampire(vampire);

    const addCharacter = (character: Characters) => {
        characters.push(character);
        setCharacters(characters);
    };

    const addMark = (mark: Mark) => {
        marks.push(mark);
        setMarks(marks);
    };

    const addName = (name: VampireName) => {
        names.push(name);
        setName(names);
    };

    const addResource = (resource: Resource) => {
        resources.push(resource);
        setResources(resources);
    };

    const addSkill = (skill: Skill) => {
        skills.push(skill);
        setSkills(skills);
    };

    return (
        <GameContext.Provider
            value={{
                vampire,
                characters,
                marks,
                names,
                resources,
                skills,
                updateVampire,
                addCharacter,
                addMark,
                addName,
                addResource,
                addSkill,
            }}
        >
            {children}
        </GameContext.Provider>
    );
};
