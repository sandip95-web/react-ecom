import {TbTruckDelivery,TbPhoneOff} from 'react-icons/tb'
import {GiReceiveMoney} from 'react-icons/gi'
import {RiSecurePaymentLine} from 'react-icons/ri'
const Services = () => {
  return (
    <>
    
    <section id="services" className="services">
      <div className="container">

        <div className="section-title">
          <h2>Services</h2>
          <h3>We do offer awesome <span>Services</span></h3>
        </div>

        <div className="row">
          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="icon-box">
              <div className="icon"><TbTruckDelivery/></div>
              <h4 className="title"><a href="">Super Fast and Free Delivery</a></h4>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="icon-box">
              <div className="icon"><TbPhoneOff/></div>
              <h4 className="title"><a href="">Non-Contact Shipping</a></h4>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="icon-box">
              <div className="icon"><GiReceiveMoney/></div>
              <h4 className="title"><a href="">Money-Back Guranteed</a></h4>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="icon-box">
              <div className="icon"><RiSecurePaymentLine/></div>
              <h4 className="title"><a href="">Super Secure Payment System</a></h4>
            </div>
          </div>

        </div>

      </div>
    </section>

    </>
    
  )
}

export default Services