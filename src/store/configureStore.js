import { createStore, applyMiddleware } from 'redux';

export default () => {
    const store = createStore(() => {
        const state = {
            data: [
                {
                    title: 'Blog/Article',
                    subtitle: 'from 500',
                    active: false
                },
                {
                    title: 'Newsletter/E-Mailer',
                    subtitle: 'from 1000',
                    active: true
                },
                {
                    title: 'Whitepaper',
                    subtitle: 'from 2000',
                    active: false
                },
                {
                    title: 'E-book',
                    subtitle: 'from 1000',
                    active: false
                },
                {
                    title: 'Report/Guide',
                    subtitle: 'from 1000',
                    active: false
                },
                {
                    title: 'Product Description',
                    subtitle: 'from 500',
                    active: false
                },
                {
                    title: 'Website Content',
                    subtitle: 'from 1000',
                    active: false
                },
                {
                    title: 'Video Script',
                    subtitle: 'from 1000',
                    active: false
                },
                {
                    title: 'Company profile/Brochure',
                    subtitle: 'from 2000',
                    active: false
                },
                {
                    title: 'Press Release',
                    subtitle: 'from 2000',
                    active: false
                }
            ]
        };
        return state;
    });
    
    return store;
};
