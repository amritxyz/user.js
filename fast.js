/*** PERFORMANCE CORE ********************************************/

/** Rendering (GPU) **/
user_pref("gfx.webrender.all", true);
user_pref("gfx.content.skia-font-cache-size", 32);
user_pref("browser.display.use_system_colors", false);

/** Image & Canvas **/
user_pref("image.mem.decode_bytes_at_a_time", 32768);
user_pref("gfx.canvas.accelerated.cache-items", 32768);
user_pref("gfx.canvas.accelerated.cache-size", 4096);

/** Networking **/
user_pref("network.http.max-connections", 500);
user_pref("network.http.max-persistent-connections-per-server", 8);
user_pref("network.http.max-urgent-start-excessive-connections-per-host", 3);
user_pref("network.http.request.max-start-delay", 5);

/** DNS cache **/
user_pref("network.dnsCacheEntries", 2000);
user_pref("network.dnsCacheExpiration", 900);


/** LOCATION BAR / SEARCH BAR / SUGGESTIONS / HISTORY / FORMS ***/
user_pref("browser.urlbar.quicksuggest.enabled", false); // [FF92+]
user_pref("browser.urlbar.suggest.quicksuggest.nonsponsored", false); // [FF95+]
user_pref("browser.urlbar.suggest.quicksuggest.sponsored", false); // [FF92+]
user_pref("browser.search.suggest.enabled", false);
user_pref("browser.urlbar.suggest.searches", false);
user_pref("browser.urlbar.trending.featureGate", false);
user_pref("browser.urlbar.addons.featureGate", false); // [FF115+]
user_pref("browser.urlbar.fakespot.featureGate", false); // [FF130+] [DEFAULT: false]
user_pref("browser.urlbar.mdn.featureGate", false); // [FF117+] [HIDDEN PREF]
user_pref("browser.urlbar.pocket.featureGate", false); // [FF116+] [DEFAULT: false]
user_pref("browser.urlbar.weather.featureGate", false); // [FF108+] [DEFAULT: false]
user_pref("browser.urlbar.yelp.featureGate", false); // [FF124+]
user_pref("browser.urlbar.showSearchTerms.enabled", false);
user_pref("browser.formfill.enable", false);
user_pref("browser.search.separatePrivateDefault", true); // [FF70+]
user_pref("browser.search.separatePrivateDefault.ui.enabled", true); // [FF71+]

/** Speculative Connections OFF **/
user_pref("browser.urlbar.speculativeConnect.enabled", false);
user_pref("browser.places.speculativeConnect.enabled", false);
user_pref("network.http.speculative-parallel-limit", 0);
user_pref("network.prefetch-next", false);
user_pref("network.predictor.enabled", false);
user_pref("network.dns.disablePrefetch", true);
user_pref("network.dns.disablePrefetchFromHTTPS", true);

/** Memory / Disk Caching **/
user_pref("browser.cache.disk.enable", false);
user_pref("browser.cache.memory.capacity", 131072);
user_pref("browser.cache.memory.max_entry_size", 20480);

/** Media Performance **/
user_pref("media.memory_cache_max_size", 65536);
user_pref("media.memory_caches_combined_limit_kb", 256000);
user_pref("media.cache_readahead_limit", 120);
user_pref("media.cache_resume_threshold", 60);

/** Session History **/
user_pref("browser.sessionhistory.max_total_viewers", -1);
user_pref("browser.sessionstore.max_tabs_undo", 10);


/*** DEBLOAT & DISABLE CRAP **************************************/

/** UI Crap **/
user_pref("browser.uidensity", 2);
user_pref("browser.tabs.firefox-view", false);
user_pref("browser.chrome.site_icons", false);

/** New Tab / Home Bloat **/
user_pref("browser.newtabpage.enabled", false);
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);
user_pref("browser.newtabpage.activity-stream.feeds.topsites", false);
user_pref("browser.newtabpage.activity-stream.showSearch", false);
user_pref("browser.newtabpage.activity-stream.section.highlights.includeBookmarks", false);
user_pref("browser.newtabpage.activity-stream.section.highlights.includeDownloads", false);
user_pref("browser.newtabpage.activity-stream.section.highlights.includeVisited", false);
user_pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false);
user_pref("browser.newtabpage.activity-stream.showMosaicOptOut", true);
user_pref("browser.newtabpage.activity-stream.supportUrl", "");
user_pref("browser.newtabpage.activity-stream.showSponsored", false);
user_pref("browser.urlbar.recentsearches.featureGate", false);
user_pref("browser.urlbar.clipboard.featureGate", false);

