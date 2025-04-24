type Props = {
  image: string;
  title: string;
  desc: string;
};

export function BrandCard({ image, title, desc }: Props) {
  return (
    <div>
      <div className="img-area">
        <img src={image} alt="" />
      </div>
      <div className="details">
        <p>{title}</p>
        <p>{desc}</p>
      </div>
    </div>
  );
}
