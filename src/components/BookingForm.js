import React from "react";

const BookingForm = (props) => {
    const [date, setDate] = React.useState('');
    const [times, setTimes] = React.useState('');
    const [guests, setGuests] = React.useState('');
    const [occasion, setOccasion] = React.useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        props.submitForm(event.target.elements);
    };

    const handleChange = (event) => {
        const selectedDate = event.target.value;
        setDate(selectedDate);
        props.dispatch(new Date(selectedDate));
    };

    return (
        <header>
            <section>
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <div>
                            <h2>Book your table</h2>
                        </div>
                        <div>
                            <label htmlFor='book-name'>Name</label>
                            <input type='text' id='book-name' name='name' required />
                        </div>
                        <div>
                            <label htmlFor='book-date'>Choose the desired Date</label>
                            <input type='date' id='book-date' onChange={handleChange} value={date} required />
                        </div>
                        <div>
                            <label htmlFor='book-time'>Choose the desired Time</label>
                            <select id="book-time" value={times} onChange={(event) => setTimes(event.target.value)}>
                                <option value="">Select Time</option>
                                {
                                    props.availableTimes.map(availableTime => (
                                        <option key={availableTime}>{availableTime}</option>
                                    ))
                                }
                            </select>
                        </div>
                        <div>
                            <label htmlFor='book-guests'>Number of Guests</label>
                            <input type='number' id='book-guests' value={guests} onChange={(event) => setGuests(event.target.value)} min='1' max='70' required />
                        </div>
                        <div>
                            <label htmlFor='book-occasion'>Occasion</label>
                            <select id='book-occasion' value={occasion} onChange={(event) => setOccasion(event.target.value)}>
                            <option>Birthday</option>
                            <option>Anniversary</option>
                            <option>Family gathering</option>
                            </select>
                        </div>
                        <div className="btnReceive">
                            <input aria-label="On Click" type='submit' value='Make your Reservation' />
                        </div>
                    </fieldset>
                </form>
            </section>
        </header>
    );
};

export default BookingForm;
