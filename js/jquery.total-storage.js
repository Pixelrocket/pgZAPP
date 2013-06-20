  


<!DOCTYPE html>
<html>
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# githubog: http://ogp.me/ns/fb/githubog#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>jquery-total-storage/jquery.total-storage.js at master · jarednova/jquery-total-storage</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png" />
    <link rel="logo" type="image/svg" href="http://github-media-downloads.s3.amazonaws.com/github-logo.svg" />
    <link rel="assets" href="https://a248.e.akamai.net/assets.github.com/">
    <link rel="xhr-socket" href="/_sockets" />
    


    <meta name="msapplication-TileImage" content="/windows-tile.png" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="selected-link" value="repo_source" data-pjax-transient />
    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" /><meta content="4159473" name="octolytics-actor-id" /><meta content="Pixelrocket" name="octolytics-actor-login" /><meta content="04dff768eb7b9ea1a63ab753c91b46e650e44d187a393284b7b48d3e4ebfcf84" name="octolytics-actor-hash" />

    
    
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />

    <meta content="authenticity_token" name="csrf-param" />
<meta content="wbK2c5LV0mM7XxQNcrwQiwUvOZ//3FRZqLjPNYBSX4w=" name="csrf-token" />

    <link href="https://a248.e.akamai.net/assets.github.com/assets/github-81b13ea53b1680d36f84ba58001e4a489c3f99d2.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://a248.e.akamai.net/assets.github.com/assets/github2-8b9943a538de5ba2343c96854d47c48eb6f2da5d.css" media="all" rel="stylesheet" type="text/css" />
    


      <script src="https://a248.e.akamai.net/assets.github.com/assets/frameworks-4c434fa1705bf526e191eec0cd8fab1a5ce3e326.js" type="text/javascript"></script>
      <script src="https://a248.e.akamai.net/assets.github.com/assets/github-5e72c8897c5b4f51f6829429a2f0045853a2cf36.js" type="text/javascript"></script>
      
      <meta http-equiv="x-pjax-version" content="541ec61f9d9c0a273af8ee8616e5fc81">

        <link data-pjax-transient rel='permalink' href='/jarednova/jquery-total-storage/blob/99c6cf58a0206c79d0cddac07e4b77632ad01b3c/jquery.total-storage.js'>
    <meta property="og:title" content="jquery-total-storage"/>
    <meta property="og:type" content="githubog:gitrepository"/>
    <meta property="og:url" content="https://github.com/jarednova/jquery-total-storage"/>
    <meta property="og:image" content="https://secure.gravatar.com/avatar/cefc866df7a0bbff743f55cba999c51b?s=420&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png"/>
    <meta property="og:site_name" content="GitHub"/>
    <meta property="og:description" content="jquery-total-storage - A jQuery plugin to manage local storage and cookies simultaneously in a simple interface"/>
    <meta property="twitter:card" content="summary"/>
    <meta property="twitter:site" content="@GitHub">
    <meta property="twitter:title" content="jarednova/jquery-total-storage"/>

    <meta name="description" content="jquery-total-storage - A jQuery plugin to manage local storage and cookies simultaneously in a simple interface" />


    <meta content="1298086" name="octolytics-dimension-user_id" /><meta content="jarednova" name="octolytics-dimension-user_login" /><meta content="5374976" name="octolytics-dimension-repository_id" /><meta content="jarednova/jquery-total-storage" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="5374976" name="octolytics-dimension-repository_network_root_id" /><meta content="jarednova/jquery-total-storage" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/jarednova/jquery-total-storage/commits/master.atom" rel="alternate" title="Recent Commits to jquery-total-storage:master" type="application/atom+xml" />

  </head>


  <body class="logged_in page-blob  vis-public env-production  ">
    <div id="wrapper">

      
      
      

      <div class="header header-logged-in true">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/">
  <span class="mega-octicon octicon-mark-github"></span>
</a>

    <div class="divider-vertical"></div>

    
  <a href="/notifications" class="notification-indicator tooltipped downwards" title="You have unread notifications">
    <span class="mail-status unread"></span>
  </a>
  <div class="divider-vertical"></div>


      <div class="command-bar js-command-bar  in-repository">
          <form accept-charset="UTF-8" action="/search" class="command-bar-form" id="top_search_form" method="get">
  <a href="/search/advanced" class="advanced-search-icon tooltipped downwards command-bar-search" id="advanced_search" title="Advanced search"><span class="octicon octicon-gear "></span></a>

  <input type="text" data-hotkey="/ s" name="q" id="js-command-bar-field" placeholder="Search or type a command" tabindex="1" autocapitalize="off"
    data-username="Pixelrocket"
      data-repo="jarednova/jquery-total-storage"
      data-branch="master"
      data-sha="3216bf5efd76f0bb30cf3d5aa8a21630a95441cd"
  >

    <input type="hidden" name="nwo" value="jarednova/jquery-total-storage" />

    <div class="select-menu js-menu-container js-select-menu search-context-select-menu">
      <span class="minibutton select-menu-button js-menu-target">
        <span class="js-select-button">This repository</span>
      </span>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container">
        <div class="select-menu-modal">

          <div class="select-menu-item js-navigation-item selected">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" class="js-search-this-repository" name="search_target" value="repository" checked="checked" />
            <div class="select-menu-item-text js-select-button-text">This repository</div>
          </div> <!-- /.select-menu-item -->

          <div class="select-menu-item js-navigation-item">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" name="search_target" value="global" />
            <div class="select-menu-item-text js-select-button-text">All repositories</div>
          </div> <!-- /.select-menu-item -->

        </div>
      </div>
    </div>

  <span class="octicon help tooltipped downwards" title="Show command bar help">
    <span class="octicon octicon-question"></span>
  </span>


  <input type="hidden" name="ref" value="cmdform">

  <div class="divider-vertical"></div>

</form>
        <ul class="top-nav">
            <li class="explore"><a href="/explore">Explore</a></li>
            <li><a href="https://gist.github.com">Gist</a></li>
            <li><a href="/blog">Blog</a></li>
          <li><a href="http://help.github.com">Help</a></li>
        </ul>
      </div>

    

  

    <ul id="user-links">
      <li>
        <a href="/Pixelrocket" class="name">
          <img height="20" src="https://secure.gravatar.com/avatar/ce6b96b5d173ef6aabe026e213cf131e?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /> Pixelrocket
        </a>
      </li>

        <li>
          <a href="/new" id="new_repo" class="tooltipped downwards" title="Create a new repo">
            <span class="octicon octicon-repo-create"></span>
          </a>
        </li>

        <li>
          <a href="/settings/profile" id="account_settings"
            class="tooltipped downwards"
            title="Account settings (You have no verified emails)">
            <span class="octicon octicon-tools"></span>
          </a>
            <span class="settings-warning">!</span>
        </li>
        <li>
          <a class="tooltipped downwards" href="/logout" data-method="post" id="logout" title="Sign out">
            <span class="octicon octicon-log-out"></span>
          </a>
        </li>

    </ul>


