import Image from "next/image";

export function WorkCollage() {
  return (
    <div className="relative">
      <div className="grid grid-cols-2 gap-4">
        <div className="relative ">
          <div className="relative h-100 overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4"
              alt="Technician assessing a job"
              fill
              sizes="(min-width: 1024px) 33vw, 50vw"
              className="object-cover rounded-lg"
            />
          </div>

          <div className="absolute -bottom-6 -right-2 flex flex-col gap-4 rounded-lg bg-yellow-500 p-4 text-white shadow-lg sm:right-6">
            <div>
              <div className="font-display text-2xl text-black">560+</div>
              <div className="text-xs text-black/90">Projects Done</div>
            </div>
            <div className="h-px bg-black/40" />
            <div>
              <div className="font-display text-2xl text-black">180+</div>
              <div className="text-xs text-black/90">Technicians</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <div className="relative h-48 overflow-hidden rounded-lg">
            <Image
              src="https://images.unsplash.com/photo-1581092160562-40aa08e78837"
              alt="Technician installing a fixture"
              fill
              sizes="(min-width: 1024px) 33vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="relative h-48 overflow-hidden rounded-lg">
            <Image
              src="https://images.unsplash.com/photo-1581092160607-ee22621dd758"
              alt="Technician at work"
              fill
              sizes="(min-width: 1024px) 33vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
