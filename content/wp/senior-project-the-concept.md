---
title: 'Senior Project &#8212; The Concept'
date: '2010-12-21T22:36:47+00:00'
status: publish
permalink: /senior-project-the-concept
author: 'Dylan Pavelko'
excerpt: ''
type: post
id: 184
category: []
tag: []
post_format: []
---
As the year draws to an end, the beginning of the end (or perhaps more accurately the end of the beginning) comes in to sight! I “officially” start my senior project at the start of winter quarter- though I have already been researching and have submitted my proposal to my advisor.

![](https://i2.wp.com/www.dylanpavelko.com/blog/wp-content/uploads/2010/12/LEDJ39-fx-300x300.jpg?resize=300%2C300 "LEDJ39-fx")

I figured I would probably be needing to answer the question “What are you doing for your senior project?” a lot, so why not write a blog and just send the link.

So here goes…

As many of you know my favorite past-time/hobby/etc. is designing the lights for theatre shows (over this winter break I’ll be volunteering at the SLOLT ACT (children’s) production of The Lion Witch &amp; the Wardrobe :D). It is actually one of the main reasons I got in to electrical engineering! So for my senior project I am going to take the idea of designing “lights” a little more literal and try actually design my own lighting fixture!

When thinking about what cool kind of lights are out there my mind automatically lands on intelligent light fixtures (lights you can program to change colors, move, prisms, gobos, etc.)<span style="color: #000000;">. So I thought what could I do with that…. </span>

<span style="color: #0000ff;"><span style="color: #000000;">The first thing that came to mind was using LEDs. With the recent break-through’s in LED technology we have seen a huge boom of LED lighting fixtures in the entertainment lighting industry. At LDI the trade show floor was covered in new LED light fixtures (what I found interesting was there were both subtractive and additive color mixing options with LEDS). In the end,</span><span style="color: #000000;"> I ended up deciding I would use Red, Green, Blue, and Warm White colored LEDs. I had quite a bit of debate about how many different colors to include- should I use Amber instead of Warm White, or both, will I be able to get all the colors and “tones” I want!? I settled with RGBW because I realized the size of my light fixture is going to be so small that if people wanted to use it for general illumination of humans….it’d be rather impractical. That said I still think I’ll include the Warm White LED just because the “white” RGB makes by itself is such a cool, almost a purple-ish (dare I say, ugly) white!</span></span>

But color changing is too simple, it also needs to be able to move! Truthfully, I have probably put the least amount of thought into how I want it to move. But more or less I want it to be able to Pan (x-direction) more than 360 degrees and Tilt (y-direction) probably …. around 270 degrees. But where this project is really interesting I think, and will make use of new technology, is that I want to control all of these things (focus position, color, intensity) with a recently approved standard called Architecture for Control Networks (ACN=E1.17) instead of the current standard DMX512-A.

Part of the idea here is, that instead of a lighting designer focusing the light by assigning relatively arbitrary degrees of pan and tilt with even more seemingly random bytes of DMX code a user would be able to specify that the light should focus to a precise point on the stage using 3D courtesian-coordinate system variables (from the edge of stage 2feet left, 3 feet back, 5 feet up). Along with a great number of other features that ACN has has over DMX (one of which NOT being simplicity to create fixtures), including easier set up of networks (user’s POV), I am going to try and really show off the benefits of ACN by also making a acn/music player program.

Connected in the network would be a computer running a music player, from the lighting control board an operator would be able to then cue both the music to begin playing and the lights to change simultaneously. While this is pretty significant in itself, I further want to showcase ACN’s features by then having the computer program take control of the device and send new commands to the light based on the music. (Either a visualizer type of set up, or a pre-programmed show… haven’t decided which sounds cooler yet). This would be pretty cool because the board operator would still have full control of the board, and be able to monitor the status of the light and control it, but also would be having a different “virtual board” control the light at the same time.

So lots of things still need to be refined, researched, designed, tested, scrapped, and re-designed, re-tested…. but I think the end product will be pretty cool, perhaps all the benefits wouldn’t be so obvious to the average passerby, or even theater-goers but thats okay. Because its still totally awesome! 🙂

Much more to come…