<div class="js-new-dropdown-contents hidden">
  <ul class="dropdown-menu">
    <li>
      <a href="/new"><span class="octicon octicon-repo-create"></span> New repository</a>
    </li>
    <li>
        <a href="/jarednova/jquery-total-storage/issues/new"><span class="octicon octicon-issue-opened"></span> New issue</a>
    </li>
    <li>
    </li>
    <li>
      <a href="/organizations/new"><span class="octicon octicon-list-unordered"></span> New organization</a>
    </li>
  </ul>
</div>


    
  </div>
</div>

      

      <div class="flash-global flash-warn"><div class="container"><h2>You don't have any verified emails.  We recommend <a href="https://github.com/settings/emails">verifying</a> at least one email.</h2><p>Email verification will help our support team help you in case you have any email issues or lose your password.</p></div></div>


            <div class="site hfeed" itemscope itemtype="http://schema.org/WebPage">
      <div class="hentry">
        
        <div class="pagehead repohead instapaper_ignore readability-menu ">
          <div class="container">
            <div class="title-actions-bar">
              

<ul class="pagehead-actions">


    <li class="subscription">
      <form accept-charset="UTF-8" action="/notifications/subscribe" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="authenticity_token" type="hidden" value="wbK2c5LV0mM7XxQNcrwQiwUvOZ//3FRZqLjPNYBSX4w=" /></div>  <input id="repository_id" name="repository_id" type="hidden" value="5374976" />

    <div class="select-menu js-menu-container js-select-menu">
      <span class="minibutton select-menu-button  js-menu-target">
        <span class="js-select-button">
          <span class="octicon octicon-eye-watch"></span>
          Watch
        </span>
      </span>

      <div class="select-menu-modal-holder">
        <div class="select-menu-modal subscription-menu-modal js-menu-content">
          <div class="select-menu-header">
            <span class="select-menu-title">Notification status</span>
            <span class="octicon octicon-remove-close js-menu-close"></span>
          </div> <!-- /.select-menu-header -->

          <div class="select-menu-list js-navigation-container">

            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                <h4>Not watching</h4>
                <span class="description">You only receive notifications for discussions in which you participate or are @mentioned.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye-watch"></span>
                  Watch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                <h4>Watching</h4>
                <span class="description">You receive notifications for all discussions in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye-unwatch"></span>
                  Unwatch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_ignore" name="do" type="radio" value="ignore" />
                <h4>Ignoring</h4>
                <span class="description">You do not receive any notifications for discussions in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-mute"></span>
                  Stop ignoring
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

          </div> <!-- /.select-menu-list -->

        </div> <!-- /.select-menu-modal -->
      </div> <!-- /.select-menu-modal-holder -->
    </div> <!-- /.select-menu -->

</form>
    </li>

    <li class="js-toggler-container js-social-container starring-container ">
      <a href="/jarednova/jquery-total-storage/unstar" class="minibutton with-count js-toggler-target star-button starred upwards" title="Unstar this repo" data-remote="true" data-method="post" rel="nofollow">
        <span class="octicon octicon-star-delete"></span>
        <span class="text">Unstar</span>
      </a>
      <a href="/jarednova/jquery-total-storage/star" class="minibutton with-count js-toggler-target star-button unstarred upwards" title="Star this repo" data-remote="true" data-method="post" rel="nofollow">
        <span class="octicon octicon-star"></span>
        <span class="text">Star</span>
      </a>
      <a class="social-count js-social-count" href="/jarednova/jquery-total-storage/stargazers">64</a>
    </li>

        <li>
          <a href="/jarednova/jquery-total-storage/fork" class="minibutton with-count js-toggler-target fork-button lighter upwards" title="Fork this repo" rel="nofollow" data-method="post">
            <span class="octicon octicon-git-branch-create"></span>
            <span class="text">Fork</span>
          </a>
          <a href="/jarednova/jquery-total-storage/network" class="social-count">26</a>
        </li>


</ul>

              <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
                <span class="repo-label"><span>public</span></span>
                <span class="mega-octicon octicon-repo"></span>
                <span class="author vcard">
                  <a href="/jarednova" class="url fn" itemprop="url" rel="author">
                  <span itemprop="title">jarednova</span>
                  </a></span> /
                <strong><a href="/jarednova/jquery-total-storage" class="js-current-repository">jquery-total-storage</a></strong>
              </h1>
            </div>

            
  <ul class="tabs">
    <li class="pulse-nav"><a href="/jarednova/jquery-total-storage/pulse" class="js-selected-navigation-item " data-selected-links="pulse /jarednova/jquery-total-storage/pulse" rel="nofollow"><span class="octicon octicon-pulse"></span></a></li>
    <li><a href="/jarednova/jquery-total-storage" class="js-selected-navigation-item selected" data-selected-links="repo_source repo_downloads repo_commits repo_tags repo_branches /jarednova/jquery-total-storage">Code</a></li>
    <li><a href="/jarednova/jquery-total-storage/network" class="js-selected-navigation-item " data-selected-links="repo_network /jarednova/jquery-total-storage/network">Network</a></li>
    <li><a href="/jarednova/jquery-total-storage/pulls" class="js-selected-navigation-item " data-selected-links="repo_pulls /jarednova/jquery-total-storage/pulls">Pull Requests <span class='counter'>0</span></a></li>

      <li><a href="/jarednova/jquery-total-storage/issues" class="js-selected-navigation-item " data-selected-links="repo_issues /jarednova/jquery-total-storage/issues">Issues <span class='counter'>1</span></a></li>

      <li><a href="/jarednova/jquery-total-storage/wiki" class="js-selected-navigation-item " data-selected-links="repo_wiki /jarednova/jquery-total-storage/wiki">Wiki</a></li>


    <li><a href="/jarednova/jquery-total-storage/graphs" class="js-selected-navigation-item " data-selected-links="repo_graphs repo_contributors /jarednova/jquery-total-storage/graphs">Graphs</a></li>


  </ul>
  
