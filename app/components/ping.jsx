var React = require('react');


var EventPing = React.createClass({
    render: function(){
      var eventPing = this.props.eventPing;

    return(
      <div className="ping-container">
        <img src={eventPing} alt="" />
      </div>
    )
    }
});

module.exports = EventPing;
 //export {EventPing};
