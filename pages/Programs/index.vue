<template>
  <section class="relative h-[600px] bg-cover bg-center pt-[calc(100px)]" style="background-image: url('/images/hero-section.png');">
      <div class="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center px-6 sm:px-12">
      <h2 class="text-2xl sm:text-4xl lg:text-4xl font-bold text-white mb-4 dark:text-slate-200 text-center">
          Program Offerings
      </h2>
      </div>
    </section>

    <section data-aos="zoom-in" data-aos-duration="500" data-aos-delay="300" data-aos-offset="200" class="py-16 bg-gray-50 dark:bg-zinc-900">
        <div class="container mx-auto px-6">
          <h2 class="text-3xl font-bold mb-8 dark:text-slate-200">Undergraduate Programs</h2>
      
          <div>
            <ul class="list-none space-y-2">
              <li><NuxtLink to="/Programs/BA-Communications" class="text-blue-700 hover:underline dark:text-blue-500">Bachelor of Arts in Communication</NuxtLink></li>
              <li><NuxtLink to="/Programs/BS-Information-Systems" class="text-blue-700 hover:underline dark:text-blue-500">Bachelor of Science in Information Systems</NuxtLink></li>
              <li><NuxtLink to="/Programs/BS-Mathematics" class="text-blue-700 hover:underline dark:text-blue-500">Bachelor of Science in Mathematics</NuxtLink></li>
            </ul>
          </div>
        </div>
    </section>
</template>