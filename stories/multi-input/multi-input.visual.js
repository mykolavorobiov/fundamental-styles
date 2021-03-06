import * as stories from './multi-input.stories.js';

export default {
    title: 'Visual/Multi Input',
    parameters: {
        components: ['form-label', 'popover', 'radio', 'title', 'token', 'input-group']
    }
};

export const MultiInput = () => {
    const storyNames = Object.keys(stories).filter(story => story !== 'default');
    const div = document.createElement('div');
    div.innerHTML = storyNames.map(function(item) {
        return '<div>' + stories[item]() + '</div>';
    }).join('');
    return div;
};
