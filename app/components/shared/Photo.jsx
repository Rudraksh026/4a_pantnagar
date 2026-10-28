export default function Photo({ src, alt = "", ...props }) {
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={(event) => event.currentTarget.classList.add("bad")}
      {...props}
    />
  );
}
