export default function FilmsList({ params }: { params: { slug: string } }) {
  return <div>{params.slug}</div>;
}
