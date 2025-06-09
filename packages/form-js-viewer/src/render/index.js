import { CustomFormFields } from './CustomFormFields';
import { Renderer } from './Renderer';
import { FileRegistry } from './FileRegistry';

export { CustomFormFields as FormFields };

export * from './components';
export * from './context';
export { useExpressionEvaluation, useSingleLineTemplateEvaluation, useTemplateEvaluation } from './hooks';

export const RenderModule = {
  __init__: ['formFields', 'renderer'],
  formFields: ['type', CustomFormFields],
  renderer: ['type', Renderer],
  fileRegistry: ['type', FileRegistry],
};
