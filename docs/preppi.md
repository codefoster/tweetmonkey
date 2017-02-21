## Prep Your Raspberry Pi

In this guide, we'll be using Raspbian. Raspbian is a distribution of Linux based on Debian that's made specifically for the Raspberry Pi.

This is just one operating system that you can put on Raspberry Pi by the way. You can also install Windows 10 IoT Core on your device, which opens up some exciting possibilities.

There are a lot of different ways to get your device loaded and ready for code. The following is detailed instructions for _my preferred method_ only. In particular, we'll be connecting directly to the device instead of relying on a monitor, we'll be installing the Lite version of Raspbian, and we'll use nvs to install node. Let's go.

### Installing the Operating System
Go to [raspberrypi.org/downloads/raspbian](https://www.raspberrypi.org/downloads/raspbian) and download the image file for the latest version of Raspbian (currently Jessie as of this writing) and look for the Lite version.

Put your microSD card into an adapter and then into your computer.

Follow the installation guide [here](https://www.raspberrypi.org/documentation/installation/installing-images/README.md) to get the image flashed to your SD card. It's different depending on what OS you use.

When the flash is finished, drop to your terminal, switch to the microSD card's drive and run `"hello" > ssh` to write a file. This file is necessary to allow you to connect to the device directly over ssh without a monitor. 

> For a bit more information about this strategy, you can read my blog post [Easy and Offline Connection to Your Raspberry Pi](http://codefoster.com/pi-easyoffline).

Now you can eject the card from your computer and insert it into the microSD card slot on your Raspberry Pi (while the power is off).

Plug an ethernet cable into the device and then into either a free port on the back of your home router or directly into your host PC. Don't worry about the need for a crossover cable. Those are a thing of the past and modern network cards are able to tell if you're plugged in directly or through a router/switch. Now the USB power cable into your Raspberry Pi to power it up.

The Raspbian OS comes with mDNS configured, so you should be able to run `ssh pi@raspberrypi.local` and log into the device already. The default password is `raspberry`.

### Setup wifi
The first thing you want to do is get your device talking to your Wifi hotspot so you don't have to use the cable.


Run `sudo nano /etc/wpa_supplicant/wpa_supplicant.conf` to edit the configuration file that the operating system's wifi system uses to find access points.

Add one to many of the following entries. If you have multiple entries, you can set the priority to determine the order in which it connects to networks. Higher numbers are connected first.

```
network={
  ssid="MYSSID"
  psk="mypassword"
  priority=1
}
```
### apt-get install git wiringpi
There are a couple of dependencies that we're going to need, so run...

```
sudo apt-get update
sudo apt-get install git wiringpi
```

### raspi-config
Now you need to set some configuration options using Raspbian's built-in configuration tool. Enter...
```
sudo raspi-config
```
And change whatever seems appropriate to you, but consider the following...

* Under Internationalisation Options, I recommend you change the locale, timezone, keyboard layout, and wifi region.
* Choose Enable Camera and turn that on
* Under Advanced Options
  * Change the hostname to one that's more meaningful and unique than the default `raspberrypi`
  * Turn on I2C

### Install Node.js
We'll need Node.js installed on the Pi.

You can either get node manually, or use a version selector.

To get it manually, visit [the official Node.js list of distributions](http://nodejs.org/dist) and find the version you want. For a Raspberry Pi 2, you want the version that ends with v7l (that's a lowercase L - not the number 1).

Then use that to follow these steps when you're ssh'ed to your device.

```
wget http://nodejs.org/dist/vX.X.X/node-vX.X.X-linux-armv7l.tar.xz`` # Copied link
tar -xf node-vX.X.X-linux-armv7l.tar.xz # Name of the file that was downloaded
sudo mv node-vX.X.X-linux-armv7l /usr/local/node
cd /usr/local/bin
sudo ln -s /usr/local/node/bin/node node
sudo ln -s /usr/local/node/bin/npm npm

You can also use [nvs](https://github.com/jasongin/nvs) to install node. It's a cross-platform Node version selector that easy and intuitive. It's awesome and easy, but I haven't fully tested it yet, so I'll tell you how, but I'm going to recommend you use the manual approach above first.

To install nvs run this...

```
export NVS_HOME="$HOME/.nvs"
git clone https://github.com/jasongin/nvs "$NVS_HOME"
. "$NVS_HOME/nvs.sh" install
```

Then add the latest version of node using...

```
nvs add latest
```

And then use that version using...

```
nvs use latest
```

Next, learn how to [sign up to use the Twitter API](twitter.md).