<div class="tabnav">

  <span class="tabnav-right">
    <ul class="tabnav-tabs">
          <li><a href="/jarednova/jquery-total-storage/tags" class="js-selected-navigation-item tabnav-tab" data-selected-links="repo_tags /jarednova/jquery-total-storage/tags">Tags <span class="counter blank">0</span></a></li>
    </ul>
  </span>

  <div class="tabnav-widget scope">


    <div class="select-menu js-menu-container js-select-menu js-branch-menu">
      <a class="minibutton select-menu-button js-menu-target" data-hotkey="w" data-ref="master">
        <span class="octicon octicon-git-branch"></span>
        <i>branch:</i>
        <span class="js-select-button">master</span>
      </a>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container">

        <div class="select-menu-modal">
          <div class="select-menu-header">
            <span class="select-menu-title">Switch branches/tags</span>
            <span class="octicon octicon-remove-close js-menu-close"></span>
          </div> <!-- /.select-menu-header -->

          <div class="select-menu-filters">
            <div class="select-menu-text-filter">
              <input type="text" id="commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
            </div>
            <div class="select-menu-tabs">
              <ul>
                <li class="select-menu-tab">
                  <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
                </li>
                <li class="select-menu-tab">
                  <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
                </li>
              </ul>
            </div><!-- /.select-menu-tabs -->
          </div><!-- /.select-menu-filters -->

          <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket css-truncate" data-tab-filter="branches">

            <div data-filterable-for="commitish-filter-field" data-filterable-type="substring">

                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <a href="/jarednova/jquery-total-storage/blob/gh-pages/jquery.total-storage.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="gh-pages" rel="nofollow" title="gh-pages">gh-pages</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item selected">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <a href="/jarednova/jquery-total-storage/blob/master/jquery.total-storage.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="master" rel="nofollow" title="master">master</a>
                </div> <!-- /.select-menu-item -->
            </div>

              <div class="select-menu-no-results">Nothing to show</div>
          </div> <!-- /.select-menu-list -->


          <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket css-truncate" data-tab-filter="tags">
            <div data-filterable-for="commitish-filter-field" data-filterable-type="substring">

            </div>

            <div class="select-menu-no-results">Nothing to show</div>

          </div> <!-- /.select-menu-list -->

        </div> <!-- /.select-menu-modal -->
      </div> <!-- /.select-menu-modal-holder -->
    </div> <!-- /.select-menu -->

  </div> <!-- /.scope -->

  <ul class="tabnav-tabs">
    <li><a href="/jarednova/jquery-total-storage" class="selected js-selected-navigation-item tabnav-tab" data-selected-links="repo_source /jarednova/jquery-total-storage">Files</a></li>
    <li><a href="/jarednova/jquery-total-storage/commits/master" class="js-selected-navigation-item tabnav-tab" data-selected-links="repo_commits /jarednova/jquery-total-storage/commits/master">Commits</a></li>
    <li><a href="/jarednova/jquery-total-storage/branches" class="js-selected-navigation-item tabnav-tab" data-selected-links="repo_branches /jarednova/jquery-total-storage/branches" rel="nofollow">Branches <span class="counter ">2</span></a></li>
  </ul>

</div>

  
  
  


            
          </div>
        </div><!-- /.repohead -->

        <div id="js-repo-pjax-container" class="container context-loader-container" data-pjax-container>
          


<!-- blob contrib key: blob_contributors:v21:bea24a73970cf6beb4f18b6be7d00e29 -->
<!-- blob contrib frag key: views10/v8/blob_contributors:v21:bea24a73970cf6beb4f18b6be7d00e29 -->


<div id="slider">
    <div class="frame-meta">

      <p title="This is a placeholder element" class="js-history-link-replace hidden"></p>

        <div class="breadcrumb">
          <span class='bold'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/jarednova/jquery-total-storage" class="js-slide-to" data-branch="master" data-direction="back" itemscope="url"><span itemprop="title">jquery-total-storage</span></a></span></span><span class="separator"> / </span><strong class="final-path">jquery.total-storage.js</strong> <span class="js-zeroclipboard zeroclipboard-button" data-clipboard-text="jquery.total-storage.js" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
        </div>

      <a href="/jarednova/jquery-total-storage/find/master" class="js-slide-to" data-hotkey="t" style="display:none">Show File Finder</a>


        
  <div class="commit file-history-tease">
    <img class="main-avatar" height="24" src="https://secure.gravatar.com/avatar/a07e6571541147b9d8c85b96fa9125df?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
    <span class="author"><a href="/drench" rel="author">drench</a></span>
    <time class="js-relative-date" datetime="2013-06-01T15:03:35-07:00" title="2013-06-01 15:03:35">June 01, 2013</time>
    <div class="commit-title">
        <a href="/jarednova/jquery-total-storage/commit/45da0749da9c3b25cc4769118cf5f11b32121044" class="message">Trap localStorage errors when checking for support</a>
    </div>

    <div class="participation">
      <p class="quickstat"><a href="#blob_contributors_box" rel="facebox"><strong>4</strong> contributors</a></p>
          <a class="avatar tooltipped downwards" title="jarednova" href="/jarednova/jquery-total-storage/commits/master/jquery.total-storage.js?author=jarednova"><img height="20" src="https://secure.gravatar.com/avatar/cefc866df7a0bbff743f55cba999c51b?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="justinobney" href="/jarednova/jquery-total-storage/commits/master/jquery.total-storage.js?author=justinobney"><img height="20" src="https://secure.gravatar.com/avatar/4d19563e53052cab02ff46d06e1ccb92?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="nemesismonkey" href="/jarednova/jquery-total-storage/commits/master/jquery.total-storage.js?author=nemesismonkey"><img height="20" src="https://secure.gravatar.com/avatar/26c70b39146f3707bd3a4d9a7588181a?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="drench" href="/jarednova/jquery-total-storage/commits/master/jquery.total-storage.js?author=drench"><img height="20" src="https://secure.gravatar.com/avatar/a07e6571541147b9d8c85b96fa9125df?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>


    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list">
        <li class="facebox-user-list-item">
          <img height="24" src="https://secure.gravatar.com/avatar/cefc866df7a0bbff743f55cba999c51b?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/jarednova">jarednova</a>
        </li>
        <li class="facebox-user-list-item">
          <img height="24" src="https://secure.gravatar.com/avatar/4d19563e53052cab02ff46d06e1ccb92?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/justinobney">justinobney</a>
        </li>
        <li class="facebox-user-list-item">
          <img height="24" src="https://secure.gravatar.com/avatar/26c70b39146f3707bd3a4d9a7588181a?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/nemesismonkey">nemesismonkey</a>
        </li>
        <li class="facebox-user-list-item">
          <img height="24" src="https://secure.gravatar.com/avatar/a07e6571541147b9d8c85b96fa9125df?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/drench">drench</a>
        </li>
      </ul>
    </div>
  </div>


    </div><!-- ./.frame-meta -->

    <div class="frames">
      <div class="frame" data-permalink-url="/jarednova/jquery-total-storage/blob/99c6cf58a0206c79d0cddac07e4b77632ad01b3c/jquery.total-storage.js" data-title="jquery-total-storage/jquery.total-storage.js at master · jarednova/jquery-total-storage · GitHub" data-type="blob">

        <div id="files" class="bubble">
          <div class="file">
            <div class="meta">
              <div class="info">
                <span class="icon"><b class="octicon octicon-file-text"></b></span>
                <span class="mode" title="File Mode">file</span>
                  <span>179 lines (162 sloc)</span>
                <span>4.573 kb</span>
              </div>
              <div class="actions">
                <div class="button-group">
                        <a class="minibutton tooltipped leftwards"
                           title="Clicking this button will automatically fork this project so you can edit the file"
                           href="/jarednova/jquery-total-storage/edit/master/jquery.total-storage.js"
                           data-method="post" rel="nofollow">Edit</a>
                  <a href="/jarednova/jquery-total-storage/raw/master/jquery.total-storage.js" class="button minibutton " id="raw-url">Raw</a>
                    <a href="/jarednova/jquery-total-storage/blame/master/jquery.total-storage.js" class="button minibutton ">Blame</a>
                  <a href="/jarednova/jquery-total-storage/commits/master/jquery.total-storage.js" class="button minibutton " rel="nofollow">History</a>
                </div><!-- /.button-group -->
              </div><!-- /.actions -->

            </div>
                <div class="blob-wrapper data type-javascript js-blob-data">
      <table class="file-code file-diff">
        <tr class="file-code-line">
          <td class="blob-line-nums">
            <span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>
