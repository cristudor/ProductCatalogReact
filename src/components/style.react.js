import React from 'react';
import Form from "react-jsonschema-form";
import {ButtonToolbar, Button, Panel, Accordion} from 'react-bootstrap'


class Style extends React.Component{

    constructor(props){
        super(props);
        this.attributesList = ['option1', 'option2'];
        this.categoriesList = ['option1', 'option2'];
        this.state = {
            urn: "urn:product:Style:123",
            name: "Skinny Jeans",
            comment: "cool new style",
            datecreated: "2017-01-31",
            attributes: ["option1"],
            categories: ["option1"],
            designs: []
        };
    }

  render() {
      return (
          <Accordion>
            <Panel header="Style ID">
              <Form schema={schema}
                    uiSchema={uiSchema}
                    onChange={log("changed")}
                    onSubmit={log("submitted")}
                    onError={log("errors")}
                    formData={this.state}
                  >
                <div>
                  <ButtonToolbar>
                    <Button bsStyle="primary" type="submit">Create</Button>
                    <Button bsStyle="warning" type="button">Post to ODBMS</Button>
                  </ButtonToolbar>
                </div>
              </Form>
            </Panel>
          </Accordion>
      )
  }
}

//const schema = (attributesValues, categoriesValues) => {
const schema = {
    "description": "Primary Style",
    "type": "object",
    "required": ["title"],
    "properties": {
        "urn": {
            "type": "string",
            "title": "URN "
        },
        "name": {
            "type": "string",
            "title": "Name ",
            "minLength": 5
        },
        "comment": {
            "type": "string",
            "title": "Comment ",
            "maxLength": 25
        },
        "datecreated": {
            "type": "string",
            "title": "Date Created ",
            "format": "date-time"
        },
        "attributes": {
            "type": "array",
            "title": "Attributes",
            "items": {
                "type": "object",
                "required": ["title"],
                "properties": {
                    "title": {
                        "type": "string",
                        "title": "Attribute",
                        enum: [
                            "option1", "option2", "option3", "option4"
                        ],
                        "description": "Select Attribute Description"
                    }
                }
            }
        },
        "categories": {
            "type": "array",
            "title": "Categories",
            "items": {
                "type": "object",
                "required": ["title"],
                "properties": {
                    "title": {
                        "type": "string",
                        enum: [
                            "option1", "option2", "option3", "option4"
                        ],
                        "title": "Category",
                        "description": "Select a category"
                    }
                }
            }
        },
        "designs": {
            "type": "array",
            "title": "Design Images",
            "items": {
                "type": "string",
                "format": "data-url",
                "title": "Upload Image"
            }
        }
    }
};



const uiSchema = {
  "ui:options": {
    orderable: false
  },
  "comment": {
    "ui:widget": "textarea",
    "ui:help": "Enter design comments here explaning the concept"
  },
  "urn": {
    "ui:disabled": true
  }
};

const log = (type) => console.log.bind(console, type);

const data = {
  "style": {
    "urn": "urn:product:product-creator:module-tbc:style:123-XYZ-1",
    "name": "urn:product:product-creator:module-tbc:attribute:12-223-1940",
    "comment": "the colons in urns can be swapped for slashes to form S3 object paths, for event routing and so consumers to easily distinguish items of interest.",
    "decision": "regarding style key=name, this can be a link to attributes where alternative names are stored by attribute history.",
    "attributes": [
      {
        "urn": "urn:product:product-creator:module-tbc:attribute:<type>-<subtype>-<code>-from-odbms"
      }, {
        "comment": "we will need to store type of attrubte as well as its history; see also Lucy's attribute type matrix which contains e.g. fixed and variable attributes."
      }, {
        "urn": "urn:product:product-creator:module-tbc:attribute:12-211-716-from-odbms"
      }, {
        "urn": "urn:product:product-creator:module-tbc:attribute:12-223-1957-from-odbms"
      }
    ],
    "categories": [
      {
        "urn": "urn:category:hierarchy-manager:module-tbc:hierarchy-detail:abc-123",
        "comment": "link to base of hierarchy detail; resolve this urn to find type of hierarchy e.g. Commercial",
        "decision": "having the concept of a 'primary category' may encourage behaviour that we don't need. the app that consumes categories for the purposes of editing a group of attributes, or other contextually edited config like the web or product-creator, can know which cateogory to use to fetch its default values."
      }, {
        "urn": "urn:category:hierarchy-manager:module-tbc:hierarchy-detail:xyz-456",
        "comment": "link to base of hierarchy detail; resolve this urn to find type of hierarchy e.g. Commercial"
      }
    ]
  }
};

const formDataOld = {
    title: "First task",
    done: true
}

export default Style;

