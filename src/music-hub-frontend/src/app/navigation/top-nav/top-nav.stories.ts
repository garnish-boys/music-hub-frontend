import type { Meta, StoryObj } from '@storybook/angular';

import { TopNavComponent } from './top-nav.component';

const meta: Meta<TopNavComponent> = {
    component: TopNavComponent
}

export default meta;
type Story = StoryObj<TopNavComponent>;

export const FirstStory: Story = {
    args: {

    }
}