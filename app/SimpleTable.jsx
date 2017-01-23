var React = require('react');
var cols;
var data;


var SimpleTable = React.createClass({



  generateColumns: function () {
      cols = this.props.cols;

      return cols.map(function(colData) {
          return <th key={colData.key}> {colData.label} </th>;
      });
  },

  generateRows: function () {
      cols = this.props.cols,
          data = this.props.data;

      return data.map(function(item) {

          var cells = cols.map(function(colData) {

              return <td> {item[colData.key]} </td>;
          });
          return <tr key={item.id}> {cells} </tr>;
      });
  },
  componentWillMount: function() {
    var columnComponents = this.generateColumns();
    var rowComponents = this.generateRows();
  },
    render: function () {

        return (
          <table>
                <thead> {columnComponents} </thead>
                <tbody> {rowComponents} </tbody>
          </table>
        );
    }
});

module.exports = SimpleTable;
