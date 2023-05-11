export default function Hero() {
  return (
    <div
      class="w-full flex px-8 h-96 justify-center items-center flex-col gap-8 bg-cover bg-center bg-no-repeat bg-gray-100 rounded-xl text-white"
      style="background-image:linear-gradient(rgba(0, 0, 40, 0.6),rgba(0, 0, 40, 0.6)), url('/hero-bg.webp');"
    >
      <div class="space-y-4 text-center">
        <h1 class="text-4xl inline-block font-bold">
          Innovative Web &amp; Software Solutions
        </h1>
        <p class="text-xl max-w-lg text-blue-100">
          Elevate Your Next Project with Our Comprehensive Development Services
          - Let's Talk Today!
        </p>
      </div>

      <div>
        <a
          href="/contact"
          class="block mt-4 text-blue-500 cursor-pointer inline-flex items-center group text-blue-800 bg-white px-8 py-2 rounded-md hover:bg-blue-50 font-bold"
        >
          Get In Touch
        </a>
      </div>
    </div>
  );
}
