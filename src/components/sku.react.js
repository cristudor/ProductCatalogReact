import React from 'react';
import Form from "react-jsonschema-form";
import {ButtonToolbar, Button, Panel, Accordion} from 'react-bootstrap'

class SkuComp extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      skuIdOdbms: "1234567",
      skuName: "Blue Skinny Jeans Size 32",
      skuUrn: "urn:product:sku:123-xyz-456",
      upcId: "1234567890123",
      upcType: "EAN"
    };
  }

  render() {
    return (
      <Accordion>
      <Panel header="Skus">
        <Form formData={this.state} schema={schema} uiSchema={uiSchema} onChange={log("changed")} onSubmit={log("submitted")} onError={log("errors")}>
          <div>
            <ButtonToolbar>
              <Button bsStyle="primary" type="submit">Create SKUs</Button>
            </ButtonToolbar>
          </div>
        </Form>
      </Panel>
    </Accordion>
    )
  }

  componentDidMount() {
    console.log("mounted");
  }

  componentWillUnmount() {}
}

const schema = {
  "description": "A simple form of SKU data",
  "type": "object",

  "properties": {
    "skuIdOdbms": {
      "type": "string",
      "title": "SKU ODBMS ID",
      "minLength": 10
    },
    "skuName": {
      "type": "string",
      "title": "SKU Name"
    },
    "skuUrn": {
      "type": "string",
      "title": "SKU URN",
      "minLength": 25
    },
    "upcId": {
      "type": "string",
      "title": "UPC ID"
    },
    "upcType": {
      "type": "string",
      "title": "UPC Type"
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
  "skuIdOdbms": {
    "ui:readonly": true
  },
  "upcId": {
    "ui:readonly": true
  },
  "upcType": {
    "ui:readonly": true
  }
};

const log = (type) => console.log.bind(console, type);

export default SkuComp

