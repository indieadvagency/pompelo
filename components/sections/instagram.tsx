import { Instagram } from "lucide-react";
import { EditorialImage } from "@/components/ui/editorial-image";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";

const TILES: { label: string; span: string }[] = [
  { label: "Sunday mornings", span: "row-span-2" },
  { label: "First steps", span: "" },
  { label: "Little explorers", span: "" },
  { label: "Golden hour", span: "" },
  { label: "Everyday play", span: "row-span-2" },
  { label: "Soft & sound", span: "" },
  { label: "Adventure ready", span: "" },
  { label: "Made to share", span: "" },
];

export function InstagramGallery() {
  return (
    <div>
      <RevealGroup className="grid auto-rows-[150px] grid-cols-2 gap-4 sm:auto-rows-[190px] md:grid-cols-4">
        {TILES.map((t, i) => (
          <RevealItem key={t.label} className={t.span}>
            <div className="group relative h-full overflow-hidden rounded-card">
              <EditorialImage
                index={i + 1}
                rounded="rounded-card"
                showMark={false}
                className="h-full transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-ink/0 opacity-0 transition-all duration-300 group-hover:bg-ink/35 group-hover:opacity-100">
                <span className="flex items-center gap-2 font-medium text-white">
                  <Instagram className="h-5 w-5" />
                  {t.label}
                </span>
              </div>
            </div>
          </RevealItem>
        ))}
      </RevealGroup>
    </div>
  );
}
