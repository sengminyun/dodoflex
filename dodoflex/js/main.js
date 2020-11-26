

var swiper = new Swiper('.swiper-container', {
    slidesPerView: 5,
    spaceBetween: 0,
    loop: true,
    centeredSlides: true,
    autoplay: 1800,
    speed: 1200,
    autoplayDisableOnInteraction: false,
    grabCursor: true,
    initialSlide: 0,
    centeredSlides: true,
    loopAdditionalSlides: 3,
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
    },
});
function numberCounter(target_frame, target_number) {
  this.count = 0; this.diff = 0;
  this.target_count = parseInt(target_number);
  this.target_frame = document.getElementById(target_frame);
  this.timer = null;
  this.counter();
};
numberCounter.prototype.counter = function() {
  var self = this;
  this.diff = this.target_count - this.count;
   
  if(this.diff > 0) {
      self.count += Math.ceil(this.diff / 5);
  }
   
  this.target_frame.innerHTML = this.count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
   
  if(this.count < this.target_count) {
      this.timer = setTimeout(function() { self.counter(); }, 100);
  } else {
      clearTimeout(this.timer);
  }
};

new numberCounter("counter1", 5);
new numberCounter("counter2", 5);