---
layout: post
title: "A Page Anyone Can Load and Nobody Can Read"
date: 2026-10-18
---

My website has a page that anyone can load and nobody can read. It lives at `/locked/`, it holds timestamped notes to myself, and the encrypted file behind it sits in a public GitHub repository where anyone can download it. That is not a flaw I'm tolerating. It is the design, and the page is safe because of what it assumes an attacker already has rather than what it hides from them.

What I wanted was simple to say and oddly hard to find: notes that live on my own site, open from any device, encrypted, and reachable without signing into Google or anything else. Every notes app solves the first three by making you a user of someone else's service. I wanted the passphrase to be the only key, and my own domain to be the only door.

The constraint came first. This site runs on GitHub Pages, which is static hosting: there is no server, so there is nothing to check a password against. Any "login" on a static site is one of two things. It is either cosmetic, a JavaScript check that anyone can skip by viewing the page source, or it is real encryption, where the content ships as ciphertext and only the right passphrase turns it back into words. Only the second is actually private. So my notes live in a single encrypted file, and the page decrypts them in the browser using AES-GCM with a key derived from my passphrase through PBKDF2-SHA256 at 310,000 iterations. That is the same family of machinery password managers use.

Reading turned out to be the easy half. The hard half was writing, because a notes page you have to update by hand-editing an encrypted blob is a notes page you abandon within a week. So the page does the saving itself. When I add a note, it re-encrypts everything and commits the new file to the repository through GitHub's API, using a fine-grained access token scoped to this one repository with permission to touch its contents and nothing else. The token is stored inside the encrypted file, so it only exists in plaintext in memory, after I've unlocked the page. The cost is that every save triggers a site rebuild, and a new note takes about forty seconds to show up on my other devices. For notes to myself, that has never mattered once.

The interesting part is being honest about what this protects against, because the answer is narrower than the word "locked" suggests.

Since the ciphertext is public, the only thing standing between it and anyone curious is my passphrase. There is no rate limit and no lockout; someone can download the file and guess offline for as long as they like. The 310,000 iterations make each guess expensive, but they only buy time. A weak passphrase still falls. The security of the whole page is exactly the strength of one string I chose, which is also why I can publish this post describing every part of the system. The design was never the secret.

What I didn't think about at first was git history. Every save is a commit, and git remembers every version of every file. When I rotate my passphrase, the current file gets re-encrypted under the new one, but every earlier version is still sitting in the history, encrypted under the old one. Rotation protects the future, not the past. The metadata leaks too: commit timestamps show when I write, and the file's size hints at how much. The contents are private. The rhythm isn't.

The bigger hole is less obvious. The code that asks for my passphrase is served from the same repository as the notes. Anyone who could push to that repository could change the page to quietly send my passphrase somewhere the moment I type it. So the real perimeter isn't the cryptography at all. It's my GitHub account. Which means I built this whole thing to avoid trusting a Google login, and ended up trusting a GitHub one instead. I didn't remove the dependency on someone else's account; I just picked which one. The encryption is the strongest link in the chain, and the weakest one is a login.

There were stronger options. I could have put a small server in front of the notes, or moved the site to a host that enforces a real sign-in before a single byte reaches the browser. But that sign-in would have meant logging in with Google, which is precisely the dependency I built this to avoid, and both options would have added infrastructure to a site whose whole appeal is that it has almost none. For a page of notes to myself, the attacker I'd actually need to worry about is someone with a real reason to read them, a lot of patience, and a weak passphrase to work with. I've decided I can live with that.

That, more than the AES, is what building this taught me. Security isn't a property a system has or lacks. It's a list of risks, and the only real failure is not knowing which ones you took on purpose.
