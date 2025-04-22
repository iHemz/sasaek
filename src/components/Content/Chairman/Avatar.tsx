type Props = {
  image: string;
  text: string;
  imageClass?: string;
};
export function Avatar({ image, text, imageClass }: Props) {
  return (
    <div className="avatar">
      <div className="img-wrapper">
        <img src={image} alt="" className={imageClass} />
      </div>
      <p>{text}</p>
    </div>
  );
}
