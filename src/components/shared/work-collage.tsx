import Image from "next/image";

export function WorkCollage() {
  return (
    <div className="relative">
      <div className="grid grid-cols-2 gap-4">
        <div className="relative col-span-2 h-40 overflow-hidden rounded-lg">
          <Image
            src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=700&q=80&auto=format&fit=crop"
            alt="Technician assessing a job"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative h-36 overflow-hidden rounded-lg">
          <Image
            src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&q=80&auto=format&fit=crop"
            alt="Technician installing a fixture"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative h-36 overflow-hidden rounded-lg">
          <Image
            src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=400&q=80&auto=format&fit=crop"
            alt="Technician at work"
            fill
            className="object-cover"
          />
        </div>
      </div>
      <div className="absolute -bottom-6 -right-4 flex gap-4 rounded-lg bg-ink px-6 py-4 text-white shadow-lg sm:right-6">
        <div>
          <div className="font-display text-2xl text-primary">560+</div>
          <div className="text-xs text-white/60">Projects Done</div>
        </div>
        <div className="w-px bg-white/15" />
        <div>
          <div className="font-display text-2xl text-primary">180+</div>
          <div className="text-xs text-white/60">Technicians</div>
        </div>
      </div>
    </div>
  );
}
