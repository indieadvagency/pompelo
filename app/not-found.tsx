import { Button } from "@/components/ui/button";
import { Blob } from "@/components/ui/blobs";
import { LogoMark } from "@/components/brand/logo";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80vh] items-center overflow-hidden pt-[72px]">
      <Blob className="left-[-4rem] top-[4rem] h-72 w-72" />
      <Blob
        className="right-[-4rem] bottom-[2rem] h-64 w-64"
        from="#FFC9C4"
        to="#FF6656"
        float="animate-float-slow"
      />
      <div className="container-p relative text-center">
        <span className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-brand-gradient text-white shadow-soft">
          <LogoMark className="h-10 w-10" />
        </span>
        <p className="mt-8 font-display text-7xl font-extrabold text-brand">404</p>
        <h1 className="mt-4 text-3xl font-bold">This page went out to play</h1>
        <p className="mx-auto mt-4 max-w-md text-muted">
          We couldn't find the page you were looking for — but there's plenty
          more of the Pompelo world to explore.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href="/" withArrow>
            Back home
          </Button>
          <Button href="/collections" variant="outline">
            View collections
          </Button>
        </div>
      </div>
    </section>
  );
}
