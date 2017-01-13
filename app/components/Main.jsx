var React = require('react');

var Main = (props) => {
    return (
        <div>
            <p>Main js folder</p>
            {props.children}
        </div>
    );
};

module.exports = Main;
