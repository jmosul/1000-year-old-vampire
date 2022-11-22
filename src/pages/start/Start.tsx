import React from 'react';
import {Card, Grid, TabItem, Tabs, useTheme, View} from '@aws-amplify/ui-react';
import NewGame from './components/NewGame/NewGame';

const Start = (): JSX.Element => {
    const tokens = useTheme().tokens;

    return (
        <View
            as="main"
            padding="1rem"
            backgroundColor="#333"
        >
            <Grid
                templateColumns="2fr 3fr 2fr"
                templateRows="10rem 10rem"
                gap="1rem"
            >
                <View
                    columnStart="2"
                    columnEnd="-2"
                    backgroundColor={tokens.colors.background.secondary}
                >
                    <Tabs justifyContent="space-evenly">
                        <TabItem title="New Game">
                            <NewGame />
                        </TabItem>

                        <TabItem title="Load Game">
                            Content 2
                        </TabItem>
                    </Tabs>
                </View>
            </Grid>
        </View>
    );
};

export default Start;
