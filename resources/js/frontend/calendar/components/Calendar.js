import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Day from './Day';
import DayOfWeek from './DayOfWeek';
import Week from './Week';
import axios from "axios";

class Calendar extends Component {
  constructor(props) {
    super(props);
    let date = props.date;
    let month;
    if (date) {
      month = props.date;
    } else {
      month = props.month;
    }
    this.state = {
      date: date,
      month: month,
      daysWithEventInCurrentMonth: []
    };

    this.previous = this.previous.bind(this);
    this.next = this.next.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.getDaysInMonthWithEvents = this.getDaysInMonthWithEvents.bind(this);
  }

  async componentDidMount() {

      this.getDaysInMonthWithEvents(moment(this.state.month).format('YYYY'), this.state.month.format('MM'));
  }

    componentWillMount() {
    moment.locale(this.props.locale);

    if (!!this.state.date) {
      this.state.date.locale(this.props.locale);
    }

    this.state.month.locale(this.props.locale);
  }

  componentWillUpdate(nextProps, nextState) {
    moment.locale(this.props.locale);

    if (!!nextState.date) {
      nextState.date.locale(this.props.locale);
    }

    nextState.month.locale(this.props.locale);
  }

    getDaysInMonthWithEvents(year, month){

        //foreach day in the dayNumber array from the backend
        //activate a class that will show textColor gold
        axios({
            url: `/api/events/days-for/year/${year}/month/${month}`,
            method: 'get',
            headers: { 'X-Requested-With': 'XMLHttpRequest'},
            responseType: 'json',
        })
            .then(({data}) => {

                this.setState({daysWithEventInCurrentMonth:  Object.values(data.days)});

            })
            .catch(error => {
            })

    }

  handleClick(date) {
    const flag = this.props.onSelect(date, this.state.date, this.state.month);

    if (flag === true) {
      this.setState({
        date: moment(date),
      });
    } else if (flag === false) {
      this.setState({
        date: null,
      });
    }
  }

  previous() {
    this.setState({
      month: moment(this.state.month).subtract(1, 'month'),
    },()=>{
        this.getDaysInMonthWithEvents(moment(this.state.month).format('YYYY'), this.state.month.format('MM'));
    });
  }

  next() {
    this.setState({
      month: moment(this.state.month).add(1, 'month'),
    }, () => {
        this.getDaysInMonthWithEvents(moment(this.state.month).format('YYYY'), this.state.month.format('MM'));
    });
  }

  render() {
    const { startOfWeekIndex, dayRenderer, dayOfWeekFormat } = this.props;

    const classes = ['Calendar', this.props.className].join(' ');

    const today = moment();

    const format = dayOfWeekFormat &&
                    dayOfWeekFormat !== '' &&
                    moment(today, dayOfWeekFormat).isValid() ? dayOfWeekFormat : 'dd'

    const date = this.state.date;
    const month = this.state.month;

    const current = month
      .clone()
      .startOf('month')
      .day(startOfWeekIndex);
    if (current.date() > 1 && current.date() < 7) {
      current.subtract(7, 'd');
    }

    const end = month
      .clone()
      .endOf('month')
      .day(7 + startOfWeekIndex);

    if (end.date() > 7) {
      end.subtract(7, 'd');
    }

    const elements = [];
    let days = [];
    let week = 1;
    let i = 1;
    const daysOfWeek = [];
    const day = current.clone();
    for (let j = 0; j < 7; j++) {
      const dayOfWeekKey = 'dayOfWeek' + j;
      daysOfWeek.push(<DayOfWeek key={dayOfWeekKey} date={day.clone()} format={format} />);
      day.add(1, 'days');
    }
    while (current.isBefore(end)) {

      let dayClasses = this.props.dayClasses(current);

      if (!current.isSame(month, 'month')) {
        dayClasses = dayClasses.concat(['other-month']);
      }

      //TODO: create is current to add to props forEachDay

      const hasEvent = current.format('MM') == this.state.month.format('MM') ? this.state.daysWithEventInCurrentMonth.includes(current.format('YYYY-MM-DD')) : false;

      let props = {
        date: current.clone(),
        selected: date,
        month: month,
        today: today,
        hasEvent: hasEvent,
        classes: dayClasses,
        handleClick: this.handleClick,
      };

      let children;
      if (!!dayRenderer) {
        children = dayRenderer(props);
      }

      days.push(
        <Day key={i++} {...props}>
          {children}
        </Day>
      );
      current.add(1, 'days');
      if (current.day() === startOfWeekIndex) {
        let weekKey = 'week' + week++;
        elements.push(<Week key={weekKey}>{days}</Week>);
        days = [];
      }
    }

    let nav;

    if (this.props.useNav) {
      nav = (
        <tr className="month-header">
          <th className="nav previous">
            <div className="nav-inner" onClick={this.previous} type="button">
              <i className="fas fa-angle-left"></i>
            </div>
          </th>
          <th colSpan="5">
            <span className="month">{month.format('MMMM')}</span>{' '}
            <span className="year">{month.format('YYYY')}</span>
          </th>
          <th className="nav next">
            <div className="nav-inner" onClick={this.next} type="button">
              <i className="fas fa-angle-right"></i>
            </div>
          </th>
        </tr>
      );
    } else {
      nav = (
        <tr className="month-header">
          <th colSpan="7">
            <span className="month">{month.format('MMMM')}</span>{' '}
            <span className="year">{month.format('YYYY')}</span>
          </th>
        </tr>
      );
    }

    return (
      <div className="table-responsive">
      <table className={classes + 'table'}>
        <thead>{nav}</thead>
        <thead>
          <tr className="days-header">{daysOfWeek}</tr>
        </thead>
        <tbody>{elements}</tbody>
      </table>
    </div>

    );
  }
}
Calendar.defaultProps = {
  month: moment(),
  dayClasses: () => [],
  useNav: true,
  locale: 'en',
  startOfWeekIndex: 1,
  dayOfWeekFormat: 'dd',
};
Calendar.propTypes = {
  onSelect: PropTypes.func.isRequired,
  date: PropTypes.object,
  month: PropTypes.object,
  dayClasses: PropTypes.func,
  useNav: PropTypes.bool,
  locale: PropTypes.string,
  startOfWeekIndex: PropTypes.number,
  dayRenderer: PropTypes.func,
  dayOfWeekFormat: PropTypes.string,
};

export default Calendar;
