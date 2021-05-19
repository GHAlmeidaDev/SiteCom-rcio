import { contactInfo, myAccount } from '../../utils/footerInfo';

import paymentLogo from '../../assets/images/payment.png';

import SocialIcons from '../SocialIcons/SocialIcons';

import logo from '../../assets/images/logoblack.jpg'

import './Footer.scss';

const Footer = () => {
  return (
    <section className="site-footer py-5">
      <div className="container">
        {/* footer header */}
        <div className="row site-footer__header">
          <div className="col-10 col-lg-2 mx-auto">
            <img
              src={logo}
              alt="sua logo aqui"
              className="site-footer__logo"
            />
          </div>
          <div className="col-10 col-lg-5 mx-auto">
            
           
          </div>
          <div className="col-10 col-lg-6 mx-auto">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="site-footer__form"
            >
              <h5 className="site-footer__title">INSCREVA-SE E RECEBA OFERTAS</h5>
              <input
                type="email"
                className="site-footer__input"
                placeholder="seu e-mail..."
                style={{color:'white'}}
              />
              <input
                type="submit"
                className="site-footer__btn"
                value="inscreva-se"
                
              />
            </form>
          </div>
        </div>
        {/* footer content */}
        <div className="row">
          <div className="col-10 col-lg-4 mx-auto site-footer__content">
            <h5 className="site-footer__content-title">Contatos</h5>
            {contactInfo.map((item) => {
              const { id, text } = item;
              return (
                <p className="site-footer__content-text" key={id}>
                  <span>{text}</span>
                </p>
              );
            })}
          </div>
          
          
        </div>
        {/* footer footer */}
        <div className="row site-footer__footer">
          {/* payment logo */}
          <div className="col-10 col-lg-4 mx-auto">
            <img src={paymentLogo} alt="payment" />
          </div>
          {/* copy rights */}
          <div className="col-10 col-lg-4 mx-auto">
            <span className="site-footer__rights">
              <span className="site-footer__rights--author">GH Almeida</span>{' '}
              &copy; {new Date().getFullYear()}. Todos os direitos reservados
            </span>
          </div>
          {/* social icons */}
          <div className="col-10 col-lg-4 mx-auto">
            <SocialIcons />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
