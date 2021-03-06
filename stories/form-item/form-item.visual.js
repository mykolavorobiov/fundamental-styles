import * as stories from './form-item.stories.js';

export default {
    title: 'Visual/Form Item',
    parameters: {
        components: ['form-item', 'form-label', 'input']
    }
};

export const FormItem = () => {
    const storyNames = Object.keys(stories).filter(story => story !== 'default');
    const div = document.createElement('div');
    div.innerHTML = storyNames.map(function(item) {
        return '<div>' + stories[item]() + '</div>';
    }).join('');
    return div;
};
