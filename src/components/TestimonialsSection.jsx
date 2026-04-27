import imageDaniel from '../assets/image-daniel.jpg';
import imageJeanette from '../assets/image-jeanette.jpg';
import imageJonathan from '../assets/image-jonathan.jpg';
import imageKira from '../assets/image-kira.jpg';
import imagePatrick from '../assets/image-patrick.jpg';
import bgPatternQuotation from '../assets/bg-pattern-quotation.svg';

function TestimonialsSection() {
  return (
    <main>
      <section className="mx-auto my-[70px] flex max-w-[311px] flex-col items-center justify-center gap-card-400 md:grid md:max-w-[647px] md:grid-cols-2 md:items-stretch xl:my-card-1600 xl:max-w-[1114px] xl:grid-cols-4 xl:gap-x-card-400 xl:gap-y-card-300">
        <article className="relative flex flex-col gap-card-200 rounded-lg bg-card-Purple-500 p-card-400 shadow-card md:col-span-2 md:col-start-1 md:row-start-1">
          <img
            src={bgPatternQuotation}
            alt="Background quotation mark pattern"
            className="absolute top-0 left-[375px] z-0 hidden md:block"
          />
          <header className="relative z-1 flex flex-row items-center gap-[17px]">
            <figure className="flex h-7 w-7 items-center justify-center overflow-hidden rounded-full border-2 border-card-Purple-300">
              <img src={imageDaniel} alt="Daniel's picture" />
            </figure>
            <div className="flex flex-col gap-card-50">
              <p className="text-preset-2 text-card-White">Daniel Clifford</p>
              <p className="text-preset-4 text-card-Purple-50">
                Verified Graduate
              </p>
            </div>
          </header>
          <p className="relative z-1 text-preset-1 text-card-White">
            I received a job offer mid-course, and the subjects I learned were
            current, if not more so, in the company I joined. I honestly feel I
            got every penny’s worth.
          </p>
          <blockquote className="relative z-1 text-preset-3 text-card-Purple-50">
            “ I was an EMT for many years before I joined the bootcamp. I’ve
            been looking to make a transition and have heard some people who had
            an amazing experience here. I signed up for the free intro course
            and found it incredibly fun! I enrolled shortly thereafter. The next
            12 weeks was the best - and most grueling - time of my life. Since
            completing the course, I’ve successfully switched careers, working
            as a Software Engineer at a VR startup. ”
          </blockquote>
        </article>

        <article className="flex flex-col gap-card-200 rounded-lg bg-card-Grey-500 p-card-400 shadow-card md:col-start-1 md:row-start-2 xl:col-start-3 xl:row-start-1">
          <header className="flex flex-row items-center gap-[17px]">
            <figure className="flex h-7 w-7 items-center justify-center overflow-hidden rounded-full">
              <img src={imageJonathan} alt="Jonathan's picture" />
            </figure>
            <div className="flex flex-col gap-card-50">
              <p className="text-preset-2 text-card-White">Jonathan Walters</p>
              <p className="text-preset-4 text-card-Grey-200">
                Verified Graduate
              </p>
            </div>
          </header>
          <p className="text-preset-1 text-card-White">
            The team was very supportive and kept me motivated
          </p>
          <blockquote className="text-preset-3 text-card-Grey-100">
            “ I started as a total newbie with virtually no coding skills. I now
            work as a mobile engineer for a big company. This was one of the
            best investments I’ve made in myself. ”
          </blockquote>
        </article>

        <article className="z-1 flex flex-col gap-card-200 rounded-lg bg-card-White p-card-400 shadow-card md:col-start-2 md:row-start-2 xl:col-start-1 xl:row-start-2">
          <header className="flex flex-row items-center gap-[17px]">
            <figure className="flex h-7 w-7 items-center justify-center overflow-hidden rounded-full">
              <img src={imageJeanette} alt="Jeanette's picture" />
            </figure>
            <div className="flex flex-col gap-card-50">
              <p className="text-preset-2 text-card-Grey-500">
                Jeanette Harmon
              </p>
              <p className="text-preset-4 text-card-Grey-400">
                Verified Graduate
              </p>
            </div>
          </header>
          <p className="text-preset-1 text-card-Grey-500">
            An overall wonderful and rewarding experience
          </p>
          <blockquote className="text-preset-3 text-card-Grey-400">
            “ Thank you for the wonderful experience! I now have a job I really
            enjoy, and make a good living while doing something I love. ”
          </blockquote>
        </article>

        <article className="flex flex-col gap-card-200 rounded-lg bg-card-Dark-blue p-card-400 shadow-card md:col-span-2 md:col-start-1 md:row-start-3 xl:col-span-2 xl:col-start-2 xl:row-start-2">
          <header className="flex flex-row items-center gap-[17px]">
            <figure className="flex h-7 w-7 items-center justify-center overflow-hidden rounded-full border-2 border-card-Purple-500">
              <img src={imagePatrick} alt="Patrick's picture" />
            </figure>
            <div className="flex flex-col gap-card-50">
              <p className="text-preset-2 text-card-White">Patrick Abrams</p>
              <p className="text-preset-4 text-card-White">Verified Graduate</p>
            </div>
          </header>
          <p className="text-preset-1 text-card-Grey-200">
            Awesome teaching support from TAs who did the bootcamp themselves.
            Getting guidance from them and learning from their experiences was
            easy.
          </p>
          <blockquote className="text-preset-3 text-card-Grey-100">
            “ The staff seem genuinely concerned about my progress which I find
            really refreshing. The program gave me the confidence necessary to
            be able to go out in the world and present myself as a capable
            junior developer. The standard is above the rest. You will get the
            personal attention you need from an incredible community of smart
            and amazing people. ”
          </blockquote>
        </article>

        <article className="flex flex-col gap-card-200 rounded-lg bg-card-White p-card-400 shadow-card md:col-span-2 md:col-start-1 md:row-start-4 xl:col-start-4 xl:row-span-2 xl:row-start-1">
          <header className="flex flex-row items-center gap-[17px]">
            <figure className="flex h-7 w-7 items-center justify-center overflow-hidden rounded-full">
              <img src={imageKira} alt="Kira's picture" />
            </figure>
            <div className="flex flex-col gap-card-50">
              <p className="text-preset-2 text-card-Grey-500">Kira Whittle</p>
              <p className="text-preset-4 text-card-Grey-400">
                Verified Graduate
              </p>
            </div>
          </header>
          <p className="text-preset-1 text-card-Grey-500">
            Such a life-changing experience. Highly recommended!
          </p>
          <blockquote className="text-preset-3 text-card-Grey-400">
            “ Before joining the bootcamp, I’ve never written a line of code. I
            needed some structure from professionals who can help me learn
            programming step by step. I was encouraged to enroll by a former
            student of theirs who can only say wonderful things about the
            program. The entire curriculum and staff did not disappoint. They
            were very hands-on and I never had to wait long for assistance. The
            agile team project, in particular, was outstanding. It took my
            learning to the next level in a way that no tutorial could ever
            have. In fact, I’ve often referred to it during interviews as an
            example of my developent experience. It certainly helped me land a
            job as a full-stack developer after receiving multiple offers. 100%
            recommend! ”
          </blockquote>
        </article>
      </section>
    </main>
  );
}

export default TestimonialsSection;
