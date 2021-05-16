
var routes = [
  {
    path: '/',
    url: './index.html',
  },
  {
    path: '/home/',
    url: './index.html',
  },
  {
    path: '/games/',
    url: './pages/other/games.html',
  },
  {
    path: '/apps/',
    url: './pages/other/apps.html',
  },
  {
    path: '/jb/',
    url: './pages/other/jb.html',
  },
  {
    path: '/other/',
    url: './pages/other/other.html',
  },
  {
    path: '/dev/',
    url: './pages/tabs/dev.html',
  },
  {
    path: '/update/',
    url: './pages/tabs/update.html',
  },
  {
    path: '/repo/',
    url: './pages/repo.html',
  },
  {
    path: '/search/',
    url: './pages/tabs/search.html',
  },
  {
    path: '/applist/',
    url: './pages/tabs/applist.html',
  },
  {
    path: '/Thomas/',
    url: './pages/contacts/Thomas.html',
  },
  {
    path: '/Benjamin/',
    url: './pages/contacts/Benjamin.html',
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
          firstName: 'Thomas',
          lastName: 'Hornbeck',
          about: 'Developer Of Metric',
          links: [
            {
              title: 'Metric Installer',
              url: 'https://metricinstaller.com',
            },
            {
              title: 'Metric old home',
              url: 'https://installerpro.app',
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
    url: './pages/notfound/notfound.html',
  },
];
