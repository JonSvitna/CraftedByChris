import Image from "next/image";

type FloatingShoe = {
  src: string;
  top: string;
  left?: string;
  right?: string;
  size: string;
  delay: string;
  opacity: number;
  className: string;
};

const floatingShoes: readonly FloatingShoe[] = [
  { src: "/images/shoe-ember.svg", top: "7%", left: "5%", size: "140px", delay: "0s", opacity: 0.85, className: "hidden sm:block" },
  { src: "/images/shoe-frost.svg", top: "18%", right: "9%", size: "128px", delay: "1.1s", opacity: 0.72, className: "hidden md:block" },
  { src: "/images/shoe-solar.svg", top: "52%", left: "3%", size: "150px", delay: "0.5s", opacity: 0.8, className: "hidden sm:block" },
  { src: "/images/shoe-noir.svg", top: "62%", right: "7%", size: "132px", delay: "1.4s", opacity: 0.68, className: "hidden lg:block" },
  { src: "/images/shoe-neon.svg", top: "84%", left: "44%", size: "118px", delay: "0.9s", opacity: 0.74, className: "hidden xl:block" },
] as const;

export function FloatingShoes() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {floatingShoes.map((shoe) => (
        <Image
          key={shoe.src + shoe.top}
          src={shoe.src}
          alt=""
          width={700}
          height={440}
          className={`float-shoe absolute ${shoe.className}`}
          style={{
            top: shoe.top,
            left: shoe.left,
            right: shoe.right,
            width: shoe.size,
            height: "auto",
            animationDelay: shoe.delay,
            opacity: shoe.opacity,
            filter: "drop-shadow(0 12px 24px rgba(7, 18, 40, 0.22))",
          }}
        />
      ))}
    </div>
  );
}
