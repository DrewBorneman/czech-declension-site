Quick notes on how to deploy to Hostinger:

 - Delete entire filesystem
 - Run the deployment from Git via hPanel, the entire repository should be cloned into `public_html`
 - Go into file browser, and
     - move `/public_html/laravel` one level up, to `/laravel`
     - move `/laravel/public/api` to `/public_html/api`
     - remove all irrelevant directories
 - Connect to SSH, navigate to the `laravel` directory, and run `composer2 install`

