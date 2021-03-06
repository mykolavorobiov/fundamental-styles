import * as stories from './object-identifier.stories.js';

export default {
    title: 'Visual/Object Identifier',
    parameters: {
        components: ['object-identifier', 'link', 'table']
    }
};

export const ObjectIdentifier = () => {
    const storyNames = Object.keys(stories).filter(story => story !== 'default');
    const div = document.createElement('div');
    div.innerHTML = storyNames.map(function(item) {
        return '<div>' + stories[item]() + '</div>';
    }).join('');

    return div;
};
