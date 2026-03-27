import { LottieItem } from '../../component/ui/LottieItem';
import angryBird from './angry-bird.json';
import home from './home.json';
import interaction from './interaction.json';

export default function Week3() {
  return (
    <section className="flex min-h-[50vh] items-center justify-center pt-24 pb-16 md:pt-48">
      <div className="container mx-auto px-4">
        <h2 className="mb-6 text-4xl font-bold sm:text-5xl md:text-6xl">
          Week 3
        </h2>

        <div className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-12">
          <LottieItem
            animationData={angryBird}
            speed={1}
            loop={true}
            direction={1}
          />
          <LottieItem
            animationData={home}
            speed={1.5}
            loop={true}
            direction={1}
          />
          <LottieItem
            animationData={interaction}
            speed={0.8}
            loop={true}
            direction={-1}
          />
        </div>
      </div>
    </section>
  );
}
