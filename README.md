![Screenshot 2025-02-16 153532](https://github.com/user-attachments/assets/55ac1585-5d7a-4f64-8043-bd06a26c9947)![Screenshot 2025-02-16 211150](https://github.com/user-attachments/assets/50a4abf0-921b-4f58-b031-ce45363d8d43)# studio-project
my studio project!
the URL for my webpage is: https://ellap4n.github.io/studio-project/

## Formulating the idea
I'm interested in art from rules and glitches. Both are topics with endless possibilities within. 

#### Art from rules
The idea for this topic I have is for the user to answer a prompt, and the code will scan the string for specific characters or rules (# of vowels etc.) which will trigger different outcomes. Each response would output a unique outcome based on these 'rules'. 
Rules are fundamental in code as esseantially everything you write in code is a rule - its unchanging and cannot be removed once determined. 

#### Glitches 
I really liked my workshop 3 exploration - the morer you click, the more tinted the images became. I could replace the tint with glitches - the more you click, the more the image glitches, playing into the idea of entropy - where the chaos, or entropy of the universe tends to a maximum. The more you interact with something, the less ordered it becomes. Consumerism - use breaks things down, but if you leave it as it is it will remain pristine. Naivety. The more you think, the more problems you discover. 

Im also intrigued by the idea of 'designing imperfection' which is actual an essential technique in art that focuses on realism. to be real is to be imperfect.

## Going with the glitch idea:
Each time the user clicks, a new glitch will appear. The idea is that the user can decide if they want to introduce more distortion into the image or not. 
The distortions will begin small at first, and eventually become very distorted the more the user clicks. 
This plays in the idea of entropy and will be further explained in my critical reflection. 
I am using a mouse count to keep track of the number of clicks, and triggering special events based on these. 


### User image input:
the whole idea is how glitches can manipulate the image and so I decided to create a environment where the user can upload their own image. Found the documentation at:https://p5js.org/reference/p5/createFileInput/
the intro page saya to 'upload an image you like' which prompts the user to upload something they like the original look of. 

### Erasure
the first 'glitch' I am designing is little 'erased areas' that are only a few pixels in width. I used this tool found on p5js reference:
https://p5js.org/reference/p5/erase/
The effect was quite bland at first - the areas were successfully erased, but it didn't showcase a digital glitch - so I decided to create little rectangle bars above these areas where its almost like the first layer is erased and the edges of the technicalities underneath are 'exposed' 

to do this, the random numbers needed to first be input into a variable so the colored rectangles could follow the same cooridinates. 


### Screen damage
The next effect I decided on was screen damage - inspired by my actual damaged screen .... 
I love the 'dead' pixel look where areas of screens malfunction, and searched up images of broken screens to roughly colour pick the colours that appear most often when this happens. Of course I also included cyan which is the colour of the one on my screen at the moment. 

#### Intervals
Using mouseCount to keep track of the click number, I had to find a way to set number triggers to the different events. 
I actually created this interval first, then applied the concept to the previous erase glitch, which was operating every click. 
I tried dividing at first, not realising that it'd only happen once... the function I was looking for is modulus!. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder
% (modulus) is something I've used before, and a good way to trigger things on intervaled counts. I have set the screen damage effect every 5 clicks. 
```
 if (mouseCount%5 === 0) {
    let r, g, b, c, m;
    let rgb = [];
    //error colours into array
    r = [255, 0, 0];
    g = [0, 255, 0];
    b = [0, 0, 255];
    c = [0, 251, 255];
    m = [255, 0, 191];
    rgb.push(r);
    rgb.push(g);
    rgb.push(b);
    rgb.push(c);
    rgb.push(m);
    fill(random(rgb));
    rect(random(windowWidth/3, windowWidth), 0, random(0.1, 0.3), windowHeight);
  }
```
#### Bigger blocks
During the live lecture, one classmate said she didn't quite notice the glitch - which is the effect I want at the start, but I also wanted to trigger a larger "dead screen" portion. 
I didn't want to add this on a whole new block of code, so added an extra conditional, which would trigger a larger block of dead screen every five times this function was triggered. 
```
    if((mouseCount/5)%5 ==0) {
      rect(random(windowWidth/3, windowWidth), 0, random(30, 200), windowHeight);
    } else {
      rect(random(windowWidth/3, windowWidth), 0, random(0.1, 0.4), windowHeight);
    }
```




### Ripple/Noise 
I want to try experiment with ripple and noise using pixel displacement methods. 
![Screenshot 2025-02-12 135439](https://github.com/user-attachments/assets/c4407278-c655-41a6-a5c2-b2c53f9c48a6)


### Canvas Image duplication

![Screenshot 2025-02-16 164944](https://github.com/user-attachments/assets/5a8a3613-1cd3-49ed-8c02-86e3817266c6)

## Sound 
I decided to add sound to the dead screen segment - as the glitches were as said, not very noticeable, and seemed quite underwhelming. I just got some sounds off freesounds, and used the following p5js reference to load them up.
https://p5js.org/reference/p5/loadSound/
https://freesound.org/people/AlienXXX/sounds/193703/
https://freesound.org/people/Xiko__/sounds/711112/
https://freesound.org/people/Toine/sounds/7682/
https://freesound.org/people/SilverIllusionist/sounds/696593/

To prevent repetition, I pushed them into an array, which the function would then pick one at random to play when the event is triggered. 

## Audio Glitch
Playing with sound made me want to use sound to control a glitch - the way chaos unfolds if often influenced by the environment where it is found. Looking through the p5js reference, I saw that there were a number of different ways you could pull values from audio - but I had my eyes set on the amplitude value. This proved to be a fatal decision because the amount of troubleshooting and debuggins I went through to get this to work was astonishing. But I finally got it to work in the end

https://www.youtube.com/watch?v=NCCHQwNAN6Y
https://p5js.org/reference/p5.Amplitude/getLevel/



### Variation 
After implementing this function, it worked, but I noticed there was barely any variation in my test object 
This is my first attempt using a square with varying colours (supposedly)
![Screenshot 2025-02-16 153532](https://github.com/user-attachments/assets/bc33a4cf-9fcf-4a0e-97f6-82a6a7ecf491)

But there was barely any noticable variation, so I changed the object to a circle with varying diameter - this was a tiny bit more obvious but still too minimal to be of any significant use. 
![Screenshot 2025-02-16 154330](https://github.com/user-attachments/assets/ead5b541-38bb-452c-b40f-b068605cae7a)
![Screenshot 2025-02-16 154337](https://github.com/user-attachments/assets/57111292-5d3a-4a68-98d0-2ff53f88b6f2)

I tried mapping the sound to different ranges but it still didn't variate much, which was weird - until I found the sound file again
![image](https://github.com/user-attachments/assets/486ce8df-467a-4baf-8447-5a12f87b0706)

Here is the wave form of the sound file - there was barely any amplitude variation... which explained why my object did not vary much. 
I have decided to find a different glitchy noise - but one with huge variations to the amplitude. 
This Sound I found:
[https://freesound.org/people/staticpony1/sounds/249604/](https://freesound.org/people/KodyTron/sounds/641923/)
![image](https://github.com/user-attachments/assets/d3cccd69-152f-4d23-9d96-358f76a10a46)


had a much prettier waveform, so I will use this as the new static sound. 

### Building the Glitch 
Now that I have tested that my code for the varying amplitude works, I can take these values and create a glitch from it. This one was the 'final' effect so needed to take up most of the screen. 
![Screenshot 2025-02-17 213614](https://github.com/user-attachments/assets/ccba6a24-dd82-4407-ba65-e33f86a465d6)

#### cueing colours
the sound clip is 6.7 seconds long, 
https://p5js.org/reference/p5.SoundFile/addCue/

#### Line Style
I tested it out on a real, higher defintion image, and it was difficult to see the original, so I changed the line style to be thinner and more compact. 


## Save File 
After the online class 12/02 I got the suggestion to create the save function where it saves after a time interval so the image you want to be 'saved' is different. 
![Screenshot 2025-02-16 211150](https://github.com/user-attachments/assets/9cb66891-e04c-4a7c-97c8-0052672396ea)

## Final Touches
Finally, I made the cursor a hand, to visually prompt the user to 'click'

