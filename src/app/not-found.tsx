import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Страница не найдена',
    description: 'Возможно, она была перемещена или адрес был набран неправильно',
  };
}

export default function NotFound() {
  return (
    <div className="not-found">
      <h2 className="not-found__title">Страница не найдена</h2>
      <p className="not-found__text">Возможно, она была перемещена или адрес был набран неправильно</p>
    </div>
  );
}
