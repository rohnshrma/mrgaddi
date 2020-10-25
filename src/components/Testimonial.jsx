import React from "react";

function Testimonial(){

  return (

<div id="carouselExamples" class="carousel slide testimonials" data-ride="carousel">
  <div class="carousel-inner  ">
    <div class="carousel-item active">
      <div class="testi">
        <div class="testi-img">
        <img class="person-img" src="images/test-img.png" alt="" />
        </div>
        <div class="testi-comment">
          <p>Lorem ipsum dolor sit Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. amet, consectetur, cumque repellendus ab distinctio quis mollitia, praesentium hic est dolor neque, minima quasi qui!</p>
            <b>JOHNy DALE, NEW DELHI</b>
        </div>
      </div>
    </div>
    <div class="carousel-item">
      <div class="testi">
        <div class="testi-img">
      <img class="person-img" src="images/test-img.png" alt="" />
        </div>
        <div class="testi-comment">
          <p>Lorem ipsum dolor sit Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. amet, consectetur  cumque repellendus ab distinctio quis mollitia, praesentium hic est dolor neque, minima quasi qui!</p>
            <b>JOHN DOE, NEW YORK</b>
        </div>
      </div>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExamples" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExamples" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
  )
}

export default Testimonial;
