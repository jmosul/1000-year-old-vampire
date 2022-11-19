import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection } from "@aws-amplify/datastore";

export enum Disposition {
  FRIEND = "FRIEND",
  NEUTRAL = "NEUTRAL",
  FOE = "FOE"
}



type EagerVampireName = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<VampireName, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly vampireID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyVampireName = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<VampireName, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly vampireID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type VampireName = LazyLoading extends LazyLoadingDisabled ? EagerVampireName : LazyVampireName

export declare const VampireName: (new (init: ModelInit<VampireName>) => VampireName) & {
  copyOf(source: VampireName, mutator: (draft: MutableModel<VampireName>) => MutableModel<VampireName> | void): VampireName;
}

type EagerCharacters = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Characters, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly dead: boolean;
  readonly gone: boolean;
  readonly birthYear?: number | null;
  readonly deathYear?: number | null;
  readonly relation: string;
  readonly disposition?: Disposition | keyof typeof Disposition | null;
  readonly vampireID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCharacters = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Characters, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly dead: boolean;
  readonly gone: boolean;
  readonly birthYear?: number | null;
  readonly deathYear?: number | null;
  readonly relation: string;
  readonly disposition?: Disposition | keyof typeof Disposition | null;
  readonly vampireID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Characters = LazyLoading extends LazyLoadingDisabled ? EagerCharacters : LazyCharacters

export declare const Characters: (new (init: ModelInit<Characters>) => Characters) & {
  copyOf(source: Characters, mutator: (draft: MutableModel<Characters>) => MutableModel<Characters> | void): Characters;
}

type EagerSkill = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Skill, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly summary: string;
  readonly description?: string | null;
  readonly checked: boolean;
  readonly lost: boolean;
  readonly vampireID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazySkill = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Skill, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly summary: string;
  readonly description?: string | null;
  readonly checked: boolean;
  readonly lost: boolean;
  readonly vampireID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Skill = LazyLoading extends LazyLoadingDisabled ? EagerSkill : LazySkill

export declare const Skill: (new (init: ModelInit<Skill>) => Skill) & {
  copyOf(source: Skill, mutator: (draft: MutableModel<Skill>) => MutableModel<Skill> | void): Skill;
}

type EagerResource = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Resource, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly summary?: string | null;
  readonly description?: string | null;
  readonly vampireID: string;
  readonly lost?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyResource = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Resource, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly summary?: string | null;
  readonly description?: string | null;
  readonly vampireID: string;
  readonly lost?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Resource = LazyLoading extends LazyLoadingDisabled ? EagerResource : LazyResource

export declare const Resource: (new (init: ModelInit<Resource>) => Resource) & {
  copyOf(source: Resource, mutator: (draft: MutableModel<Resource>) => MutableModel<Resource> | void): Resource;
}

type EagerMark = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Mark, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly summary?: string | null;
  readonly description?: string | null;
  readonly vampireID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyMark = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Mark, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly summary?: string | null;
  readonly description?: string | null;
  readonly vampireID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Mark = LazyLoading extends LazyLoadingDisabled ? EagerMark : LazyMark

export declare const Mark: (new (init: ModelInit<Mark>) => Mark) & {
  copyOf(source: Mark, mutator: (draft: MutableModel<Mark>) => MutableModel<Mark> | void): Mark;
}

type EagerVampire = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Vampire, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Names?: (VampireName | null)[] | null;
  readonly Resources?: (Resource | null)[] | null;
  readonly Skills?: (Skill | null)[] | null;
  readonly Marks?: (Mark | null)[] | null;
  readonly Characters?: (Characters | null)[] | null;
  readonly createdDate: string;
  readonly lastUpdated: string;
  readonly uniqueCode: string;
  readonly birthYear?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyVampire = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Vampire, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Names: AsyncCollection<VampireName>;
  readonly Resources: AsyncCollection<Resource>;
  readonly Skills: AsyncCollection<Skill>;
  readonly Marks: AsyncCollection<Mark>;
  readonly Characters: AsyncCollection<Characters>;
  readonly createdDate: string;
  readonly lastUpdated: string;
  readonly uniqueCode: string;
  readonly birthYear?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Vampire = LazyLoading extends LazyLoadingDisabled ? EagerVampire : LazyVampire

export declare const Vampire: (new (init: ModelInit<Vampire>) => Vampire) & {
  copyOf(source: Vampire, mutator: (draft: MutableModel<Vampire>) => MutableModel<Vampire> | void): Vampire;
}