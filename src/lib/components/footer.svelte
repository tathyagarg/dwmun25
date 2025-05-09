<!--
make a footer, with contact info and social media links 
height is 25vh, width is full
background is --bg2

content is static so no external data
do not use external components.
do not use any script tags whatsoever

use only tailwindcss for styling
generate the whole thing in one go
-->
<footer
  class="flex flex-col bg-black/10 backdrop-blur-sm h-[40vh] w-full p-8 gap-8 portrait:h-fit"
>
  <h1 class="text-4xl font-bold text-(--text) m-0">Contact Us</h1>
  <hr class="m-0" />
  <div class="flex flex-row h-full portrait:flex-col">
    <div class="flex flex-col flex-1">
      <p class="text-xl text-(--text) mt-4">
        Email: <a
          href="mailto:mundpswhitefield@gmail.com"
          class="text-blue-500 hover:underline">mundpswhitefield@gmail.com</a
        >
      </p>
      <p class="text-xl text-(--text) mt-4">
        Instagram: <a
          href="https://www.instagram.com/dwmun/"
          class="text-blue-500 hover:underline">@dwmun</a
        >
      </p>
      <p class="text-xl text-(--text) mt-4">
        Phone: <a href="tel:+1234567890" class="text-blue-500 hover:underline"
          >+91 1234567890</a
        >
      </p>
      <div class="text-xl text-(--text) mt-4 flex flex-row gap-2">
        Address:
        <div>
          <a
            href="https://www.google.com/maps/place/DPS+Whitefield+Mallasandra/@13.012078,77.780882,4877m/data=!3m1!1e3!4m6!3m5!1s0x3bae0e504a72d869:0xb74cb38cf8557f3f!8m2!3d13.0120782!4d77.7808823!16s%2Fg%2F11dxm2gg_y!5m1!1e2"
            class="text-blue-500 hover:underline"
            >Delhi Public School - Whitefield<br />Survey No. 123/124,
            Mallasandra Village<br />Hostoke Taluk, Bangalore - 560067</a
          >
        </div>
      </div>
    </div>
    <iframe
      title="Google Maps"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.370167319226!2d77.7783073745472!3d13.012083413990453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae0e504a72d869%3A0xb74cb38cf8557f3f!2sDPS%20Whitefield%20Mallasandra!5e0!3m2!1sen!2sin!4v1718614828570!5m2!1sen!2sin"
      class="flex-1 border-0"
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</footer>
