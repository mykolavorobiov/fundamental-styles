import * as stories from './radio.stories.js';

export default {
    title: 'Visual/Radio',
    parameters: {
        components: ['radio', 'form-label', 'fieldset', 'form-group']
    }
};

export const Radio = () => {
    const storyNames = Object.keys(stories).filter(story => story !== 'default');
    const div = document.createElement('div');
    div.innerHTML = storyNames.map(function(item) {
        return '<div>' + stories[item]() + '</div>';
    }).join('');
    return div;
};
