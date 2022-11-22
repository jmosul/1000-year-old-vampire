import React, {ChangeEvent, ChangeEventHandler, FormEvent, useState} from 'react';
import {Button, Card, Grid, TextField, View} from '@aws-amplify/ui-react';
import {useNavigate} from 'react-router-dom';
import createGame from '../../../../services/createGame';

const NewGame = (): JSX.Element => {
    const [textError, setTextError] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const [vampireName, setVampireName] = useState<string|undefined>();
    const navigate = useNavigate();

    const handleSubmit = async (event: FormEvent): Promise<void> => {
        event.preventDefault();
        setLoading(true);

        if (vampireName) {
            const vampire = await createGame(vampireName);

            navigate(`game/${vampire.id}`);
        }
    };

    const handleChange: ChangeEventHandler = (event: ChangeEvent<HTMLInputElement>): void => {
        const valid = event.target.value && event.target.value.length > 3;

        setTextError(!valid);
        setVampireName(valid ? event.target.value : undefined);
    }

    return (
        <View>
            <form onSubmit={handleSubmit}>
                <Grid
                    templateColumns="1fr"
                    templateRows="1fr 1fr"
                >
                    <Card>
                        <TextField
                            label="Vampire Name"
                            placeholder="Enter the name for you vampire"
                            variation="quiet"
                            labelHidden
                            hasError={textError}
                            onChange={handleChange}
                            errorMessage="You must enter a name"
                            required
                        />
                    </Card>

                    <Card>
                        <Button
                            type="submit"
                            isFullWidth={true}
                            size="large"
                            variation="primary"
                            isLoading={loading}
                            loadingText="Befalling"
                        >
                            Begin
                        </Button>
                    </Card>
                </Grid>
            </form>
        </View>
    );
};

export default NewGame;
