/** Normal **/
user_pref("browser.uidensity", 1); // 0 = default, 1 = compact, 2 = touch
user_pref("extensions.pocket.enabled", false); // Pocket Account [FF46+]
user_pref("identity.fxaccounts.enabled", false); // Firefox Accounts & Sync [FF60+] [RESTART]
user_pref("browser.tabs.firefox-view", false); // Firefox-view
user_pref("browser.chrome.site_icons", false); // Favicons
user_pref("browser.shell.checkDefaultBrowser", false);

/** Disable location bar suggestion types **/
user_pref("browser.urlbar.suggest.history", false);
user_pref("browser.urlbar.suggest.bookmark", false);
user_pref("browser.urlbar.suggest.openpage", false);
user_pref("browser.urlbar.suggest.topsites", false); // [FF78+]
user_pref("browser.urlbar.suggest.weather", false);
user_pref("browser.urlbar.suggest.engines", false);

/** FIREFOX HOME CONTENT **/
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false); // Recommended by Pocket
user_pref("browser.newtabpage.activity-stream.section.highlights.includePocket", false);
user_pref("browser.newtabpage.activity-stream.feeds.topsites", false);
user_pref("browser.newtabpage.activity-stream.showSearch", false);
user_pref("browser.newtabpage.activity-stream.section.highlights.includeBookmarks", false);
user_pref("browser.newtabpage.activity-stream.section.highlights.includeDownloads", false);
user_pref("browser.newtabpage.activity-stream.section.highlights.includeVisited", false);
user_pref("browser.urlbar.recentsearches.featureGate", false);
user_pref("browser.urlbar.clipboard.featureGate", false);

/** Password **/
user_pref("signon.rememberSignons", false);
user_pref("signon.generation.enabled", false);
user_pref("signon.autofillForms", false);
user_pref("signon.formlessCapture.enabled", false);
user_pref("network.auth.subresource-http-auth-allow", 1);

/** Disable Form Autofill **/
user_pref("extensions.formautofill.addresses.enabled", false); // [FF55+]
user_pref("extensions.formautofill.creditCards.enabled", false); // [FF56+]
user_pref("security.OCSP.enabled", 0); // [DEFAULT: 1]
user_pref("security.OCSP.require", false);

/* 0000: disable about:config warning ***/
user_pref("browser.aboutConfig.showWarning", false);

/** Home Page **/
user_pref("browser.startup.page", 0);
user_pref("browser.startup.homepage", "about:blank");
user_pref("browser.newtabpage.enabled", false);

/** GeoProvider **/
user_pref("geo.provider.use_geoclue", false); // [FF102+] [LINUX]

/** Personalization **/
user_pref("extensions.getAddons.showPane", false); // [HIDDEN PREF]
user_pref("extensions.htmlaboutaddons.recommendations.enabled", false);
user_pref("browser.discovery.enabled", false);
user_pref("browser.shopping.experience2023.enabled", false); // [DEFAULT: false]

/** Data collection **/
user_pref("datareporting.policy.dataSubmissionEnabled", false);
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.enabled", false); // see [NOTE]
user_pref("toolkit.telemetry.server", "data:,");
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.newProfilePing.enabled", false); // [FF55+]
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false); // [FF55+]
user_pref("toolkit.telemetry.updatePing.enabled", false); // [FF56+]
user_pref("toolkit.telemetry.bhrPing.enabled", false); // [FF57+] Background Hang Reporter
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false); // [FF57+]
user_pref("toolkit.telemetry.coverage.opt-out", true); // [HIDDEN PREF]
user_pref("toolkit.coverage.opt-out", true); // [FF64+] [HIDDEN PREF]
user_pref("toolkit.coverage.endpoint.base", "");
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
user_pref("browser.newtabpage.activity-stream.telemetry", false);
user_pref("app.shield.optoutstudies.enabled", false);
user_pref("app.normandy.enabled", false);
user_pref("app.normandy.api_url", "");

/** Reporting **/
user_pref("browser.tabs.crashReporting.sendReport", false); // [FF44+]
user_pref("browser.crashReports.unsubmittedCheck.autoSubmit2", false); // [DEFAULT: false]

