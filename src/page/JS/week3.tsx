import { useState, useEffect } from 'react';
import { LottieItem } from '../../component/ui/LottieItem';

interface AnimationSet {
  angryBird: object;
  home: object;
  interaction: object;
}

export default function Week3() {
  const [data, setData] = useState<AnimationSet | null>(null);

  useEffect(() => {
    Promise.all([
      fetch('/lottie/angry-bird.json').then((r) => r.json()),
      fetch('/lottie/home.json').then((r) => r.json()),
      fetch('/lottie/interaction.json').then((r) => r.json()),
    ]).then(([angryBird, home, interaction]) => {
      setData({ angryBird, home, interaction });
    });
  }, []);

  if (!data) return null;

  return (
    <section className="flex min-h-[50vh] items-center justify-center pt-24 pb-16 md:pt-48">
      <div className="container mx-auto px-4">
        <h2 className="mb-6 text-4xl font-bold sm:text-5xl md:text-6xl">
          Week 3
        </h2>

        <div className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-12">
          <LottieItem
            animationData={data.angryBird}
            speed={1}
            loop={true}
            direction={1}
          />
          <LottieItem
            animationData={data.home}
            speed={1.5}
            loop={true}
            direction={1}
          />
          <LottieItem
            animationData={data.interaction}
            speed={0.8}
            loop={true}
            direction={-1}
          />
        </div>
      </div>
    </section>
  );
}
