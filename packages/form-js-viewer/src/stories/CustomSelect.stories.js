import { FormReact } from '../components/FormReact';
import { CustomSelect } from './CustomSelect';

export default {
  title: 'Custom Components/Select',
  component: FormReact,
  argTypes: {
    onSubmit: { action: 'submitted' },
    onChange: { action: 'changed' }
  }
};

const Template = (args) => {
  return (
    <FormReact
      {...args}
      customComponents={[['select', 'async-select', CustomSelect]]}
    />
  );
};

export const AsyncSelect = Template.bind({});
AsyncSelect.args = {
  schema: {
    components: [
      {
        type: 'select',
        properties: {
          type: 'async-select'
        },
        label: 'Async Select',
        key: 'asyncSelect',
        values: [
          { label: 'Option 1', value: '1' },
          { label: 'Option 2', value: '2' },
          { label: 'Option 3', value: '3' }
        ]
      }
    ],
    type: 'default',
  }
};
