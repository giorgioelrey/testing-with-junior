
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Calendar from './components/Calendar';
import CustomDayRenderer from './components/CustomDayRenderer';
import EventsList from './components/EventsList';
import moment from 'moment';
import momentIt from 'moment/locale/it';


class EventsCalendar extends Component {

  constructor(props){
    super(props);

    this.state = { date: this.props.date, events: []}

    this.onSelect = this.onSelect.bind(this);
    this.getEventsPerDay = this.getEventsPerDay.bind(this);

  }

  getEventsPerDay(date){

    console.log('chiamo api e invio ' , date)

  }

  onSelect(date, previousDate, currentMonth) {

    if (moment(date).isSame(previousDate)) {
      console.info('onSelect: false', date);
      return false;
    } else if (currentMonth.isSame(date, 'month')) {
      console.info('onSelect: true', date);

      this.setState({date: date})

      return true;

    } else {
      console.info('onSelect: none', date);
    }
  }

  componentDidMount(){
    console.log('componentDidMount',this.state.date);
    this.getEventsPerDay(this.state.date);
  }

  render() {
    let dayClasses = function(date) {
      let day = date.isoWeekday();
      if (day === 6 || day === 7) {
        return ['weekend'];
      }
      return [];
    };
    return (
      <div>

        <p>Calendario Ita</p>

        <Calendar
          date={this.state.date}
          onSelect={this.onSelect}
          locale="it"
          dayRenderer={CustomDayRenderer}
          startOfWeekIndex={1}
          showEventsOnChange={this.getEventsPerDay}
          dayClasses={dayClasses}
          />

          <EventsList date={this.state.date.format('DD/MM/YYYY')} events={this.state.events} />

      </div>
    );
  }
}

ReactDOM.render(<EventsCalendar date={moment()}/>, document.getElementById('react-calendar'));
