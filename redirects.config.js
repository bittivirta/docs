const redirects = [
  {
    from: [
      "/en/game/gamepanel/file-management.html",
      "/fi/game/gamepanel/file-management.html",
    ],
    to: "/game/general/file-management",
  },
  {
    from: "/en/game/minecraft/domain-plesk.html",
    to: "/game/minecraft/custom-domain/domain-plesk",
  },
  {
    from: ["/en", "/fi"],
    to: "/",
  },
  {
    from: "/en/game/rust/oxidemod-permissions.html",
    to: "/game/rust/oxidemod/permissions",
  },
  {
    from: ["/en/vps/windows", "/fi/vps/windows"],
    to: "/server/vps/windows/",
  },
  {
    from: ["/en/vps/ubuntu-debian", "/fi/vps/ubuntu-debian"],
    to: "/server/vps/linux/",
  },
  {
    from: [
      "/asiakasalue/maksaminen/etukateismaksu",
      "/general/client-area/portal/invoicing/prepayments",
    ],
    to: "/general/portal/invoicing/prepayments",
  },
  {
    from: ["/en/docs", "/fi/docs"],
    to: "/docs/",
  },
  {
    from: ["/en/web", "/fi/web"],
    to: "/web-hosting/",
  },
  {
    from: ["/en/company", "/fi/company"],
    to: "/company/",
  },
  {
    from: ["/en/dedicated", "/fi/dedicated"],
    to: "/server/vps/",
  },
  {
    from: ["/en/game", "/fi/game"],
    to: "/game/",
  },
  {
    from: ["/en/game/gamepanel", "/fi/game/gamepanel"],
    to: "/game/general/",
  },
  {
    from: ["/en/domain", "/fi/domain"],
    to: "/domain/",
  },
  {
    from: ["/en/client-area", "/fi/client-area", "/general/client-area/"],
    to: "/general/",
  },
  {
    from: [
      "/en/client-area/invoicing",
      "/fi/client-area/invoicing",
      "/general/client-area/portal/invoicing/",
    ],
    to: "/general/portal/invoicing/",
  },
  {
    from: [
      "/en/client-area/b2b",
      "/fi/client-area/b2b",
      "/general/client-area/portal/b2b/",
    ],
    to: "/general/portal/b2b/",
  },
  {
    from: [
      "/en/client-area/services/",
      "/fi/client-area/services/",
      "/general/client-area/portal/service-management/",
    ],
    to: "/general/portal/service-management/",
  },
  {
    from: ["/en/game/rust/", "/fi/game/rust/"],
    to: "/game/rust/",
  },
  {
    from: ["/en/game/minecraft/", "/fi/game/minecraft/"],
    to: "/game/minecraft/",
  },
  {
    from: ["/en/game/minecraft/plugins", "/fi/game/minecraft/plugins"],
    to: "/game/minecraft/",
  },
  {
    from: ["/en/game/minecraft/bungeecord", "/fi/game/minecraft/bungeecord"],
    to: "/game/minecraft/",
  },
  {
    from: ["/en/game/gamepanel/desktop/", "/fi/game/gamepanel/desktop/"],
    to: "/general/desktop/",
  },
  {
    from: ["/hosting/web/"],
    to: "/web-hosting/",
  },
  {
    from: ["/hosting/web/dnssec"],
    to: "/web-hosting/dnssec",
  },
  {
    from: ["/hosting/web/email/"],
    to: "/web-hosting/email/",
  },
  {
    from: ["/hosting/web/email/create-mailbox"],
    to: "/web-hosting/email/create",
  },
  {
    from: ["/hosting/web/email/login"],
    to: "/web-hosting/email/login/",
  },
  {
    from: ["/hosting/web/email/reset-password"],
    to: "/web-hosting/email/reset-password",
  },
  {
    from: ["/hosting/web/nameserver"],
    to: "/web-hosting/nameserver",
  },
  {
    from: ["/hosting/web/panel-login"],
    to: "/web-hosting/panel-login",
  },
  {
    from: ["/hosting/web/reset-password"],
    to: "/web-hosting/reset-password",
  },
  {
    from: ["/hosting/web/saittikone/"],
    to: "/web-hosting/saittikone/",
  },
  {
    from: ["/hosting/web/ssl-letsencrypt/"],
    to: "/web-hosting/ssl-letsencrypt",
  },
  {
    from: ["/hosting/web/wordpress/"],
    to: "/web-hosting/wordpress/",
  },
];

module.exports = redirects;
