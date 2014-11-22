var dash = require( '../main' );

var DashObjects = React.createClass({
    getInitialState: function() {
      return { data: [] };
    },
    onClick: function( i ) {
      dash.panels.propertyEditor.setProps( { data: dash.scene[ i ].Components } );
    },
    render: function() {
    return (
      <div>
        { this.props.data.map( function( node, i ) {
          var self = this;
          var label = new React.DOM.span({
            className: 'node',
            onClick: function() { self.onClick( i ); }
          }, node.Name );
          return (
            <TreeView key={ node.Name + '|' + i } nodeLabel={ label } defaultCollapsed={ true }>
              { node.Children.map( function( child, j ) {
                return (
                  <TreeView nodeLabel={ label } key={ child.Type + '|' + j } defaultCollapsed={ false }>
                    <div className="info">{ child.Type }</div>
                  </TreeView>
                );
              } ) }
            </TreeView>
          );
        }, this ) }
      </div>
    );
  }
} );

dash.layout.registerElement( 'ObjectBrowser', function() {
  return <DashObjects data={ [  ] } />;
}, function( element ) {
  dash.panels.objectBrowser = element;
} );

module.exports = DashObjects;