/** Disable ML/AI/Chat **/
user_pref("browser.ml.chat.enabled", false);
user_pref("browser.ml.chat.shortcuts", false);
user_pref("browser.ml.chat.sidebar", false);

/** Disable Pocket **/
user_pref("extensions.pocket.enabled", false);

/** Disable Firefox Accounts / Sync **/
user_pref("identity.fxaccounts.enabled", false);

/** Disable Search Suggestions / URL Bar bloat **/
user_pref("browser.urlbar.suggest.history", false);
user_pref("browser.urlbar.suggest.bookmark", false);
user_pref("browser.urlbar.suggest.openpage", false);
user_pref("browser.urlbar.suggest.topsites", false); // [FF78+]
user_pref("browser.urlbar.suggest.weather", false);
user_pref("browser.urlbar.suggest.engines", false);
user_pref("browser.urlbar.suggest.quickactions", false);
user_pref("browser.urlbar.shortcuts.bookmarks", false);
user_pref("browser.urlbar.shortcuts.history", false);
user_pref("browser.urlbar.shortcuts.tabs", false);
user_pref("browser.urlbar.shortcuts.actions", false);

/** Disable Form Autofill **/
user_pref("extensions.formautofill.addresses.enabled", false);
user_pref("extensions.formautofill.creditCards.enabled", false);

/** Disable Password Manager **/
user_pref("signon.rememberSignons", false);
user_pref("signon.autofillForms", false);

/** Disable Normandy / Recommendations **/
user_pref("browser.discovery.enabled", false);
user_pref("app.normandy.enabled", false);
user_pref("app.normandy.api_url", "");
user_pref("extensions.getAddons.showPane", false); // [HIDDEN PREF]
user_pref("extensions.htmlaboutaddons.recommendations.enabled", false);
user_pref("browser.shopping.experience2023.enabled", false); // [DEFAULT: false]

/** Disable Telemetry **/
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.server", "");
user_pref("toolkit.telemetry.newProfilePing.enabled", false); // [FF55+]
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false); // [FF55+]
user_pref("toolkit.telemetry.updatePing.enabled", false); // [FF56+]
user_pref("toolkit.telemetry.bhrPing.enabled", false); // [FF57+] Background Hang Reporter
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false); // [FF57+]
user_pref("toolkit.telemetry.coverage.opt-out", true); // [HIDDEN PREF]
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
user_pref("browser.newtabpage.activity-stream.telemetry", false);
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("app.shield.optoutstudies.enabled", false);

/** Reporting **/
user_pref("browser.tabs.crashReporting.sendReport", false); // [FF44+]
user_pref("browser.crashReports.unsubmittedCheck.autoSubmit2", false); // [DEFAULT: false]

/** Disable Safe Browsing Remote Checks (keep local protections) **/
user_pref("browser.safebrowsing.downloads.remote.enabled", false);

/** Disable UITour & misc marketing **/
user_pref("browser.uitour.enabled", false);

/** Disable content analysis (anti-keystroke scanning) **/
user_pref("browser.contentanalysis.enabled", false);

/** Misc cleanup **/
user_pref("permissions.manager.defaultsUrl", "");
user_pref("network.IDN_show_punycode", true);


/*** SECURITY (does not reduce performance) ***********************/
user_pref("dom.security.https_only_mode", true);
user_pref("security.ssl.require_safe_negotiation", true);
user_pref("security.cert_pinning.enforcement_level", 2);


/*** DOWNLOADS ****************************************************/
user_pref("browser.download.useDownloadDir", false);
user_pref("browser.download.alwaysOpenPanel", false);


/*** FINAL MISC ***************************************************/
user_pref("browser.startup.page", 0);
user_pref("browser.startup.homepage", "about:blank");
user_pref("browser.aboutConfig.showWarning", false);


/*** Web content font scaling ***************************************************/
/* Global UI + font scaling */
user_pref("layout.css.devPixelsPerPx", "1.10");

/* Monospace (code, devtools, terminals) */
user_pref("font.size.monospace.x-western", 15);
user_pref("font.size.fixed.x-western", 15);

/* Variable-width (web text) */
user_pref("font.size.variable.x-western", 18);

/* Minimum readable size (safety net, not body text) */
user_pref("font.minimum-size.x-western", 13);

/* Allow website fonts */
user_pref("browser.display.use_document_fonts", 1);

/* Keep site-specific zoom */
user_pref("browser.zoom.siteSpecific", true);
