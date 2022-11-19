// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const Disposition = {
  "FRIEND": "FRIEND",
  "NEUTRAL": "NEUTRAL",
  "FOE": "FOE"
};

const { VampireName, Characters, Skill, Resource, Mark, Vampire } = initSchema(schema);

export {
  VampireName,
  Characters,
  Skill,
  Resource,
  Mark,
  Vampire,
  Disposition
};