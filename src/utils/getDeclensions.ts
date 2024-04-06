interface IDeclensions {
  zero: string;
  one: string;
  two: string;
  few: string;
  many: string;
  other: string;
}

const pluralRules = new Intl.PluralRules('ru-RU');

export default function getDeclensions(count: number, declensions: IDeclensions) {
  const rule = pluralRules.select(count);
  return declensions[rule];
}
