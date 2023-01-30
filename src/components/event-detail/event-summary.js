import classes from './event-summary.module.css';

function EventSummary({title=""}) {
  

  return (
    <section className={classes.summary}>
      <h6 >{title}</h6>
    </section>
  );
}

export default EventSummary;