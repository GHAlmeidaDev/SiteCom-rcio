import './ContactInfo.scss';

const ContactInfo = () => {
  return (
    <div className="contact-info">
      <h4
        className="contact-info__title
      contact-info__title--main mb-5"
      >
        Contatos
      </h4>
      <h4 className="contact-info__title mb-2">Endereço</h4>
      <p className="contact-info__text mb-4">
        Endereço
      </p>
      <h4 className="contact-info__title mb-2">TELEFONE</h4>
      <p className="contact-info__text mb-4">(37)0000-0000</p>
      <h4 className="contact-info__title mb-2">AJUDA</h4>
      <p className="contact-info__text mb-4">
        email@gmail.com
        <br />
        email@gmail.com
        <br />
        OFERTAS
      </p>
    </div>
  );
};

export default ContactInfo;
