const testimonials = [
  {
    id: 1,
    name: "Família Silva",
    text: "A experiência no Sítio Feliz foi transformadora para nosso filho com autismo. O contato com os animais ajudou na socialização dele de forma impressionante!",
  },
  {
    id: 2,
    name: "Maria Santos",
    text: "Minha filha sempre teve dificuldade de concentração. As atividades na fazenda ajudaram ela a desenvolver foco e paciência. Recomendo para todas as famílias!",
  },
  {
    id: 3,
    name: "Pedro e Juliana",
    text: "Buscávamos uma alternativa às terapias tradicionais. Encontramos no AgroTherapy um ambiente natural que complementou perfeitamente o tratamento do nosso filho.",
  },
];

const TestimonialCard = ({ testimonial, isActive }) => {
  return React.createElement(
    "div",
    {
      className: `carousel-item ${isActive ? "active" : ""}`,
      role: "tabpanel",
    },
    React.createElement(
      "div",
      { className: "card border-0 bg-light p-4 h-100" },
      React.createElement(
        "div",
        { className: "d-flex align-items-center mb-3" },
        React.createElement(
          "div",
          { className: "flex-shrink-0" },
          React.createElement("img", {
            src: "https://placehold.co/50",
            alt: `Foto de ${testimonial.name}`,
            className: "rounded-circle",
            width: 60,
            height: 60,
          })
        ),
        React.createElement(
          "div",
          { className: "flex-grow-1 ms-3" },
          React.createElement("h3", { className: "h5 mb-0" }, testimonial.name)
        )
      ),
      React.createElement(
        "p",
        { className: "card-text fst-italic mb-0" },
        `"${testimonial.text}"`
      )
    )
  );
};

const TestimonialsCarousel = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  React.useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return React.createElement(
    "section",
    {
      className: "container my-5",
      "aria-labelledby": "testimonials-title",
      role: "region",
    },
    React.createElement(
      "h2",
      {
        id: "testimonials-title",
        className: "text-center m-5",
      },
      "Depoimentos de Famílias"
    ),

    React.createElement(
      "div",
      {
        id: "testimonialCarousel",
        className: "carousel slide",
        "data-bs-ride": "false",
      },
      React.createElement(
        "div",
        { className: "carousel-inner" },
        testimonials.map((testimonial, index) =>
          React.createElement(TestimonialCard, {
            key: testimonial.id,
            testimonial: testimonial,
            isActive: index === activeIndex,
          })
        )
      ),

      React.createElement(
        "div",
        { className: "carousel-controls mt-4 d-flex justify-content-center" },
        React.createElement(
          "button",
          {
            type: "button",
            className: "btn btn-success me-2",
            onClick: handlePrev,
          },
          "Anterior"
        ),

        React.createElement(
          "button",
          {
            type: "button",
            className: "btn btn-success",
            onClick: handleNext,
          },
          "Próximo"
        )
      )
    )
  );
};

const domContainer = document.getElementById("testimonials-container");
const root = ReactDOM.createRoot(domContainer);
root.render(React.createElement(TestimonialsCarousel));
