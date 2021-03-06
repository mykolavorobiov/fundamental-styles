import * as stories from './message-toast.stories.js';

export default {
    title: 'Visual/MessageToast',
    parameters: {
        components: ['message-toast']
    }
};

export const MessageToast = () => {
    const storyNames = Object.keys(stories).filter(story => story !== 'default');
    const div = document.createElement('div');
    div.innerHTML = storyNames.map(function(item) {
        return '<div>' + stories[item]() + '</div>';
    }).join('');
    return div;
};