<span id="L12" rel="#L12">12</span>
<span id="L13" rel="#L13">13</span>
<span id="L14" rel="#L14">14</span>
<span id="L15" rel="#L15">15</span>
<span id="L16" rel="#L16">16</span>
<span id="L17" rel="#L17">17</span>
<span id="L18" rel="#L18">18</span>
<span id="L19" rel="#L19">19</span>
<span id="L20" rel="#L20">20</span>
<span id="L21" rel="#L21">21</span>
<span id="L22" rel="#L22">22</span>
<span id="L23" rel="#L23">23</span>
<span id="L24" rel="#L24">24</span>
<span id="L25" rel="#L25">25</span>
<span id="L26" rel="#L26">26</span>
<span id="L27" rel="#L27">27</span>
<span id="L28" rel="#L28">28</span>
<span id="L29" rel="#L29">29</span>
<span id="L30" rel="#L30">30</span>
<span id="L31" rel="#L31">31</span>
<span id="L32" rel="#L32">32</span>
<span id="L33" rel="#L33">33</span>
<span id="L34" rel="#L34">34</span>
<span id="L35" rel="#L35">35</span>
<span id="L36" rel="#L36">36</span>
<span id="L37" rel="#L37">37</span>
<span id="L38" rel="#L38">38</span>
<span id="L39" rel="#L39">39</span>
<span id="L40" rel="#L40">40</span>
<span id="L41" rel="#L41">41</span>
<span id="L42" rel="#L42">42</span>
<span id="L43" rel="#L43">43</span>
<span id="L44" rel="#L44">44</span>
<span id="L45" rel="#L45">45</span>
<span id="L46" rel="#L46">46</span>
<span id="L47" rel="#L47">47</span>
<span id="L48" rel="#L48">48</span>
<span id="L49" rel="#L49">49</span>
<span id="L50" rel="#L50">50</span>
<span id="L51" rel="#L51">51</span>
<span id="L52" rel="#L52">52</span>
<span id="L53" rel="#L53">53</span>
<span id="L54" rel="#L54">54</span>
<span id="L55" rel="#L55">55</span>
<span id="L56" rel="#L56">56</span>
<span id="L57" rel="#L57">57</span>
<span id="L58" rel="#L58">58</span>
<span id="L59" rel="#L59">59</span>
<span id="L60" rel="#L60">60</span>
<span id="L61" rel="#L61">61</span>
<span id="L62" rel="#L62">62</span>
<span id="L63" rel="#L63">63</span>
<span id="L64" rel="#L64">64</span>
<span id="L65" rel="#L65">65</span>
<span id="L66" rel="#L66">66</span>
<span id="L67" rel="#L67">67</span>
<span id="L68" rel="#L68">68</span>
<span id="L69" rel="#L69">69</span>
<span id="L70" rel="#L70">70</span>
<span id="L71" rel="#L71">71</span>
<span id="L72" rel="#L72">72</span>
<span id="L73" rel="#L73">73</span>
<span id="L74" rel="#L74">74</span>
<span id="L75" rel="#L75">75</span>
<span id="L76" rel="#L76">76</span>
<span id="L77" rel="#L77">77</span>
<span id="L78" rel="#L78">78</span>
<span id="L79" rel="#L79">79</span>
<span id="L80" rel="#L80">80</span>
<span id="L81" rel="#L81">81</span>
<span id="L82" rel="#L82">82</span>
<span id="L83" rel="#L83">83</span>
<span id="L84" rel="#L84">84</span>
<span id="L85" rel="#L85">85</span>
<span id="L86" rel="#L86">86</span>
<span id="L87" rel="#L87">87</span>
<span id="L88" rel="#L88">88</span>
<span id="L89" rel="#L89">89</span>
<span id="L90" rel="#L90">90</span>
<span id="L91" rel="#L91">91</span>
<span id="L92" rel="#L92">92</span>
<span id="L93" rel="#L93">93</span>
<span id="L94" rel="#L94">94</span>
<span id="L95" rel="#L95">95</span>
<span id="L96" rel="#L96">96</span>
<span id="L97" rel="#L97">97</span>
<span id="L98" rel="#L98">98</span>
<span id="L99" rel="#L99">99</span>
<span id="L100" rel="#L100">100</span>
<span id="L101" rel="#L101">101</span>
<span id="L102" rel="#L102">102</span>
<span id="L103" rel="#L103">103</span>
<span id="L104" rel="#L104">104</span>
<span id="L105" rel="#L105">105</span>
<span id="L106" rel="#L106">106</span>
<span id="L107" rel="#L107">107</span>
<span id="L108" rel="#L108">108</span>
<span id="L109" rel="#L109">109</span>
<span id="L110" rel="#L110">110</span>
<span id="L111" rel="#L111">111</span>
<span id="L112" rel="#L112">112</span>
<span id="L113" rel="#L113">113</span>
<span id="L114" rel="#L114">114</span>
<span id="L115" rel="#L115">115</span>
<span id="L116" rel="#L116">116</span>
<span id="L117" rel="#L117">117</span>
<span id="L118" rel="#L118">118</span>
<span id="L119" rel="#L119">119</span>
<span id="L120" rel="#L120">120</span>
<span id="L121" rel="#L121">121</span>
<span id="L122" rel="#L122">122</span>
<span id="L123" rel="#L123">123</span>
<span id="L124" rel="#L124">124</span>
<span id="L125" rel="#L125">125</span>
<span id="L126" rel="#L126">126</span>
<span id="L127" rel="#L127">127</span>
<span id="L128" rel="#L128">128</span>
<span id="L129" rel="#L129">129</span>
<span id="L130" rel="#L130">130</span>
<span id="L131" rel="#L131">131</span>
<span id="L132" rel="#L132">132</span>
<span id="L133" rel="#L133">133</span>
<span id="L134" rel="#L134">134</span>
<span id="L135" rel="#L135">135</span>
<span id="L136" rel="#L136">136</span>
<span id="L137" rel="#L137">137</span>
<span id="L138" rel="#L138">138</span>
<span id="L139" rel="#L139">139</span>
<span id="L140" rel="#L140">140</span>
<span id="L141" rel="#L141">141</span>
<span id="L142" rel="#L142">142</span>
<span id="L143" rel="#L143">143</span>
<span id="L144" rel="#L144">144</span>
<span id="L145" rel="#L145">145</span>
<span id="L146" rel="#L146">146</span>
<span id="L147" rel="#L147">147</span>
<span id="L148" rel="#L148">148</span>
<span id="L149" rel="#L149">149</span>
<span id="L150" rel="#L150">150</span>
<span id="L151" rel="#L151">151</span>
<span id="L152" rel="#L152">152</span>
<span id="L153" rel="#L153">153</span>
<span id="L154" rel="#L154">154</span>
<span id="L155" rel="#L155">155</span>
<span id="L156" rel="#L156">156</span>
<span id="L157" rel="#L157">157</span>
<span id="L158" rel="#L158">158</span>
<span id="L159" rel="#L159">159</span>
<span id="L160" rel="#L160">160</span>
<span id="L161" rel="#L161">161</span>
<span id="L162" rel="#L162">162</span>
<span id="L163" rel="#L163">163</span>
<span id="L164" rel="#L164">164</span>
<span id="L165" rel="#L165">165</span>
<span id="L166" rel="#L166">166</span>
<span id="L167" rel="#L167">167</span>
<span id="L168" rel="#L168">168</span>
<span id="L169" rel="#L169">169</span>
<span id="L170" rel="#L170">170</span>
<span id="L171" rel="#L171">171</span>
<span id="L172" rel="#L172">172</span>
<span id="L173" rel="#L173">173</span>
<span id="L174" rel="#L174">174</span>
<span id="L175" rel="#L175">175</span>
<span id="L176" rel="#L176">176</span>
<span id="L177" rel="#L177">177</span>
<span id="L178" rel="#L178">178</span>

          </td>
          <td class="blob-line-code">
                  <div class="highlight"><pre><div class='line' id='LC1'><span class="cm">/**</span></div><div class='line' id='LC2'><span class="cm"> * TotalStorage</span></div><div class='line' id='LC3'><span class="cm"> *</span></div><div class='line' id='LC4'><span class="cm"> * Copyright (c) 2012 Jared Novack &amp; Upstatement (upstatement.com)</span></div><div class='line' id='LC5'><span class="cm"> * Dual licensed under the MIT and GPL licenses:</span></div><div class='line' id='LC6'><span class="cm"> * http://www.opensource.org/licenses/mit-license.php</span></div><div class='line' id='LC7'><span class="cm"> * http://www.gnu.org/licenses/gpl.html</span></div><div class='line' id='LC8'><span class="cm"> *</span></div><div class='line' id='LC9'><span class="cm"> * Total Storage is the conceptual the love child of jStorage by Andris Reinman, </span></div><div class='line' id='LC10'><span class="cm"> * and Cookie by Klaus Hartl -- though this is not connected to either project.</span></div><div class='line' id='LC11'><span class="cm"> */</span></div><div class='line' id='LC12'><br/></div><div class='line' id='LC13'><span class="cm">/**</span></div><div class='line' id='LC14'><span class="cm"> * Create a local storage parameter</span></div><div class='line' id='LC15'><span class="cm"> *</span></div><div class='line' id='LC16'><span class="cm"> == What makes it TOTAL Storage? ==</span></div><div class='line' id='LC17'><span class="cm"> </span></div><div class='line' id='LC18'><span class="cm"> * The browser doesn&#39;t support local storage it will fall-back to cookies! (Using the</span></div><div class='line' id='LC19'><span class="cm">   wonderful $.cookie plugin).</span></div><div class='line' id='LC20'><span class="cm"> * Send it strings, numbers even complex object arrays! TotalStorage does not care.</span></div><div class='line' id='LC21'><span class="cm">   Your efforts to defeat it will prove futile. </span></div><div class='line' id='LC22'><span class="cm"> * Simple as shit. jStorage and some other very well-written plugins provide a bevy of</span></div><div class='line' id='LC23'><span class="cm">   options for expiration, security and so forth. Frequently this is more power than you</span></div><div class='line' id='LC24'><span class="cm">   need and vulnerable to confusion if you&#39;re just want it to work (JWITW)</span></div><div class='line' id='LC25'><span class="cm">   </span></div><div class='line' id='LC26'><span class="cm"> * @desc Set the value of a key to a string</span></div><div class='line' id='LC27'><span class="cm"> * @example $.totalStorage(&#39;the_key&#39;, &#39;the_value&#39;);</span></div><div class='line' id='LC28'><span class="cm"> * @desc Set the value of a key to a number</span></div><div class='line' id='LC29'><span class="cm"> * @example $.totalStorage(&#39;the_key&#39;, 800.2);</span></div><div class='line' id='LC30'><span class="cm"> * @desc Set the value of a key to a complex Array</span></div><div class='line' id='LC31'><span class="cm"> * @example	var myArray = new Array();</span></div><div class='line' id='LC32'><span class="cm"> *			myArray.push({name:&#39;Jared&#39;, company:&#39;Upstatement&#39;, zip:63124});</span></div><div class='line' id='LC33'><span class="cm">			myArray.push({name:&#39;McGruff&#39;, company:&#39;Police&#39;, zip:60652};</span></div><div class='line' id='LC34'><span class="cm">			$.totalStorage(&#39;people&#39;, myArray);</span></div><div class='line' id='LC35'><span class="cm">			//to return:</span></div><div class='line' id='LC36'><span class="cm">			$.totalStorage(&#39;people&#39;);</span></div><div class='line' id='LC37'><span class="cm"> *</span></div><div class='line' id='LC38'><span class="cm"> * @name $.totalStorage</span></div><div class='line' id='LC39'><span class="cm"> * @cat Plugins/Cookie</span></div><div class='line' id='LC40'><span class="cm"> * @author Jared Novack/jared@upstatement.com</span></div><div class='line' id='LC41'><span class="cm"> * @version 1.1.2</span></div><div class='line' id='LC42'><span class="cm"> * @url http://upstatement.com/blog/2012/01/jquery-local-storage-done-right-and-easy/</span></div><div class='line' id='LC43'><span class="cm"> */</span></div><div class='line' id='LC44'><br/></div><div class='line' id='LC45'><span class="p">;(</span><span class="kd">function</span><span class="p">(</span><span class="nx">$</span><span class="p">,</span> <span class="kc">undefined</span><span class="p">){</span></div><div class='line' id='LC46'><br/></div><div class='line' id='LC47'>	<span class="cm">/* Variables I&#39;ll need throghout */</span></div><div class='line' id='LC48'><br/></div><div class='line' id='LC49'>	<span class="kd">var</span> <span class="nx">supported</span><span class="p">,</span> <span class="nx">ls</span><span class="p">;</span></div><div class='line' id='LC50'>	<span class="k">if</span> <span class="p">(</span><span class="s1">&#39;localStorage&#39;</span> <span class="k">in</span> <span class="nb">window</span><span class="p">){</span></div><div class='line' id='LC51'>		<span class="k">try</span> <span class="p">{</span></div><div class='line' id='LC52'>			<span class="nx">ls</span> <span class="o">=</span> <span class="p">(</span><span class="k">typeof</span> <span class="nb">window</span><span class="p">.</span><span class="nx">localStorage</span> <span class="o">===</span> <span class="s1">&#39;undefined&#39;</span><span class="p">)</span> <span class="o">?</span> <span class="kc">undefined</span> <span class="o">:</span> <span class="nb">window</span><span class="p">.</span><span class="nx">localStorage</span><span class="p">;</span></div><div class='line' id='LC53'>			<span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">ls</span> <span class="o">==</span> <span class="s1">&#39;undefined&#39;</span> <span class="o">||</span> <span class="k">typeof</span> <span class="nb">window</span><span class="p">.</span><span class="nx">JSON</span> <span class="o">==</span> <span class="s1">&#39;undefined&#39;</span><span class="p">){</span></div><div class='line' id='LC54'>				<span class="nx">supported</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC55'>			<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC56'>				<span class="nx">supported</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC57'>			<span class="p">}</span></div><div class='line' id='LC58'>		<span class="p">}</span></div><div class='line' id='LC59'>		<span class="k">catch</span> <span class="p">(</span><span class="nx">err</span><span class="p">){</span></div><div class='line' id='LC60'>			<span class="nx">supported</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC61'>		<span class="p">}</span></div><div class='line' id='LC62'>	<span class="p">}</span></div><div class='line' id='LC63'><br/></div><div class='line' id='LC64'>	<span class="cm">/* Make the methods public */</span></div><div class='line' id='LC65'><br/></div><div class='line' id='LC66'>	<span class="nx">$</span><span class="p">.</span><span class="nx">totalStorage</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">key</span><span class="p">,</span> <span class="nx">value</span><span class="p">,</span> <span class="nx">options</span><span class="p">){</span></div><div class='line' id='LC67'>		<span class="k">return</span> <span class="nx">$</span><span class="p">.</span><span class="nx">totalStorage</span><span class="p">.</span><span class="nx">impl</span><span class="p">.</span><span class="nx">init</span><span class="p">(</span><span class="nx">key</span><span class="p">,</span> <span class="nx">value</span><span class="p">);</span></div><div class='line' id='LC68'>	<span class="p">};</span></div><div class='line' id='LC69'><br/></div><div class='line' id='LC70'>	<span class="nx">$</span><span class="p">.</span><span class="nx">totalStorage</span><span class="p">.</span><span class="nx">setItem</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">key</span><span class="p">,</span> <span class="nx">value</span><span class="p">){</span></div><div class='line' id='LC71'>		<span class="k">return</span> <span class="nx">$</span><span class="p">.</span><span class="nx">totalStorage</span><span class="p">.</span><span class="nx">impl</span><span class="p">.</span><span class="nx">setItem</span><span class="p">(</span><span class="nx">key</span><span class="p">,</span> <span class="nx">value</span><span class="p">);</span></div><div class='line' id='LC72'>	<span class="p">};</span></div><div class='line' id='LC73'><br/></div><div class='line' id='LC74'>	<span class="nx">$</span><span class="p">.</span><span class="nx">totalStorage</span><span class="p">.</span><span class="nx">getItem</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">key</span><span class="p">){</span></div><div class='line' id='LC75'>		<span class="k">return</span> <span class="nx">$</span><span class="p">.</span><span class="nx">totalStorage</span><span class="p">.</span><span class="nx">impl</span><span class="p">.</span><span class="nx">getItem</span><span class="p">(</span><span class="nx">key</span><span class="p">);</span></div><div class='line' id='LC76'>	<span class="p">};</span></div><div class='line' id='LC77'><br/></div><div class='line' id='LC78'>	<span class="nx">$</span><span class="p">.</span><span class="nx">totalStorage</span><span class="p">.</span><span class="nx">getAll</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(){</span></div><div class='line' id='LC79'>		<span class="k">return</span> <span class="nx">$</span><span class="p">.</span><span class="nx">totalStorage</span><span class="p">.</span><span class="nx">impl</span><span class="p">.</span><span class="nx">getAll</span><span class="p">();</span></div><div class='line' id='LC80'>	<span class="p">};</span></div><div class='line' id='LC81'><br/></div><div class='line' id='LC82'>	<span class="nx">$</span><span class="p">.</span><span class="nx">totalStorage</span><span class="p">.</span><span class="nx">deleteItem</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">key</span><span class="p">){</span></div><div class='line' id='LC83'>		<span class="k">return</span> <span class="nx">$</span><span class="p">.</span><span class="nx">totalStorage</span><span class="p">.</span><span class="nx">impl</span><span class="p">.</span><span class="nx">deleteItem</span><span class="p">(</span><span class="nx">key</span><span class="p">);</span></div><div class='line' id='LC84'>	<span class="p">};</span></div><div class='line' id='LC85'><br/></div><div class='line' id='LC86'>	<span class="cm">/* Object to hold all methods: public and private */</span></div><div class='line' id='LC87'><br/></div><div class='line' id='LC88'>	<span class="nx">$</span><span class="p">.</span><span class="nx">totalStorage</span><span class="p">.</span><span class="nx">impl</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC89'><br/></div><div class='line' id='LC90'>		<span class="nx">init</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">key</span><span class="p">,</span> <span class="nx">value</span><span class="p">){</span></div><div class='line' id='LC91'>			<span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">value</span> <span class="o">!=</span> <span class="s1">&#39;undefined&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC92'>				<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">setItem</span><span class="p">(</span><span class="nx">key</span><span class="p">,</span> <span class="nx">value</span><span class="p">);</span></div><div class='line' id='LC93'>			<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC94'>				<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">getItem</span><span class="p">(</span><span class="nx">key</span><span class="p">);</span></div><div class='line' id='LC95'>			<span class="p">}</span></div><div class='line' id='LC96'>		<span class="p">},</span></div><div class='line' id='LC97'><br/></div><div class='line' id='LC98'>		<span class="nx">setItem</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">key</span><span class="p">,</span> <span class="nx">value</span><span class="p">){</span></div><div class='line' id='LC99'>			<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">supported</span><span class="p">){</span></div><div class='line' id='LC100'>				<span class="k">try</span> <span class="p">{</span></div><div class='line' id='LC101'>					<span class="nx">$</span><span class="p">.</span><span class="nx">cookie</span><span class="p">(</span><span class="nx">key</span><span class="p">,</span> <span class="nx">value</span><span class="p">);</span></div><div class='line' id='LC102'>					<span class="k">return</span> <span class="nx">value</span><span class="p">;</span></div><div class='line' id='LC103'>				<span class="p">}</span> <span class="k">catch</span><span class="p">(</span><span class="nx">e</span><span class="p">){</span></div><div class='line' id='LC104'>					<span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="s1">&#39;Local Storage not supported by this browser. Install the cookie plugin on your site to take advantage of the same functionality. You can get it at https://github.com/carhartl/jquery-cookie&#39;</span><span class="p">);</span></div><div class='line' id='LC105'>				<span class="p">}</span></div><div class='line' id='LC106'>			<span class="p">}</span></div><div class='line' id='LC107'>			<span class="kd">var</span> <span class="nx">saver</span> <span class="o">=</span> <span class="nx">JSON</span><span class="p">.</span><span class="nx">stringify</span><span class="p">(</span><span class="nx">value</span><span class="p">);</span></div><div class='line' id='LC108'>			<span class="nx">ls</span><span class="p">.</span><span class="nx">setItem</span><span class="p">(</span><span class="nx">key</span><span class="p">,</span> <span class="nx">saver</span><span class="p">);</span></div><div class='line' id='LC109'>			<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">parseResult</span><span class="p">(</span><span class="nx">saver</span><span class="p">);</span></div><div class='line' id='LC110'>		<span class="p">},</span></div><div class='line' id='LC111'>		<span class="nx">getItem</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">key</span><span class="p">){</span></div><div class='line' id='LC112'>			<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">supported</span><span class="p">){</span></div><div class='line' id='LC113'>				<span class="k">try</span> <span class="p">{</span></div><div class='line' id='LC114'>					<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">parseResult</span><span class="p">(</span><span class="nx">$</span><span class="p">.</span><span class="nx">cookie</span><span class="p">(</span><span class="nx">key</span><span class="p">));</span></div><div class='line' id='LC115'>				<span class="p">}</span> <span class="k">catch</span><span class="p">(</span><span class="nx">e</span><span class="p">){</span></div><div class='line' id='LC116'>					<span class="k">return</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC117'>				<span class="p">}</span></div><div class='line' id='LC118'>			<span class="p">}</span></div><div class='line' id='LC119'>			<span class="kd">var</span> <span class="nx">item</span> <span class="o">=</span> <span class="nx">ls</span><span class="p">.</span><span class="nx">getItem</span><span class="p">(</span><span class="nx">key</span><span class="p">);</span></div><div class='line' id='LC120'>			<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">parseResult</span><span class="p">(</span><span class="nx">item</span><span class="p">);</span></div><div class='line' id='LC121'>		<span class="p">},</span></div><div class='line' id='LC122'>		<span class="nx">deleteItem</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">key</span><span class="p">){</span></div><div class='line' id='LC123'>			<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">supported</span><span class="p">){</span></div><div class='line' id='LC124'>				<span class="k">try</span> <span class="p">{</span></div><div class='line' id='LC125'>					<span class="nx">$</span><span class="p">.</span><span class="nx">cookie</span><span class="p">(</span><span class="nx">key</span><span class="p">,</span> <span class="kc">null</span><span class="p">);</span></div><div class='line' id='LC126'>					<span class="k">return</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC127'>				<span class="p">}</span> <span class="k">catch</span><span class="p">(</span><span class="nx">e</span><span class="p">){</span></div><div class='line' id='LC128'>					<span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC129'>				<span class="p">}</span></div><div class='line' id='LC130'>			<span class="p">}</span></div><div class='line' id='LC131'>			<span class="nx">ls</span><span class="p">.</span><span class="nx">removeItem</span><span class="p">(</span><span class="nx">key</span><span class="p">);</span></div><div class='line' id='LC132'>			<span class="k">return</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC133'>		<span class="p">},</span></div><div class='line' id='LC134'>		<span class="nx">getAll</span><span class="o">:</span> <span class="kd">function</span><span class="p">(){</span></div><div class='line' id='LC135'>			<span class="kd">var</span> <span class="nx">items</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC136'>			<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">supported</span><span class="p">){</span></div><div class='line' id='LC137'>				<span class="k">try</span> <span class="p">{</span></div><div class='line' id='LC138'>					<span class="kd">var</span> <span class="nx">pairs</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nx">cookie</span><span class="p">.</span><span class="nx">split</span><span class="p">(</span><span class="s2">&quot;;&quot;</span><span class="p">);</span></div><div class='line' id='LC139'>					<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span><span class="o">&lt;</span><span class="nx">pairs</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">){</span></div><div class='line' id='LC140'>						<span class="kd">var</span> <span class="nx">pair</span> <span class="o">=</span> <span class="nx">pairs</span><span class="p">[</span><span class="nx">i</span><span class="p">].</span><span class="nx">split</span><span class="p">(</span><span class="s1">&#39;=&#39;</span><span class="p">);</span></div><div class='line' id='LC141'>						<span class="kd">var</span> <span class="nx">key</span> <span class="o">=</span> <span class="nx">pair</span><span class="p">[</span><span class="mi">0</span><span class="p">];</span></div><div class='line' id='LC142'>						<span class="nx">items</span><span class="p">.</span><span class="nx">push</span><span class="p">({</span><span class="nx">key</span><span class="o">:</span><span class="nx">key</span><span class="p">,</span> <span class="nx">value</span><span class="o">:</span><span class="k">this</span><span class="p">.</span><span class="nx">parseResult</span><span class="p">(</span><span class="nx">$</span><span class="p">.</span><span class="nx">cookie</span><span class="p">(</span><span class="nx">key</span><span class="p">))});</span></div><div class='line' id='LC143'>					<span class="p">}</span></div><div class='line' id='LC144'>				<span class="p">}</span> <span class="k">catch</span><span class="p">(</span><span class="nx">e</span><span class="p">){</span></div><div class='line' id='LC145'>					<span class="k">return</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC146'>				<span class="p">}</span></div><div class='line' id='LC147'>			<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC148'>				<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">j</span> <span class="k">in</span> <span class="nx">ls</span><span class="p">){</span></div><div class='line' id='LC149'>					<span class="k">if</span> <span class="p">(</span><span class="nx">j</span><span class="p">.</span><span class="nx">length</span><span class="p">){</span></div><div class='line' id='LC150'>						<span class="nx">items</span><span class="p">.</span><span class="nx">push</span><span class="p">({</span><span class="nx">key</span><span class="o">:</span><span class="nx">j</span><span class="p">,</span> <span class="nx">value</span><span class="o">:</span><span class="k">this</span><span class="p">.</span><span class="nx">parseResult</span><span class="p">(</span><span class="nx">ls</span><span class="p">.</span><span class="nx">getItem</span><span class="p">(</span><span class="nx">j</span><span class="p">))});</span></div><div class='line' id='LC151'>					<span class="p">}</span></div><div class='line' id='LC152'>				<span class="p">}</span></div><div class='line' id='LC153'>			<span class="p">}</span></div><div class='line' id='LC154'>			<span class="k">return</span> <span class="nx">items</span><span class="p">;</span></div><div class='line' id='LC155'>		<span class="p">},</span></div><div class='line' id='LC156'>		<span class="nx">parseResult</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">res</span><span class="p">){</span></div><div class='line' id='LC157'>			<span class="kd">var</span> <span class="nx">ret</span><span class="p">;</span></div><div class='line' id='LC158'>			<span class="k">try</span> <span class="p">{</span></div><div class='line' id='LC159'>				<span class="nx">ret</span> <span class="o">=</span> <span class="nx">JSON</span><span class="p">.</span><span class="nx">parse</span><span class="p">(</span><span class="nx">res</span><span class="p">);</span></div><div class='line' id='LC160'>				<span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">ret</span> <span class="o">==</span> <span class="s1">&#39;undefined&#39;</span><span class="p">){</span></div><div class='line' id='LC161'>					<span class="nx">ret</span> <span class="o">=</span> <span class="nx">res</span><span class="p">;</span></div><div class='line' id='LC162'>				<span class="p">}</span></div><div class='line' id='LC163'>				<span class="k">if</span> <span class="p">(</span><span class="nx">ret</span> <span class="o">==</span> <span class="s1">&#39;true&#39;</span><span class="p">){</span></div><div class='line' id='LC164'>					<span class="nx">ret</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC165'>				<span class="p">}</span></div><div class='line' id='LC166'>				<span class="k">if</span> <span class="p">(</span><span class="nx">ret</span> <span class="o">==</span> <span class="s1">&#39;false&#39;</span><span class="p">){</span></div><div class='line' id='LC167'>					<span class="nx">ret</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC168'>				<span class="p">}</span></div><div class='line' id='LC169'>				<span class="k">if</span> <span class="p">(</span><span class="nb">parseFloat</span><span class="p">(</span><span class="nx">ret</span><span class="p">)</span> <span class="o">==</span> <span class="nx">ret</span> <span class="o">&amp;&amp;</span> <span class="k">typeof</span> <span class="nx">ret</span> <span class="o">!=</span> <span class="s2">&quot;object&quot;</span><span class="p">){</span></div><div class='line' id='LC170'>					<span class="nx">ret</span> <span class="o">=</span> <span class="nb">parseFloat</span><span class="p">(</span><span class="nx">ret</span><span class="p">);</span></div><div class='line' id='LC171'>				<span class="p">}</span></div><div class='line' id='LC172'>			<span class="p">}</span> <span class="k">catch</span><span class="p">(</span><span class="nx">e</span><span class="p">){</span></div><div class='line' id='LC173'>				<span class="nx">ret</span> <span class="o">=</span> <span class="nx">res</span><span class="p">;</span></div><div class='line' id='LC174'>			<span class="p">}</span></div><div class='line' id='LC175'>			<span class="k">return</span> <span class="nx">ret</span><span class="p">;</span></div><div class='line' id='LC176'>		<span class="p">}</span></div><div class='line' id='LC177'>	<span class="p">};</span></div><div class='line' id='LC178'><span class="p">})(</span><span class="nx">jQuery</span><span class="p">);</span></div></pre></div>
          </td>
        </tr>
      </table>
  </div>

          </div>
        </div>

        <a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" class="js-jump-to-line" style="display:none">Jump to Line</a>
        <div id="jump-to-line" style="display:none">
          <form accept-charset="UTF-8" class="js-jump-to-line-form">
            <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;">
            <button type="submit" class="button">Go</button>
          </form>
        </div>

      </div>
    </div>
</div>

<div id="js-frame-loading-template" class="frame frame-loading large-loading-area" style="display:none;">
  <img class="js-frame-loading-spinner" src="https://a248.e.akamai.net/assets.github.com/images/spinners/octocat-spinner-128.gif" height="64" width="64">
</div>


        </div>
      </div>
      <div class="modal-backdrop"></div>
    </div>

      <div id="footer-push"></div><!-- hack for sticky footer -->
    </div><!-- end of wrapper - hack for sticky footer -->

      <!-- footer -->
      <div id="footer">
  <div class="container clearfix">

      <dl class="footer_nav">
        <dt>GitHub</dt>
        <dd><a href="/about">About us</a></dd>
        <dd><a href="/blog">Blog</a></dd>
        <dd><a href="/contact">Contact &amp; support</a></dd>
        <dd><a href="http://enterprise.github.com/">GitHub Enterprise</a></dd>
        <dd><a href="http://status.github.com/">Site status</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>Applications</dt>
        <dd><a href="http://mac.github.com/">GitHub for Mac</a></dd>
        <dd><a href="http://windows.github.com/">GitHub for Windows</a></dd>
        <dd><a href="http://eclipse.github.com/">GitHub for Eclipse</a></dd>
        <dd><a href="http://mobile.github.com/">GitHub mobile apps</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>Services</dt>
        <dd><a href="http://get.gaug.es/">Gauges: Web analytics</a></dd>
        <dd><a href="http://speakerdeck.com">Speaker Deck: Presentations</a></dd>
        <dd><a href="https://gist.github.com">Gist: Code snippets</a></dd>
        <dd><a href="http://jobs.github.com/">Job board</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>Documentation</dt>
        <dd><a href="http://help.github.com/">GitHub Help</a></dd>
        <dd><a href="http://developer.github.com/">Developer API</a></dd>
        <dd><a href="http://github.github.com/github-flavored-markdown/">GitHub Flavored Markdown</a></dd>
        <dd><a href="http://pages.github.com/">GitHub Pages</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>More</dt>
        <dd><a href="http://training.github.com/">Training</a></dd>
        <dd><a href="/edu">Students &amp; teachers</a></dd>
        <dd><a href="http://shop.github.com">The Shop</a></dd>
        <dd><a href="/plans">Plans &amp; pricing</a></dd>
        <dd><a href="http://octodex.github.com/">The Octodex</a></dd>
      </dl>

      <hr class="footer-divider">


    <p class="right">&copy; 2013 <span title="0.12566s from fe17.rs.github.com">GitHub</span>, Inc. All rights reserved.</p>
    <a class="left" href="/">
      <span class="mega-octicon octicon-mark-github"></span>
    </a>
    <ul id="legal">
        <li><a href="/site/terms">Terms of Service</a></li>
        <li><a href="/site/privacy">Privacy</a></li>
        <li><a href="/security">Security</a></li>
    </ul>

  </div><!-- /.container -->

</div><!-- /.#footer -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-fullscreen-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="js-fullscreen-contents" placeholder="" data-suggester="fullscreen_suggester"></textarea>
          <div class="suggester-container">
              <div class="suggester fullscreen-suggester js-navigation-container" id="fullscreen_suggester"
                 data-url="/jarednova/jquery-total-storage/suggestions/commit">
              </div>
          </div>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped leftwards" title="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped leftwards"
      title="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-remove-close close ajax-error-dismiss"></a>
      Something went wrong with that request. Please try again.
    </div>

    
    <span id='server_response_time' data-time='0.12616' data-host='fe17'></span>
    
  </body>
</html>

