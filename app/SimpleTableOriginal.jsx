/* jshint esnext: true */


import React from 'react';



class SimpleTable extends React.Component {

    constructor(props) {
        super(props);

    }
    _generateColumns() {
        var cols = this.props.cols;

        return cols.map(function(colData) {
            return <th key={colData.key}> {colData.label} </th>;
        });
    }

    _generateRows() {
        var cols = this.props.cols,
            data = this.props.data;

        return data.map(function(item) {

            var cells = cols.map(function(colData) {

                return <td> {item[colData.key]} </td>;
            });
            return <tr key={item.id}> {cells} </tr>;
        });
    }

    render() {
      var columnComponents = this._generateColumns();
      var rowComponents = this._generateRows();

        return (
          <table>
                <thead> {columnComponents} </thead>
                <tbody> {rowComponents} </tbody>
          </table>
        );
    }
}

export default SimpleTable;
