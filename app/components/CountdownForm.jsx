var React = require('react');
var CountdownForm = React.createClass({
    onCountdownSubmit: function (e) {
        e.preventDefault();

        var strSeconds = this.refs.seconds.value;

        if(strSeconds.match(/^[0-9]*$/)) {
            this.refs.seconds.value='';

            this.props.onSetCountdown(parseInt(strSeconds, 10));
        }
    },
    render: function () {
        return (
            <div >
                <form ref="form" className="countdown-form" onSubmit={this.onCountdownSubmit}>
                    <input type="text" placeholder="Enter your time in second" ref="seconds"/>
                    <button className="button expanded">Submit</button>

                </form>
            </div>
        );
    }
});

module.exports = CountdownForm;
