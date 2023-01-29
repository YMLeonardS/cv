export default function Portfolio() {
  return (
    <div class="container">
      <div class="w-full px-4">
        <div class="max-w-xl mx-auto text-center mb-16">
          <h4 class="font-semibold text-lg text-primary mb-2">Portfolio</h4>
          <h2 class="font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-4xl">Last Project</h2>
          <p class="font-medium text-secondary md:text-lg">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis facere eos dolorem expedita eligendi, corrupti architecto quae. Vel,
            fugit hic!
          </p>
        </div>
      </div>

      <div class="w-full px-4 flex flex-wrap justify-center xl:w-10/12 xl:mx-auto">
        <div class="mb-12 p-4 md:w-1/2">
          <div class="rounded-md shadow-md overflow-hidden">
            <img src="portfolio/1.png" alt="Event Sales Bali" width="w-full" />
          </div>
          <h3 class="font-semibold text-xl text-dark mt-5 mb-3">Event Sales Dashboard</h3>
          <p class="font-medium text-base text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius asperiores temporibus rem?</p>
        </div>

        <div class="mb-12 p-4 md:w-1/2">
          <div class="rounded-md shadow-md overflow-hidden">
            <img src="portfolio/2.png" alt="Network Status" width="w-full" />
          </div>
          <h3 class="font-semibold text-xl text-dark mt-5 mb-3">Network Status Dashboard</h3>
          <p class="font-medium text-base text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius asperiores temporibus rem?</p>
        </div>

        <div class="mb-12 p-4 md:w-1/2">
          <div class="rounded-md shadow-md overflow-hidden">
            <img src="portfolio/3.png" alt="Congestion" width="w-full" />
          </div>
          <h3 class="font-semibold text-xl text-dark mt-5 mb-3">Congestion Dashboard</h3>
          <p class="font-medium text-base text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius asperiores temporibus rem?</p>
        </div>

        <div class="mb-12 p-4 md:w-1/2">
          <div class="rounded-md shadow-md overflow-hidden">
            <img src="portfolio/4.png" alt="CS Core Performance" width="w-full" />
          </div>
          <h3 class="font-semibold text-xl text-dark mt-5 mb-3">CS Core Performance</h3>
          <p class="font-medium text-base text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius asperiores temporibus rem?</p>
        </div>
      </div>
    </div>
  );
}