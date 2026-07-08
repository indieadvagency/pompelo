import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Collection } from "@/lib/data";
import { EditorialImage } from "@/components/ui/editorial-image";

export function CollectionCard({
  collection,
  index = 0,
}: {
  collection: Collection;
  index?: number;
}) {
  return (
    <Link
      href={`/collections/${collection.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-blob border border-line bg-white shadow-card transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift"
    >
      <div className="overflow-hidden">
        <EditorialImage
          palette={collection.palette}
          index={index}
          rounded="rounded-none"
          className="aspect-[4/5] transition-transform duration-700 group-hover:scale-[1.04]"
          showMark
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center justify-between gap-3">
          <span className="rounded-pill bg-accent px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand">
            {collection.season}
          </span>
          <span className="text-xs font-medium text-muted">
            {collection.ageRange}
          </span>
        </div>
        <h3 className="mt-4 text-2xl font-bold text-ink">{collection.name}</h3>
        <p className="mt-2 flex-1 text-pretty leading-relaxed text-muted">
          {collection.tagline}
        </p>
        <span className="mt-5 inline-flex items-center gap-1.5 font-semibold text-brand">
          Explore collection
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </Link>
  );
}
