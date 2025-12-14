export default function Comment() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-2xl px-4">
        <h2 className="mb-6 text-3xl font-bold">Leave a comment</h2>

        <form className="mb-10 space-y-4">
          <input
            type="text"
            placeholder="Your name"
            className="w-full rounded-lg border border-gray-300 p-3"
            value=""
          />

          <textarea
            placeholder="Your message"
            className="min-h-30 w-full rounded-lg border border-gray-300 p-3"
            value=""
          />

          <button
            type="submit"
            className="rounded-lg bg-black px-6 py-3 text-white transition hover:opacity-90"
          >
            Send Comment
          </button>
        </form>

        {/* Comments */}
        <div className="space-y-6">
          <div className="flex gap-4 rounded-xl border border-gray-200 p-4">
            <img src="" alt="" className="h-12 w-12 rounded-full" />
            <div>
              <h4 className="font-semibold">Name</h4>
              <p className="text-gray-700">Message</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
