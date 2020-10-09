import * as stories from './dynamic-page.stories.js';

export default {
    title: 'Visual/DynamicPage'
};

export const DynamicPage = () => {
    const storyNames = Object.keys(stories).filter(story => story !== 'default');
    const div = document.createElement('div');
    div.innerHTML = storyNames.map(function(item) {
        return '<div>' + stories[item]() + '</div>';
    }).join('');
    return div;
};
