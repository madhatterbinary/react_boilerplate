var React = require('react');
var SimpleTable = require('./SimpleTable');
var  json = require("json-loader!./config.json");

var Main = React.createClass({
    render: function () {

console.log(json.content.items[0].table_data.columns);

      return (
        <div>
<SimpleTable cols={json.content.items[0].table_data.columns} data={json.content.items[0].table_data.rows} />
        </div>
      );
    }
});

module.exports = Main;



  //  <SimpleTable cols={json.items.tabledata[0]} data={json.items.tabledata[1]} />
  //json = require("json-loader!./config.json");
