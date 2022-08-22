import React from 'react'
import './Faqs.css'

export const Faqs = () => {
  return (
    <div id='faqs' className='faqsContainer'>
      <div className='wrapper container my-5'>
        <h1 className='faqsTitle pb-4'>Frequently Asked Questions</h1>
        <div className="accordion accordion-flush text-start my-5" id="accordionFlushExample">

          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-item1">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#item1" aria-expanded="false" aria-controls="item1">
                Do I need to make an appointment for service?
              </button>
            </h2>
            <div id="item1" className="accordion-collapse collapse" aria-labelledby="flush-item1" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">While booking a priority appointment online is encouraged, it is not necessary - you can stop by any of our locations in Quezon City at your convenience!</div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-item2">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#item2" aria-expanded="false" aria-controls="item2">
                My check engine light is on, what do I do?
              </button>
            </h2>
            <div id="item2" className="accordion-collapse collapse" aria-labelledby="flush-item2" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">
                If the check engine light is on but not flashing, visit any of our locations and our team will perform a free diagnosis where we can identify the cause of the issue (if any).
                  <br /> <br />
                If the check engine light is blinking and/or the vehicle is not functioning normally, we recommend you do not operate vehicle and call us to get your vehicle towed into the nearest shop for diagnosis, an estimate, and if approved - the required repair(s).
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-item3">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#item3" aria-expanded="false" aria-controls="item3">
                My car is pulling to one side, what do I do?
              </button>
            </h2>
            <div id="item3" className="accordion-collapse collapse" aria-labelledby="flush-item3" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">
              In most cases, a vehicle pulling to one side is the symptom of tire wear, worn tires, or incorrect wheel alignment. When left unchecked, it can cause severe damage to other components and become a costly ordeal.
              <br /> <br />
              We service all tire and wheel alignment services, book an appointment and our team will identify the concern, provide the estimate, and if approved - resolve the problem!
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-item4">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#item4" aria-expanded="false" aria-controls="item4">
                My car is overheating, what do I do?
              </button>
            </h2>
            <div id="item4" className="accordion-collapse collapse" aria-labelledby="flush-item4" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">
                The most common causes for vehicle overheating are related to your anti-freeze and/or cooling systems. Fortunately, our ASE-Certified technicians will quickly identify the problem and resolve it for you.
                  <br /><br />
                In the meantime, it is best for you to turn off any air conditioning and instead turn on the heater. By doing this, it will help remove heat from the engine.
                  <br /><br />
                Feel free to book a priority appointment for your vehicle overheating concerns here!
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-item5">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#item5" aria-expanded="false" aria-controls="item5">
                How often do I need a wheel alignment?
              </button>
            </h2>
            <div id="item5" className="accordion-collapse collapse" aria-labelledby="flush-item5" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">
                We recommend your wheel alignment to be checked at least twice per year and performed at least once a year as a preventative maintenance measure for your vehicle. A minor misalignment, if left unresolved, can easily lead to costly repair bills. Feel free to book a priority appointment for your wheel alignment.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-item6">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#item6" aria-expanded="false" aria-controls="item6">
                How often should I have my brakes checked?
              </button>
            </h2>
            <div id="item6" className="accordion-collapse collapse" aria-labelledby="flush-item6" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">
                We recommend checking your brakes every 6 months or 5,000 miles. Our technicians will perform a free visual inspection and show you the state of your brake components. Feel free to book a priority appointment for your brakes and rotors.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-item7">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#item7" aria-expanded="false" aria-controls="item7">
                How often should I change my oil?
              </button>
            </h2>
            <div id="item7" className="accordion-collapse collapse" aria-labelledby="flush-item7" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">
                If your vehicle uses conventional oil, you should have it replaced every 3 months or 3,000 miles.
                  <br /><br />
                If your vehicle uses synthetic oil, you should have it replaced every 6 months or 5,000 miles.
                  <br /><br />
                Feel free to book yourself in for an oil change here!
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-item8">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#item8" aria-expanded="false" aria-controls="item8">
                How often should I replace my car battery?
              </button>
            </h2>
            <div id="item8" className="accordion-collapse collapse" aria-labelledby="flush-item8" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">Car batteries ideally last between 3-5 years depending on a number of factors. To ensure optimal performance and maintenance, simply have your battery checked by an ASE-Certified technician during every oil change - it shouldn't cost you anything!</div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-item9">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#item9" aria-expanded="false" aria-controls="item9">
                How often should I inflate my tires?
              </button>
            </h2>
            <div id="item9" className="accordion-collapse collapse" aria-labelledby="flush-item9" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">
                It's important that you check on your tire pressure once every three months. Ignoring low tire pressure causes issues with handling, fuel economy, tire wear, and safety on the freeway! If it's been awhile since you've last checked, or if temperatures have dropped, fill those tires - now!
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-item10">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#item10" aria-expanded="false" aria-controls="item10">
                How often should I change my spark plugs?
              </button>
            </h2>
            <div id="item10" className="accordion-collapse collapse" aria-labelledby="flush-item10" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">
                Spark plugs should be changed every 100,000 miles and it should be coupled with a fuel injection cleaning service. By performing this preventative maintenance you will remove any carbon buildup and more importantly, protect yourself against engine misfires!
              </div>
            </div>
          </div>

        </div>

    </div>
  </div>
  )
}

export default Faqs