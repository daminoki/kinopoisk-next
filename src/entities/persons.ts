export interface IPerson {
  id: number;
  name?: string | null;
  enName?: string | null;
  photo?: string | null;
  sex?: string | null;
  growth?: number | null;
  birthday?: string | null;
  death?: string | null;
  age?: number | null;
  birthPlace?: [
    {
      value: string;
    },
  ];
  deathPlace?: [
    {
      value: string;
    },
  ];
  spouses?: {
    id: number;
    name: string;
    divorced: boolean;
    divorcedReason: string;
    sex: string;
    children: number;
    relation: string;
  };
  countAwards?: number;
  profession?: [
    {
      value: string;
    },
  ];
  facts?: [
    {
      value: string;

    },
  ];
  movies?: [
    {
      id: number;
      name: string | null;
      alternativeName: string | null;
      rating: number | null;
      general: boolean | null;
      description: string | null;
      enProfession: string | null;
    },
  ];
  updatedAt: Date;
  createdAt: Date;
}
