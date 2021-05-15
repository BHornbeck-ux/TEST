
var routes = [
  {
    path: '/',
    url: './index.html',
  },
  {
    path: '/games/',
    url: './pages/games.html',
  },
  {
    path: '/apps/',
    url: './pages/apps.html',
  },
  {
    path: '/jb/',
    url: './pages/jb.html',
  },
  {
    path: '/other/',
    url: './pages/other.html',
  },
  {
    path: '/info/',
    url: './pages/info.html',
  },
  {
    path: '/dev/',
    url: './pages/dev.html',
  },
  {
    path: '/home/',
    url: './index.html',
  },
  {
    path: '/update/',
    url: './pages/update.html',
  },
  {
    path: '/contact/',
    url: './pages/contact.html',
  },
  {
    path: '/repo/',
    url: './pages/repo.html',
  },
  {
    path: '/search/',
    url: './pages/search.html',
  },
  {
    path: '/applist/',
    url: './pages/applist.html',
  },

  {
    path: '/dynamic-route/blog/:blogId/post/:postId/',
    componentUrl: './pages/dynamic-route.html',
  },
  {
    path: '/request-and-load/user/:userId/',
    async: function ({ router, to, resolve }) {
      // App instance
      var app = router.app;

      // Show Preloader
      app.preloader.show();

      // User ID from request
      var userId = to.params.userId;

      // Simulate Ajax Request
      setTimeout(function () {
        // We got user data from request
        var user = {
          firstName: 'Vladimir',
          lastName: 'Kharlampidi',
          about: 'Hello, i am creator of Framework7! Hope you like it!',
          links: [
            {
              title: 'Framework7 Website',
              url: 'http://framework7.io',
            },
            {
              title: 'Framework7 Forum',
              url: 'http://forum.framework7.io',
            },
          ]
        };
        // Hide Preloader
        app.preloader.hide();

        // Resolve route to load page
        resolve(
          {
            componentUrl: './pages/request-and-load.html',
          },
          {
            props: {
              user: user,
            }
          }
        );
      }, 1000);
    },
  },
  // Default route (404 page). MUST BE THE LAST
  {
    path: '(.*)',
    url: './pages/notfound.html',
  },
];
