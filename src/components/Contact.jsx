import React from "react";
function Contact(){
  return (

    <section id="contact">
      <h2 >Contact US</h2>
      <div class="cont">
        <div class="address">
          <h3>Address</h3>
           1004-I,JMD Megapolis,
          Sohna Rd, Sector 48,<br/>
          Gurugram, Haryana (122018) <br/><br/>
          <p><i class="fa fa-mobile" aria-hidden="true"></i>  +91 1234567890</p>
          <p><i class="fa fa-phone-alt" aria-hidden="true"></i> 0124 2345564563</p>
          <p><i class="fa fa-envelope" aria-hidden="true"></i> abc@email.com</p>
        </div>
        <div class="map">
          <h3>Find us here <i class="fas fa-map-marker-alt"></i> </h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.9840948464807!2d77.03637691491826!3d28.41973678250217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d229e71ef44dd%3A0x9931b80f30d32dd3!2sJMD%20Megapolis!5e0!3m2!1sen!2sin!4v1597482354281!5m2!1sen!2sin"
            width="400" height="300" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
        </div>
      </div>
    </section>

  )
};
export default Contact;
