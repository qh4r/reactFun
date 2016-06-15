(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/Users/qh4r/Documents/node/reactFun/fluxStart/src/components/Badge.jsx":[function(require,module,exports){
var Badge = React.createClass({displayName: "Badge",
    render: function () {
        return (
            React.createElement("button", {className: "btn btn-primary", type: "button"}, 
                this.props.text, ": ", React.createElement("span", {className: "badge"}, this.props.quantity)
            )
        )
    }
});

module.exports = Badge;

},{}],"/Users/qh4r/Documents/node/reactFun/fluxStart/src/components/Thumbnail.jsx":[function(require,module,exports){
var Badge = require('./Badge');

var Thumbnail = React.createClass({displayName: "Thumbnail",
    render: function () {
        return (
            React.createElement("div", {className: "col-sm-6 col-md-4"}, 
                React.createElement("div", {className: "thumbnail"}, 
                    React.createElement("img", {src: this.props.data.url, alt: this.props.data.label}), 
                    React.createElement("div", {className: "caption"}, 
                        React.createElement("h3", null, this.props.data.label), 
                        React.createElement(Badge, {text: this.props.data.button.name, quantity: this.props.data.button.number})
                    )
                )
            )
        )
    }
});

module.exports = Thumbnail;

},{"./Badge":"/Users/qh4r/Documents/node/reactFun/fluxStart/src/components/Badge.jsx"}],"/Users/qh4r/Documents/node/reactFun/fluxStart/src/components/ThumbnailsList.jsx":[function(require,module,exports){
var Thumbnail = require('./Thumbnail');

var ThumbnailsList = React.createClass({displayName: "ThumbnailsList",
    render: function () {
        return React.createElement("div", {className: "row"}, 
            this.props.input.map(function(element){
                return React.createElement(Thumbnail, {data: element})
            })
        )
    }
});

module.exports = ThumbnailsList;

},{"./Thumbnail":"/Users/qh4r/Documents/node/reactFun/fluxStart/src/components/Thumbnail.jsx"}],"/Users/qh4r/Documents/node/reactFun/fluxStart/src/main.jsx":[function(require,module,exports){
var Badge = require('./components/Badge'),
    ThumbnailsList = require('./components/ThumbnailsList');

ReactDOM.render(React.createElement(Badge, {text: "Wiadomości", quantity: "103"}), document.getElementById('f1'));
ReactDOM.render(React.createElement(ThumbnailsList, {input: [
   {button: {name: "Wychodzące", number: 23}, label: 'Coś odemnie', url: 'http://image000.flaticon.com/icons/svg/134/134965.svg'},
    {button: {name: "Przychodzące", number:42}, label: 'Coś fajnego', url: 'http://image000.flaticon.com/icons/svg/134/134967.svg'},
    {button: {name: "Kopie robocze", number:3}, label: 'Coś do zapamiętania', url: 'http://image000.flaticon.com/icons/svg/134/134974.svg'},
    {button: {name: "Spam", number:12}, label: 'Coś zbędnego', url: 'http://image000.flaticon.com/icons/svg/134/134970.svg'}
]}), document.getElementById('f2'));

},{"./components/Badge":"/Users/qh4r/Documents/node/reactFun/fluxStart/src/components/Badge.jsx","./components/ThumbnailsList":"/Users/qh4r/Documents/node/reactFun/fluxStart/src/components/ThumbnailsList.jsx"}]},{},["/Users/qh4r/Documents/node/reactFun/fluxStart/src/main.jsx"])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvcWg0ci9Eb2N1bWVudHMvbm9kZS9yZWFjdEZ1bi9mbHV4U3RhcnQvc3JjL2NvbXBvbmVudHMvQmFkZ2UuanN4IiwiL1VzZXJzL3FoNHIvRG9jdW1lbnRzL25vZGUvcmVhY3RGdW4vZmx1eFN0YXJ0L3NyYy9jb21wb25lbnRzL1RodW1ibmFpbC5qc3giLCIvVXNlcnMvcWg0ci9Eb2N1bWVudHMvbm9kZS9yZWFjdEZ1bi9mbHV4U3RhcnQvc3JjL2NvbXBvbmVudHMvVGh1bWJuYWlsc0xpc3QuanN4IiwiL1VzZXJzL3FoNHIvRG9jdW1lbnRzL25vZGUvcmVhY3RGdW4vZmx1eFN0YXJ0L3NyYy9tYWluLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBLElBQUksMkJBQTJCLHFCQUFBO0lBQzNCLE1BQU0sRUFBRSxZQUFZO1FBQ2hCO1lBQ0ksb0JBQUEsUUFBTyxFQUFBLENBQUEsQ0FBQyxTQUFBLEVBQVMsQ0FBQyxpQkFBQSxFQUFpQixDQUFDLElBQUEsRUFBSSxDQUFDLFFBQVMsQ0FBQSxFQUFBO2dCQUM3QyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBQyxJQUFBLEVBQUUsb0JBQUEsTUFBSyxFQUFBLENBQUEsQ0FBQyxTQUFBLEVBQVMsQ0FBQyxPQUFRLENBQUEsRUFBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQWdCLENBQUE7WUFDbEUsQ0FBQTtTQUNaO0tBQ0o7QUFDTCxDQUFDLENBQUMsQ0FBQzs7QUFFSCxNQUFNLENBQUMsT0FBTyxHQUFHLEtBQUs7OztBQ1Z0QixJQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7O0FBRS9CLElBQUksK0JBQStCLHlCQUFBO0lBQy9CLE1BQU0sRUFBRSxZQUFZO1FBQ2hCO1lBQ0ksb0JBQUEsS0FBSSxFQUFBLENBQUEsQ0FBQyxTQUFBLEVBQVMsQ0FBQyxtQkFBb0IsQ0FBQSxFQUFBO2dCQUMvQixvQkFBQSxLQUFJLEVBQUEsQ0FBQSxDQUFDLFNBQUEsRUFBUyxDQUFDLFdBQVksQ0FBQSxFQUFBO29CQUN2QixvQkFBQSxLQUFJLEVBQUEsQ0FBQSxDQUFDLEdBQUEsRUFBRyxDQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBQyxDQUFDLEdBQUEsRUFBRyxDQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQU0sQ0FBRSxDQUFBLEVBQUE7b0JBQzVELG9CQUFBLEtBQUksRUFBQSxDQUFBLENBQUMsU0FBQSxFQUFTLENBQUMsU0FBVSxDQUFBLEVBQUE7d0JBQ3JCLG9CQUFBLElBQUcsRUFBQSxJQUFDLEVBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBVyxDQUFBLEVBQUE7d0JBQ2hDLG9CQUFDLEtBQUssRUFBQSxDQUFBLENBQUMsSUFBQSxFQUFJLENBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBQyxDQUFDLFFBQUEsRUFBUSxDQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFPLENBQUUsQ0FBQTtvQkFDbEYsQ0FBQTtnQkFDSixDQUFBO1lBQ0osQ0FBQTtTQUNUO0tBQ0o7QUFDTCxDQUFDLENBQUMsQ0FBQzs7QUFFSCxNQUFNLENBQUMsT0FBTyxHQUFHLFNBQVM7OztBQ2xCMUIsSUFBSSxTQUFTLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDOztBQUV2QyxJQUFJLG9DQUFvQyw4QkFBQTtJQUNwQyxNQUFNLEVBQUUsWUFBWTtRQUNoQixPQUFPLG9CQUFBLEtBQUksRUFBQSxDQUFBLENBQUMsU0FBQSxFQUFTLENBQUMsS0FBTSxDQUFBLEVBQUE7WUFDdkIsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFNBQVMsT0FBTyxDQUFDO2dCQUNuQyxPQUFPLG9CQUFDLFNBQVMsRUFBQSxDQUFBLENBQUMsSUFBQSxFQUFJLENBQUUsT0FBUSxDQUFFLENBQUE7YUFDckMsQ0FBRTtRQUNELENBQUE7S0FDVDtBQUNMLENBQUMsQ0FBQyxDQUFDOztBQUVILE1BQU0sQ0FBQyxPQUFPLEdBQUcsY0FBYzs7O0FDWi9CLElBQUksS0FBSyxHQUFHLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQztBQUN6QyxJQUFJLGNBQWMsR0FBRyxPQUFPLENBQUMsNkJBQTZCLENBQUMsQ0FBQzs7QUFFNUQsUUFBUSxDQUFDLE1BQU0sQ0FBQyxvQkFBQyxLQUFLLEVBQUEsQ0FBQSxDQUFDLElBQUEsRUFBSSxDQUFDLFlBQUEsRUFBWSxDQUFDLFFBQUEsRUFBUSxDQUFDLEtBQUssQ0FBRSxDQUFBLEVBQUUsUUFBUSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBQzFGLFFBQVEsQ0FBQyxNQUFNLENBQUMsb0JBQUMsY0FBYyxFQUFBLENBQUEsQ0FBQyxLQUFBLEVBQUssQ0FBRTtHQUNwQyxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxhQUFhLEVBQUUsR0FBRyxFQUFFLHVEQUF1RCxDQUFDO0lBQzdILENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxFQUFFLGNBQWMsRUFBRSxNQUFNLENBQUMsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLGFBQWEsRUFBRSxHQUFHLEVBQUUsdURBQXVELENBQUM7SUFDL0gsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLEVBQUUsZUFBZSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUscUJBQXFCLEVBQUUsR0FBRyxFQUFFLHVEQUF1RCxDQUFDO0lBQ3ZJLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUMsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLGNBQWMsRUFBRSxHQUFHLEVBQUUsdURBQXVELENBQUM7Q0FDMUgsQ0FBRSxDQUFBLEVBQUUsUUFBUSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJ2YXIgQmFkZ2UgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIHR5cGU9XCJidXR0b25cIj5cbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy50ZXh0fTogPHNwYW4gY2xhc3NOYW1lPVwiYmFkZ2VcIj57dGhpcy5wcm9wcy5xdWFudGl0eX08L3NwYW4+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgKVxuICAgIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEJhZGdlOyIsInZhciBCYWRnZSA9IHJlcXVpcmUoJy4vQmFkZ2UnKTtcblxudmFyIFRodW1ibmFpbCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTYgY29sLW1kLTRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRodW1ibmFpbFwiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17dGhpcy5wcm9wcy5kYXRhLnVybH0gYWx0PXt0aGlzLnByb3BzLmRhdGEubGFiZWx9Lz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXB0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDM+e3RoaXMucHJvcHMuZGF0YS5sYWJlbH08L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJhZGdlIHRleHQ9e3RoaXMucHJvcHMuZGF0YS5idXR0b24ubmFtZX0gcXVhbnRpdHk9e3RoaXMucHJvcHMuZGF0YS5idXR0b24ubnVtYmVyfS8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBUaHVtYm5haWw7IiwidmFyIFRodW1ibmFpbCA9IHJlcXVpcmUoJy4vVGh1bWJuYWlsJyk7XG5cbnZhciBUaHVtYm5haWxzTGlzdCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5pbnB1dC5tYXAoZnVuY3Rpb24oZWxlbWVudCl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxUaHVtYm5haWwgZGF0YT17ZWxlbWVudH0vPlxuICAgICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFRodW1ibmFpbHNMaXN0OyIsInZhciBCYWRnZSA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9CYWRnZScpLFxuICAgIFRodW1ibmFpbHNMaXN0ID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL1RodW1ibmFpbHNMaXN0Jyk7XG5cblJlYWN0RE9NLnJlbmRlcig8QmFkZ2UgdGV4dD1cIldpYWRvbW/Fm2NpXCIgcXVhbnRpdHk9XCIxMDNcIi8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZjEnKSk7XG5SZWFjdERPTS5yZW5kZXIoPFRodW1ibmFpbHNMaXN0IGlucHV0PXtbXG4gICB7YnV0dG9uOiB7bmFtZTogXCJXeWNob2R6xIVjZVwiLCBudW1iZXI6IDIzfSwgbGFiZWw6ICdDb8WbIG9kZW1uaWUnLCB1cmw6ICdodHRwOi8vaW1hZ2UwMDAuZmxhdGljb24uY29tL2ljb25zL3N2Zy8xMzQvMTM0OTY1LnN2Zyd9LFxuICAgIHtidXR0b246IHtuYW1lOiBcIlByenljaG9kesSFY2VcIiwgbnVtYmVyOjQyfSwgbGFiZWw6ICdDb8WbIGZham5lZ28nLCB1cmw6ICdodHRwOi8vaW1hZ2UwMDAuZmxhdGljb24uY29tL2ljb25zL3N2Zy8xMzQvMTM0OTY3LnN2Zyd9LFxuICAgIHtidXR0b246IHtuYW1lOiBcIktvcGllIHJvYm9jemVcIiwgbnVtYmVyOjN9LCBsYWJlbDogJ0NvxZsgZG8gemFwYW1pxJl0YW5pYScsIHVybDogJ2h0dHA6Ly9pbWFnZTAwMC5mbGF0aWNvbi5jb20vaWNvbnMvc3ZnLzEzNC8xMzQ5NzQuc3ZnJ30sXG4gICAge2J1dHRvbjoge25hbWU6IFwiU3BhbVwiLCBudW1iZXI6MTJ9LCBsYWJlbDogJ0NvxZsgemLEmWRuZWdvJywgdXJsOiAnaHR0cDovL2ltYWdlMDAwLmZsYXRpY29uLmNvbS9pY29ucy9zdmcvMTM0LzEzNDk3MC5zdmcnfVxuXX0vPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2YyJykpOyJdfQ==
