# DNS setup for cybernerdz2.com on GitHub Pages (Cloudflare Registrar / Cloudflare DNS). Not published yet.

Source checked live 2026-10-26: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site

**Order matters:** add the custom domain in GitHub *before* creating DNS records. Otherwise someone else could host a site on your subdomains.

1. Push this folder (it includes the `CNAME` file containing `cybernerdz2.com`) to the repo's publishing branch. If you publish with a custom GitHub Actions workflow instead, the CNAME file is ignored; set the domain in Settings instead.
2. Repo > Settings > Pages > Custom domain: `cybernerdz2.com`, then Save. Recommended: verify the domain first (account/org Settings > Pages) to prevent takeovers.
3. Cloudflare dashboard > cybernerdz2.com > DNS > Records: delete any default apex record, then add:

| Type  | Name | Content |
|-------|------|---------|
| A     | @    | 185.199.108.153 |
| A     | @    | 185.199.109.153 |
| A     | @    | 185.199.110.153 |
| A     | @    | 185.199.111.153 |
| AAAA  | @    | 2606:50c0:8000::153 |
| AAAA  | @    | 2606:50c0:8001::153 |
| AAAA  | @    | 2606:50c0:8002::153 |
| AAAA  | @    | 2606:50c0:8003::153 |
| CNAME | www  | `<user>.github.io` (your GitHub username or org, without the repo name) |

4. Do **not** add wildcard records (`*.cybernerdz2.com`). GitHub warns these risk domain takeover.
5. Check it with `Resolve-DnsName cybernerdz2.com -Type A` (Windows) or `dig cybernerdz2.com +noall +answer -t A`. Changes can take up to 24 hours.
6. Turn on **Enforce HTTPS** in Settings > Pages. It can take up to 24 hours to become available.

Cloudflare tip (NSFR advice, not from the GitHub page): keep these records **DNS only** (grey cloud) until GitHub has issued the HTTPS certificate. If you turn on the orange-cloud proxy later, set SSL/TLS mode to **Full (strict)**.
If GitHub Pages is ever disabled, remove these DNS records right away, because GitHub warns of takeover risk.

Contact email (help@cybrenerdz.com) and the PayPal donate link are set in one spot: `nsfr/whattodo.py`.
