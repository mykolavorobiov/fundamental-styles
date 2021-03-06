import * as stories from './form-message.stories.js';

export default {
    title: 'Visual/Form Message',
    parameters: {
        components: ['form-message', 'form-item', 'form-label', 'input', 'popover']
    }
};

export const FormMessage = () => {
    const storyNames = Object.keys(stories).filter(story => story !== 'default');
    const div = document.createElement('div');
    div.innerHTML = storyNames.map(function(item) {
        return '<div>' + stories[item]() + '</div>';
    }).join('');
    return div;
};
