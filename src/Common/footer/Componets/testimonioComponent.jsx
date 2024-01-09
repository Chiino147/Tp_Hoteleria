import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import React from 'react';
import { BsFillCaretLeftFill } from "react-icons/bs";
import { BsFillCaretRightFill } from "react-icons/bs";

//Componente que SOLO contiene el Carusel de testimonios

function Testimonios(){
  return(
    <TestimonialCarousel testimonials={testimonials} />

  )

}

//Variable de los testimonios

const testimonials = [
  {
    text: '¡Excelente experiencia! El personal fue amable y servicial.',
    author: 'Juan Pérez'
  },
  {
    text: 'El hotel es muy acogedor y la comida es deliciosa. ¡Volveré pronto!',
    author: 'María Rodríguez'
  },
  {
    text: 'Recomiendo encarecidamente este lugar. ¡La calidad es excepcional!',
    author: 'Luis Gutiérrez'
  }
];



//Todo el codigo para que el carusel gire con ESTADOS

class TestimonialCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      testimonials: props.testimonials,
      activeIndex: 0
    };
  }

  goToPrevious = () => {
    const { activeIndex, testimonials } = this.state;
    const lastIndex = testimonials.length - 1;
    const index = activeIndex === 0 ? lastIndex : activeIndex - 1;
    this.setState({ activeIndex: index });
  }

  goToNext = () => {
    const { activeIndex, testimonials } = this.state;
    const lastIndex = testimonials.length - 1;
    const index = activeIndex === lastIndex ? 0 : activeIndex + 1;
    this.setState({ activeIndex: index });
  }

  render() {
    const { testimonials, activeIndex } = this.state;
    const activeTestimonial = testimonials[activeIndex];

    return (
      <div className="testimonial-carousel">
        <div className="testimonial">
          <p className="testimonial-text">{activeTestimonial.text}</p>
          <p className="testimonial-author">{activeTestimonial.author}</p>
        </div>
        <div className="carousel-controls">
          <Button variant="warning" className="button-carousel" onClick={this.goToPrevious}><BsFillCaretLeftFill/></Button>
          <Button variant="warning" className="button-carousel" onClick={this.goToNext}><BsFillCaretRightFill/></Button> 
          
        </div>
      </div>
    );
  }
}

export default Testimonios;