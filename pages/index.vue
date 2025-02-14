<template>
    <section class="relative h-[600px] bg-cover bg-center pt-[calc(100px)]" style="background-image: url('/images/hero-section.png');">
    <div class="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center px-6 sm:px-12">
      <h2 class="text-2xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 dark:text-slate-200">Empowering Futures <br> Through Science and <br> Technology</h2>
      <p class="text-sm text-gray-200 max-w-3xl dark:text-slate-200">
        At Mandaluyong College of Science and Technology, we are committed to nurturing excellence in education and innovation. Our programs in Information Systems, Mathematics, and Communication are designed to equip students with the skills needed for a successful future.
      </p>
    </div>
  </section>

  <section class="py-16">
    <div class="container mx-auto flex flex-col md:flex-row items-center justify-between">
      <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-offset="200"    class="md:w-1/2">
        <h2 class="text-3xl font-bold mb-4">Core Values That Drive Excellence at Mandaluyong College of Science and Technology</h2>
        <p class="text-lg">At MCST, we are committed to genuine public service and fostering care within our community. Our core values of discipline, action over words, nationalism, and excellence guide us in shaping responsible and innovative leaders.</p>
      </div>
      <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="200" data-aos-offset="200"    class="md:w-1/2 mt-8 md:mt-0 transition duration-200 dark:brightness-75 dark:contrast-125">
        <img src="/assets/images/feature.jpg" alt="Feature Image" class="w-full md:w-3/4 mx-auto rounded-lg" loading="lazy">
      </div>
    </div>
  </section>

  <section class="py-16 bg-gray-100 dark:bg-zinc-900 dark:text-slate-300">
    <div class="container mx-auto text-center">
      <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-offset="200">
        <h2 class="text-3xl font-bold mb-4 dark:text-slate-200">Our Commitment to Quality Education and Innovation</h2>
        <p class="text-lg max-w-2xl mx-auto mb-12">At Mandaluyong College of Science and Technology, we strive to provide accessible, high-quality education that empowers our students. Our dedication to advancing instruction and research ensures that we remain at the forefront of academic excellence.</p>
      </div>
  
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="200" data-aos-offset="200"   class="p-6 bg-white rounded-lg shadow-md dark:bg-zinc-800">
          <img src="/assets/images/collaboration.svg" alt="Collaborating Icon" class="h-16 w-16 mx-auto mb-4">
          <h3 class="text-xl font-semibold mb-2">Collaborating for a Brighter Future</h3>
          <p class="text-gray-700 dark:text-slate-300">We actively collaborate with stakeholders to enhance educational outcomes.</p>
        </div>
        <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="200" data-aos-offset="200"  class="p-6 bg-white rounded-lg shadow-md dark:bg-zinc-800">
          <img src="/assets/images/improve.svg" alt="Continuous Improvement Icon" class="h-16 w-16 mx-auto mb-4">
          <h3 class="text-xl font-semibold mb-2">Continuous Improvement in Education</h3>
          <p class="text-gray-700 dark:text-slate-300">Our focus on continuous improvement drives us to innovate and adapt.</p>
        </div>
        <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="200" data-aos-offset="200"  class="p-6 bg-white rounded-lg shadow-md dark:bg-zinc-800">
          <img src="/assets/images/research.svg" alt="Research and Instruction Icon" class="h-16 w-16 mx-auto mb-4">
          <h3 class="text-xl font-semibold mb-2">Fostering Excellence in Research and Instruction</h3>
          <p class="text-gray-700 dark:text-slate-300">We prioritize research initiatives that contribute to societal development.</p>
        </div>
      </div>
    </div>
  </section>

  <section id="blog" class="py-12 bg-gray-50 dark:bg-zinc-900">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div  data-aos="fade-up" data-aos-duration="1200" data-aos-delay="300" data-aos-offset="200" class="text-center mb-12">
        <h4 class="text-sm font-medium text-gray-600 uppercase dark:text-slate-300">News and Events</h4>
        <h2 class="text-3xl font-bold text-gray-900 dark:text-slate-200">Latest Insights and Updates</h2>
        <p class="text-gray-600 dark:text-slate-300">Explore our latest articles and insights.</p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <BlogCard data-aos="fade-up" data-aos-duration="800" data-aos-delay="200" data-aos-offset="200"  v-for="(post, index) in posts":key="index" :post="post" />
      </div>

      <div  data-aos="fade-up" data-aos-duration="1200" data-aos-delay="300" data-aos-offset="200" class="text-center mt-6">
        <a href="https://www.facebook.com/MandaluyongCST" target="_blank" rel="noopener noreferrer"
          class="inline-block bg-blue-600 text-white px-6 py-2 rounded-md shadow hover:bg-blue-700 text-sm dark:bg-blue-800">
          View all
        </a>
      </div>
    </div>
  </section>

  <section class="py-16 bg-gray-100 dark:bg-zinc-900">
    <div class="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
      <div data-aos="fade-up" data-aos-duration="1200" data-aos-delay="300" data-aos-offset="200" class="md:w-1/2 mb-8 md:mb-0">
        <h2 class="text-3xl font-bold mb-4">Join Us at MCST Today!</h2>
        <p class="text-lg text-gray-700 dark:text-slate-300">Take the first step towards a brighter future by applying to Mandaluyong College of Science and Technology. Discover our innovative programs designed to equip you with the skills needed for success in today's dynamic job market.</p>
      </div>
      <div data-aos="fade-up" data-aos-duration="1200" data-aos-delay="300" data-aos-offset="200" class="md:w-1/2 flex flex-col md:flex-row md:justify-end space-y-4 md:space-y-0 md:space-x-4">
        <button class="bg-blue-900 text-white py-3 px-6 rounded-lg transition duration-300 dark:bg-blue-800 dark:text-slate-200"><NuxtLink to="/about">Apply</NuxtLink></button>
        <button class="border border-black text-black py-3 px-6 rounded-lg transition duration-300 dark:border-slate-200 dark:text-slate-200"><NuxtLink to="/admission">Learn More</NuxtLink></button>
      </div>
    </div>
  </section>

  <section class="py-16 bg-gray-50 dark:bg-zinc-900">
    <div class="container mx-auto">
      <div data-aos="fade-up" data-aos-duration="1200" data-aos-delay="300" data-aos-offset="200">
        <h2 class="text-3xl font-bold mb-4">Get in Touch</h2>
        <p class="text-lg text-gray-700 mb-8 dark:text-slate-300">We're here to assist you with any inquiries.</p>
      </div>
  
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <div data-aos="fade-up" data-aos-duration="1200" data-aos-delay="300" data-aos-offset="200" class="mb-6">
            <div class="flex items-center mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <h3 class="text-xl font-semibold">Email</h3>
            </div>
            <p class="text-gray-700 dark:text-slate-300">Reach us anytime via email.</p>
            <p class="text-blue-500 dark:text-blue-700">registrarsoffice@mcst.edu.ph</p>
          </div>
  
          <div data-aos="fade-up" data-aos-duration="1200" data-aos-delay="300" data-aos-offset="200" class="mb-6">
            <div class="flex items-center mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <h3 class="text-xl font-semibold">Phone</h3>
            </div>
            <p class="text-gray-700 dark:text-slate-300">Call us for immediate support.</p>
            <p class="text-blue-500 dark:text-blue-700">(02) 87160352</p>
          </div>
  
          <div data-aos="fade-up" data-aos-duration="1200" data-aos-delay="300" data-aos-offset="200">
            <div class="flex items-center mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <h3 class="text-xl font-semibold">Office</h3>
            </div>
            <p class="text-gray-700 dark:text-slate-300">Welfareville Compound, Barangay Addition Hills, Mandaluyong City, PH</p>
            <a href="#" class="text-blue-500 hover:underline dark:text-blue-700">Find Us &gt;</a>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="200" data-aos-offset="200" class="hidden md:block bg-gray-200 rounded-lg transition duration-200 dark:brightness-75 dark:contrast-125">
          <img src="/assets/images/office.jpg" alt="Admin Building Image" class="w-full h-full object-cover rounded-lg" loading="lazy">
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>

