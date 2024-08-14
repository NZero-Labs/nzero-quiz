export default function Arrow(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width ?? "50"}
      height={props.height ?? "50"}
      fill="none"
      viewBox="0 0 50 50"
    >
      <path
        // eslint-disable-next-line react/prop-types
        fill={props.fill}
        d="M25 0l-4.469 4.353L37.97 21.875H0v6.25h37.969L20.53 45.541 25 50l25-25L25 0z"
      ></path>
    </svg>
  );
}