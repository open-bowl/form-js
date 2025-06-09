import { Select } from '../render/components/form-fields/Select';
import { Label } from '../render/components/Label';
import { Description } from '../render/components/Description';
import { Errors } from '../render/components/Errors';
import { formFieldClasses } from '../render/components/Util';

export function CustomSelect(props) {
  const { field, onChange, value, disabled, readonly } = props;

  const handleChange = (event) => {
    onChange({
      field,
      value: event.target.value || null
    });
  };

  return (
    <div class={formFieldClasses('select', { disabled, readonly })}>
      <Label htmlFor={field.id} label={field.label} />
      <div>
        <select
          id={field.id}
          value={value || ''}
          onChange={handleChange}
          disabled={disabled || readonly}
        >
          <option value="">Select an option...</option>
          {field.values.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <Description id={field.descriptionId} description={field.description} />
      <Errors id={field.errorMessageId} errors={field.errors??[]} />
    </div>
  );
}

CustomSelect.config = {
  ...Select.config,
  type: 'select:async-select',
  label: 'Async Select',
  group: 'selection',
  keyed: true
}; 