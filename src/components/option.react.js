import React from 'react';
import Form from "react-jsonschema-form";
import {ButtonToolbar, Button, Panel, Accordion} from 'react-bootstrap'

class Option extends React.Component{
  constructor(props){
      super(props);
      this.state = {
          optionID: "Mensware-123456",
          odbmsID: "123456",
          OptionDescription: "Blue Skinny Jeans",
          OptionRange: 10,
      };
  }

  render() {
      return (
          <Accordion>
            <Panel header="Options linked to Style">
              <Form formData={this.state}
                    schema={schema}
                    uiSchema={uiSchema}
                    onChange={log("changed")}
                    onSubmit={log("submitted")}
                    onError={log("errors")}>
                <div>
                  <ButtonToolbar>
                    <Button bsStyle="primary" type="submit">Create Options</Button>
                  </ButtonToolbar>
                </div>
              </Form>
            </Panel>
          </Accordion>
      )
  }
};

const schema = {
  "description": "Style Options ",
  "type": "object",

  "properties": {
    "optionID": {
      "type": "string",
      "title": "Option ID",
      "minLength": 10
    },
    "odbmsID": {
      "type": "string",
      "title": "ODBMS ID"
    },
    "OptionDescription": {
      "type": "string",
      "title": "Option Description",
      "minLength": 25
    },
    "OptionRange": {
      "type": "integer",
      "title": "Option Range"
    }
  }
};

const uiSchema = {
  "boolean": {
    "radio": {
      "ui:widget": "radio"
    },
    "select": {
      "ui:widget": "select"
    }
  },
  "string": {
    "textarea": {
      "ui:widget": "textarea",
      "ui:options": {
        "rows": 5
      }
    },
    "color": {
      "ui:widget": "color"
    }
  },
  "secret": {
    "ui:widget": "hidden"
  },
  "optionID": {
    "ui:disabled": true
  },
  "readonly": {
    "ui:readonly": true
  },
  "widgetOptions": {
    "ui:options": {
      "backgroundColor": "yellow"
    }
  },
  "selectWidgetOptions": {
    "ui:options": {
      "backgroundColor": "pink"
    }
  },
  "OptionRange": {
    "ui:widget": "range"
  }
};

const log = (type) => console.log.bind(console, type);

export default Option;
