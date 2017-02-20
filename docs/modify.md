## Modify the Monkey

This monkey comes out of the box ready to entertain the masses with a simple on/off switch on his... uh... underside. That sort of monkey business isn't enough for us though! We want to control it programmatically. Because... makers!

So the first thing we need to do is inspect our monkey's downstairs and see how the switch works.

Here's what we see...

![Monkey switch](images/switch.png)

If you've chosen to control something other than this monkey, what you're looking for is any means of tapping into the primary circuit. You want to be able to complete the circuit with logic... programmatically. If your device doesn't do its thing simply by being switched on (like it has a "go" button of some kind) then that's going to be different, and is outside the scope of this project tutorial. It's not impossible or even often all that difficult though, so take heart.

We're dealing with a complete circuit here. There are two AA (1.5V) batteries and they're hooked up in serial, so that means that this monkey runs on 3V and some unknown amount of current will be drawn when the circuit is complete. I've taken this toy apart and happen to know that at its heart it's a simple DC motor that's attached mechanically to all of the squawking, clanging, and nodding.

You don't often know how much current any given _load_ is going to require. You could put meters in the circuit and measure, but the better thing to do is to simply leave a circuit as is with it's own power source and everything.

The thing you have to be careful about is attempting to "drive" your circuit with the current from your microprocessor, because microprocessors tend to cost real money and also tend to not be capable of providing a ton of current before they go bye bye.

Ironically, though, the boards we're dealing with - these amazing works of engineering - are only 2-3 times the price of this silly mechanical monkey! The inner workings of computers are child's play compared to the inner workings of our global economy. But I digress. My point was that you don't want to toast your board.

So we want to control the monkey by simply doing the equivalent of turning the switch on an off.

What we discover in this monkey's underside is that the switch on the outside of the trapdoor is simply connecting or disconnecting the ends of the batteries and completing or breaking the circuit. So let's do the same. Let's simply tap into the two contacts with some wires, run them out, and use software to virtually touch the ends of the wire together.

There are two ways to accomplish this, but each accomplishes the same thing - it gives us two wires that when touched together complete the circuit and set the monkey in motion. Conveniently, neither disables our monkey's original on/off switch, so if we wish to use it to turn the him on and off manually, we still can.

1. **The hard way**. If you're the soldering type, you can drill holes through the battery door and solder them to the metal contacts. 
![Holes](images/holes.png)

1. **The easy way**. You can avoid drilling and soldering, by simply using a little bit of electrical tape to attach wires to the ends of the batteries - the black wire to the battery that's showing its negative end, and the red wire to the battery that's showing its positive end. run the wires through the holes on the side of the battery door, then they'll be more secure and you won't need to close them in the door.

![Electrical tape](images/electricaltape.jpg)

And just like that, we're done with surgery. Your monkey should recover nicely.

Next, learn how to [create the circuit](circuit.md).