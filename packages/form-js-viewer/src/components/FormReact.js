import { useEffect, useRef } from 'preact/hooks';
import { Form } from '../Form';
import '../../assets/form-js-base.css';


/**
 * Preact binding for the Form component
 * @param {Object} props
 * @param {Object} props.schema - The form schema
 * @param {Object} [props.data] - Initial form data
 * @param {Function} [props.onSubmit] - Callback when form is submitted
 * @param {Function} [props.onChange] - Callback when form data changes
 * @param {string} [props.className] - Additional CSS class name
 * @param {Array<[string, string, import('preact').VNode]>} [props.customComponents] - Custom components to register
 * @returns {import('preact').VNode}
 */
export function FormReact({
  schema,
  data = {},
  onSubmit,
  onChange,
  className = '',
  customComponents = [],
}) {
  const containerRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Initialize form
    formRef.current = new Form({
      container: containerRef.current,
    });

    // Register custom components
    customComponents.forEach(([baseType, customType, component]) => {
      formRef.current.registerCustomComponent(baseType, customType, component);
    });

    // Import schema
    formRef.current.importSchema(schema, data);

    // Set up event listeners
    if (onSubmit) {
      formRef.current.on('submit', (event) => {
        onSubmit(event);
      });
    }

    if (onChange) {
      formRef.current.on('changed', (event) => {
        onChange(event);
      });
    }

    // Cleanup
    return () => {
      if (formRef.current) {
        formRef.current.destroy();
      }
    };
  }, [data, onChange, onSubmit, schema]);

  // Update form when schema or data changes
  useEffect(() => {
    if (!formRef.current) return;
    formRef.current.importSchema(schema, data);
  }, [schema, data]);



  return (
    <div 
      ref={containerRef} 
      className={`form-js-container ${className}`}
    />
  );
} 