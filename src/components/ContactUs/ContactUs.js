import ContactInfo from './ContactInfo/ContactInfo';
import ContactForm from './ContactForm/ContactForm';
import Title from '../Title/Title';
import Stores from '../Stores/Stores';


const ContactUs = () => {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="NOSSOS CONTATOS" />
        <div className="row">
          <div className="col-10 col-md-3 mx-auto">
            <ContactInfo />
          </div>
          <div className="col-10 col-md-9 mx-auto">
            <ContactForm />
          </div>
        </div>
        
        
      </div>
    </section>
  );
};

export default ContactUs;
