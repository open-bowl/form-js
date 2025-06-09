import { FormFields } from './FormFields';

export class CustomFormFields extends FormFields {
  constructor() {
    super();
    this._customComponents = new Map();
  }

  /**
   * Register a custom component for a specific field type
   * @param {string} baseType - The base type of the field (e.g. 'select')
   * @param {string} customType - The custom type identifier (e.g. 'async-select')
   * @param {Object} component - The custom component to register
   * @throws {Error} If the base type does not exist
   */
  registerCustomComponent(baseType, customType, component) {
    if (!this._formFields[baseType]) {
      throw new Error(`Base type ${baseType} does not exist`);
    }

    if (!component || !component.config) {
      throw new Error('Component must have a config property');
    }

    // Ensure the component has the required config properties
    const config = {
      ...this._formFields[baseType].config,
      ...component.config,
      type: `${baseType}:${customType}`
    };

    component.config = config

    this._customComponents.set(`${baseType}:${customType}`, component);
  }

  /**
   * Get a form field component by type
   * @param {string} type - The base type of the field
   * @param {Object} [attrs] - Field attributes or field object
   * @returns {Object} The form field component
   */
  get(type, attrs) {
    // Check for custom type in properties
    if (attrs && attrs.properties?.type) {
      const customType = attrs.properties.type;
      const customComponent = this._customComponents.get(`${type}:${customType}`);
      if (customComponent) {
        return customComponent;
      }
    }
    return super.get(type);
  }
} 