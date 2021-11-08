import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { AtomicModule } from '../../atomic.module';
import { UserInputComponent } from './user-input.component';

export default {
  title: 'Atomic/Atom/User Input',
  component: UserInputComponent,
  decorators: [
    moduleMetadata({
      imports: [AtomicModule]
    })
  ]
} as Meta;

const Template: Story<UserInputComponent> = (args) => ({
  props: args
})

export const Default = Template.bind({});
Default.args = {
};

