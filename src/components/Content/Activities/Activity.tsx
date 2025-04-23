type Props = {
  image: string;
  title: string;
  desc: string;
};

export function Activity({ image, title, desc }: Props) {
  return (
    <article className="activity-item">
      <section className="activity-image-container">
        <img src={image} alt="" />
      </section>

      <section className="activity-detail">
        <p className="title">{title}</p>
        <p className="desc">{desc}</p>
      </section>
    </article>
  );
}
