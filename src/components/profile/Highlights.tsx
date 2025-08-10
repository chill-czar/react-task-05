import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { highlights } from "@/data/photos";

const Highlights = () => {
  return (
    <section aria-labelledby="highlights-title" className="py-4">
      <h2 id="highlights-title" className="sr-only">Highlight stories</h2>
      <div className="relative">
        <Carousel opts={{ align: "start" }}>
          <CarouselContent>
            {highlights.map((h) => (
              <CarouselItem key={h.id} className="basis-1/4 sm:basis-1/6 md:basis-1/8 lg:basis-1/10">
                <div className="flex flex-col items-center gap-2">
                  <div className="avatar-gradient-ring">
                    <img src={h.cover} alt={`${h.title} highlight cover`} width={72} height={72} loading="lazy" />
                  </div>
                  <span className="text-xs text-muted-foreground">{h.title}</span>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  );
};

export default Highlights;
