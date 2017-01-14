var React = require('react');
var Nav = require('Navigation');

var Main = (props) => {
    return (
        <div>
            <Nav />
            {props.children}
        </div>
    );
};

module.exports = Main;
