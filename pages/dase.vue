<template>
  <div class="dase">
    <header class="site-header">
      <div class="site-header-inner">
        <a href="/dase" class="wordmark">DASE</a>
        <nav class="site-nav" aria-label="DASE">
          <a href="#install">Install</a>
          <a href="#usage">Usage</a>
          <a href="#commands">Commands</a>
          <a href="https://github.com/TiagoMateus05/DASE">GitHub</a>
        </nav>
      </div>
    </header>

    <main class="doc">
      <h1>DASE <span class="h1-sub">Disk Auditor and Secure Eraser</span></h1>

      <p class="intro">
        DASE is a bootable UEFI application for inspecting and securely erasing disks. It runs directly on the
        machine's firmware, with no operating system underneath, and picks the erase method from the drive type:
        a full overwrite for hard drives, and the drive's own sanitize command for NVMe SSDs.
      </p>

      <div class="actions">
        <a class="btn btn-primary" href="https://github.com/TiagoMateus05/DASE/releases/latest">Download</a>
        <a class="btn" href="https://github.com/TiagoMateus05/DASE">Source on GitHub</a>
      </div>

      <aside class="callout">
        <strong>Erasing is permanent.</strong> Before you confirm a wipe, check the model and serial number
        of each selected disk with <code>listatainfo</code> or <code>nvmeinfo</code>.
      </aside>

      <section id="methods">
        <h2>Erase methods</h2>
        <p>DASE reads each disk's transport and media type, then chooses one method per disk.</p>
        <div class="table-wrap">
          <table>
            <thead>
              <tr><th>Drive</th><th>Method</th></tr>
            </thead>
            <tbody>
              <tr><td>Hard drive</td><td>Every block is overwritten with zeros.</td></tr>
              <tr><td>NVMe SSD</td><td>NVMe Sanitize. If the drive does not support it, NVMe Format with User Data Erase. Single-namespace drives only.</td></tr>
              <tr><td>SATA SSD</td><td>Not supported yet.</td></tr>
              <tr><td>Boot disk, RAID volume, read-only or unknown media</td><td>Always refused. RAID: Refused unless RAID is set to IT/Passthrough mode.</td></tr>
            </tbody>
          </table>
        </div>
        <p>After every wipe, DASE reads the whole disk back to verify it.</p>
        <p>
          SSDs are deliberately not overwritten. The controller remaps blocks internally, so writes from the host
          never reach all of the flash, and a full overwrite only adds wear. Sanitize runs inside the drive and
          also reaches storage the host cannot address.
        </p>
      </section>

      <section id="usage">
        <h2>Usage</h2>
        <p>
          Boot the machine from the DASE USB drive and you get a <code>DASE&gt;</code> prompt.
          Disks are numbered <code>disk0</code>, <code>disk1</code>, and so on. A typical session:
        </p>
        <pre><code>DASE&gt; listdisks
