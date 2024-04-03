'use client';

import { useState, useEffect } from 'react';
import { IFilm } from '@/entities/films';
import { getFilm } from '@/api';

export default function FilmPage({ params }: { params: { id: string } }) {
  const [film, setFilm] = useState<IFilm>();

  const fetchFilm = async () => {
    const data = await getFilm(params.id);
    setFilm(data);

    console.log(film);
  };

  useEffect(() => {
    async function fetchData() {
      await fetchFilm();
    }

    fetchData();
  }, [params.id]);

  return (
    <div />
  );
}
