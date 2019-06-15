
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Calendar from './components/Calendar';
import CustomDayRenderer from './components/CustomDayRenderer';
import moment from 'moment';
import momentIt from 'moment/locale/it';


class EventsCalendar extends Component {

  onSelect(date, previousDate, currentMonth) {

    if (moment(date).isSame(previousDate)) {
      console.info('onSelect: false', date);
      return false;
    } else if (currentMonth.isSame(date, 'month')) {
      console.info('onSelect: true', date);
      console.log('chiamo api');
      return true;
    } else {
      console.info('onSelect: none', date);
    }
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
          onSelect={this.onSelect}
          locale="it"
          dayRenderer={CustomDayRenderer}
          startOfWeekIndex={1}
          dayClasses={dayClasses}
          />

      </div>
    );
  }
}

ReactDOM.render(<EventsCalendar />, document.getElementById('react-calendar'));