DASE&gt; nvmeinfo
DASE&gt; checkwipe
DASE&gt; wipe -d3 -d4
DASE&gt; wipe -x
Type  I confirm  to proceed, or anything else to cancel:
&gt; I confirm</code></pre>
        <p>
          <code>listdisks</code> marks the disk DASE booted from, and <code>checkwipe</code> shows which disks can
          be erased and how. The selection made with <code>wipe -d</code> is kept between commands, and each
          selected disk is checked again just before anything is written. Typing anything other than
          <code>I confirm</code> cancels the wipe.
        </p>
      </section>

      <section id="commands">
        <h2>Commands</h2>
        <p>Commands are case-sensitive.</p>
        <div class="table-wrap">
          <table class="cmd-table">
            <thead>
              <tr><th>Command</th><th>Description</th></tr>
            </thead>
            <tbody>
              <tr><td><code>listdisks</code></td><td>List all disks and mark the one DASE booted from.</td></tr>
              <tr><td><code>listparts X</code></td><td>List the partitions on disk X.</td></tr>
              <tr><td><code>listdisksinfo</code></td><td>Show each disk's controller, transport and size.</td></tr>
              <tr><td><code>listatainfo</code></td><td>Show model, serial number and media type of SATA and IDE disks.</td></tr>
              <tr><td><code>nvmeinfo</code></td><td>Show model, serial number, namespaces and supported erase commands of NVMe disks.</td></tr>
              <tr><td><code>checkwipe [X]</code></td><td>Show whether each disk, or disk X, can be wiped, and how.</td></tr>
              <tr><td><code>wipe [flags]</code></td><td>Select disks, then wipe and verify them.</td></tr>
              <tr><td><code>fat32test</code></td><td>Mount the FAT32 volume on disk0 and print its file tree.</td></tr>
              <tr><td><code>clear</code></td><td>Clear the screen.</td></tr>
              <tr><td><code>help</code></td><td>Show the command reference.</td></tr>
              <tr><td><code>exit</code></td><td>Power off the machine.</td></tr>
            </tbody>
          </table>
        </div>

        <h3>wipe flags</h3>
        <div class="table-wrap">
          <table class="cmd-table">
            <thead>
              <tr><th>Flag</th><th>Effect</th></tr>
            </thead>
            <tbody>
              <tr><td><code>-dX</code></td><td>Select disk X.</td></tr>
              <tr><td><code>-rdX</code></td><td>Deselect disk X.</td></tr>
              <tr><td><code>-a</code></td><td>Select every disk that can be wiped.</td></tr>
              <tr><td><code>-l</code></td><td>Show the current selection. Running <code>wipe</code> with no flags does the same.</td></tr>
              <tr><td><code>-c</code></td><td>Clear the selection.</td></tr>
              <tr><td><code>-x</code></td><td>Wipe the selected disks, after you type <code>I confirm</code>.</td></tr>
              <tr><td><code>-s</code></td><td>With <code>-x</code>, wipe one disk at a time.</td></tr>
            </tbody>
          </table>
        </div>
        <p><code>-d</code> and <code>-rd</code> cannot be combined with other flags, for safety reasons.</p>
      </section>

      <section id="install">
        <h2>Install & Boot</h2>
        <h3>From a release</h3>
        <ol>
          <li>
            Download the <code>.img.xz</code> image and <code>SHA256SUMS</code> from the
            <a href="https://github.com/TiagoMateus05/DASE/releases/latest">latest release</a>.
          </li>
          <li>
            Run <code>sha256sum dase-*.img.xz</code> (on macOS, <code>shasum -a 256 dase-*.img.xz</code>) and
            check that the result matches the line in <code>SHA256SUMS</code>, so the image is valid.
          </li>
          <li>Write the image to a USB drive with Rufus or balenaEtcher. This erases the USB drive.</li>
          <li>
            Boot the target machine from the USB drive in UEFI mode. DASE is not signed yet, so Secure Boot
            has to be turned off.
          </li>
        </ol>

        <h3>From source</h3>
        <p>The build runs in Docker.</p>
        <pre><code>git clone https://github.com/TiagoMateus05/DASE.git