/** Google's safe browsing **/
user_pref("browser.safebrowsing.downloads.remote.enabled", false);

/** Prefetching **/
user_pref("network.prefetch-next", false);
user_pref("network.dns.disablePrefetch", true);
user_pref("network.dns.disablePrefetchFromHTTPS", true);
user_pref("network.predictor.enabled", false);
user_pref("network.predictor.enable-prefetch", false); // [FF48+] [DEFAULT: false]
user_pref("network.http.speculative-parallel-limit", 0);
user_pref("browser.places.speculativeConnect.enabled", false);

/** DNS **/
user_pref("network.proxy.socks_remote_dns", true);
user_pref("network.file.disable_unc_paths", true); // [HIDDEN PREF]
user_pref("network.gio.supported-protocols", ""); // [HIDDEN PREF] [DEFAULT: "" FF118+]

/** LOCATION BAR / SEARCH BAR / SUGGESTIONS / HISTORY / FORMS ***/
user_pref("browser.urlbar.speculativeConnect.enabled", false);
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
user_pref("browser.formfill.enable", false);
user_pref("browser.search.separatePrivateDefault", true); // [FF70+]
user_pref("browser.search.separatePrivateDefault.ui.enabled", true); // [FF71+]

/** Disk **/
user_pref("browser.cache.disk.enable", false);
user_pref("browser.privatebrowsing.forceMediaMemoryCache", true); // [FF75+]
user_pref("media.memory_cache_max_size", 65536);
user_pref("browser.sessionstore.privacy_level", 2);

/** SSL (Secure Sockets Layer) / TLS (Transport Layer Security) ***/
user_pref("security.ssl.require_safe_negotiation", true);
user_pref("security.tls.enable_0rtt_data", false);
user_pref("security.OCSP.enabled", 1); // [DEFAULT: 1]
user_pref("security.OCSP.require", true);
user_pref("security.cert_pinning.enforcement_level", 2);
user_pref("security.remote_settings.crlite_filters.enabled", true);
user_pref("security.pki.crlite_mode", 2);

user_pref("dom.security.https_only_mode", true); // [FF76+]
user_pref("dom.security.https_only_mode_send_http_background_request", false);
user_pref("security.ssl.treat_unsafe_negotiation_as_broken", true);
user_pref("browser.xul.error_pages.expert_bad_cert", true);

/** Referers **/
user_pref("network.http.referer.XOriginTrimmingPolicy", 2);

/** CONTAINERS **/
user_pref("privacy.userContext.enabled", true);
user_pref("privacy.userContext.ui.enabled", true);

/** PLUGINS / MEDIA / WEBRTC **/
user_pref("media.peerconnection.ice.proxy_only_if_behind_proxy", true);
user_pref("media.peerconnection.ice.default_address_only", true);

/** DOM (Document Object Model) **/
user_pref("dom.disable_window_move_resize", true);

/*** MISCELLANEOUS ***/
user_pref("browser.download.start_downloads_in_tmp_dir", true); // [FF102+]
user_pref("browser.helperApps.deleteTempFileOnExit", true);
user_pref("browser.uitour.enabled", false);
user_pref("devtools.debugger.remote-enabled", false); // [DEFAULT: false]
user_pref("permissions.manager.defaultsUrl", "");
user_pref("network.IDN_show_punycode", true);
user_pref("pdfjs.disabled", false); // [DEFAULT: false]
user_pref("pdfjs.enableScripting", false); // [FF86+]
user_pref("browser.tabs.searchclipboardfor.middleclick", false); // [DEFAULT: false NON-LINUX]
user_pref("browser.contentanalysis.enabled", false); // [FF121+] [DEFAULT: false]
user_pref("browser.contentanalysis.default_result", 0); // [FF127+] [DEFAULT: 0]

/** DOWNLOADS **/
user_pref("browser.download.useDownloadDir", false);
user_pref("browser.download.alwaysOpenPanel", false);
user_pref("browser.download.manager.addToRecentDocs", false);
user_pref("browser.download.always_ask_before_handling_new_types", true);

