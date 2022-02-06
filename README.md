# vue-fiesta-todo

Testing to see if you can build a full-stack application with existing resources without using a package manager and pipeline.

# Result

Nah, not so much. All of the modern JS databases that I checked (5 of them) require that you use npm to install their resources to use them.

## Does this work?

Not really. You could easily build any existing backend though. Django, DRF, or express would work.

## Is it easy to work with?

Getting started? Yes.
Maintaining this? No, absolutely not.

## Are there lots of dev dependicies and a huge node_modules folder?

Nope. There's a gitignore, but there's nothing to ignore.

## Getting started

Check this out. You ready? Clone this repo. Okay that was the hard part.

Open src/index.html

Ta-da! A working todo app. It uses localStorage, sure. But you could do somethign else with that if you wanted to.

## Should YOU do it this way?

No. No you should not. This is a terrible way to develop. It would honestly have taken less time to just use vite create to make a vue app and install the things I wanted to use.
