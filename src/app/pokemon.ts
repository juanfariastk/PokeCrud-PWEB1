export class Pokemon {
    id?: number;
    name?: string;
    types?: { slot: number; type: { name: string; url: string } }[];
    abilities?: string[];
    sprites?: {
      front_default?: string;
    };
    isEditing?: boolean;
  }
  