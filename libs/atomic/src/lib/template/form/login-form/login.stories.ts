import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { AtomicModule } from '../../../atomic.module';
import { LoginComponent } from './login.component';

export default {
  title: 'Atomic/Template/Form/Login Form',
  component: LoginComponent,
  decorators: [
    moduleMetadata({
      imports: [AtomicModule]
    })
  ]
} as Meta;

const Template: Story<LoginComponent> = (args) => ({
  props: args
})

export const Default = Template.bind({});
Default.args = {
  loginText: 'Confirm',
};