/** EXTENSIONS ***/
user_pref("extensions.enabledScopes", 5); // [HIDDEN PREF]
user_pref("extensions.postDownloadThirdPartyPrompt", false);

/*** ETP (ENHANCED TRACKING PROTECTION) ***/
user_pref("browser.contentblocking.category", "strict"); // [HIDDEN PREF]

/*** [SECTION 2800]: SHUTDOWN & SANITIZING ***/
// user_pref("privacy.sanitize.sanitizeOnShutdown", true);
user_pref("privacy.clearOnShutdown.cache", true);     // [DEFAULT: true]
user_pref("privacy.clearOnShutdown_v2.cache", true);  // [FF128+] [DEFAULT: true]
user_pref("privacy.clearOnShutdown.downloads", true); // [DEFAULT: true]
user_pref("privacy.clearOnShutdown.formdata", true);  // [DEFAULT: true]
// user_pref("privacy.clearOnShutdown.history", true);   // [DEFAULT: true]
user_pref("privacy.clearOnShutdown_v2.historyFormDataAndDownloads", true); // [FF128+] [DEFAULT: true]
user_pref("privacy.clearOnShutdown.cookies", true); // Cookies
user_pref("privacy.clearOnShutdown.offlineApps", true); // Site Data
user_pref("privacy.clearSiteData.cache", true);
user_pref("privacy.clearSiteData.cookiesAndStorage", false); // keep false until it respects "allow" site exceptions
user_pref("privacy.clearSiteData.historyFormDataAndDownloads", true);

user_pref("privacy.cpd.cache", true);    // [DEFAULT: true]
user_pref("privacy.clearHistory.cache", true);
user_pref("privacy.cpd.formdata", true); // [DEFAULT: true]
// user_pref("privacy.cpd.history", true);  // [DEFAULT: true]
user_pref("privacy.clearHistory.historyFormDataAndDownloads", true);
user_pref("privacy.cpd.cookies", false);
user_pref("privacy.cpd.sessions", true); // [DEFAULT: true]
user_pref("privacy.cpd.offlineApps", false); // [DEFAULT: false]
user_pref("privacy.clearHistory.cookiesAndStorage", false);
user_pref("privacy.sanitize.timeSpan", 0);

/** RFP (resistFingerprinting) **/
user_pref("privacy.window.maxInnerWidth", 1600);
user_pref("privacy.window.maxInnerHeight", 900);
user_pref("privacy.resistFingerprinting.block_mozAddonManager", true);
user_pref("privacy.spoof_english", 1);
user_pref("browser.display.use_system_colors", false); // [DEFAULT: false NON-WINDOWS]
user_pref("widget.non-native-theme.use-theme-accent", false); // [DEFAULT: false WINDOWS]
user_pref("browser.link.open_newwindow", 3); // [DEFAULT: 3]
user_pref("browser.link.open_newwindow.restriction", 0);

/** Disk avoidance, application data isolation, eyeballs... **/
user_pref("extensions.blocklist.enabled", true); // [DEFAULT: true]
user_pref("network.http.referer.spoofSource", false); // [DEFAULT: false]
user_pref("security.dialog_enable_delay", 1000); // [DEFAULT: 1000]
user_pref("privacy.firstparty.isolate", false); // [DEFAULT: false]
user_pref("extensions.webcompat.enable_shims", true); // [HIDDEN PREF] [DEFAULT: true]
user_pref("security.tls.version.enable-deprecated", false); // [DEFAULT: false]
user_pref("extensions.webcompat-reporter.enabled", false); // [DEFAULT: false]
user_pref("extensions.quarantinedDomains.enabled", true); // [DEFAULT: true]

/*** NON-PROJECT RELATED ***/
user_pref("browser.startup.homepage_override.mstone", "ignore"); // [HIDDEN PREF]
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons", false);
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features", false);
user_pref("browser.urlbar.showSearchTerms.enabled", false);

/** Chatbot **/
user_pref("browser.ml.chat.enabled", false);
user_pref("browser.ml.chat.shortcuts", false);
user_pref("browser.ml.chat.sidebar", false);
