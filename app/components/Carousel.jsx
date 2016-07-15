var React = require('react');
var SliderItem = require('SliderItem');


class Carousel extends React.Component {
  render () {
    let item = [
      {'id': 1,
       'eventTitle': 'Fresh BBQ meat',
       'eventDescription': 'Enjoy a Summer feast with family and friends',
       'eventImg': {'backgroundImage': 'url(' + 'http://waspfreak.github.io/curso/public/img/GHP-carousel-767x443-pizza.jpg' + ')'},
       'eventTerms': 'Subject to availability 1',
       'eventPing': 'http://waspfreak.github.io/curso/public/img/ping.png',
       'eventColor': {'color': '#fff', 'background': '#eb6b3c' },
       'eventBtnLabel': 'worksss',
      },

      {'id': 2,
       'eventTitle': 'The match winners',
       'eventDescription': 'Snacks, drinks & more to enjoy during the game',
       'eventImg': {'backgroundImage': 'url(' + 'http://waspfreak.github.io/curso/public/img/GHP-carousel-767x443-muller.jpg' + ')'},
       'eventTerms': 'Subject to availability 2',
       'eventPing': 'http://waspfreak.github.io/curso/public/img/3_for_10pounds_red.png',
       'eventColor': {'color': '#fff', 'background': '#3498BA'}
      },

      {'id': 3,
       'eventTitle': 'Make Mother s Day special',
       'eventDescription': 'Gorgeous gifts, meal ideas  more to make',
       'eventImg': {'backgroundImage': 'url(' + 'http://waspfreak.github.io/curso/public/img/GHP-carousel-767x443-muller.jpg' + ')'},
       'eventTerms': 'Subject to availability 3',
       'eventPing': 'http://waspfreak.github.io/curso/public/img/ping.png',
       'eventColor': {'color': '#fff', 'background': '#ba3475'}
      },
    ];

    return (

      <div>
          <article className="proposition-slider">
            <input type="radio" name="slider" id="slide1" className="proposition-slider_input" defaultChecked />
            <input type="radio" name="slider" id="slide2" className="proposition-slider_input" />
            <input type="radio" name="slider" id="slide3" className="proposition-slider_input" />


            <div  className="proposition-slider__slides">
              <div className="proposition-slider__overflow">
                <div className="inner">

                        <SliderItem item={item}/>

                </div>
              </div>
            </div>

                <div className="proposition-slider__controls">
                  <label htmlFor="slide1" />
                  <label htmlFor="slide2" />
                  <label htmlFor="slide3" />
                </div> {/* #controls */}

                <div className="proposition-slider__active">
                  <label htmlFor="slide1" />
                  <label htmlFor="slide2" />
                  <label htmlFor="slide3" />
                </div> {/* #active */}

            </article>
      </div>//end Componentsss
    );
  }
};



// var imgUrl3= "http://waspfreak.github.io/curso/public/img/GHP-carousel-767x443-pizza.jpg";
// var imgUrl2 = "http://waspfreak.github.io/curso/public/img/GHP-carousel-767x443-muller.jpg";
// var imgUrl = 'http://waspfreak.github.io/curso/public/img/GHP-carousel-767x443-mothersday-cake.jpg';
//
// var slider1 = {
//   eventTitle: "Fresh BBQ meat",
//   eventDescription: "Enjoy a Summer feast with family and friends",
//   eventTerms: "Subject to availability.",
//   eventImg: {backgroundImage: 'url(' + imgUrl + ')' },
//   eventPing: "http://waspfreak.github.io/curso/public/img/ping.png",
//   eventTerms: "Subject to availability 1",
//   eventColor: {color: '#fff', background: '#eb6b3c' }
// };
//
// var slider2 = {
//   eventTitle2: "The match winners",
//   eventDescription2: "Snacks, drinks & more to enjoy during the game",
//   eventTerms2: "Subject to availability.",
//   eventImg2: {backgroundImage: 'url(' + imgUrl2 + ')' },
//   eventPing2: "http://waspfreak.github.io/curso/public/img/3_for_10pounds_red.png",
//   eventColor2: {color: '#fff', backgroundColor: '#eb6b3c' }
// };
//
// var slider3 = {
//   eventTitle3: "Make Mother's Day special",
//   eventDescription3: "Gorgeous gifts, meal ideas  more to make",
//   eventTerms3: "Subject to availability.",
//   eventImg3: {backgroundImage: 'url(' + imgUrl3 + ')' },
//   eventPing3: "http://waspfreak.github.io/curso/public/img/ping.png",
//   eventColor3: {color: '#fff', background: '#3498BA' }
// }




module.exports = Carousel;