cd DASE
./build.sh</code></pre>
        <p>
          The resulting <code>dase.img</code> can be written to a USB drive with
          <code>dd if=dase.img of=/dev/sdX bs=4M status=progress</code> (Linux) or
          <code>sudo dd if=dase.img of=/dev/rdiskX bs=4m</code> (macOS). This erases the USB drive.
        </p>
        <p> An easier way is to use a tool such as Rufus or balenaEtcher.</p>
      </section>

      <section id="limitations">
        <h2>Limitations</h2>
        <ul>
          <li>Only hard drives and NVMe SSDs can be erased.</li>
          <li>Only x86_64 machines with UEFI firmware are supported.</li>
          <li>NVMe drives with more than one namespace are refused.</li>
          <li>Verification reads the entire disk, so it takes a long time on large drives.</li>
        </ul>
      </section>

      <section id="roadmap">
        <h2>Roadmap</h2>
        <ul>
          <li>SATA SSD support</li>
          <li>A text-based interface</li>
          <li>Read support for NTFS, ext4 and exFAT, to inspect a disk before erasing it</li>
          <li>PDF reports of audits and wipes</li>
          <li>Secure Boot support</li>
          <li>Erase procedures that fully meet NIST SP 800-88 and IEEE 2883</li>
        </ul>
      </section>

      <section id="background">
        <h2>Motivation</h2>
        <p>
          Free disk wipers such as DBAN were written for hard drives and are no longer maintained. Most tools
          that handle SSDs correctly are commercial, or are built on a full Linux distribution. DASE is meant to be
          a small, free alternative that boots straight from firmware and treats each kind of drive correctly.
          It aims for two main goals: to be a safe, open-source, bootable disk wiper, and allow driven developers to learn and contribute to UEFI programming.
        </p>
      </section>

      <section id="contributing">
        <h2>Contributing</h2>
        <p>
          DASE is a spare-time project by me, <a href="/">Tiago Mateus</a>, as an MSc student. 
          Contributions are always welcome, specially from people who have experience or want to learn
          about UEFI programming. The code is written in C and uses the GNU-EFI library. Ready to build 
          docker and scripts are included in the repository.
          Bug reports, results from testing on real hardware, and pull requests are welcome
          on <a href="https://github.com/TiagoMateus05/DASE/issues">GitHub</a>. If you want to learn GNU-EFI
          programming, you are welcome to join.
        </p>
      </section>
    </main>

    <footer class="site-footer">
      <div class="site-footer-inner">
        <span>DASE is free software, released under the GPL-3.0.</span>
        <span><a href="/">Tiago Mateus</a> · <a href="https://github.com/TiagoMateus05/DASE">GitHub</a></span>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { useHead } from '#app'

const pageUrl = 'https://www.tiagogmateus.com/dase'
const pageTitle = 'DASE - Disk Auditor and Secure Eraser'
const pageDescription = 'DASE is a free, open-source bootable UEFI tool that securely erases hard drives and NVMe SSDs without an operating system, and verifies every wipe.'

useHead({
  title: pageTitle,
  htmlAttrs: { lang: 'en' },
  bodyAttrs: { class: 'dase-body' },
  meta: [
    { charset: 'UTF-8' },
    { name: 'description', content: pageDescription },
    { name: 'color-scheme', content: 'light dark' },
    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: pageTitle },
    { property: 'og:description', content: pageDescription },
    { property: 'og:url', content: pageUrl }
  ],
  link: [
    { rel: 'canonical', href: pageUrl },
    { rel: 'icon', type: 'image/png', href: '/devicon.png' },
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=IBM+Plex+Sans:wght@400;500;600&display=swap' }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'DASE - Disk Auditor and Secure Eraser',
        description: pageDescription,
        url: pageUrl,
        applicationCategory: 'UtilitiesApplication',
        operatingSystem: 'UEFI (x86_64)',
        license: 'https://www.gnu.org/licenses/gpl-3.0.html',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
        author: { '@type': 'Person', name: 'Tiago Mateus', url: 'https://www.tiagogmateus.com/' },
        sameAs: 'https://github.com/TiagoMateus05/DASE'
      })
    }
  ]
})
</script>

<style>
body.dase-body {
  --bg: #fcfcfb;
  --text: #1d1d1f;
  --muted: #5f6166;
  --rule: #e4e3df;
  --code-bg: #f2f1ee;
  --accent: #c8323a;
  --callout-bg: #fbf0f0;
  margin: 0;
  background: var(--bg);
  color: var(--text);
}

@media (prefers-color-scheme: dark) {
  body.dase-body {
    --bg: #121315;
    --text: #e8e8e6;
    --muted: #9b9da2;
    --rule: #2b2d31;
    --code-bg: #1b1c1f;
    --accent: #ff6b70;
    --callout-bg: #221719;
  }
}
</style>

<style scoped>
.dase {
  font-family: 'IBM Plex Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif;
  font-size: 17px;
  line-height: 1.65;
  -webkit-font-smoothing: antialiased;
}

.site-header {
  border-bottom: 1px solid var(--rule);
}

