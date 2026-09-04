export default function CTA() {
  return (
    <div className="bg-slate-900">
      <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to advance your scientific career?
            <br />
            Join GeneBoxAI today.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-slate-300">
            Whether you are here to learn the latest computational models, or an expert ready to share your knowledge, there is a place for you in our community.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-teal-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-teal-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-400"
            >
              Get started as a Learner
            </a>
            <a href="#experts" className="text-sm font-semibold leading-6 text-white hover:text-teal-400 transition-colors">
              Apply to Teach <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}