export default function Marquee({
  rotation = 'straight',
}: {
  rotation?: string;
}) {
  return (
    <section className="marquee text-surface font-playfairDisplay bg-primary my-4 flex items-center overflow-hidden py-3 text-3xl leading-normal font-bold lg:py-6 lg:text-5xl">
      <div
        className={`marquee-inner flex flex-none items-center overflow-hidden ${rotation == 'straight' ? 'animate-marquee' : 'animate-marquee-reverse'}`}
      >
        <div className="marquee-item relative flex flex-none items-center px-6">
          <a href="#" className="block">
            Lets work together!
          </a>
        </div>
        <div className="marquee-item relative flex flex-none items-center px-6">
          <a href="#" className="">
            Lets work together!
          </a>
        </div>
        <div className="marquee-item relative flex flex-none items-center px-6">
          <a href="#" className="">
            Lets work together!
          </a>
        </div>
        <div className="marquee-item relative flex flex-none items-center px-6">
          <a href="#" className="">
            Lets work together!
          </a>
        </div>
        <div className="marquee-item relative flex flex-none items-center px-6">
          <a href="#" className="">
            Lets work together!
          </a>
        </div>
        <div className="marquee-item relative flex flex-none items-center px-6">
          <a href="#" className="">
            Lets work together!
          </a>
        </div>
      </div>
      <div
        className={`marquee-inner flex flex-none items-center overflow-hidden ${rotation == 'straight' ? 'animate-marquee' : 'animate-marquee-reverse'}`}
      >
        <div className="marquee-item relative flex flex-none items-center px-6">
          <a href="#" className="">
            Lets work together!
          </a>
        </div>
        <div className="marquee-item relative flex flex-none items-center px-6">
          <a href="#" className="">
            Lets work together!
          </a>
        </div>
        <div className="marquee-item relative flex flex-none items-center px-6">
          <a href="#" className="">
            Lets work together!
          </a>
        </div>
        <div className="marquee-item relative flex flex-none items-center px-6">
          <a href="#" className="">
            Lets work together!
          </a>
        </div>
        <div className="marquee-item relative flex flex-none items-center px-6">
          <a href="#" className="">
            Lets work together!
          </a>
        </div>
        <div className="marquee-item relative flex flex-none items-center px-6">
          <a href="#" className="">
            Lets work together!
          </a>
        </div>
      </div>
    </section>
  );
}
