import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { ConfirmButtonComponent } from './confirm-button.component';
import { AtomicModule } from '../../atomic.module';

export default {
  title: 'Atomic/Atom/Confirm Button',
  component: ConfirmButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [AtomicModule]
    })
  ]
} as Meta;

const Template: Story<ConfirmButtonComponent> = (args) => ({
  props: args
})

export const Default = Template.bind({});
Default.args = {
  confirmText: 'Confirm'
};

