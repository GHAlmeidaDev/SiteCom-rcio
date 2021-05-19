import './ContactForm.scss';

const ContactForm = () => {
  return (
    <div className="contact-form">
      <h4 className="contact-form__title">SUA OPINIÃO</h4>
      <p className="contact-form__text">
        Insira seu email e nome e nos envie sua opinião ou o que temos que melhorar
      </p>
      <form onSubmit={(e) => e.preventDefault()} className="contact-form__form">
        <div className="contact-form__input d-flex justify-content-center align-items-center">
          <input
            className="contact-form__input-field"
            type="text"
            placeholder="seu nome"
          />
          <input
            className="contact-form__input-field"
            type="email"
            placeholder="seu email"
          />
        </div>
        <div className="contact-form__message mt-4">
          <textarea
            rows="10"
            className="contact-form__message"
            placeholder="Digite sua mensagem"
          ></textarea>
        </div>
        <button type="submit" className="btn" >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
