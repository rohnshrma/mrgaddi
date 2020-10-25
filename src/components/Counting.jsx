import React , { useState } from "react";



function Counting(){

return (
  <div class="counting">
  <div class="counting-sec">
  <h2 class="process-head">Our Working Process</h2>
    <div class="inner-width">

      <div class="col">
      <i class="fas fa-phone-alt circle"></i>
        <div class="num">Booking</div>

      </div>

      <div class="col">
        <i class="fas fa-briefcase circle"></i>
        <div class="num">Cleaning</div>
      </div>

      <div class="col">
      <div class="i-container">
        <i class="fas fa-eye circle"></i>
        </div>
        <div class="num">Checking</div>

      </div>

      <div class="col">
        <i class="far fa-smile-beam circle"></i>
        <div class="num">Complete</div>
      </div>

    </div>
  </div>
</div>
)
}

export default Counting;