.site-header-inner,
.site-footer-inner {
  max-width: 760px;
  margin: 0 auto;
  padding: 14px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 8px 16px;
}

.wordmark {
  font-family: 'IBM Plex Mono', ui-monospace, Menlo, Consolas, monospace;
  font-weight: 500;
  font-size: 1.05rem;
  letter-spacing: 0.08em;
  color: var(--text);
  text-decoration: none;
}

.site-nav {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.site-nav a {
  color: var(--muted);
  font-size: 0.95rem;
  text-decoration: none;
}

.site-nav a:hover {
  color: var(--text);
}

.doc {
  max-width: 760px;
  margin: 0 auto;
  padding: 56px 24px 72px;
}

h1 {
  margin: 0 0 20px;
  font-size: 2.6rem;
  font-weight: 600;
  line-height: 1.15;
  letter-spacing: -0.01em;
}

.h1-sub {
  display: block;
  margin-top: 6px;
  font-size: 1.3rem;
  font-weight: 400;
  letter-spacing: 0;
  color: var(--muted);
}

h2 {
  margin: 56px 0 16px;
  padding-top: 28px;
  border-top: 1px solid var(--rule);
  font-size: 1.4rem;
  font-weight: 600;
  line-height: 1.3;
}

h3 {
  margin: 28px 0 10px;
  font-size: 1.05rem;
  font-weight: 600;
}

p {
  margin: 0 0 16px;
}

a {
  color: var(--accent);
  text-underline-offset: 2px;
}

.intro {
  margin-bottom: 28px;
  font-size: 1.12rem;
}

.actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 36px;
}

.btn {
  display: inline-block;
  padding: 9px 18px;
  border: 1px solid var(--rule);
  border-radius: 6px;
  color: var(--text);
  font-size: 0.95rem;
  font-weight: 500;
  text-decoration: none;
}

.btn:hover {
  border-color: var(--muted);
}

.btn-primary {
  background: var(--text);
  border-color: var(--text);
  color: var(--bg);
}

.btn-primary:hover {
  opacity: 0.85;
}

.callout {
  padding: 14px 18px;
  border-left: 3px solid var(--accent);
  border-radius: 0 6px 6px 0;
  background: var(--callout-bg);
}

code {
  padding: 1px 5px;
  border-radius: 4px;
  background: var(--code-bg);
  font-family: 'IBM Plex Mono', ui-monospace, Menlo, Consolas, monospace;
  font-size: 0.88em;
}

pre {
  margin: 0 0 20px;
  padding: 16px 18px;
  overflow-x: auto;
  border: 1px solid var(--rule);
  border-radius: 6px;
  background: var(--code-bg);
  line-height: 1.6;
}

pre code {
  padding: 0;
  background: none;
  font-size: 0.88rem;
}

.table-wrap {
  margin: 0 0 20px;
  overflow-x: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.95rem;
}

th,
td {
  padding: 9px 16px 9px 0;
  border-bottom: 1px solid var(--rule);
  text-align: left;
  vertical-align: top;
}

th {
  color: var(--muted);
  font-size: 0.85rem;
  font-weight: 500;
}

.cmd-table td:first-child {
  white-space: nowrap;
}

ol,
ul {
  margin: 0 0 16px;
  padding-left: 1.4em;
}

li {
  margin-bottom: 6px;
}

.site-footer {
  border-top: 1px solid var(--rule);
  color: var(--muted);
  font-size: 0.9rem;
}

.site-footer a {
  color: var(--muted);
}

@media (max-width: 640px) {
  .dase {
    font-size: 16px;
  }

  .site-header-inner,
  .site-footer-inner {
    padding: 12px 16px;
  }

  .doc {
    padding: 36px 16px 56px;
  }

  h1 {
    font-size: 2.1rem;
  }

  .h1-sub {
    font-size: 1.1rem;
  }

  .facts div {
    grid-template-columns: 105px 1fr;
    gap: 12px;
  }

  pre code {
    font-size: 0.8rem;
  }
}
</style>
