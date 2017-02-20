## Prep Your Raspberry Pi

In this guide, we'll be using Raspbian. Raspbian is a distribution of Linux based on Debian that's made specifically for the Raspberry Pi.

This is just one operating system that you can put on Raspberry Pi by the way. You can also install Windows 10 IoT Core on your device, and that's pretty cool.

Setting up your Raspberry Pi can be done either by plugging in an HDMI monitor, keyboard, and mouse, or by plugging it in to your PC or whatever network your PC is on using an ethernet cable and then accessing it using its mDNS name. If you're doing the latter, then follow my blog post [Easy and Offline Connection to Your Raspberry Pi](http://codefoster.com/pi-easyoffline).

Go to [raspberrypi.org/downloads/raspbian](https://www.raspberrypi.org/downloads/raspbian) and download the image file for the latest version of Raspbian (currently Jessie as of this writing). If you're going to hook your Pi up to a monitor, keyboard, and mouse, then I recommend the full version of Raspbian. If you're just going to ssh into it, then I like using the Lite version.

Put your microSD card into an adapter and then into your computer.

Follow the installation guide [here](https://www.raspberrypi.org/documentation/installation/installing-images/README.md) to get the image flashed to your SD card. It's different depending on what OS you use.

When the flash is finished, eject the card from your computer and insert it into the microSD card slot on your Raspberry Pi (while the power is off) and then plug in the USB power cable to power it up.

If you're using a monitor, you should be booted into X - the graphical user interface for Raspbian. In that case, go to Start | Accessories | Terminal and type `sudo raspi-config` and hit enter.

In the Raspbian config interface select Boot Options and configure your device to boot to the command line and prompt for a user login.

Now reboot your device by typing `reboot` at the terminal.

Now you'll boot to the command line and be prompted to log in.

Enter `pi` for the login and `raspberry` for the password.

Now go back to `raspi-config`.

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
We'll need Node.js installed on the Pi.

There are a variety of ways to accomplish this, but in my opinion, you can't beat [nvs](https://github.com/jasongin/nvs). It's a cross-platform Node version selector that easy and intuitive.

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