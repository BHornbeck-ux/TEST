
var routes = [
  {
    path: '/',
    url: './index.html',
    options: {
        animate: false,
      },
  },
  {
    path: '/games/',
    url: './pages/section/games.html',
    options: {
        animate: false,
      },
  },
  {
    path: '/apps/',
    url: './pages/section/apps.html',
    options: {
        animate: false,
      },
  },
  {
    path: '/jb/',
    url: './pages/section/jb.html',
    options: {
        animate: false,
      },
  },
  {
    path: '/other/',
    url: './pages/other/other.html',
    options: {
        animate: false,
      },
  },
  {
    path: '/Thomas/',
    url: './pages/contacts/Thomas.html',
    options: {
        animate: false,
      },
  },
  {
    path: '/Benjamin/',
    url: './pages/section/Benjamin.html',
    options: {
        animate: false,
      },
  },
  {
    path: '/home/',
    url: './index.html',
    options: {
        animate: false,
      },
  },
  {
    path: '/dev/',
    url: './pages/tabs/dev.html',
    options: {
        animate: false,
      },
  },
  {
    path: '/search/',
    url: './pages/tabs/search.html',
    options: {
        animate: false,
      },
  },
  {
    path: '/addlist/',
    url: './pages/tabs/addlist.html',
    options: {
        animate: false,
      },
  },
  {
    path: '/section/',
    url: './pages/tabs/section.html',
    options: {
        animate: false,
      },
  },
  {
    path: '/version/',
    url: './pages/drop-down/index.html',
    options: {
        animate: false,
      },
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
    options: {
        animate: true,
    transition: 'f7-cover-v',
      },
  },
];
