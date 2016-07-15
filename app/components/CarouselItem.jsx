var React = require('react');
var EventPing = require('EventPing');
var EventButton = require ('EventButton');


class SliderItem extends React.Component {
  render() {
      let elements = this.props.item.map((element) => {
          return (<article className="proposition-slider__item" key={element.id}>
                  <EventPing eventPing={element.eventPing}/>
                  <div className="proposition-slider-img_container" style={element.eventImg}></div>
                  <div className="proposition-slider__info-wrapp" style={element.eventColor}>
                      <div className="info proposition-slider__info">
                        <h3>{element.eventTitle}</h3>
                        <p>{element.eventDescription}</p>
                          <EventButton eventBtnLabel={element.eventBtnLabel}  />
                        <p className="tt-m event-terms">{element.eventTerms}</p>
                      </div>
                  </div>
                  </article>)
      })
      return <div>{elements}</div>
  }
}

module.exports = SliderItem;
