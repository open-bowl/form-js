import { FormReact } from '../components/FormReact';

export default {
  title: 'Form/FormReact',
  component: FormReact,
  argTypes: {
    onSubmit: { action: 'submitted' },
    onChange: { action: 'changed' },
  },
};

const Template = (args) => {
  return <FormReact {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  schema: {
    components: [
      {
        label: 'First Name',
        type: 'textfield',
        layout: {
          row: 'Row_081agzh',
          columns: null,
        },
        id: 'Field_0kaupgb',
        key: 'textfield_u2317p',
        properties: {
          key1: 'value',
        },
        validate: {
          required: true,
        },
      },
      {
        label: 'Last Name',
        type: 'textfield',
        layout: {
          row: 'Row_081agzh',
          columns: null,
        },
        id: 'Field_0wyqkrk',
        key: 'textfield_r442u8',
        validate: {
          required: true,
        },
      },
      {
        label: 'Gender',
        values: [
          {
            label: 'Male',
            value: 'male',
          },
          {
            label: 'Female',
            value: 'female',
          },
        ],
        type: 'checklist',
        layout: {
          row: 'Row_0uxyuxa',
          columns: null,
        },
        id: 'Field_1o40v6m',
        key: 'checklist_9vb78',
        validate: {
          required: true,
        },
      },
      {
        label: 'Age',
        type: 'number',
        layout: {
          row: 'Row_1jo90w6',
          columns: 8,
        },
        id: 'Field_1x50whg',
        key: 'number_q3pz48',
      },
    ],
    type: 'default',
  },
  data: {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
  },
};