const posts = [
  {
    link: "https://www.facebook.com/share/p/1BNSzjUoGd/",
    image: "/images/comsoc.jpg",
    category: "Announcement",
    title: "COMMpamilya 🌟",
    description: "Our COMMpassionate and dedicated officers are here to lead, inspire, and create a positive impact in the Communication Society.",
    authorImage: "/images/comsoc-logo.jpg",
    author: "MCST - Communication Society",
    date: "January 29, 2025",
    readTime: "1 min read",
  },
  {
    link: "https://www.facebook.com/share/p/1A4z9Ar3xn/",
    image: "/images/sakay.jpg",
    category: "Events",
    title: "Sasakay ka na ba sa biyaheng kawalan? 🚍🚦",
    description: "Inihahandog ng Mandaluyong College of Science and Technology, Bachelor of Arts in Communication – Second Year.",
    authorImage: "/images/sc-logo.jpg",
    author: "MCST Student Council",
    date: "December 14, 2024",
    readTime: "3 min read",
  },
  {
    link: "https://www.facebook.com/share/p/15g21o6ZaG/",
    image: "/images/secondsem.jpg",
    category: "Announcement",
    title: "Second Semester A.Y. 2024-2025",
    description: `"Education is the key that unlocks the potential within you; it empowers you to harness your talents and skills to uplift others and contribute meaningfully to society."`,
    authorImage: "/images/mcst-logo.png",
    author: "Mandaluyong College of Science and Technology",
    date: "January 12, 2025",
    readTime: "1 min read",
  },
];
</script>