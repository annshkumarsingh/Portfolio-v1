export default function Contact() {
  return (
    <section
  id="contact"
  className="min-h-screen max-w-4xl mx-auto px-6 pt-32"
>
      <h2 className="text-3xl font-bold mb-4">Contact Me</h2>

      <p className="text-gray-600 mb-12 max-w-xl">
        Have an opportunity or want to collaborate? Feel free to reach out.
      </p>

      {/* Form Card */}
      <div className="rounded-3xl bg-white/60 p-8 md:p-12 shadow-md hover:shadow-xl transition-shadow duration-300">
        <form
          className="space-y-6"
          onSubmit={(e) => e.preventDefault()}
        >
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              required
              className="
                w-full rounded-lg px-4 py-2
                bg-white/10
                ring-1 ring-black/15
                hover:ring-black/40
                focus:outline-none focus:ring-2 focus:ring-black/40
              "
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              required
              className="
                w-full rounded-lg px-4 py-2
                bg-white/10
                ring-1 ring-black/15
                hover:ring-black/40
                focus:outline-none focus:ring-2 focus:ring-black/40
              "
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              rows={5}
              required
              className="
                w-full rounded-lg px-4 py-2
                bg-white/10
                ring-1 ring-black/15
                hover:ring-black/40
                resize-none
                focus:outline-none focus:ring-2 focus:ring-black/40
              "
            />
          </div>

          <button
            type="submit"
            className="
              w-full py-3 rounded-xl
              bg-black text-white font-medium
              hover:opacity-80 transition
            "
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}