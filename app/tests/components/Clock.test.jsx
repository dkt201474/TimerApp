var React = require('react');
var ReactDOM= require('react-dom');
var expect = require('expect');
var $ = require('jquery');
var TestUtils = require('react-addons-test-utils');

var Clock = require('Clock');

describe('Clock', ()=>{
    it('It should exist', () => {
        expect(Clock).toExist();
    })

    describe('render', () => {
        it('should render clock to output', () => {
            var clock = TestUtils.renderIntoDocument(<Clock totalSeconds={62} />);
            var $el = $(ReactDOM.findDOMNode(clock));
            var actualText = $el.find('.clock-text').text();

            expect(actualText).toBe('01:02');

        })
    });

    describe('formatSecond', function () {
        it('it should well format seconds', function () {
            var clock = TestUtils.renderIntoDocument(<Clock />);
            var seconds = 615;
            var expected = "10:15";
            var actual = clock.formatSecond(seconds);

            expect(actual).toBe(expected);
        });


        it('it should properly render if minutes / seconds below 10', function () {
            var clock = TestUtils.renderIntoDocument(<Clock />);
            var seconds = 61;
            var expected = "01:01";
            var actual = clock.formatSecond(seconds);

            expect(actual).toBe(expected);
        });
        
    });

});



