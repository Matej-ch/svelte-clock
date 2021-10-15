var ghpages = require('gh-pages');

ghpages.publish(
    'public', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://github.com/Matej-ch/svelte-clock.git', // Update to point to your repository
        user: {
            name: 'Matej CH', // update to use your name
            email: 'matejCH.work@gmail.com' // Update to use your email
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)