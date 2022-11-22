import {DataStore} from 'aws-amplify';
import {Vampire, VampireName} from '../models';
import {formatISO} from 'date-fns';


const createGame = async (vampireName: string): Promise<Vampire> => {
    const createdDate = formatISO(new Date);

    const vampire = await DataStore.save<Vampire>(
        new Vampire({
            createdDate: createdDate,
            lastUpdated: createdDate,
            uniqueCode: 'test',
        })
    )

    await DataStore.save<VampireName>(
        new VampireName({
            name: vampireName,
            vampireID: vampire.id,
        })
    );

    return vampire;
}

export default createGame;
