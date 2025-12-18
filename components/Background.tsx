export default function Background() {
  return (
    <div
      aria-hidden
      className="
        fixed inset-0
        z-0
        pointer-events-none
        bg-[url('/noise.png')]
        bg-repeat
        bg-size-[1600px_1000px]
        opacity-[0.15]
      "
    />
  );
}