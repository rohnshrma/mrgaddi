import React from "react";

function Pricing(){



return (
<div>
<h2 class="pricing-head">CAR CLEANING PLANS</h2>
<div class="pricing">
  <section class="price-comparison">
    <div class="price-column">
      <div class="price-header">

        <div class="price">
          <div class="dollar-sign">$</div>
          10
          <div class="per-month">/mo</div>
        </div>

        <div class="plan-name">Basic</div>

      </div>

      <div class="divider"></div>
      <div class="feature">
        <img src="images/check-circle.svg" alt=""/>
        Feature A
      </div>
      <div class="feature">
        <img src="images/check-circle.svg" alt=""/>
        Feature B
      </div>
      <div class="feature inactive">
        <img src="images/x-square.svg" alt=""/>
        Feature C
      </div>
      <div class="feature inactive">
        <img src="images/x-square.svg" alt=""/>
        Feature D
      </div>
      <div class="feature inactive">
        <img src="images/x-square.svg" alt=""/>
        Feature E
      </div>
      <button class="cta">Start Today</button>
    </div>

    <div class="price-column popular">
      <div class="most-popular">Most Popular</div>
      <div class="price-header">

        <div class="price">
          <div class="dollar-sign">$</div>
          20
          <div class="per-month">/mo</div>
        </div>

        <div class="plan-name">Silver</div>

      </div>

      <div class="divider"></div>
      <div class="feature">
        <img src="images/check-circle.svg" alt=""/>
        Feature A
      </div>
      <div class="feature">
        <img src="images/check-circle.svg" alt=""/>
        Feature B
      </div>
      <div class="feature">
        <img src="images/check-circle.svg" alt=""/>
        Feature C
      </div>
      <div class="feature inactive">
        <img src="images/x-square.svg" alt=""/>
        Feature D
      </div>
      <div class="feature inactive">
        <img src="images/x-square.svg" alt=""/>
        Feature E
      </div>
      <button class="cta">Start Today</button>
    </div>

    <div class="price-column">
      <div class="price-header">

        <div class="price">
          <div class="dollar-sign">$</div>
          50
          <div class="per-month">/mo</div>
        </div>

        <div class="plan-name">Premium</div>

      </div>

      <div class="divider"></div>

      <div class="feature">
        <img src="images/check-circle.svg" alt=""/>
        Feature A
      </div>
      <div class="feature">
        <img src="images/check-circle.svg" alt=""/>
        Feature B
      </div>
      <div class="feature">
        <img src="images/check-circle.svg" alt=""/>
        Feature C
      </div>
      <div class="feature">
        <img src="images/check-circle.svg" alt=""/>
        Feature D
      </div>
      <div class="feature">
        <img src="images/check-circle.svg" alt=""/>
        Feature E
      </div>
      <button class="cta">Start Today</button>
    </div>
  </section>
</div>

</div>
)

}


export default Pricing;
