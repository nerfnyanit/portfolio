import Image from "next/image"

type SkillCardProps = {
  name: string
  img: string
  month: string
}

export default function SkillCard({ name, img, month }: SkillCardProps) {
  return (
    <div
      className="
        group flex items-center
        rounded-lg overflow-hidden
        cursor-pointer
        transition-all duration-300
        w-full
        sm:w-40
        md:w-32 md:hover:w-72
      "
    >
      <Image src={img} alt={name} width={80} height={80} />

      <div
        className="
          ml-4
          opacity-100
          md:opacity-0 md:group-hover:opacity-100
          transition-opacity duration-300
          text-white
          flex flex-col
        "
      >
        <p className="font-semibold border-b">{name}</p>
        <p className="text-sm text-gray-300">{month}</p>
      </div>
    </div>
  )
}
