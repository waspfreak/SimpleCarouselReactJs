var React = require('react');
var EventPing = require('EventPing');
var EventButton = require ('EventButton');


var SliderItem = React.createClass({
    render: function () {
      var eventTitle = this.props.eventTitle;
      var eventDescription = this.props.eventDescription;
      var eventImg = this.props.eventImg;
      var eventColor = this.props.eventColor;
      var eventBottonStyle = this.props.eventBottonStyle;
      var eventTerms = this.props.eventTerms;
      var eventPing = this.props.eventPing;


      return (
        <div>
          <article className="proposition-slider__item">
            <EventPing eventPing={eventPing}/>
            <div className="proposition-slider-img_container" style={eventImg}></div>
            <div className="proposition-slider__info-wrapp" style={eventColor}>
              <div className="info proposition-slider__info">
                <h1 className="hh-xl event-title">{eventTitle}</h1>
                <p className="hh-s event-description">{eventDescription}</p>
                <EventButton />
                <p className="tt-m event-terms">{eventTerms}</p>
              </div>
            </div>
          </article>

        </div>
      );


    }
});


module.exports = SliderItem;
