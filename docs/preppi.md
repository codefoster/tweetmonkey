## Prep your Raspberry Pi

In this guide, we'll be using Raspbian. Raspbian is a version (a "distribution" actually) of Linux. It's a Raspberry Pi specific version of Linux that's based on Debian. This is just one operating system that you can put on Raspberry Pi. In the future, I'll include a guide for installing Windows 10 IoT Core on your device as well.

This part pretty much requires that you have an HDMI monitor plugged in to your Pi with at least a keyboard - if not a mouse. If you don't have those, then you'll need to plug your Pi in to an ethernet cable and remote to it using it's mDNS name (which by default is raspberrypi.local).

Go to <a href="https://www.raspberrypi.org/downloads/raspbian/">raspberrypi.org/downloads/raspbian</a> and download the zip file for the latest version of Raspbian (currently Jessie as of this writing).

Put your microSD card into an adapter and then into your computer.

Follow the installation guide <a href="https://www.raspberrypi.org/documentation/installation/installing-images/README.md">here</a> to get the image flashed to your SD card.

When the flash is finished, eject the card from your computer and insert it into the microSD card slot on your Raspberry Pi (while the power is off) and then power the Pi on.

You should be booted into X - the graphical user interface for Raspbian.

Go to Start | Accessories | Terminal and type `sudo raspi-config` and hit enter.

In the Raspbian config interface select Boot Options and configure your device to boot to the command line and prompt for a user login

Now reboot your device by typing `reboot` at the terminal.

Now you'll boot to the command line and be prompted to log in

Enter `pi` for the login and `raspberry` for the password.

Now go back to `raspi-config`.

{ change config options }

### Setup wifi
Now we need to set up your wifi adapter and connect to your wireless network.

Type `sudo nano /etc/wpa_supplicant/wpa_supplicant.conf` and add the following to the end of the file...

```
network={
  ssid=""
  password=""
}
```

Of course, you need to enter your actual WiFi SSID and password into there.

### Install Node.js
One last thing. You need to configure Raspbian to allow the root user to SSH to the device. You do this by typing `nano /etc/ssh/sshd_config`, locating the line that says `PermitRootLogin without-password` and adding a `#` before it to comment it out.

I followed <a href="https://gist.github.com/stolsma/3301813">these instructions</a> for installing Node.js, but I believe there's an easier way and I'm going to update this soon.

You can see all of the available versions of Node.js at <a href="http://nodejs.org/dist">nodejs.org/dist</a> and notice if you click on <a href="http://nodejs.org/dist/v0.10.26/">version 0.10.26</a> that you see a tarball specifically for the Pi. That's because normally the V8 engine that is behind Node.js isn't compatible with ARM processors. There are certain versions of Node.js that have a compatible build, however. And if I'm not mistaken, the latest versions of Node.js (based on the io.js codebase) are ARM compatible. I need to test that out.  

Next, learn how to [sign up to use the Twitter API](twitter.md).