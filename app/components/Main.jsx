var React = require('react');
var Nav = require('Navigation');

var Main = (props) => {
    return (
        <div>
            <Nav />
        <div className="column small-centered medium-6 large-4">
            {props.children}
        </div>

        </div>
    );
};

module.exports = Main;
